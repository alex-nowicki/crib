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
      alert: {
        type: null,
        text: null
      },
      index: null
    },
    icons: {
      attention: `<svg class="icon-attention" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29"><path d="M27 27.29H2a2 2 0 0 1-1.73-3l12.5-21.65a2 2 0 0 1 3.46 0l12.5 21.65a2 2 0 0 1-1.73 3ZM14.5 3.64 2 25.29h25L14.5 3.64Zm-.87-.5Zm-.32 14.53c0 .58.46.95 1.2.95a1.07 1.07 0 0 0 1.18-.95c0-1 .05-2.13.11-3.27s.11-2.32.11-3.28a1.27 1.27 0 0 0-1.4-1.23 1.28 1.28 0 0 0-1.42 1.23c0 1 .06 2.14.11 3.28s.11 2.32.11 3.27Zm1.21 2.27A1.47 1.47 0 0 0 13 21.43a1.48 1.48 0 1 0 1.48-1.49Z"/></svg>`,
      accept: `<svg class="icon-accept" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29"><path d="M21.88 9.32a1.24 1.24 0 0 1 0 1.76l-8.6 8.6a1.23 1.23 0 0 1-1.76 0l-4.4-4.4a1.24 1.24 0 1 1 1.76-1.76L12.4 17l7.72-7.71a1.24 1.24 0 0 1 1.76.03ZM28 14.5A13.5 13.5 0 1 1 14.5 1 13.49 13.49 0 0 1 28 14.5Zm-2 0A11.5 11.5 0 1 0 14.5 26 11.51 11.51 0 0 0 26 14.5Z"/></svg>`,
      reject: `<svg class="icon-reject" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29"><path d="M19.88 9.12a1.24 1.24 0 0 1 0 1.76l-3.61 3.62 3.61 3.62a1.24 1.24 0 0 1 0 1.76 1.23 1.23 0 0 1-1.76 0l-3.62-3.61-3.62 3.61a1.23 1.23 0 0 1-1.76 0 1.24 1.24 0 0 1 0-1.76l3.61-3.62-3.61-3.62a1.24 1.24 0 0 1 1.76-1.76l3.62 3.61 3.62-3.61a1.24 1.24 0 0 1 1.76 0Zm8.12.62v9.52a2 2 0 0 1-.59 1.42l-6.73 6.73a2 2 0 0 1-1.42.59H9.74a2 2 0 0 1-1.42-.59l-6.73-6.73A2 2 0 0 1 1 19.26V9.74a2 2 0 0 1 .59-1.42l6.73-6.73A2 2 0 0 1 9.74 1h9.52a2 2 0 0 1 1.42.59l6.73 6.73A2 2 0 0 1 28 9.74Zm-2 0L19.26 3H9.74L3 9.74v9.52L9.74 26h9.52L26 19.26Z"/></svg>`,
      turn: `<svg class="icon-turn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29"><path d="M14.5 1A13.5 13.5 0 1 0 28 14.5 13.49 13.49 0 0 0 14.5 1Zm0 25A11.5 11.5 0 1 1 26 14.5 11.51 11.51 0 0 1 14.5 26Zm5.25-10.5a1.25 1.25 0 0 1-1.25 1.25h-5a1.25 1.25 0 0 1-1.25-1.25v-7a1.25 1.25 0 0 1 2.5 0v5.75h3.75a1.25 1.25 0 0 1 1.25 1.25Z"/></svg>`,
      locked: `<svg class="icon-locked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29"><path d="M25 10h-2.75V8.7a7.75 7.75 0 0 0-15.5 0V10H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h21a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1ZM9.25 8.7a5.25 5.25 0 0 1 10.5 0V10H9.25ZM24 26H5V12h19Zm-12.5-9a3 3 0 1 1 4.5 2.58v2.68a1.49 1.49 0 0 1-1.49 1.49A1.49 1.49 0 0 1 13 22.26v-2.68A3 3 0 0 1 11.5 17Z"/></svg>`
    }
  }




	//
	// Methods
	//

  /**
   * Refresh Table Data
   */
  let refreshProfile = async function(username){
    let profileData = await getProfileData(username);
    store.data.user = profileData.player;
    store.data.games = profileData.games;
  }

  let toggleButtonSpinner = function(button){
    button.querySelector('span').classList.toggle('is-transparent');
    button.querySelector('.spinner').classList.toggle('is-hidden');
  }

  let openDialog = function(obj, target){
    obj.dialog.pane = target;
    appElem.classList.add('is-fixed');
  }

  let closeDialog = function(obj){
    obj.dialog.pane = null;
    obj.dialog.alert.type = null;
    obj.dialog.alert.text = null;
    appElem.classList.remove('is-fixed');
  }



  //
  // State-based UI Templates
  //

  Reef.debug(true);

  let store = new Reef.Store({
    data: {}
  })

  let appElem = document.querySelector('#app');

  let app = new Reef('#app', {
    store: store,
    template: function(props) {
      return `
      <div id="dialog" class="${props.dialog.pane == null ? `is-hidden` : ``}"></div>
      <header>
        <section id="site-info">
          <a class="logo-group" href="http://nowickidesign.com/">
            <svg class="logo" viewBox="0 0 100 33.46">
              <path d="M14.68,18.42,9.57,21.37V13.49a2.16,2.16,0,0,0-2.16-2.36,2,2,0,0,0-2,2.19v8.05H0V7H5.36V8.46A5.05,5.05,0,0,1,9.41,6.69a5.2,5.2,0,0,1,5.27,5.55Zm9.64,3.28c4.38,0,8.07-3.44,8.07-7.52S28.7,6.69,24.32,6.69s-8.1,3.41-8.1,7.49S19.91,21.7,24.32,21.7Zm0-4.44a3.07,3.07,0,1,1,3.08-3.08A3.13,3.13,0,0,1,24.32,17.26ZM37,21.37H41.7L43.59,14l1.94,7.38h4.74L55.16,7H50l-2.1,7.16L45.78,7H41.39l-2.11,7.16L37.15,7H32ZM59,5.49a2.77,2.77,0,0,0,2.72-2.77,2.75,2.75,0,0,0-5.5,0A2.78,2.78,0,0,0,59,5.49ZM56.31,21.37h5.36V7H56.31Zm14.92.33A7.82,7.82,0,0,0,77.37,19l-3.53-2.83a3.62,3.62,0,0,1-2.55,1.14,3.08,3.08,0,0,1-3-3.11,3,3,0,0,1,3-3,3.55,3.55,0,0,1,2.5,1.11l3.52-2.89a7.64,7.64,0,0,0-6-2.66c-4.42,0-8.13,3.41-8.13,7.49S66.88,21.7,71.23,21.7Zm17.41-8.49,5-6.19h-6L84,12.07V.69L78.62,3.78V21.37H84v-3.3l1.16-1.45,2.64,4.75h6Zm8.64-7.72A2.77,2.77,0,0,0,100,2.72a2.75,2.75,0,0,0-5.49,0A2.78,2.78,0,0,0,97.28,5.49ZM94.56,21.37h5.36V7H94.56ZM14.68,23.68h0v7.39h-.86v-1.4a3,3,0,0,1-2.68,1.57,3.47,3.47,0,0,1-3.28-3.76,3.47,3.47,0,0,1,3.28-3.75,3,3,0,0,1,2.68,1.57V21.37l.86-.5Zm-.86,3.8c0-1.74-1-3-2.53-3a2.71,2.71,0,0,0-2.54,3,2.73,2.73,0,0,0,2.54,3C12.78,30.45,13.82,29.21,13.82,27.48Zm5.86,3A2.77,2.77,0,0,1,17,27.82H23c0-2.47-1.28-4.09-3.4-4.09a3.61,3.61,0,0,0-3.54,3.73,3.7,3.7,0,0,0,3.6,3.78,4.39,4.39,0,0,0,2.93-1.11l-.55-.59A3.46,3.46,0,0,1,19.68,30.45Zm0-5.93A2.47,2.47,0,0,1,22.16,27H17A2.71,2.71,0,0,1,19.65,24.52Zm7.21,6.72c1.44,0,2.58-.85,2.58-2.07s-1-1.71-2.35-2.13-2-.74-2-1.4.74-1.12,1.61-1.12a4.22,4.22,0,0,1,2.14.68l.43-.67a4.8,4.8,0,0,0-2.57-.8,2.21,2.21,0,0,0-2.47,2c0,1,.68,1.56,2.4,2.05,1.14.35,1.91.69,1.91,1.46s-.74,1.2-1.72,1.2a4.42,4.42,0,0,1-2.52-.92l-.45.64A4.87,4.87,0,0,0,26.86,31.24Zm4.3-8.75a.59.59,0,0,0,.6-.59.6.6,0,1,0-1.2,0A.59.59,0,0,0,31.16,22.49Zm-.43,8.58h.86V23.9h-.86Zm8.12-7.17v1.36a3,3,0,0,0-2.74-1.53,3.24,3.24,0,0,0-3.24,3.4,3.24,3.24,0,0,0,3.24,3.41A3.06,3.06,0,0,0,38.85,29v1.31c0,1.45-1,2.35-2.68,2.35a3.75,3.75,0,0,1-2.41-.85l-.39.69a4.73,4.73,0,0,0,2.9,1,3.17,3.17,0,0,0,3.44-3.15V23.9Zm-2.58,5.85a2.62,2.62,0,1,1,2.58-2.62A2.51,2.51,0,0,1,36.27,29.75Zm8.47-6a2.6,2.6,0,0,0-2.36,1.34V23.9h-.86v7.17h.86V26.5a2.11,2.11,0,0,1,2.25-2,1.92,1.92,0,0,1,1.94,2.05v4.5h.86V26.46A2.6,2.6,0,0,0,44.74,23.73Z"/>
            </svg>
          </a>
        </section>
        <section id="user-info" class="flex-row">
          ${props.user.username ? `<button type="button" id="logout">Logout</button>` : ''}
        </section>
      </header>
      <main id="profile"></main>
      <footer>
        <p>© Nowicki Design ${new Date().getFullYear()}</p>
      </footer>
      `;
    }
  })

  let dialog = new Reef('#dialog', {
    store: store,
    template: function(props) {
      return `
          <section id="load" class="${props.dialog.pane == 'load' ? `is-active` : `is-hidden`}">
            <div class="spinner large"><div></div><div></div><div></div></div>
          </section>

          <section id="login" class="${props.dialog.pane == 'login' ? `is-active` : `is-hidden`}">
            <h1>Login</h1>
            <form action="">
              <label for="username">Username</label><br>
              <input type="text" id="login-field" name="username" value=""><br>
              <button type="button" id="login-submit" class="big"><span>Login</span><div class="spinner medium is-hidden"><div></div><div></div><div></div></div></button>
                <div class="alert attention flex-row ${props.dialog.alert.type == 'attention' ? `` : `is-hidden`}">
                  ${props.icons.attention}
                  <p>${props.dialog.alert.text ? props.dialog.alert.text : `User does not exist.`}</p>
                </div>
                <div class="alert accept flex-row ${props.dialog.alert.type == 'accept' ? `` : `is-hidden`}">
                  ${props.icons.accept}
                  <p>Login successful.</p>
                </div>
            </form>
            <p class="large">Don't have an account? <a class="login-toggle">Sign up</a></p>
          </section>

        <section id="signup" class="${props.dialog.pane == 'signup' ? `is-active` : `is-hidden`}">
          <h1>Sign up</h1>
          <p class="large">Username must be 3-20 characters long and may include any combination of alphanumeric characters and the following special characters: - _ .</p>
          <form action="">
            <label for="username">Username</label><br>
            <input type="text" id="signup-field" name="username" value=""><br>
            <button type="button" id="signup-submit" class="big"><span>Create Account</span><div class="spinner medium is-hidden"><div></div><div></div><div></div></div></button>
            <div class="alert attention flex-row ${props.dialog.alert.type == 'attention' ? `` : `is-hidden`}">
              ${props.icons.attention}
              <p>${props.dialog.alert.text ? props.dialog.alert.text : `User does not exist.`}</p>
            </div>
            <div class="alert accept flex-row ${props.dialog.alert.type == 'accept' ? `` : `is-hidden`}">
              ${props.icons.accept}
              <p>Account created.</p>
            </div>
            <div class="alert reject flex-row ${props.dialog.alert.type == 'reject' ? `` : `is-hidden`}">
              ${props.icons.reject}
              <p>Username already in use, please choose another.</p>
            </div>
          </form>
          <p class="large">Already have an account? <a class="login-toggle">Login</a></p>
        </section>

        <section id="new-game" class="${props.dialog.pane == 'new-game' ? `is-active` : `is-hidden`}">
          <h1>New game</h1>
          <p class="large">Type the username of the person you want to invite to a game:</p>
          <form action="">
            <label for="username">Username</label><br>
            <input type="text" id="new-game-field" name="username" value=""><br>
            <div class="flex-row">
              <button type="button" id="new-game-submit" class="big"><span>Send Request</span><div class="spinner medium is-hidden"><div></div><div></div><div></div></div></button>
              <button type="button" class="big cancel">Cancel</button>
            </div>
            <div class="alert attention flex-row ${props.dialog.alert.type == 'attention' ? `` : `is-hidden`}">
              ${props.icons.attention}
              <p>${props.dialog.alert.text ? props.dialog.alert.text : `User does not exist.`}</p>
            </div>
            <div class="alert accept flex-row ${props.dialog.alert.type == 'accept' ? `` : `is-hidden`}">
              ${props.icons.accept}
              <p>Game request sent.</p>
            </div>
            <div class="alert reject flex-row ${props.dialog.alert.type == 'reject' ? `` : `is-hidden`}">
              ${props.icons.reject}
              <p>Game request not sent. User is blocked.</p>
            </div>
          </form>
        </section>

        <section id="add-friend"  class="${props.dialog.pane == 'add-friend' ? `is-active` : `is-hidden`}">
          <h1>Add friend</h1>
          <p class="large">Type the username of the person you want to add as a friend:</p>
          <form action="">
            <label for="username">Username</label><br>
            <input type="text" id="add-friend-field" name="username" value=""><br>
            <div class="flex-row">
              <button type="button" id="add-friend-submit" class="big"><span>Send Request</span><div class="spinner medium is-hidden"><div></div><div></div><div></div></div></button>
              <button type="button" class="big cancel">Cancel</button>
            </div>
            <div class="alert attention flex-row ${props.dialog.alert.type == 'attention' ? `` : `is-hidden`}">
              ${props.icons.attention}
              <p>${props.dialog.alert.text ? props.dialog.alert.text : `User does not exist.`}</p>
            </div>
            <div class="alert accept flex-row ${props.dialog.alert.type == 'accept' ? `` : `is-hidden`}">
              ${props.icons.accept}
              <p>Friend request sent.</p>
            </div>
            <div class="alert reject flex-row ${props.dialog.alert.type == 'reject' ? `` : `is-hidden`}">
              ${props.icons.reject}
              <p>Friend request not sent. User is blocked.</p>
            </div>
          </form>
        </section>

        <section id="confirm-block" class="${props.dialog.pane == 'confirm-block' ? `is-active` : `is-hidden`}">
          <h1>Block user</h1>
          <p class="large">Are you sure you want to block this user? They will no longer be able to send you friend or game requests.</p>
          <div class="alert attention flex-row">
            ${props.icons.attention}
            <p>This action can't be undone.</p>
          </div>
          <form action="">
            <div class="flex-row">
              <button type="button" class="big confirm" data-type="block" data-index="${props.dialog.index}"><span>Confirm</span><div class="spinner medium is-hidden"><div></div><div></div><div></div></div></button>
              <button type="button" class="big cancel">Cancel</button>
            </div>
            <div class="alert accept flex-row ${props.dialog.alert.type == 'accept' ? `` : `is-hidden`}">
              ${props.icons.accept}
              <p>User blocked.</p>
            </div>
            <div class="alert reject flex-row ${props.dialog.alert.type == 'reject' ? `` : `is-hidden`}">
              ${props.icons.reject}
              <p>Server error. Please reload the page and try again.</p>
            </div>
          </form>
        </section>

        <section id="confirm-leave" class="${props.dialog.pane == 'confirm-leave' ? `is-active` : `is-hidden`}">
          <h1>Leave game</h1>
          <p class="large">Are you sure you want to leave this game? You will forfeit the game.</p>
          <div class="alert attention flex-row">
            ${props.icons.attention}
            <p>This action can't be undone.</p>
          </div>
          <form action="">
            <div class="flex-row">
              <button type="button" class="big confirm" data-type="leave" data-index="${props.dialog.index}"><span>Confirm</span><div class="spinner medium is-hidden"><div></div><div></div><div></div></div></button>
              <button type="button" class="big cancel">Cancel</button>
            </div>
            <div class="alert accept flex-row ${props.dialog.alert.type == 'accept' ? `` : `is-hidden`}">
              ${props.icons.accept}
              <p>You left the game.</p>
            </div>
            <div class="alert reject flex-row ${props.dialog.alert.type == 'reject' ? `` : `is-hidden`}">
              ${props.icons.reject}
              <p>Server error. Please reload the page and try again.</p>
            </div>
          </form>
        </section>

        <section id="server-error" class="${props.dialog.pane == 'error' ? `is-active` : `is-hidden`}">
          <h1>Server error</h1>
          <div class="alert reject flex-row">
            ${props.icons.reject}
            <h3>An unexpected error occurred.</h3>
          </div>
          <p class="large">Please reload the page and try again.</p>
          <form action="">
            <button type="button" class="reload big">Reload Page</button>
          </form>
        </section>

      `;
    }
  })

  let initProfile = async function(user) {

    try {
      let profileData = await getProfileData(user);
      store.data.user = profileData.player;
      store.data.games = profileData.games;
      console.log('Data received');
    } catch (error){
      console.log(error);
    }

    console.log(store.data);

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

              ${props.games.open.map(function(game, index){
                return `<li class="game ${props.filter == 'all' || props.filter == 'active' || (props.filter == 'turn' && (game.turn != null && game.players[game.turn].username == props.user.username)) ? `` : `is-hidden`}" data-active data-index="${index}" ${game.turn != null && game.players[game.turn].username == props.user.username ? 'data-turn' : ''}>
                  <div class="box-header flex-row">
                    <h3>${game.players[1].username} vs ${game.players[2].username}</h3>
                    <div class="icon-group flex-row ${game.turn && game.players[game.turn].username == props.user.username ? '' : 'is-hidden'}">
                      <p class="date">${getDiffDate(game.date.updated)}</p>
                      ${props.icons.turn}
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
                return `<li class="game ${props.filter == 'all' || props.filter == 'completed' ? `` : `is-hidden`}" data-completed>
                    <div class="box-header flex-row">
                      <h3>${game.players[1].username} vs ${game.players[2].username}</h3>
                      <div class="icon-group flex-row"></div>
                    </div>
                    <div class="box-main flex-row">
                      <div class="info-group">
                        <p>${game.players[1].score} / ${game.players[2].score}</p>
                        <p class="small">Winner: ${game.winner}${game.winningPlay.phase == 'forfeit' ? ', by forfeit' : ''}</p>
                        <p class="small">Game ID: ${game.id}</p>
                        <p class="small">Completed: ${game.date.completed}</p>
                      </div>
                      <div class="button-group flex-row">
                        <button type="button" class="join" data-id="${game.id}">Final Situation</button>
                      </div>
                    </div>
                </li>`
              }).join('')}
            </ul>
            ${props.games.open.length < 5 ? `
              <button type="button" class="dialog-open big" data-target="new-game">New Game</button>
            ` : `
              <button type="button" id="new-game-open" class="big" disabled>Maximum of 5 Active Games</span>${props.icons.locked}</button>
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
                          <button type="button" class="notification-action accept"><span>Accept</span><div class="spinner small is-hidden"><div></div><div></div><div></div></div></button>
                          <button type="button" class="notification-action reject"><span>Reject</span><div class="spinner small is-hidden"><div></div><div></div><div></div></div></button>
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

                      ${notification.type == 'win' ? `
                          <p class="small">You won game #${notification.content} against ${notification.sender}</p>
                        </div>
                        <div class="button-group flex-row">
                          <button type="button" class="notification-action clear">Clear</button>
                        </div>
                      ` : ''}

                      ${notification.type == 'lose' ? `
                          <p class="small">You lost game #${notification.content} against ${notification.sender}</p>
                        </div>
                        <div class="button-group flex-row">
                          <button type="button" class="join" data-id="${notification.content}">Final Situation</button>
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
                        <button type="button" class="friend-action new-game"><span>New Game</span><div class="spinner small is-hidden"><div></div><div></div><div></div></div></button>
                      ` : ''}
                      <button type="button" class="friend-action remove"><span>Unfriend</span><div class="spinner small is-hidden"><div></div><div></div><div></div></div></button>
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

  document.addEventListener('reef:render', function(event){
    console.log(event.target);
    if (event.target.id == 'profile'){
      if (store.data.dialog.pane == 'login' || store.data.dialog.pane == 'signup'){
        console.log('Spinner Toggle');
        toggleButtonSpinner(document.querySelector(`#${store.data.dialog.pane}-submit`));
        closeDialog(store.data);
      } else if (store.data.dialog.pane == 'load'){
        closeDialog(store.data);
      }
    }
  })


	//
	// Inits & Event Listeners
	//

  store.data = data;
  console.log(store.data);

  // Check local storage for saved username
  let user = checkLocalStorage();

  if (user) {
    user = user.toLowerCase();
    openDialog(store.data, 'load');
    initProfile(user);
  } else {
    openDialog(store.data, 'login');
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
    let updateUI = false;

    //
    // Dialogs
    //

    if (event.target.classList.contains('dialog-close')){
      updateUI = true;
      closeDialog(storeCopy);
    }

    if (event.target.classList.contains('dialog-open')){
      updateUI = true;
      let target = event.target.dataset.target;
      if (target == 'confirm-leave'){
        let index = event.target.closest('.game').dataset.index;
        storeCopy.dialog.index = index;
      } else if (target == 'confirm-block'){
        let index = event.target.closest('.notification').dataset.index;
        storeCopy.dialog.index = index;
      }
      openDialog(storeCopy, target);
    }

    if (event.target.classList.contains('login-toggle')) {
      updateUI = true;
      storeCopy.dialog.pane == 'login' ? storeCopy.dialog.pane = 'signup' : storeCopy.dialog.pane = 'login';
      storeCopy.dialog.alert.type = null;
      storeCopy.dialog.alert.text = null;
    }

    if (event.target.id === 'login-submit'){
      updateUI = true;
      event.preventDefault()
      let username = document.querySelector('#login-field').value;
      toggleButtonSpinner(event.target);
      if (username.length == 0){
        storeCopy.dialog.alert.text = `You must type in a username.`;
        storeCopy.dialog.alert.type = 'attention';
      } else if (await checkPlayer(username)){
        updateUI = false;
        user = username.toLowerCase();
        localStorage.setItem('user', username);
        initProfile(user);
      } else {
        // Trigger alert
        storeCopy.dialog.alert.type = 'attention';
        storeCopy.dialog.alert.text = null;
      }
    }

    if (event.target.id === 'signup-submit'){
      updateUI = true;
      event.preventDefault()
      let username = document.querySelector('#signup-field').value;
      let usernameRegex = /^[A-Za-z0-9\-\_\.]*$/;
      toggleButtonSpinner(event.target);
      if (username.length == 0){
        storeCopy.dialog.alert.text = `You must type in a username.`;
        storeCopy.dialog.alert.type = 'attention';
      } else if (username.length < 3) {
        storeCopy.dialog.alert.text = `Username must have at least 3 characters.`;
        storeCopy.dialog.alert.type = 'attention';
      } else if (username.length > 20) {
        storeCopy.dialog.alert.text = `Username must have no more than 20 characters.`;
        storeCopy.dialog.alert.type = 'attention';
      } else if (!usernameRegex.test(username)){
        storeCopy.dialog.alert.text = `Username can only include alphanumeric characters and the following special characters: - _ .`;
        storeCopy.dialog.alert.type = 'attention';
      } else if (!(await checkPlayer(username))){
        let player = await createPlayerData(username);
        if (player){
          updateUI = false;
          localStorage.setItem('user', username);
          user = username.toLowerCase();
          initProfile(user)
        } else {
          console.warn('Something went wrong. Player not created.');
        }
      } else {
        // Trigger alert
        storeCopy.dialog.alert.type ='reject';
        storeCopy.dialog.alert.text = null;
      }
    }

    if (event.target.classList.contains('cancel')){
      updateUI = true;
      closeDialog(storeCopy);
    }

    if (event.target.id === 'logout'){
      clearLocalStorage();
      window.location.reload();
    }

    if (event.target.classList.contains('reload')) {
      window.location.reload();
    }

    //
    // Games
    //

    if (event.target.classList.contains('filter')){
      updateUI = true;
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
      updateUI = true;
      event.preventDefault();
      let selector = event.target.closest('section.is-active').id;
      let friendsLowerCase = storeCopy.user.friends.map(name => name.toLowerCase());
      let blockedLowerCase = storeCopy.user.blocked.map(name => name.toLowerCase());

      storeCopy.dialog.alert.type = null;
      let username = document.querySelector(`#${selector}-field`).value;

      toggleButtonSpinner(event.target);

      if (username.length == 0){
        storeCopy.dialog.alert.text = `You must type in a username.`;
        storeCopy.dialog.alert.type = 'attention';

      } else if (blockedLowerCase.includes(username.toLowerCase())){
        storeCopy.dialog.alert.type = 'reject';

      } else if (storeCopy.user.username.toLowerCase() == username.toLowerCase()){
        storeCopy.dialog.alert.text = `You can't send a request to yourself.`;
        storeCopy.dialog.alert.type = 'attention';

      } else if (event.target.id == 'add-friend-submit' && friendsLowerCase.includes(username.toLowerCase())){
        storeCopy.dialog.alert.text = `You are already friends with this user.`;
        storeCopy.dialog.alert.type = 'attention';

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
          storeCopy.dialog.alert.text = null;
          storeCopy.dialog.alert.type = 'attention';
        }

      }

    }

    //
    // Friend Actions
    //

    if (event.target.classList.contains('friend-action')){
      updateUI = true;
      eventType = 'friend';
      let index = event.target.closest('.friend').dataset.index;
      let friend = storeCopy.user.friends[index];

      toggleButtonSpinner(event.target);

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
      updateUI = true;

      if (event.target.classList.contains('clear-all')){
        // Move all non-request notifications to read
        let length = storeCopy.user.notifications.unread.length;
        for (let i = length - 1; i > -1; i--){
          if (!((storeCopy.user.notifications.unread[i].type == 'game' || storeCopy.user.notifications.unread[i].type == 'friend') && storeCopy.user.notifications.unread[i].status == 'received')){
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

          // Show spinner
          toggleButtonSpinner(event.target);

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
      updateUI = true;
      let type = event.target.dataset.type;
      let index = event.target.dataset.index;

      toggleButtonSpinner(event.target);

      if (type == 'leave'){

        eventType = 'leave';
        changeLog.game.id = storeCopy.games.open[index].id;

        let otherUsername;

        if (storeCopy.games.open[index].players[1].username.toLowerCase() != storeCopy.user.username.toLowerCase()){
          changeLog.other.username = storeCopy.games.open[index].players[1].username.toLowerCase();
          otherUsername = storeCopy.games.open[index].players[1].username;
        } else {
          changeLog.other.username = storeCopy.games.open[index].players[2].username.toLowerCase();
          otherUsername = storeCopy.games.open[index].players[2].username;
        }

        changeLog.game.changes.push({
          path: 'winner',
          value: otherUsername,
          type: 'replace'
        })

        changeLog.game.changes.push({
          path: 'log',
          value: {
            phase: 'forfeit',
            player: storeCopy.user.username,
            description: [],
            cards: {
              starter: null,
              other: null
            },
            value: null,
            date: getDate(true)
          },
          type: 'add'
        })

        changeLog.game.changes.push({
          path: 'winningPlay',
          value: {
            phase: 'forfeit',
            player: storeCopy.user.username,
            description: [],
            cards: {
              starter: null,
              other: null
            },
            value: null,
            date: getDate(true)
          },
          type: 'replace'
        })

        changeLog.game.changes.push({
          path: 'phase',
          value: 'end',
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
        let confirmation = notificationFactory(getDate(), 'forfeit', 'sent', storeCopy.user.username, otherUsername, changeLog.game.id);

        // Log change to user profile
        changeLog.user.changes.push({
          path: 'notifications.unread',
          value: confirmation,
          type: 'add'
        })

        let notice = notificationFactory(getDate(), 'forfeit', 'received', storeCopy.user.username, otherUsername, changeLog.game.id);

        changeLog.other.changes.push({
          path: 'notifications.unread',
          value: notice,
          type: 'add'
        })

      } else if (type == 'block'){
        eventType = 'block';

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
          if (storeCopy.user.notifications.unread[i].sender.toLowerCase() == changeLog.other.username){
            console.log(storeCopy.user.notifications.unread[i]);
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
    }

    //
    // API Updates
    //

    let userData;
    let otherData;
    let gameData;
    let serverError = false;

    if (changeLog.game.changes.length > 0 && !serverError){
      try {
        gameData = await updateData(changeLog.game);
      } catch (error) {
        console.error(error);
        gameData = error;
        serverError = true;
      }
    }

    if (changeLog.other.changes.length > 0 && !serverError){
      try {
        otherData = await updateData(changeLog.other);
      } catch (error) {
        console.error(error);
        otherData = error;
        serverError = true;
      }
    }

    if (changeLog.user.changes.length > 0 && !serverError){
      try {
        userData = await updateData(changeLog.user);
      } catch (error) {
        console.error(error);
        userData = error;
        serverError = true;
      }
    }

    //
    // UI Updates
    //

    if (!serverError){

      if (userData){
        // Update user data
        storeCopy.user = userData;
        // Inform user of successfully sent request
        if (eventType == 'request' || eventType == 'leave' || eventType == 'block'){
          // Hide load spinner
          toggleButtonSpinner(event.target);
          // Show success alert
          storeCopy.dialog.alert.type ='accept';
          // Close dialog after a few seconds
          setTimeout(function(){
            // Close dialog after delay
            closeDialog(storeCopy);
            // Update UI after delay
            store.data = storeCopy;
          }, 1000);
        } else if (eventType == 'friend' || eventType == 'reply'){
          // Hide load spinner
          toggleButtonSpinner(event.target);
        }
      }

      if (gameData){
        if (eventType == 'leave');{
          // Move game to closed
          storeCopy.games.open.splice(event.target.dataset.index, 1);
          storeCopy.games.closed.unshift(gameData);
        }
      }

      if (updateUI) {
        console.log('Original', store.data);
        console.log('Changed', storeCopy);
        store.data = storeCopy;
      }

    } else {
      // Hide load spinner
      toggleButtonSpinner(event.target);
      // Prevent UI update
      updateUI = false;
      // Show error alert to user
      openDialog(store.data, 'error');
    }

  })

  document.addEventListener("keyup", function(event){

    if (event.target.matches('input')){

    }

    if (event.key == 'Enter'){
      event.preventDefault();
    }

  })

})();
