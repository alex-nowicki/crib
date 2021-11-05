//
// Imports
//

import { playerFactory, notificationFactory, checkLocalStorage, clearLocalStorage, checkUsername, getDate, getDiffDate, getProfileData, createGame, updateProfileData, updateGameData, setPlayer } from './main.js';

(function () {

	//
	// Variables
	//

  const data = {
    state: "login", // welcome, check, profile, game
    user: {},
    games: {
      open: [],
      closed: []
    }
  }

  let dialog = document.querySelector('.dialog');
  let dialogPanes = document.querySelectorAll('.dialog > div');
  let dialogAlerts = document.querySelectorAll('.dialog .alert');




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

  let applyFilter = function(target){
    let filters = document.querySelectorAll('.filter');
    for (const filter of filters){
      filter.classList.remove('is-active');
    }
    target.classList.add('is-active');
    let id = target.id;
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





  //
  // State-based UI Templates
  //

  Reef.debug(true);

  let store = new Reef.Store({
    data: {}
  })

  let initProfile = function(player, games) {
    store.data.user = player;
    store.data.games.open = games.open;
    store.data.games.closed = games.closed;
    store.data.state = 'profile';
    console.log('STATE: Profile');

    let userInfo = new Reef('#user-info', {
      store: store,
      template: function(props) {
        return `
          ${props.user.username ? `<button type="button" id="logout">Logout</button>` : ''}
        `;
      }
    })

    let profile = new Reef('main', {
      store: store,
      template: function(props) {
        return `
          <section id="welcome">
            <h1>Welcome back ${props.user.username}</h1>
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
              ${props.games.open.map(function(game, index){
                return `<li class="game" data-active data-index="${index}" ${game.turn != null && game.players[game.turn].username == props.user.username ? 'data-turn' : ''}>
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
                      <button type="button" class="join" data-id="${game.id}">Join</button>
                      <button type="button" class="dialog-open" data-target="confirm-leave">Leave</button>
                    </div>
                  </div>
                </li>`
              }).join('')}
              ${props.games.closed.map(function(game){
                return `<li class="game" data-completed>
                    <div class="box-header flex-row">
                      <h3>${game.players[1].username} vs ${game.players[2].username}</h3>
                      <div class="icon-group flex-row"></div>
                    </div>
                    <div class="box-main flex-row">
                      <div class="info-group">
                        <p>${game.players[1].score} / ${game.players[2].score}</p>
                        <p class="small">Winner: ${game.winner}</p>
                        <p class="small">Game ID: ${game.id}</p>
                        <p class="small">Completed: ${game.date.completed}</p>
                      </div>
                    </div>
                </li>`
              }).join('')}
            </ul>
            ${props.games.open.length < 5 ? `
              <button type="button" class="dialog-open big" data-target="new-game">New Game</button>
            ` : `
              <button type="button" id="new-game-open" class="big" disabled>Maximum of 5 Active Games</span><svg class="icon-locked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29"><path d="M25 10h-2.75V8.7a7.75 7.75 0 0 0-15.5 0V10H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h21a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1ZM9.25 8.7a5.25 5.25 0 0 1 10.5 0V10H9.25ZM24 26H5V12h19Zm-12.5-9a3 3 0 1 1 4.5 2.58v2.68a1.49 1.49 0 0 1-1.49 1.49A1.49 1.49 0 0 1 13 22.26v-2.68A3 3 0 0 1 11.5 17Z"/></svg></button>
            `}

          </section>
          <section id="notifications">
            <div class="section-header flex-row border">
              <h2>Notifications</h2>
              <div class="button-group flex-row">
                <button type="button" class="notification-action clear-all">Clear All</button>
              </div>
            </div>
            <ul class="lines scrollbar">
              ${props.user.notifications.unread.length < 1 ? `
                <li class="notification flex-row">
                  <p>You have no notifications.</p>
                </li>
              ` : ''}
              ${props.user.notifications.unread.map(function(notification, index){
                return `
                  <li class="notification flex-row" data-index="${index}" data-type="${notification.type}">
                    <div class="info-group">
                      <p class="date small">${notification.date}</p>
                    ${notification.status == 'sent' ? `

                      ${notification.type == 'game' || notification.type == 'friend' ? `
                          <p class="small">You sent a ${notification.type} request to ${notification.recipient}.</p>
                        </div>
                        <div class="button-group flex-row">
                          <button type="button" class="notification-action clear">Clear</button>
                        </div>
                      ` : ''}

                      ${notification.type == 'forfeit' ? `
                          <p class="small">You forfeited game #${notification.content} against ${notification.recipient}</p>
                        </div>
                        <div class="button-group flex-row">
                          <button type="button" class="notification-action clear">Clear</button>
                        </div>
                      ` : ''}

                      ${notification.type == 'block' ? `
                          <p class="small">You blocked ${notification.recipient} from sending requests</p>
                        </div>
                        <div class="button-group flex-row">
                          <button type="button" class="notification-action clear">Clear</button>
                        </div>
                      ` : ''}

                    ` : ''}
                    ${notification.status == 'received' ? `

                      ${notification.type == 'game' || notification.type == 'friend' ? `
                          <p class="small">${notification.sender} sent you a ${notification.type} request</p>
                        </div>
                        <div class="button-group flex-row">
                          <button type="button" class="notification-action accept">Accept</button>
                          <button type="button" class="notification-action reject">Reject</button>
                          <button type="button" class="dialog-open" data-target="confirm-block">Block</button>
                        </div>
                      ` : ''}

                      ${notification.type == 'forfeit' ? `
                          <p class="small">${notification.sender} has forfeited game #${notification.content}</p>
                        </div>
                        <div class="button-group flex-row">
                          <button type="button" class="notification-action clear">Clear</button>
                        </div>
                      ` : ''}

                      ${notification.type == 'block' ? `
                          <p class="small">${notification.sender} has blocked you from sending requests</p>
                        </div>
                        <div class="button-group flex-row">
                          <button type="button" class="notification-action clear">Clear</button>
                        </div>
                      ` : ''}

                    ` : ''}
                    ${notification.status == 'rejected' ? `
                        <p class="small">${notification.sender} declined your ${notification.type} request</p>
                      </div>
                      <div class="button-group flex-row">
                        <button type="button" class="notification-action clear">Clear</button>
                      </div>
                    ` : ''}
                    ${notification.status == 'accepted' ? `
                        <p class="small">${notification.sender} accepted your ${notification.type} request</p>
                      </div>
                      <div class="button-group flex-row">
                        <button type="button" class="notification-action clear">Clear</button>
                      </div>
                    ` : ''}
                    ${notification.status == 'general' ? `
                        <p class="small">${notification.content}</p>
                      </div>
                      <div class="button-group flex-row">
                        <button type="button" class="notification-action clear">Clear</button>
                      </div>
                    </li>
                    ` : ''}
                `
              }).join('')}
            </ul>
          </section>
          <section id="friends">
            <div class="section-header flex-row border">
              <h2>Friends</h2>
              <div class="button-group flex-row">
                <button type="button" class="dialog-open" data-target="add-friend">Add Friend</button>
              </div>
            </div>
            <ul class="boxes">
              ${props.user.friends.length < 1 ? `
                <li class="friend flex-row">
                  <p>Adding friends makes starting games easier!</p>
                </li>
              ` : ''}
              ${props.user.friends.map(function(friend, index){
                return `<li class="friend box-header flex-row" data-index="${index}">
                    <div class="info-group">
                      <p>${friend}</p>
                    </div>
                    <div class="button-group flex-row">
                      ${props.games.open.length < 5 ? `
                        <button type="button" class="friend-action new-game">New Game</button>
                      ` : ''}
                      <button type="button" class="friend-action remove">Unfriend</button>
                    </div>
                  </li>`
              }).join('')}
            </ul>
          </section>
          <section id="stats">
            <div class="section-header flex-row border">
              <h2>Stats</h2>
            </div>
            <p>Wins: ${props.user.stats.wins}</p>
            <p>Win Streak: ${props.user.stats.winStreak}</p>
            <p>Loses: ${props.user.stats.loses}</p>
            <p>Skunks: ${props.user.stats.skunks}</p>
            <p>Double Skunks: ${props.user.stats.doubleSkunks}</p>
            <p>Highest Hand Score: ${props.user.stats.highestHandScore}</p>
            <p>Biggest Win Lead: ${props.user.stats.biggestLead}</p>
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
    user = user.toLowerCase();
    getProfileData(user, true, initProfile);
  } else {
    openDialog('login');
  }


  // window.addEventListener('hashchange', function() {
  //
  // })

  document.addEventListener('reef:render', function(event){
    if (event.target == document.querySelector('main#profile')){
      applyFilter(document.querySelector('.filter.is-active'));
    }
  })


  // Click event listeners
  document.addEventListener('click', function(event){

    // Create non-reactive store data object to make changes to
    let storeCopy = store.dataCopy;
    console.log(store.data);
    console.log(storeCopy);

    //
    // Dialog
    //

    if (event.target.classList.contains('dialog-close')){
      closeDialog();
    }

    if (event.target.classList.contains('dialog-open')){
      let target = event.target.dataset.target;
      if (target == 'confirm-leave'){
        let index = event.target.closest('.game').dataset.index;
        document.querySelector('#confirm-leave .confirm').dataset.index = index;
      } else if (target == 'confirm-block'){
        let index = event.target.closest('.notification').dataset.index;
        document.querySelector('#confirm-block .confirm').dataset.index = index;
      }
      openDialog(target);
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
          user = username.toLowerCase();
          localStorage.setItem('user', username);
          getProfileData(user, true, initProfile);
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
          setPlayer(player, function(updated){
            if (updated){
              console.log('Set Player Successful - Signup - User');
            } else {
              console.log('Set Player Failed - Signup - User');
            }
          });
          localStorage.setItem('user', username);
          user = username.toLowerCase();
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

    if (event.target.classList.contains('cancel')){
      closeDialog();
    }

    if (event.target.id === 'logout') {
      clearLocalStorage();
      window.location.reload();
    }


    //
    // Change Log
    //

    let updateUser = {
      username: user,
      changes: []
    };

    let updateOther = {
      username: null,
      changes: []
    };

    let updateGame = {
      id: null,
      changes: []
    }

    //
    // Games
    //

    if (event.target.classList.contains('filter')){
      applyFilter(event.target);
    }

    if (event.target.id == 'new-game-submit'){
      event.preventDefault()
      document.querySelector('#new-game .alert.attention').classList.add('is-hidden');
      let username = document.querySelector('#new-game-field').value;

      let blockedLowerCase = storeCopy.user.blocked.map(name => name.toLowerCase());

      if (blockedLowerCase.includes(username.toLowerCase())){
        document.querySelector('#new-game .alert.reject').classList.remove('is-hidden');

      } else if (storeCopy.user.username.toLowerCase() == username.toLowerCase()){
        console.log('Self Invite');
        document.querySelector('#new-game .alert.attention p').innerHTML = "You can't invite yourself to a game. Nice try.";
        document.querySelector('#new-game .alert.attention').classList.remove('is-hidden');

      } else {
        checkUsername(username, function(check){
          if (check){

            updateOther.username = username.toLowerCase();

            let confirmation = notificationFactory(getDate(), 'game', 'sent', storeCopy.user.username, username);

            updateUser.changes.push({
              path: 'notifications.unread',
              value: confirmation,
              type: 'add'
            })

            // Log request confirmation for sender

            updateProfileData(updateUser.username, updateUser.changes, function(updated, player){
              if (updated){
                console.log('Profile Update Succesful - New Game - User')
                storeCopy.user = player;
              } else {
                console.log('Profile Update Failed - New Game - User')
              }
            })



            // Send the request to recipient
            let request = notificationFactory(getDate(), 'game', 'received', storeCopy.user.username, username);

            updateOther.changes.push({
              path: 'notifications.unread',
              value: request,
              type: 'add'
            })

            updateProfileData(updateOther.username, updateOther.changes, function(updated){
              if (updated){
                document.querySelector('#new-game .alert.accept').classList.remove('is-hidden');
                setTimeout(function(){
                  closeDialog();
                }, 1000);
                console.log('Profile Update Succesful - New Game - Other')
              } else {
                // Report error
                console.log('Profile Update Failed - New Game - Other')
              }
            });

          } else {
            // Trigger alert
            document.querySelector('#new-game .alert.attention p').innerHTML = 'User does not exist';
            document.querySelector('#new-game .alert.attention').classList.remove('is-hidden');
          }
        })
      }
    }

    if (event.target.classList.contains('join')){
      let id = event.target.dataset.id;
      window.location.assign(`/game.html?id=${id}`);
    }

    //
    // Friends
    //

    if (event.target.id == 'add-friend-submit'){

      event.preventDefault()
      document.querySelector('#add-friend .alert.attention').classList.add('is-hidden');
      let username = document.querySelector('#add-friend-field').value;

      let friendsLowerCase = storeCopy.user.friends.map(name => name.toLowerCase());
      let blockedLowerCase = storeCopy.user.blocked.map(name => name.toLowerCase());

      if (friendsLowerCase.includes(username.toLowerCase())){
        document.querySelector('#add-friend .alert.attention p').innerHTML = 'You are already friends with this user';
        document.querySelector('#add-friend .alert.attention').classList.remove('is-hidden');

      } else if (blockedLowerCase.includes(username.toLowerCase())){
        document.querySelector('#add-friend .alert.reject').classList.remove('is-hidden');

      } else if (storeCopy.user.username.toLowerCase() == username.toLowerCase()){
        document.querySelector('#add-friend .alert.attention p').innerHTML = "It's important to love yourself, but not in the Friends list.";
        document.querySelector('#add-friend .alert.attention').classList.remove('is-hidden');

      } else {
        checkUsername(username, function(check){
          if (check){

            // Make sure person is not on the blocked list, should this be stored on both accounts? blocked

            updateOther.username = username.toLowerCase();

            // Log request confirmation for sender
            let confirmation = notificationFactory(getDate(), 'friend', 'sent', storeCopy.user.username, username)

            // Log change to user profile
            updateUser.changes.push({
              path: 'notifications.unread',
              value: confirmation,
              type: 'add'
            })

            updateProfileData(updateUser.username, updateUser.changes, function(updated, player){
              if (updated){
                console.log('Profile Update Succesful - Add Friend - User');
                storeCopy.user = player;
              } else {
                console.log('Profile Update Failed - Add Friend - User');
              }
            })

            // Send the request to recipient
            let request = notificationFactory(getDate(), 'friend', 'received', storeCopy.user.username, username)

            updateOther.changes.push({
              path: 'notifications.unread',
              value: request,
              type: 'add'
            })

            updateProfileData(updateOther.username, updateOther.changes, function(updated){
              if (updated){
                console.log('Profile Update Succesful - Add Friend - Other');
                // Inform user of successfully sent request
                document.querySelector('#add-friend .alert.accept').classList.remove('is-hidden');
                // Close dialog after a few seconds
                setTimeout(function(){
                  closeDialog();
                }, 750);
              } else {
                // Report error
                console.log('Profile Update Failed - Add Friend - Other');
              }
            });

          } else {
            // Trigger alert
            document.querySelector('#add-friend .alert.attention p').innerHTML = 'User does not exist';
            document.querySelector('#add-friend .alert.attention').classList.remove('is-hidden');
          }
        })
      }
    }

    if (event.target.classList.contains('friend-action')){
      let index = event.target.closest('.friend').dataset.index;
      let friend = storeCopy.user.friends[index];

      updateOther.username = friend.toLowerCase();

      if (event.target.classList.contains('new-game')){
        // Log request confirmation for sender
        let confirmation = notificationFactory(getDate(), 'game', 'sent', storeCopy.user.username, friend);

        // Log change to user profile
        updateUser.changes.push({
          path: 'notifications.unread',
          value: confirmation,
          type: 'add'
        })

        // Send the request to recipient
        let request = notificationFactory(getDate(), 'game', 'received', storeCopy.user.username, friend);

        updateOther.changes.push({
          path: 'notifications.unread',
          value: request,
          type: 'add'
        })

      } else if (event.target.classList.contains('remove')){
        storeCopy.user.friends.splice(index, 1);

        updateUser.changes.push({
          path: 'friends',
          value: friend,
          type: 'remove'
        })

        updateOther.changes.push({
          path: 'friends',
          value: user,
          type: 'remove'
        })

      }

      updateProfileData(updateUser.username, updateUser.changes, function(updated, player){
        if (updated){
          console.log('Profile Update Successful - Friend Action - User')
          storeCopy.user = player;
        } else {
          console.log('Profile Update Failed - Friend Action - User')
        }
      })

      if (updateOther.username != null){
        updateProfileData(updateOther.username, updateOther.changes, function(updated){
          if (updated){
            console.log('Profile Update Successful - Friend Action - Other')
          } else {
            // Report error
            console.log('Profile Update Failed - Friend Action - Other')
          }
        });
      }

    }

    //
    // Notifications
    //

    if (event.target.classList.contains('notification-action')){
      let willCreateGame = false;

      if (event.target.classList.contains('clear-all')){
        // Move all non-request notifications to read
        let length = storeCopy.user.notifications.unread.length;
        console.log(length);
        for (let i = length - 1; i > -1; i--){
          console.log(i);
          if (storeCopy.user.notifications.unread[i].type !== 'received'){
            storeCopy.user.notifications.read.unshift(storeCopy.user.notifications.unread[i]);
            storeCopy.user.notifications.unread.splice(i, 1);
          }
        }
        // Log change to user profile
        updateUser.changes.push({
          path: 'notifications',
          value: storeCopy.user.notifications,
          type: 'replace'
        })

      } else {
        let index = event.target.closest('.notification').dataset.index;
        let notification = storeCopy.user.notifications.unread[index];

        if (event.target.classList.contains('clear')) {
          // Move the notification to read
          storeCopy.user.notifications.read.unshift(notification);
          storeCopy.user.notifications.unread.splice(index, 1);
          // Log change to user profile
          updateUser.changes.push({
            path: 'notifications',
            value: storeCopy.user.notifications,
            type: 'replace'
          })

        } else {
          // Create reply notification object
          let reply = notificationFactory(getDate(), notification.type, null, storeCopy.user.username, notification.sender);
          // Log sender username
          updateOther.username = notification.sender.toLowerCase();

          if (event.target.classList.contains('accept')){
            reply.status = 'accepted';

            if (notification.type == 'friend'){
              // Add request sender to recipient friends list
              updateUser.changes.push({
                path: 'friends',
                value: notification.sender,
                type: 'add'
              })
              // Add request recipient to sender friend list
              updateOther.changes.push({
                path: 'friends',
                value: notification.recipient,
                type: 'add'
              });

            } else if (notification.type == 'game'){
              // Create game and link it to both accounts
              willCreateGame = true;
            }


          } else if (event.target.classList.contains('reject')){
            reply.status = 'rejected';
          }

          // Move notification and all duplicates to read
          let length = storeCopy.user.notifications.unread.length;
          for (let i = length - 1; i > -1; i--){
            if (storeCopy.user.notifications.unread[i].sender == notification.sender
              && storeCopy.user.notifications.unread[i].type == notification.type
              && storeCopy.user.notifications.unread[i].status == notification.status) {
              storeCopy.user.notifications.read.unshift(storeCopy.user.notifications.unread[i]);
              storeCopy.user.notifications.unread.splice(i, 1);
            }
          }

          // Log change to user profile
          updateUser.changes.push({
            path: 'notifications',
            value: storeCopy.user.notifications,
            type: 'replace'
          })

          updateOther.changes.push({
            path: 'notifications.unread',
            value: reply,
            type: 'add'
          });

          if (willCreateGame){
            createGame(notification.sender, notification.recipient, function(game){

              updateUser.changes.push({
                path: 'games.open',
                value: game.id,
                type: 'add'
              });

              updateOther.changes.push({
                path: 'games.open',
                value: game.id,
                type: 'add'
              });

              updateProfileData(updateUser.username, updateUser.changes, function(updated, player){
                if (updated){
                  storeCopy.user = player;
                  storeCopy.games.open.push(game);
                  console.log('Profile Update Successful - Notification Action - User');
                } else {
                  console.log('Profile Update Failed - Notification Action - User');
                }
              });

              updateProfileData(updateOther.username, updateOther.changes, function(updated){
                if (updated){
                  console.log('Profile Update Successful - Notification Action - Other');
                } else {
                  console.log('Profile Update Failed - Notification Action - Other');
                }
              });

            });
          }

        }
      }

      console.log('update user', updateUser);
      console.log('update other', updateOther);

       if (!willCreateGame) {

        updateProfileData(updateUser.username, updateUser.changes, function(updated, player){
          if (updated){
            storeCopy.user = player;
            console.log('Profile Update Successful - Notification Action - User');
          } else {
            console.log('Profile Update Failed - Notification Action - User');
          }
        });

        if (updateOther.username != null){
          updateProfileData(updateOther.username, updateOther.changes, function(updated){
            if (updated){
              console.log('Profile Update Successful - Notification Action - Other');
            } else {
              console.log('Profile Update Failed - Notification Action - Other');
            }
          });
        }

      }

    }





    if (event.target.classList.contains('confirm')){
      let type = event.target.dataset.type;
      let index = event.target.dataset.index;

      if (type == 'leave'){
        updateGame.id = storeCopy.games.open[index].id;

        let otherUsername;

        if (storeCopy.games.open[index].players[1].username.toLowerCase() != storeCopy.user.username.toLowerCase()){
          updateOther.username = storeCopy.games.open[index].players[1].username.toLowerCase();
          otherUsername = storeCopy.games.open[index].players[2].username;
        } else {
          updateOther.username = storeCopy.games.open[index].players[2].username.toLowerCase();
          otherUsername = storeCopy.games.open[index].players[1].username;
        }

        updateGame.changes.push({
          path: 'winner',
          value: `${otherUsername}, by forfeit`,
          type: 'replace'
        })

        updateGame.changes.push({
          path: 'date.completed',
          value: getDate(),
          type: 'replace'
        })

        // Log stats
        updateUser.changes.push({
          path: 'stats.loses',
          value: 1,
          type: 'plus'
        })
        updateUser.changes.push({
          path: 'stats.winStreak',
          value: 0,
          type: 'replace'
        })
        updateOther.changes.push({
          path: 'stats.wins',
          value: 1,
          type: 'plus'
        })
        updateOther.changes.push({
          path: 'stats.winStreak',
          value: 1,
          type: 'plus'
        })

        // Move the game to completed
        updateUser.changes.push({
          path: 'games.open',
          value: updateGame.id,
          type: 'remove'
        })
        updateUser.changes.push({
          path: 'games.closed',
          value: updateGame.id,
          type: 'add'
        })
        updateOther.changes.push({
          path: 'games.open',
          value: updateGame.id,
          type: 'remove'
        })
        updateOther.changes.push({
          path: 'games.closed',
          value: updateGame.id,
          type: 'add'
        })


        // Notify the other player

        // Log request confirmation for sender
        let confirmation = notificationFactory(getDate(), 'forfeit', 'sent', storeCopy.user.username, updateOther.username, updateGame.id);

        // Log change to user profile
        updateUser.changes.push({
          path: 'notifications.unread',
          value: confirmation,
          type: 'add'
        })

        let notice = notificationFactory(getDate(), 'forfeit', 'received', storeCopy.user.username, updateOther.username, updateGame.id);

        updateOther.changes.push({
          path: 'notifications.unread',
          value: notice,
          type: 'add'
        })

      } else if (type == 'block'){
        updateOther.username = storeCopy.user.notifications.unread[index].sender.toLowerCase();

        // Add request sender to recipient blocked list
        updateUser.changes.push({
          path: 'blocked',
          value: updateOther.username,
          type: 'add'
        })
        // Add request recipient to sender blocked list
        updateOther.changes.push({
          path: 'blocked',
          value: storeCopy.user.username,
          type: 'add'
        })

        // Remove all notifications from that user
        let length = storeCopy.user.notifications.unread.length;
        for (let i = length - 1; i > -1; i--){
          if (storeCopy.user.notifications.unread[i].sender == updateOther.username){
            storeCopy.user.notifications.read.unshift(storeCopy.user.notifications.unread[i]);
            storeCopy.user.notifications.unread.splice(i, 1);
          }
        }
        // Log change to user profile
        updateUser.changes.push({
          path: 'notifications',
          value: storeCopy.user.notifications,
          type: 'replace'
        })

        // Log request confirmation for sender
        let confirmation = notificationFactory(getDate(), 'block', 'sent', storeCopy.user.username, updateOther.username);

        // Log change to user profile
        updateUser.changes.push({
          path: 'notifications.unread',
          value: confirmation,
          type: 'add'
        })

        let notice = notificationFactory(getDate(), 'block', 'received', storeCopy.user.username, updateOther.username);

        updateOther.changes.push({
          path: 'notifications.unread',
          value: notice,
          type: 'add'
        })


      }

      console.log(updateGame);
      console.log(updateUser);
      console.log(updateOther);

      // Log the winner
      if (updateGame.id != null){
        updateGameData(updateGame.id, updateGame.changes, function(updated, game){
          if (updated){
            console.log('Game Update Successful - Confirm Action');
            storeCopy.games.open.splice(index, 1);
            storeCopy.games.closed.unshift(game);
          } else {
            console.warn('Game Update Failed - Confirm Action');
          }
        })
      }

      updateProfileData(updateUser.username, updateUser.changes, function(updated, player){
        if (updated){
          console.log('Profile Update Successful - Confirm Action - User');
          // storeCopy.user = player;
        } else {
          console.warn('Profile Update Failed - Confirm Action - User');
        }
      })

      updateProfileData(updateOther.username, updateOther.changes, function(updated){
        if (updated){
          console.log('Profile Update Successful - Confirm Action - Other');
        } else {
          // Report error
          console.warn('Profile Update Failed - Confirm Action - Other');
        }
      });

      closeDialog();

    }







    // Update the app THIS WILL UPDATE PRIOR TO UPDATE FUNCTION, FIX
    console.log(store.data);
    console.log(storeCopy);
    store.data = storeCopy;

    // Update server with new game state

  })

  document.addEventListener("keyup", function(event){

    if (event.target.matches('input')){

    }

    if (event.key == 'Enter'){
      event.preventDefault();
    }

    console.log(event);

  })

})();
