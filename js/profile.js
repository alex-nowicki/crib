//
// Imports
//

import { cards, playerFactory, gameFactory, checkLocalStorage, clearLocalStorage, getDate, getPlayer, getGame, setPlayer, setGame, playersAPI, gamesAPI } from './main.js';

(function () {

	//
	// Variables
	//

  const data = {
    state: "login", // welcome, check, profile, game
    user: null,
    game: {},
    players: {}
  }

  let dialog = document.querySelector('.dialog');




	//
	// Methods
	//





  //
  // State-based UI Templates
  //

  Reef.debug(true);

  let store = new Reef.Store({
    data: {}
  })

  let initProfile = function() {

    let activeGames = [];
    for (let i = 0; i < store.data.players[store.data.user.toLowerCase()].games.open.length; i++){
      activeGames.push(getGame(store.data.players[store.data.user.toLowerCase()].games.open[i]));
    }
    console.log(activeGames);
    let completedGames = [];
    for (let i = 0; i < store.data.players[store.data.user.toLowerCase()].games.closed.length; i++){
      completedGames.push(getGame(store.data.players[store.data.user.toLowerCase()].games.closed[i]));
    }
    console.log(completedGames);

    let userInfo = new Reef('#user-info', {
      store: store,
      template: function(props) {
        return `
          ${props.user ? `<button type="button" id="logout">Logout</button>` : ''}
        `;
      }
    })


    let profile = new Reef('main', {
      store: store,
      template: function(props) {
        return `
          <section id="welcome">
            <h1>Welcome back ${props.user}</h1>
          </section>
          <section id="games">
            <h2>My Games</h2>
            <div class="filters">
              <button type="button" id="filter-turn" class="filter-button">My Turn</button>
              <button type="button" id="filter-active" class="filter-button">Active</button>
              <button type="button" id="filter-completed" class="filter-button">Completed</button>
              <button type="button" id="filter-clear" class="filter-button">Clear</button>
            </div>
            <div class="game-list">
              ${activeGames.map(function(game){
                return `<a class="game-card" href="game.html?id=${game.id}" data-active ${game.players[game.turn].username == props.user ? 'data-turn' : ''}>
                  <h3>${game.players[1].username} vs ${game.players[2].username}</h3>
                  <p>Game #${game.id}</p>
                  <p>Last Updated: ${game.date.updated}</p>
                </a>`
              }).join('')}
              ${completedGames.map(function(game){
                return `<a class="game-card" href="game.html?id=${game.id}" data-completed>
                  <h3>${game.players[1].username} vs ${game.players[2].username}</h3>
                  <p>Game #${game.id}</p>
                  <p>Last Updated: ${game.date.updated}</p>
                </a>`
              }).join('')}
            </div>
            <button type="button" id="new-game">New Game</button>
          </section>
          <section id="stats">
            <h2>My Stats</h2>
            <p>Wins: ${props.players[props.user.toLowerCase()].wins}</p>
            <p>Loses: ${props.players[props.user.toLowerCase()].loses}</p>
            <p>Skunks: ${props.players[props.user.toLowerCase()].skunks}</p>
            <p>Double Skunks: ${props.players[props.user.toLowerCase()].doubleSkunks}</p>
            <p>Highest Hand Score: ${props.players[props.user.toLowerCase()].highestHandScore}</p>
            <p>Longest Win Streak: ${props.players[props.user.toLowerCase()].longestWinStreak}</p>
            <p>Biggest Win Lead: ${props.players[props.user.toLowerCase()].biggestLead}</p>
          </section>
          `;
      }
    })

  }




	//
	// Inits & Event Listeners
	//

  store.data = data;

  // Check local storage for saved username
  let user = checkLocalStorage();

  if (user) {
    store.data.user = user;
    store.data.players[user.toLowerCase()] = getPlayer(user);
    store.data.state = 'profile';
    console.log('STATE: Profile');
    initProfile();
  } else {
    dialog.classList.toggle('is-open');
  }


  window.addEventListener('hashchange', function() {

  })

  // Click event listeners
  document.addEventListener('click', function(event){

    if (event.target.classList.contains('login-toggle')) {
      console.log('firing');
      dialog.querySelector('#login').classList.toggle('is-active');
      dialog.querySelector('#signup').classList.toggle('is-active');
    }

    // Login button event listener
    if (event.target.id === 'login-submit'){
      event.preventDefault()
      let username = document.querySelector('#login-field').value;
      if (getPlayer(username)){
        initProfile();
        store.data.players[username.toLowerCase()] = getPlayer(username);
        store.data.user = username;
        localStorage.setItem('user', username);
        store.data.state = 'profile';
        console.log('STATE: Profile');
        // Close login dialog
        dialog.classList.toggle('is-open');
      } else {
        console.log('Player not found');
        // *Display warning to user
      }

    }

    // Sign up button event listener
    if (event.target.id === 'signup-submit'){
      event.preventDefault()
      let username = document.querySelector('#signup-field').value;
      if (!getPlayer(username)){
        let userData = playerFactory(username);
        setPlayer(username.toLowerCase(), userData, true);
        store.data.players[username.toLowerCase()] = userData;
        store.data.user = username;
        localStorage.setItem('user', username);
        store.data.state = 'profile';
        console.log('STATE: Profile');
        // Close login dialog
        dialog.classList.toggle('is-open');
      } else {
        console.log('Username already in use');
      }
    }

    if (event.target.id === 'logout') {
      clearLocalStorage();
    }

    if (event.target.classList.contains('filter-button')){
      let id = event.target.id;
      id = id.replace('filter-', '');
      if (id == 'clear'){
        let gameCards = document.querySelectorAll('.game-card');
        for (const card of gameCards){
          card.classList.remove('is-hidden');
        }
      } else {
        let targetGameCards = document.querySelectorAll(`.game-card[data-${id}]`);
        let otherGameCards = document.querySelectorAll(`.game-card:not([data-${id}])`);
        for (const card of otherGameCards){
          card.classList.add('is-hidden');
        }
        for (const card of targetGameCards){
          card.classList.remove('is-hidden');
        }
      }
    }

    if (event.target.classList.contains('game-card')){
      let id = event.target.dataset.id;
      store.data.game = getGame(id);
      if (store.data.game.players[1].username == store.data.user){
        user = 1;
        opponent = 2;
      } else {
        user = 2;
        opponent = 1;
      }
      store.data.players[opponent] = getPlayer(store.data.game.players[opponent].username);
      store.data.state = 'game';
      app.attach(table);
      app.detach(lobby);
      header.attach(tableInfo);
      resetHash();
      console.log('STATE: Game');
    }

    if (event.target.id === 'settings'){
      document.querySelector('.settings-list').classList.toggle('is-visible');
    }

    // Update the app

    // Update server with new game state

  })

})();
