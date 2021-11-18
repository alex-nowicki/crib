//
// Imports
//

import { notificationFactory, checkLocalStorage, clearLocalStorage, checkPlayer, getDate, getDiffDate, getProfileData, createPlayerData, createGameData, updateData } from './main.js';

(function () {

	//
	// Variables
	//

  const data = {
    user: {},
    games: {
      open: [],
      closed: []
    },
    filter: 'active',
    dialog: {
      pane: null,
      alert: null
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


  /**
   * Refresh Table Data
   */
  let refreshProfile = async function(username){
    let profileData = await getProfileData(username);
    store.data.user = profileData.player;
    store.data.games = profileData.games;
  }





  //
  // State-based UI Templates
  //

  Reef.debug(true);

  let store = new Reef.Store({
    data: {}
  })

  let initProfile = async function(user) {

    try {
      let profileData = await getProfileData(user);
      store.data.user = profileData.player;
      store.data.games = profileData.games;
    } catch (error){
      console.log(error);
    }

    console.log(store.data);

    let dialog = new Reef('#dialog', {
      store: store,
      template: function(props) {
        return `
        ${props.dialog.pane != null ? `
          <div id="${props.dialog.pane}">
            ${props.dialog.pane == 'login' ? `<h1>Login</h1>` : ``}
            ${props.dialog.pane == 'signup' ? `<h1>Sign up</h1>` : ``}
            ${props.dialog.pane == 'new-game' ? `<h1>New game</h1>` : ``}
            ${props.dialog.pane == 'add-friend' ? `<h1>Add friend</h1>` : ``}
            ${props.dialog.pane == 'confirm-block' ? `<h1>Block user</h1>` : ``}
            ${props.dialog.pane == 'confirm-leave' ? `<h1>Leave game</h1>` : ``}

            <form action="">
              ${props.dialog.pane == 'login' ||
                props.dialog.pane == 'signup' ||
                props.dialog.pane == 'new-game' ||
                props.dialog.pane == 'add-friend' ? `
                <label for="username">Username</label><br>
                <input type="text" id="${props.dialog.pane}-field" name="username" value=""><br>
                <button type="button" id="${props.dialog.pane}-submit" class="big">Login</button>
              ` : ``}

              ${props.dialog.alert != null ? `
                <div class="alert ${props.dialog.alert} flex-row">
                  ${props.dialog.alert == 'attention' ? `
                    <svg class="icon-attention" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29"><path d="M27 27.29H2a2 2 0 0 1-1.73-3l12.5-21.65a2 2 0 0 1 3.46 0l12.5 21.65a2 2 0 0 1-1.73 3ZM14.5 3.64 2 25.29h25L14.5 3.64Zm-.87-.5Zm-.32 14.53c0 .58.46.95 1.2.95a1.07 1.07 0 0 0 1.18-.95c0-1 .05-2.13.11-3.27s.11-2.32.11-3.28a1.27 1.27 0 0 0-1.4-1.23 1.28 1.28 0 0 0-1.42 1.23c0 1 .06 2.14.11 3.28s.11 2.32.11 3.27Zm1.21 2.27A1.47 1.47 0 0 0 13 21.43a1.48 1.48 0 1 0 1.48-1.49Z"/></svg>
                    <p>User does not exist.</p>
                  ` : ``}
                  ${props.dialog.alert == 'accept' ? `
                    <svg class="icon-accept" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29"><path d="M21.88 9.32a1.24 1.24 0 0 1 0 1.76l-8.6 8.6a1.23 1.23 0 0 1-1.76 0l-4.4-4.4a1.24 1.24 0 1 1 1.76-1.76L12.4 17l7.72-7.71a1.24 1.24 0 0 1 1.76.03ZM28 14.5A13.5 13.5 0 1 1 14.5 1 13.49 13.49 0 0 1 28 14.5Zm-2 0A11.5 11.5 0 1 0 14.5 26 11.51 11.51 0 0 0 26 14.5Z"/></svg>
                    <p>Login successful.</p>
                  ` : ``}

                </div>
              ` : ``}

            </form>
            <p>Don't have an account? <a class="login-toggle">Sign up</a></p>

          </div>

        <div id="signup">
          <h1>Sign up</h1>
          <form action="">
            <label for="username">Username</label><br>
            <input type="text" id="signup-field" name="username" value=""><br>
            <button type="button" id="signup-submit" class="big">Create Account</button>
            <div class="alert reject flex-row is-hidden">
              <svg class="icon-reject" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29"><path d="M19.88 9.12a1.24 1.24 0 0 1 0 1.76l-3.61 3.62 3.61 3.62a1.24 1.24 0 0 1 0 1.76 1.23 1.23 0 0 1-1.76 0l-3.62-3.61-3.62 3.61a1.23 1.23 0 0 1-1.76 0 1.24 1.24 0 0 1 0-1.76l3.61-3.62-3.61-3.62a1.24 1.24 0 0 1 1.76-1.76l3.62 3.61 3.62-3.61a1.24 1.24 0 0 1 1.76 0Zm8.12.62v9.52a2 2 0 0 1-.59 1.42l-6.73 6.73a2 2 0 0 1-1.42.59H9.74a2 2 0 0 1-1.42-.59l-6.73-6.73A2 2 0 0 1 1 19.26V9.74a2 2 0 0 1 .59-1.42l6.73-6.73A2 2 0 0 1 9.74 1h9.52a2 2 0 0 1 1.42.59l6.73 6.73A2 2 0 0 1 28 9.74Zm-2 0L19.26 3H9.74L3 9.74v9.52L9.74 26h9.52L26 19.26Z"/></svg>
              <p>Username already in use, please choose another.</p>
            </div>
            <div class="alert accept flex-row is-hidden">
              <svg class="icon-accept" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29"><path d="M21.88 9.32a1.24 1.24 0 0 1 0 1.76l-8.6 8.6a1.23 1.23 0 0 1-1.76 0l-4.4-4.4a1.24 1.24 0 1 1 1.76-1.76L12.4 17l7.72-7.71a1.24 1.24 0 0 1 1.76.03ZM28 14.5A13.5 13.5 0 1 1 14.5 1 13.49 13.49 0 0 1 28 14.5Zm-2 0A11.5 11.5 0 1 0 14.5 26 11.51 11.51 0 0 0 26 14.5Z"/></svg>
              <p>Account created.</p>
            </div>
          </form>
          <p>Already have an account? <a class="login-toggle">Login</a></p>
        </div>
        <div id="new-game">
          <h1>New game</h1>
          <p>Type the username of the person you want to invite to a game:</p>
          <form action="">
            <label for="username">Username</label><br>
            <input type="text" id="new-game-field" name="username" value=""><br>
            <div class="flex-row">
              <button type="button" id="new-game-submit" class="big">Send Request</button>
              <button type="button" class="big cancel">Cancel</button>
            </div>
            <div class="alert attention flex-row is-hidden">
              <svg class="icon-attention" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29"><path d="M27 27.29H2a2 2 0 0 1-1.73-3l12.5-21.65a2 2 0 0 1 3.46 0l12.5 21.65a2 2 0 0 1-1.73 3ZM14.5 3.64 2 25.29h25L14.5 3.64Zm-.87-.5Zm-.32 14.53c0 .58.46.95 1.2.95a1.07 1.07 0 0 0 1.18-.95c0-1 .05-2.13.11-3.27s.11-2.32.11-3.28a1.27 1.27 0 0 0-1.4-1.23 1.28 1.28 0 0 0-1.42 1.23c0 1 .06 2.14.11 3.28s.11 2.32.11 3.27Zm1.21 2.27A1.47 1.47 0 0 0 13 21.43a1.48 1.48 0 1 0 1.48-1.49Z"/></svg>
              <p>User does not exist.</p>
            </div>
            <div class="alert accept flex-row is-hidden">
              <svg class="icon-accept" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29"><path d="M21.88 9.32a1.24 1.24 0 0 1 0 1.76l-8.6 8.6a1.23 1.23 0 0 1-1.76 0l-4.4-4.4a1.24 1.24 0 1 1 1.76-1.76L12.4 17l7.72-7.71a1.24 1.24 0 0 1 1.76.03ZM28 14.5A13.5 13.5 0 1 1 14.5 1 13.49 13.49 0 0 1 28 14.5Zm-2 0A11.5 11.5 0 1 0 14.5 26 11.51 11.51 0 0 0 26 14.5Z"/></svg>
              <p>Game request sent.</p>
            </div>
            <div class="alert reject flex-row is-hidden">
              <svg class="icon-reject" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29"><path d="M19.88 9.12a1.24 1.24 0 0 1 0 1.76l-3.61 3.62 3.61 3.62a1.24 1.24 0 0 1 0 1.76 1.23 1.23 0 0 1-1.76 0l-3.62-3.61-3.62 3.61a1.23 1.23 0 0 1-1.76 0 1.24 1.24 0 0 1 0-1.76l3.61-3.62-3.61-3.62a1.24 1.24 0 0 1 1.76-1.76l3.62 3.61 3.62-3.61a1.24 1.24 0 0 1 1.76 0Zm8.12.62v9.52a2 2 0 0 1-.59 1.42l-6.73 6.73a2 2 0 0 1-1.42.59H9.74a2 2 0 0 1-1.42-.59l-6.73-6.73A2 2 0 0 1 1 19.26V9.74a2 2 0 0 1 .59-1.42l6.73-6.73A2 2 0 0 1 9.74 1h9.52a2 2 0 0 1 1.42.59l6.73 6.73A2 2 0 0 1 28 9.74Zm-2 0L19.26 3H9.74L3 9.74v9.52L9.74 26h9.52L26 19.26Z"/></svg>
              <p>Game request not sent. User is blocked.</p>
            </div>
          </form>
        </div>
        <div id="add-friend">
          <h1>Add friend</h1>
          <p>Type the username of the person you want to add as a friend:</p>
          <form action="">
            <label for="username">Username</label><br>
            <input type="text" id="add-friend-field" name="username" value=""><br>
            <div class="flex-row">
              <button type="button" id="add-friend-submit" class="big">Send Request</button>
              <button type="button" class="big cancel">Cancel</button>
            </div>
            <div class="alert attention flex-row is-hidden">
              <svg class="icon-attention" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29"><path d="M27 27.29H2a2 2 0 0 1-1.73-3l12.5-21.65a2 2 0 0 1 3.46 0l12.5 21.65a2 2 0 0 1-1.73 3ZM14.5 3.64 2 25.29h25L14.5 3.64Zm-.87-.5Zm-.32 14.53c0 .58.46.95 1.2.95a1.07 1.07 0 0 0 1.18-.95c0-1 .05-2.13.11-3.27s.11-2.32.11-3.28a1.27 1.27 0 0 0-1.4-1.23 1.28 1.28 0 0 0-1.42 1.23c0 1 .06 2.14.11 3.28s.11 2.32.11 3.27Zm1.21 2.27A1.47 1.47 0 0 0 13 21.43a1.48 1.48 0 1 0 1.48-1.49Z"/></svg>
              <p>User does not exist.</p>
            </div>
            <div class="alert accept flex-row is-hidden">
              <svg class="icon-accept" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29"><path d="M21.88 9.32a1.24 1.24 0 0 1 0 1.76l-8.6 8.6a1.23 1.23 0 0 1-1.76 0l-4.4-4.4a1.24 1.24 0 1 1 1.76-1.76L12.4 17l7.72-7.71a1.24 1.24 0 0 1 1.76.03ZM28 14.5A13.5 13.5 0 1 1 14.5 1 13.49 13.49 0 0 1 28 14.5Zm-2 0A11.5 11.5 0 1 0 14.5 26 11.51 11.51 0 0 0 26 14.5Z"/></svg>
              <p>Friend request sent.</p>
            </div>
            <div class="alert reject flex-row is-hidden">
              <svg class="icon-reject" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29"><path d="M19.88 9.12a1.24 1.24 0 0 1 0 1.76l-3.61 3.62 3.61 3.62a1.24 1.24 0 0 1 0 1.76 1.23 1.23 0 0 1-1.76 0l-3.62-3.61-3.62 3.61a1.23 1.23 0 0 1-1.76 0 1.24 1.24 0 0 1 0-1.76l3.61-3.62-3.61-3.62a1.24 1.24 0 0 1 1.76-1.76l3.62 3.61 3.62-3.61a1.24 1.24 0 0 1 1.76 0Zm8.12.62v9.52a2 2 0 0 1-.59 1.42l-6.73 6.73a2 2 0 0 1-1.42.59H9.74a2 2 0 0 1-1.42-.59l-6.73-6.73A2 2 0 0 1 1 19.26V9.74a2 2 0 0 1 .59-1.42l6.73-6.73A2 2 0 0 1 9.74 1h9.52a2 2 0 0 1 1.42.59l6.73 6.73A2 2 0 0 1 28 9.74Zm-2 0L19.26 3H9.74L3 9.74v9.52L9.74 26h9.52L26 19.26Z"/></svg>
              <p>Friend request not sent. User is blocked.</p>
            </div>
          </form>
        </div>
        <div id="confirm-block">
          <h1>Block user</h1>
          <p>Are you sure you want to block this user? They will no longer be able to send you friend or game requests.</p>
          <div class="alert attention flex-row">
            <svg class="icon-attention" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29"><path d="M27 27.29H2a2 2 0 0 1-1.73-3l12.5-21.65a2 2 0 0 1 3.46 0l12.5 21.65a2 2 0 0 1-1.73 3ZM14.5 3.64 2 25.29h25L14.5 3.64Zm-.87-.5Zm-.32 14.53c0 .58.46.95 1.2.95a1.07 1.07 0 0 0 1.18-.95c0-1 .05-2.13.11-3.27s.11-2.32.11-3.28a1.27 1.27 0 0 0-1.4-1.23 1.28 1.28 0 0 0-1.42 1.23c0 1 .06 2.14.11 3.28s.11 2.32.11 3.27Zm1.21 2.27A1.47 1.47 0 0 0 13 21.43a1.48 1.48 0 1 0 1.48-1.49Z"/></svg>
            <p>This action can't be undone.</p>
          </div>
          <form action="">
            <div class="flex-row">
              <button type="button" class="big confirm" data-type="block">Confirm</button>
              <button type="button" class="big cancel">Cancel</button>
            </div>
          </form>
        </div>
        <div id="confirm-leave">
          <h1>Leave game</h1>
          <p>Are you sure you want to leave this game? You will forfeit the game.</p>
          <div class="alert attention flex-row">
            <svg class="icon-attention" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29"><path d="M27 27.29H2a2 2 0 0 1-1.73-3l12.5-21.65a2 2 0 0 1 3.46 0l12.5 21.65a2 2 0 0 1-1.73 3ZM14.5 3.64 2 25.29h25L14.5 3.64Zm-.87-.5Zm-.32 14.53c0 .58.46.95 1.2.95a1.07 1.07 0 0 0 1.18-.95c0-1 .05-2.13.11-3.27s.11-2.32.11-3.28a1.27 1.27 0 0 0-1.4-1.23 1.28 1.28 0 0 0-1.42 1.23c0 1 .06 2.14.11 3.28s.11 2.32.11 3.27Zm1.21 2.27A1.47 1.47 0 0 0 13 21.43a1.48 1.48 0 1 0 1.48-1.49Z"/></svg>
            <p>This action can't be undone.</p>
          </div>
          <form action="">
            <div class="flex-row">
              <button type="button" class="big confirm" data-type="leave">Confirm</button>
              <button type="button" class="big cancel">Cancel</button>
            </div>
          </form>
        </div>
        ` : ``}
      `;
    }
  })

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
                <button type="button" id="filter-all" class="filter ${props.filter == 'all' ? 'is-active' : ''}">All</button>
                <button type="button" id="filter-active" class="filter ${props.filter == 'active' ? 'is-active' : ''}">Active</button>
                <button type="button" id="filter-turn" class="filter ${props.filter == 'turn' ? 'is-active' : ''}">My Turn</button>
                <button type="button" id="filter-completed" class="filter ${props.filter == 'completed' ? 'is-active' : ''}">Completed</button>
              </div>
            </div>
            <ul class="boxes">
              ${props.filter != 'completed' ? `
                ${props.games.open.map(function(game, index){
                  return `<li class="game ${props.filter == 'turn' && (game.turn != null && game.players[game.turn].username != props.user.username) ? `is-hidden` : ``}" data-active data-index="${index}" ${game.turn != null && game.players[game.turn].username == props.user.username ? 'data-turn' : ''}>
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
              ` : ``}
              ${props.filter == 'all' || props.filter == 'completed' ? `
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
              ` : ``}
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
    initProfile(user);
  } else {
    openDialog('login');
  }

  // Refresh profile data every 10 seconds
  // setInterval(refreshProfile(user), 10000);

  // window.addEventListener('hashchange', function() {
  //
  // })


  // Click event listeners
  document.addEventListener('click', async function(event){

    // Create non-reactive store data object to make changes to
    let storeCopy = store.dataCopy;

    //
    // Dialogs
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

    if (event.target.id === 'login-submit'){
      event.preventDefault()
      let username = document.querySelector('#login-field').value;
      if (await checkPlayer(username)){
        user = username.toLowerCase();
        localStorage.setItem('user', username);
        initProfile(user);
        // Close login dialog
        closeDialog();
      } else {
        // Trigger alert
        document.querySelector('#login .alert.attention').classList.remove('is-hidden');
      }
    }

    if (event.target.id === 'signup-submit'){
      event.preventDefault()
      let username = document.querySelector('#signup-field').value;
      if (await checkPlayer(username)){
        let player = await createPlayerData(username);
        if (player){
          localStorage.setItem('user', username);
          user = username.toLowerCase();
          initProfile(user)
          closeDialog();
        } else {
          console.warn('Something went wrong. Player not created.');
        }
      } else {
        // Trigger alert
        document.querySelector('#signup .alert.reject').classList.remove('is-hidden');
      }
    }

    if (event.target.classList.contains('cancel')){
      closeDialog();
    }

    if (event.target.id === 'logout') {
      clearLocalStorage();
      window.location.reload();
    }

    //
    // Games
    //

    if (event.target.classList.contains('filter')){
      let id = event.target.id;
      id = id.replace('filter-', '');
      storeCopy.filter = id;
    }

    if (event.target.classList.contains('join')){
      let id = event.target.dataset.id;
      window.location.assign(`/game.html?id=${id}`);
    }

    //
    // Change Log
    //

    let eventType;
    let changeLog = {
      user: {
        username: user,
        changes: []
      },
      other: {
        username: null,
        changes: []
      },
      game: {
        id: null,
        changes: []
      }
    }

    //
    // Send Requests
    //

    if (event.target.id == 'new-game-submit' || event.target.id == 'add-friend-submit') {

      event.preventDefault();
      let selector = event.target.closest('div.is-active').id;
      let friendsLowerCase = storeCopy.user.friends.map(name => name.toLowerCase());
      let blockedLowerCase = storeCopy.user.blocked.map(name => name.toLowerCase());

      document.querySelector(`#${selector} .alert.attention`).classList.add('is-hidden');
      let username = document.querySelector(`#${selector}-field`).value;

      if (blockedLowerCase.includes(username.toLowerCase())){
        document.querySelector(`#${selector} .alert.reject`).classList.remove('is-hidden');

      } else if (storeCopy.user.username.toLowerCase() == username.toLowerCase()){
        document.querySelector(`#${selector} .alert.attention p`).innerHTML = "You can't send a request to yourself.";
        document.querySelector(`#${selector} .alert.attention`).classList.remove('is-hidden');

      } else if (event.target.id == 'add-friend-submit' && friendsLowerCase.includes(username.toLowerCase())){
        document.querySelector(`#${selector} .alert.attention p`).innerHTML = 'You are already friends with this user';
        document.querySelector(`#${selector} .alert.attention`).classList.remove('is-hidden');

      } else {

        if (await checkPlayer(username)){

          eventType = 'request';
          changeLog.other.username = username.toLowerCase();

          // Log request confirmation for sender
          let confirmation = notificationFactory(getDate(), `${selector == 'new-game' ? 'game' : 'friend'}`, 'sent', storeCopy.user.username, username)
          // Log change to user profile
          changeLog.user.changes.push({
            path: 'notifications.unread',
            value: confirmation,
            type: 'add'
          })

          // Send the request to recipient
          let request = notificationFactory(getDate(), `${selector == 'new-game' ? 'game' : 'friend'}`, 'received', storeCopy.user.username, username)
          changeLog.other.changes.push({
            path: 'notifications.unread',
            value: request,
            type: 'add'
          })

        } else {
          // Trigger alert
          document.querySelector(`#${selector} .alert.attention p`).innerHTML = 'User does not exist';
          document.querySelector(`#${selector} .alert.attention`).classList.remove('is-hidden');
        }

      }

    } else {

      //
      // Friend Actions
      //

      if (event.target.classList.contains('friend-action')){
        let index = event.target.closest('.friend').dataset.index;
        let friend = storeCopy.user.friends[index];

        changeLog.other.username = friend.toLowerCase();

        if (event.target.classList.contains('new-game')){
          // Log request confirmation for sender
          let confirmation = notificationFactory(getDate(), 'game', 'sent', storeCopy.user.username, friend);

          // Log change to user profile
          changeLog.user.changes.push({
            path: 'notifications.unread',
            value: confirmation,
            type: 'add'
          })

          // Send the request to recipient
          let request = notificationFactory(getDate(), 'game', 'received', storeCopy.user.username, friend);

          changeLog.other.changes.push({
            path: 'notifications.unread',
            value: request,
            type: 'add'
          })

        } else if (event.target.classList.contains('remove')){
          storeCopy.user.friends.splice(index, 1);

          changeLog.user.changes.push({
            path: 'friends',
            value: friend,
            type: 'remove'
          })

          changeLog.other.changes.push({
            path: 'friends',
            value: user,
            type: 'remove'
          })
        }
      }

      //
      // Notification Actions
      //

      if (event.target.classList.contains('notification-action')){

        if (event.target.classList.contains('clear-all')){
          // Move all non-request notifications to read
          let length = storeCopy.user.notifications.unread.length;
          for (let i = length - 1; i > -1; i--){
            if (storeCopy.user.notifications.unread[i].type !== 'received'){
              storeCopy.user.notifications.read.unshift(storeCopy.user.notifications.unread[i]);
              storeCopy.user.notifications.unread.splice(i, 1);
            }
          }
          // Log change to user profile
          changeLog.user.changes.push({
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
            changeLog.user.changes.push({
              path: 'notifications',
              value: storeCopy.user.notifications,
              type: 'replace'
            })

          } else {
            // Create reply notification object
            let reply = notificationFactory(getDate(), notification.type, null, storeCopy.user.username, notification.sender);
            // Log sender username
            changeLog.other.username = notification.sender.toLowerCase();

            if (event.target.classList.contains('accept')){
              reply.status = 'accepted';

              if (notification.type == 'friend'){
                // Add request sender to recipient friends list
                changeLog.user.changes.push({
                  path: 'friends',
                  value: notification.sender,
                  type: 'add'
                })
                // Add request recipient to sender friend list
                changeLog.other.changes.push({
                  path: 'friends',
                  value: notification.recipient,
                  type: 'add'
                });

              } else if (notification.type == 'game'){
                // Create game and link it to both accounts
                let newGame = await createGameData(notification.sender, notification.recipient);

                changeLog.user.changes.push({
                  path: 'games.open',
                  value: newGame.id,
                  type: 'add'
                });

                changeLog.other.changes.push({
                  path: 'games.open',
                  value: newGame.id,
                  type: 'add'
                });

                storeCopy.games.open.push(newGame);

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
            changeLog.user.changes.push({
              path: 'notifications',
              value: storeCopy.user.notifications,
              type: 'replace'
            })

            changeLog.other.changes.push({
              path: 'notifications.unread',
              value: reply,
              type: 'add'
            });

          }
        }
      }

      //
      // Confirms
      //

      if (event.target.classList.contains('confirm')){
        let type = event.target.dataset.type;
        let index = event.target.dataset.index;

        if (type == 'leave'){

          eventType == 'leave';
          changeLog.game.id = storeCopy.games.open[index].id;

          let otherUsername;

          if (storeCopy.games.open[index].players[1].username.toLowerCase() != storeCopy.user.username.toLowerCase()){
            changeLog.other.username = storeCopy.games.open[index].players[1].username.toLowerCase();
            otherUsername = storeCopy.games.open[index].players[2].username;
          } else {
            changeLog.other.username = storeCopy.games.open[index].players[2].username.toLowerCase();
            otherUsername = storeCopy.games.open[index].players[1].username;
          }

          changeLog.game.changes.push({
            path: 'winner',
            value: `${otherUsername}, by forfeit`,
            type: 'replace'
          })

          changeLog.game.changes.push({
            path: 'date.completed',
            value: getDate(),
            type: 'replace'
          })

          // Log stats
          changeLog.user.changes.push({
            path: 'stats.loses',
            value: 1,
            type: 'plus'
          })
          changeLog.user.changes.push({
            path: 'stats.winStreak',
            value: 0,
            type: 'replace'
          })
          changeLog.other.changes.push({
            path: 'stats.wins',
            value: 1,
            type: 'plus'
          })
          changeLog.other.changes.push({
            path: 'stats.winStreak',
            value: 1,
            type: 'plus'
          })

          // Move the game to completed
          changeLog.user.changes.push({
            path: 'games.open',
            value: changeLog.game.id,
            type: 'remove'
          })
          changeLog.user.changes.push({
            path: 'games.closed',
            value: changeLog.game.id,
            type: 'add'
          })
          changeLog.other.changes.push({
            path: 'games.open',
            value: changeLog.game.id,
            type: 'remove'
          })
          changeLog.other.changes.push({
            path: 'games.closed',
            value: changeLog.game.id,
            type: 'add'
          })


          // Notify the other player

          // Log request confirmation for sender
          let confirmation = notificationFactory(getDate(), 'forfeit', 'sent', storeCopy.user.username, changeLog.other.username, changeLog.game.id);

          // Log change to user profile
          changeLog.user.changes.push({
            path: 'notifications.unread',
            value: confirmation,
            type: 'add'
          })

          let notice = notificationFactory(getDate(), 'forfeit', 'received', storeCopy.user.username, changeLog.other.username, changeLog.game.id);

          changeLog.other.changes.push({
            path: 'notifications.unread',
            value: notice,
            type: 'add'
          })

        } else if (type == 'block'){
          changeLog.other.username = storeCopy.user.notifications.unread[index].sender.toLowerCase();

          // Add request sender to recipient blocked list
          changeLog.user.changes.push({
            path: 'blocked',
            value: changeLog.other.username,
            type: 'add'
          })
          // Add request recipient to sender blocked list
          changeLog.other.changes.push({
            path: 'blocked',
            value: storeCopy.user.username,
            type: 'add'
          })

          // Remove all notifications from that user
          let length = storeCopy.user.notifications.unread.length;
          for (let i = length - 1; i > -1; i--){
            if (storeCopy.user.notifications.unread[i].sender == changeLog.other.username){
              storeCopy.user.notifications.read.unshift(storeCopy.user.notifications.unread[i]);
              storeCopy.user.notifications.unread.splice(i, 1);
            }
          }
          // Log change to user profile
          changeLog.user.changes.push({
            path: 'notifications',
            value: storeCopy.user.notifications,
            type: 'replace'
          })

          // Log request confirmation for sender
          let confirmation = notificationFactory(getDate(), 'block', 'sent', storeCopy.user.username, changeLog.other.username);

          // Log change to user profile
          changeLog.user.changes.push({
            path: 'notifications.unread',
            value: confirmation,
            type: 'add'
          })

          let notice = notificationFactory(getDate(), 'block', 'received', storeCopy.user.username, changeLog.other.username);

          changeLog.other.changes.push({
            path: 'notifications.unread',
            value: notice,
            type: 'add'
          })
        }

        closeDialog();
      }

      //
      // API Updates
      //

      let userData;
      let otherData;
      let gameData;

      if (changeLog.user.changes.length > 0){
        userData = await updateData(changeLog.user);
      }
      if (changeLog.other.changes.length > 0){
        otherData = await updateData(changeLog.other);
      }
      if (changeLog.game.changes.length > 0){
        gameData = await updateData(changeLog.game);
      }

      //
      // UI Updates
      //

      if (userData){
        // Update user data
        storeCopy.user = userData;
        // Inform user of successfully sent request
        if (eventType == 'request'){
          document.querySelector(`#${selector} .alert.accept`).classList.remove('is-hidden');
          // Close dialog after a few seconds
          setTimeout(function(){
            closeDialog();
          }, 750);
        }
      }

      if (gameData){
        if (eventType == 'leave');{
          // Move game to closed
          storeCopy.games.open.splice(event.target.dataset.index, 1);
          storeCopy.games.closed.unshift(gameData);
        }
      }

      if (userData || gameData) {
        console.log('Original', store.data);
        console.log('Changed', storeCopy);
        store.data = storeCopy;
      }

      store.data.filter = storeCopy.filter;

    }
    // Update server with new game state

  })

  document.addEventListener("keyup", function(event){

    if (event.target.matches('input')){

    }

    if (event.key == 'Enter'){
      event.preventDefault();
    }

  })

})();
