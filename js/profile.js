//
// Imports
//

import { cards, playerFactory, gameFactory, checkLocalStorage, clearLocalStorage, login, signup, getDate, getProfileData, getTableData, createGame, setPlayer, setGame, playersAPI, gamesAPI } from './main.js';

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

  let initProfile = function(data) {

    store.data.players[store.data.user.toLowerCase()] = data.player;
    store.data.state = 'profile';
    console.log('STATE: Profile');
    let activeGames = data.games.open;
    let completedGames = data.games.closed;

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
                return `<a class="game-card" href="game.html?id=${game.id}" data-active ${game.turn != null && game.players[game.turn].username == props.user ? 'data-turn' : ''}>
                  <h3>${game.players[1].username != null ? `${game.players[1].username}` : '?'} vs ${game.players[2].username != null ? `${game.players[2].username}` : '?'}</h3>
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
          <section id="friends">
            <h2>My Friends</h2>
            <button type="button" id="invite-friend">Add Friend</button>
            ${props.players[props.user.toLowerCase()].friends.accepted.map(function(friend){
              return `<p>${friend}<p>`
            }).join('')}
          </section>
          <section id="invites">
            <h2>My Invitations</h2>
            ${props.players[props.user.toLowerCase()].invites.map(function(invite, index){
              return `<div class="invite" data-id="${index}" data-type="${invite.type}">
                <p>${invite.date}</p>
                <p>${invite.type == 'friend' ? `${invite.username} sent you a friend request` : `${invite.username} invited you to play a game`}</p>
                <button type="button" class="invite-approve">Confirm</button>
                <button type="button" class="invite-reject">Delete</button>
              </div>`
            }).join('')}
            <div class="invite" data-type="friend">
              <p>2021-07-10</p>
              <p>Person sent you a friend request</p>
              <button type="button" class="invite-approve">Confirm</button>
              <button type="button" class="invite-reject">Delete</button>
            </div>
            <div class="invite" data-type="game">
              <p>2021-05-20</p>
              <p>Person invited you to play a game</p>
              <button type="button" class="invite-approve">Confirm</button>
              <button type="button" class="invite-reject">Delete</button>
            </div>
          </section>
          `;
      }
    })

  }




	//
	// Inits & Event Listeners
	//

  store.data = data;
  console.log(store.data);

  // Check local storage for saved username
  let user = checkLocalStorage();

  if (user) {
    store.data.user = user;
    getProfileData(store.data.user, 'load', initProfile);
  } else {
    dialog.classList.toggle('is-open');
  }


  // window.addEventListener('hashchange', function() {
  //
  // })

  // Click event listeners
  document.addEventListener('click', function(event){

    if (event.target.classList.contains('login-toggle')) {
      dialog.querySelector('#login').classList.toggle('is-active');
      dialog.querySelector('#signup').classList.toggle('is-active');
    }

    // Login button event listener
    if (event.target.id === 'login-submit'){
      event.preventDefault()
      login(document.querySelector('#login-field').value, function(username){
        store.data.user = username;
        getProfileData(username, 'load', initProfile);
        // Close login dialog
        dialog.classList.toggle('is-open');
      });
    }

    // Sign up button event listener
    if (event.target.id === 'signup-submit'){
      event.preventDefault()
      let userData = signup(document.querySelector('#signup-field').value, function(username, userData){
        store.data.user = username;
        initProfile({
          player: userData,
          games: {
            open: [],
            closed: []
          }
        })
        // Close login dialog
        dialog.classList.toggle('is-open');
      });
    }

    if (event.target.id === 'logout') {
      clearLocalStorage();
      window.location.reload();
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
      window.location.assign(`/game.html?id=${id}`)
    }

    if (event.target.id == 'new-game'){
      // Need to get the name of the player they wish to challenge



      createGame(store.data.user, store.data.players[store.data.user.toLowerCase()], function(player, game){
        store.data.players[store.data.user] = player;
        console.log(store.data.players[store.data.user].games);
        // window.location.assign(`/game.html?id=${newGame.id}`);
      });
    }

    if (event.target.id == 'invite-friend'){
      // Need to get the name of the player they wish to add
      let invite = {
        date: getDate(),
        username: store.data.user,
        type: 'friend'
      }
      // Get the target player

      // Update the target player

      // Confirmation to user

    }

    if (event.target.classList.contains('invite-approve')){
      // Process invite, for friends add to friend list, for games, add to game list

    }

    if (event.target.classList.contains('invite-reject')){
      // Remove the invitation

    }

    // Update the app

    // Update server with new game state

  })

})();
