//
// Imports
//

import { cards, playerFactory, notificationFactory, gameFactory, checkLocalStorage, clearLocalStorage, checkUsername, getDate, getDiffDate, getProfileData, getTableData, createGame, sendRequest, setPlayer, setGame, playersAPI, gamesAPI } from './main.js';

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
  let dialogPanes = document.querySelectorAll('.dialog > div');
  let dialogAlerts = document.querySelectorAll('.dialog .alerts');




	//
	// Methods
	//

  let closeDialog = function(){
    // Hide the dialog
    dialog.classList.toggle('is-open');
    // Hide the panes
    for (const pane of dialogPanes){
      pane.classList.add('is-hidden');
      pane.classList.remove('is-active');
    }
    // Hide the alerts
    for (const alert of dialogAlerts){
      alert.classList.add('is-hidden');
    }
  }

  let openDialog = function(pane){
    // Show the target pane
    dialog.querySelector(`#${pane}`).classList.add('is-active');
    dialog.querySelector(`#${pane}`).classList.remove('is-hidden');
    // Show the dialog
    dialog.classList.toggle('is-open');
  }





  //
  // State-based UI Templates
  //

  Reef.debug(true);

  let store = new Reef.Store({
    data: {}
  })

  let initProfile = function(player, games) {

    store.data.players[store.data.user.toLowerCase()] = player;
    store.data.state = 'profile';
    console.log('STATE: Profile');
    let activeGames = games.open;
    let completedGames = games.closed;

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
            <div class="section-header flex-row border">
              <h2>Games</h2>
              <div class="filter-group flex-row">
                <button type="button" id="filter-all" class="filter">All</button>
                <button type="button" id="filter-active" class="filter is-active">Active</button>
                <button type="button" id="filter-turn" class="filter">My Turn</button>
                <button type="button" id="filter-completed" class="filter">Completed</button>
              </div>
            </div>
            <ul class="boxes">
              ${activeGames.map(function(game){
                return `<li data-active ${game.turn != null && game.players[game.turn].username == props.user ? 'data-turn' : ''}>
                  <div class="box-header flex-row">
                    <h3>${game.players[1].username != null ? `${game.players[1].username}` : '?'} vs ${game.players[2].username != null ? `${game.players[2].username}` : '?'}</h3>
                    <div class="icon-group flex-row ${game.turn == user ? '' : 'pis-hidden'}">
                      <p class="date">${getDiffDate(game.date.updated)}</p>
                      <svg class="icon-turn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29"><path d="M14.5 1A13.5 13.5 0 1 0 28 14.5 13.49 13.49 0 0 0 14.5 1Zm0 25A11.5 11.5 0 1 1 26 14.5 11.51 11.51 0 0 1 14.5 26Zm5.25-10.5a1.25 1.25 0 0 1-1.25 1.25h-5a1.25 1.25 0 0 1-1.25-1.25v-7a1.25 1.25 0 0 1 2.5 0v5.75h3.75a1.25 1.25 0 0 1 1.25 1.25Z"/></svg>
                    </div>
                  </div>
                  <div class="box-main flex-row">
                    <div class="info-group">
                      <p>${game.players[1].score} / ${game.players[2].score}</p>
                      <p class="small">Game ID: ${game.id}</p>
                      <p class="small">Started: ${game.date.created}</p>
                      <p class="small">Updated: ${game.date.updated}</p>
                    </div>
                    <div class="button-group flex-row">
                      <button type="button" href="game.html?id=${game.id}">Join</button>
                      <button type="button">Leave</button>
                    </div>
                  </div>
                </li>`
              }).join('')}
              ${completedGames.map(function(game){
                return `<li class="game-card" data-completed>
                  <h3>${game.players[1].username} vs ${game.players[2].username}</h3>
                  <p>Game #${game.id}</p>
                  <p>Completed: ${game.date.updated}</p>
                </li>`
              }).join('')}
            </ul>
            <button type="button" id="new-game-open" class="big">New Game <svg class="icon-locked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29"><path d="M25 10h-2.75V8.7a7.75 7.75 0 0 0-15.5 0V10H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h21a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1ZM9.25 8.7a5.25 5.25 0 0 1 10.5 0V10H9.25ZM24 26H5V12h19Zm-12.5-9a3 3 0 1 1 4.5 2.58v2.68a1.49 1.49 0 0 1-1.49 1.49A1.49 1.49 0 0 1 13 22.26v-2.68A3 3 0 0 1 11.5 17Z"/></svg></button>
          </section>
          <section id="notifications">
            <div class="section-header flex-row border">
              <h2>Notifications</h2>
              <div class="button-group flex-row">
                <button type="button" class="notification-clear-all">Clear All</button>
              </div>
            </div>
            <ul class="lines scrollbar">
            ${props.players[props.user.toLowerCase()].notifications.unread.map(function(notification, index){
              return `
                <li class="notification flex-row" data-id="${index}" data-type="${notification.type}">
                  <div class="info-group">
                    <p class="date small">${notification.date}</p>
                  ${notification.status == 'sent' ? `
                      <p class="small">You sent a ${notification.type} request to ${notification.recipient}.</p>
                    </div>
                    <div class="button-group flex-row">
                      <button type="button" class="notification-clear">Clear</button>
                    </div>
                  ` : ''}
                  ${notification.status == 'received' ? `
                      <p class="small">${notification.sender} sent you a ${notification.type} request</p>
                    </div>
                    <div class="button-group flex-row">
                      <button type="button" class="invite-accept">Accept</button>
                    </div>
                    <button type="button" class="invite-reject">Reject</button>
                  ` : ''}
                  ${notification.status == 'declined' ? `
                      <p class="small">${notification.recipient} declined your ${notification.type} request</p>
                    </div>
                    <div class="button-group flex-row">
                      <button type="button" class="notification-clear">Clear</button>
                    </div>
                  ` : ''}
                  ${notification.status == 'approved' ? `
                      <p class="small">${notification.recipient} accepted your ${notification.type} request</p>
                    </div>
                    <div class="button-group flex-row">
                      <button type="button" class="notification-clear">Clear</button>
                    </div>
                  ` : ''}
                  ${notification.status == 'general' ? `
                      <p class="small">${notification.content}</p>
                    </div>
                    <div class="button-group flex-row">
                      <button type="button" class="notification-clear">Clear</button>
                    </div>
                  </li>
                  ` : ''}
              `
            }).join('')}
              <li class="notification flex-row" data-id="1" data-type="friend">
                <div class="info-group">
                  <p class="date small">2021-07-09</p>
                  <p class="small">You sent a friend request to Ull.</p>
                </div>
                <div class="button-group flex-row">
                  <button type="button" class="notification-clear">Clear</button>
                </div>
              </li>
              <li class="notification flex-row" data-id="1" data-type="friend">
              <div class="info-group">
                <p class="date small">2021-07-09</p>
                <p class="small">Jeff sent you a friend request.</p>
                </div>
                <div class="button-group flex-row">
                  <button type="button" class="invite-accept">Accept</button>
                  <button type="button" class="invite-reject">Reject</button>
                </div>
              </li>
            </ul>
          </section>
          <section id="friends">
            <div class="section-header flex-row border">
              <h2>Friends</h2>
              <div class="button-group flex-row">
                <button type="button" id="add-friend-open">Add Friend</button>
              </div>
            </div>
            <ul class="boxes">
            ${props.players[props.user.toLowerCase()].friends.accepted.map(function(friend){
              return `<li class="box-header flex-row">
                  <div class="info-group">
                    <p>${friend}</p>
                  </div>
                  <div class="button-group flex-row">
                    <button type="button" class="friend-invite">Invite</button>
                    <button type="button" class="friend-remove">Unfriend</button>
                    <button type="button" class="friend-block">Block</button>
                  </div>
                </li>`
            }).join('')}
            <li class="box-header flex-row">
              <div class="info-group">
                <p>Cream</p>
              </div>
              <div class="button-group flex-row">
                <button type="button" class="friend-invite">Invite</button>
                <button type="button" class="friend-remove">Unfriend</button>
                <button type="button" class="friend-block">Block</button>
              </div>
            </li>
            <li class="box-header flex-row">
              <div class="info-group">
                <p>Goopy</p>
              </div>
              <div class="button-group flex-row">
                <button type="button" class="friend-invite">Invite</button>
                <button type="button" class="friend-remove">Unfriend</button>
                <button type="button" class="friend-block">Block</button>
              </div>
            </li>
            </ul>
          </section>
          <section id="stats">
            <div class="section-header flex-row border">
              <h2>Stats</h2>
            </div>
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
  console.log(store.data);

  // Check local storage for saved username
  let user = checkLocalStorage();

  if (user) {
    store.data.user = user;
    getProfileData(store.data.user, true, initProfile);
  } else {
    openDialog('login');
  }


  // window.addEventListener('hashchange', function() {
  //
  // })

  // Click event listeners
  document.addEventListener('click', function(event){

    if (event.target.classList.contains('dialog-close')){
      closeDialog();
    }

    if (event.target.classList.contains('login-toggle')) {
      dialog.querySelector('#login').classList.toggle('is-active');
      dialog.querySelector('#signup').classList.toggle('is-active');
    }

    // Login button event listener
    if (event.target.id === 'login-submit'){
      event.preventDefault()
      let username = document.querySelector('#login-field').value;
      checkUsername(username, function(check){
        if (check){
          store.data.user = username;
          localStorage.setItem('user', username);
          getProfileData(username, true, initProfile);
          // Close login dialog
          closeDialog();
        } else {
          // Trigger alert
          document.querySelector('#signup .alert.attention').classList.remove('is-hidden');
        }
      });
    }

    // Sign up button event listener
    if (event.target.id === 'signup-submit'){
      event.preventDefault()
      let username = document.querySelector('#signup-field').value;
      checkUsername(username, function(check){
        if (!check){
          let player = playerFactory(username);
          console.log(player);
          setPlayer(player);
          localStorage.setItem('user', username);
          store.data.user = username;
          initProfile(player, {
              open: [],
              closed: []
            }
          )
          closeDialog();
        } else {
          // Trigger alert
          document.querySelector('#signup .alert.reject').classList.remove('is-hidden');
        }
      });
    }

    if (event.target.id === 'logout') {
      clearLocalStorage();
      window.location.reload();
    }

    if (event.target.classList.contains('filter')){
      let filters = document.querySelectorAll('.filter');
      for (const filter of filters){
        filter.classList.remove('is-active');
      }
      event.target.classList.add('is-active');
      let id = event.target.id;
      id = id.replace('filter-', '');
      if (id == 'all'){
        let games = document.querySelectorAll('#games .boxes > li');
        for (const game of games){
          game.classList.remove('is-hidden');
        }
      } else {
        let targetGames = document.querySelectorAll(`#games .boxes > li[data-${id}]`);
        let otherGames = document.querySelectorAll(`#games .boxes > li:not([data-${id}])`);
        for (const game of otherGames){
          game.classList.add('is-hidden');
        }
        for (const game of targetGames){
          game.classList.remove('is-hidden');
        }
      }
    }

    if (event.target.id == 'new-game-open'){
      dialog.classList.toggle('is-open');
      dialog.querySelector('#new-game').classList.add('is-active');
    }

    if (event.target.id == 'new-game-submit'){
      event.preventDefault()
      document.querySelector('#new-game .alert.attention').classList.add('is-hidden');
      let username = document.querySelector('#new-game-field').value;
      checkUsername(username, function(check){
        if (check){
          // Log request for sender
          let requestSender = notificationFactory(getDate(), 'game', 'sent', store.data.user, username);
          sendRequest(store.data.user, requestSender, function(sent){
            if (sent){
              console.log('Sender received')
            } else {
              console.log('Sender did not receive')
            }
          })
          // Send the request to recipient
          let requestRecipient = notificationFactory(getDate(), 'friend', 'received', store.data.user, username);
          sendRequest(username, requestRecipient, function(sent){
            if (sent){
              document.querySelector('#new-game .alert.accept').classList.remove('is-hidden');
              setTimeout(function(){
                closeDialog();
              }, 1000);
            } else {
              // Report error
            }
          });
        } else {
          // Trigger alert
          document.querySelector('#new-game .alert.attention').classList.remove('is-hidden');
        }
      })
    }

    if (event.target.id == 'add-friend-open'){
      dialog.classList.toggle('is-open');
      dialog.querySelector('#add-friend').classList.add('is-active');
    }

    if (event.target.id == 'add-friend-submit'){
      event.preventDefault()
      document.querySelector('#add-friend .alert.attention').classList.add('is-hidden');
      let username = document.querySelector('#add-friend-field').value;
      checkUsername(username, function(check){
        if (check){
          // Log request for sender
          let requestSender = notificationFactory(getDate(), 'friend', 'sent', store.data.user, username)
          sendRequest(store.data.user, requestSender, function(sent){
            if (sent){
              console.log('Sender received')
              store.data.players[store.data.user] = userData.player;
            } else {
              console.log('Sender did not receive')
            }
          })
          // Send the request to recipient
          let requestRecipient = notificationFactory(getDate(), 'friend', 'received', store.data.user, username)
          sendRequest(username, requestRecipient, function(sent){
            if (sent){
              console.log('Recipient received')
              // Inform user of successfully sent request
              document.querySelector('#add-friend .alert.accept').classList.remove('is-hidden');
              // Close dialog after a few seconds
              setTimeout(function(){
                closeDialog();
              }, 1000);
            } else {
              // Report error
              console.log('Recipient did not receive')
            }
          });
        } else {
          // Trigger alert
          document.querySelector('#add-friend .alert.attention').classList.remove('is-hidden');
        }
      })
    }

    if (event.target.classList.contains('friend-accept')){
      // Add user to friends list for recipient, get and set


      // Add user to friends list for sender


    }

    if (event.target.classList.contains('friend-reject')){
      // Remove the invitation

      // Send notification to sender

    }

    if (event.target.classList.contains('game-accept')){
      // Remove the invitation

      // Create game
      createGame(store.data.user, store.data.players[store.data.user.toLowerCase()], function(player, game){
        store.data.players[store.data.user] = player;
        console.log(store.data.players[store.data.user].games);
        // window.location.assign(`/game.html?id=${newGame.id}`);
      });

      // Send notifications
    }

    if (event.target.classList.contains('game-reject')){
      // Remove the invitation

      // Send notification to sender

    }

    if (event.target.classList.contains('notification-clear')){
      // Remove notification

    }

    if (event.target.classList.contains('notification-clear-all')){
      // Remove all notifications that don't require action

    }

    if (event.target.classList.contains('unfriend')){
      // Remove the user from friend list

    }

    if (event.target.classList.contains('block')){
      // Add user to blocked list

    }

    if (event.target.classList.contains('friend-invite')){
      // Remove the invitation

    }

    if (event.target.classList.contains('game-join')){
      let id;
      // Remove the invitation
      window.location.assign(`/game.html?id=${id}`);
    }

    if (event.target.classList.contains('game-leave')){
      // Remove the invitation

    }






    // Update the app

    // Update server with new game state

  })

})();
