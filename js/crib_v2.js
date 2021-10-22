(function () {

	//
	// Variables
	//

  const cards = [
    {
      "id": 1,
      "suit": "club",
      "rank": 1,
      "value": 1
    },
    {
      "id": 2,
      "suit": "club",
      "rank": 2,
      "value": 2
    },
    {
      "id": 3,
      "suit": "club",
      "rank": 3,
      "value": 3
    },
    {
      "id": 4,
      "suit": "club",
      "rank": 4,
      "value": 4
    },
    {
      "id": 5,
      "suit": "club",
      "rank": 5,
      "value": 5
    },
    {
      "id": 6,
      "suit": "club",
      "rank": 6,
      "value": 6
    },
    {
      "id": 7,
      "suit": "club",
      "rank": 7,
      "value": 7
    },
    {
      "id": 8,
      "suit": "club",
      "rank": 8,
      "value": 8
    },
    {
      "id": 9,
      "suit": "club",
      "rank": 9,
      "value": 9
    },
    {
      "id": 10,
      "suit": "club",
      "rank": 10,
      "value": 10
    },
    {
      "id": 11,
      "suit": "club",
      "rank": 11,
      "value": 10
    },
    {
      "id": 12,
      "suit": "club",
      "rank": 12,
      "value": 10
    },
    {
      "id": 13,
      "suit": "club",
      "rank": 13,
      "value": 10
    },
    {
      "id": 14,
      "suit": "diamond",
      "rank": 1,
      "value": 1
    },
    {
      "id": 15,
      "suit": "diamond",
      "rank": 2,
      "value": 2
    },
    {
      "id": 16,
      "suit": "diamond",
      "rank": 3,
      "value": 3
    },
    {
      "id": 17,
      "suit": "diamond",
      "rank": 4,
      "value": 4
    },
    {
      "id": 18,
      "suit": "diamond",
      "rank": 5,
      "value": 5
    },
    {
      "id": 19,
      "suit": "diamond",
      "rank": 6,
      "value": 6
    },
    {
      "id": 20,
      "suit": "diamond",
      "rank": 7,
      "value": 7
    },
    {
      "id": 21,
      "suit": "diamond",
      "rank": 8,
      "value": 8
    },
    {
      "id": 22,
      "suit": "diamond",
      "rank": 9,
      "value": 9
    },
    {
      "id": 23,
      "suit": "diamond",
      "rank": 10,
      "value": 10
    },
    {
      "id": 24,
      "suit": "diamond",
      "rank": 11,
      "value": 10
    },
    {
      "id": 25,
      "suit": "diamond",
      "rank": 12,
      "value": 10
    },
    {
      "id": 26,
      "suit": "diamond",
      "rank": 13,
      "value": 10
    },
    {
      "id": 27,
      "suit": "heart",
      "rank": 1,
      "value": 1
    },
    {
      "id": 28,
      "suit": "heart",
      "rank": 2,
      "value": 2
    },
    {
      "id": 29,
      "suit": "heart",
      "rank": 3,
      "value": 3
    },
    {
      "id": 30,
      "suit": "heart",
      "rank": 4,
      "value": 4
    },
    {
      "id": 31,
      "suit": "heart",
      "rank": 5,
      "value": 5
    },
    {
      "id": 32,
      "suit": "heart",
      "rank": 6,
      "value": 6
    },
    {
      "id": 33,
      "suit": "heart",
      "rank": 7,
      "value": 7
    },
    {
      "id": 34,
      "suit": "heart",
      "rank": 8,
      "value": 8
    },
    {
      "id": 35,
      "suit": "heart",
      "rank": 9,
      "value": 9
    },
    {
      "id": 36,
      "suit": "heart",
      "rank": 10,
      "value": 10
    },
    {
      "id": 37,
      "suit": "heart",
      "rank": 11,
      "value": 10
    },
    {
      "id": 38,
      "suit": "heart",
      "rank": 12,
      "value": 10
    },
    {
      "id": 39,
      "suit": "heart",
      "rank": 13,
      "value": 10
    },
    {
      "id": 40,
      "suit": "spade",
      "rank": 1,
      "value": 1
    },
    {
      "id": 41,
      "suit": "spade",
      "rank": 2,
      "value": 2
    },
    {
      "id": 42,
      "suit": "spade",
      "rank": 3,
      "value": 3
    },
    {
      "id": 43,
      "suit": "spade",
      "rank": 4,
      "value": 4
    },
    {
      "id": 44,
      "suit": "spade",
      "rank": 5,
      "value": 5
    },
    {
      "id": 45,
      "suit": "spade",
      "rank": 6,
      "value": 6
    },
    {
      "id": 46,
      "suit": "spade",
      "rank": 7,
      "value": 7
    },
    {
      "id": 47,
      "suit": "spade",
      "rank": 8,
      "value": 8
    },
    {
      "id": 48,
      "suit": "spade",
      "rank": 9,
      "value": 9
    },
    {
      "id": 49,
      "suit": "spade",
      "rank": 10,
      "value": 10
    },
    {
      "id": 50,
      "suit": "spade",
      "rank": 11,
      "value": 10
    },
    {
      "id": 51,
      "suit": "spade",
      "rank": 12,
      "value": 10
    },
    {
      "id": 52,
      "suit": "spade",
      "rank": 13,
      "value": 10
    },
  ]

  // const blankGameStateOld = {
  //   "players": [
  //     {
  //       "name": "Felix",
  //       "colour": "orange",
  //       "score": 0,
  //       "hand": [],
  //       "play": [],
  //       "discard": [],
  //       "wins": 0,
  //       "loses": 0,
  //       "skunks": 0
  //     },
  //     {
  //       "name": "Talia",
  //       "colour": "green",
  //       "score": 0,
  //       "hand": [],
  //       "play": [],
  //       "discard": [],
  //       "wins": 0,
  //       "loses": 0,
  //       "skunks": 0
  //     }
  //   ],
  //   "deck": [],
  //   "crib": [],
  //   "play": [],
  //   "starter": {},
  //   "tally": 0,
  //   "dealer": null,
  //   "turn": null,
  //   "go": null,
  //   "phase": "new",
  //   "log": []
  // }

  const playerFactory = (username) => {
    return {
      "username" : username,
      "games": {
        "open": [],
        "closed": []
      },
      "wins": 0,
      "loses": 0,
      "skunks": 0,
      "doubleSkunks": 0,
      "highestHandScore": 0,
      "longestWinStreak": 0,
      "biggestLead": 0
    }
  }

  const gameFactory = (id, username, dateCreated) => {
    // games.nextID ++;
    return {
      "id": id,
      "date": {
        "created": dateCreated,
        "updated": dateCreated
      },
      "user": {
        "username": username,
        "colour": "orange",
        "score": 0,
        "hand": [],
        "play": [],
        "discard": []
      },
      "opponent": {
        "username": null,
        "colour": "green",
        "score": 0,
        "hand": [],
        "play": [],
        "discard": []
      },
      "deck": cards,
      "crib": [],
      "play": [],
      "starter": {},
      "tally": 0,
      "dealer": null,
      "turn": null,
      "go": null,
      "phase": "new",
      "log": []
    }
  }

  const data = {
    state: "login", // welcome, check, profile, game
    user: null,
    game: {},
    players: {}
  }

	//
	// Methods
	//

  // Helper Functions

  /**
   * Return today's date
   * @param {Boolean} detailed - Include hours and minutes
   * @return {String}          - Returns the current date
   */
   let getDate = function(detailed) {
     let date = new Date();
     let day = String(date.getUTCDate());
     let month = String(date.getUTCMonth());
     let year = String(date.getUTCFullYear());
     let hours = String(date.getUTCHours()).padStart(2, '0');
     let minutes = String(date.getUTCMinutes()).padStart(2, '0');
     let seconds = String(date.getUTCSeconds()).padStart(2, '0');
     if (detailed) {
       return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
     } else {
       return `${year}/${month}/${day}`;
     }
   }

  /**
   * Check whether a player has a valid card to play
   * @param {Number} id - The player id
   * @return {Boolean}  - Returns true if a valid card exists
   */
  let checkValidPlay = function(id){
    let diff = 31 - store.data.game.tally;
    let isValid = false;
    store.data.game.players[id].hand.forEach((card, i) => {
      if (card.value <= diff){
        isValid = true;
      }
    });
    return isValid;
  }

  /**
   * Check for duplicate ranks in an array of cards
   * @param {Array} arr - The array of cards check
   * @return {Object}   - The number of duplicates per rank
   */
  let findDuplicates = function(arr) {
   let counts = {}
   for (let i = 0; i < arr.length; i++){
       if (counts[arr[i]]){
       counts[arr[i]] += 1
       } else {
       counts[arr[i]] = 1
       }
      }
      // for (let prop in counts){
      //     if (counts[prop] >= 2){
      //         console.log(prop + " counted: " + counts[prop] + " times.")
      //     }
      // }
    return counts;
  }


  // State-based UI Templates

  Reef.debug(true);

  let store = new Reef.Store({
    data: {}
  })

  // let app = new Reef('#app', {
  //   store: store,
  //   template: function(props) {
  //     return `
  //       <header></header>
  //       <h2>${props.state}</h2>
  //       ${props.state === 'game' ? '<main id="table"></main>' : '<main id="lobby"></main>'}
  //       <footer></footer>
  //     `;
  //   }
  // });

  let header = new Reef('header', {
    store: store,
    template: function(props) {
      return `
        <section id="site-info">
          <a class="logo" href="http://nowickidesign.com/">
            <svg class="logo-svg" viewBox="0 0 100 33.46">
              <path d="M14.68,18.42,9.57,21.37V13.49a2.16,2.16,0,0,0-2.16-2.36,2,2,0,0,0-2,2.19v8.05H0V7H5.36V8.46A5.05,5.05,0,0,1,9.41,6.69a5.2,5.2,0,0,1,5.27,5.55Zm9.64,3.28c4.38,0,8.07-3.44,8.07-7.52S28.7,6.69,24.32,6.69s-8.1,3.41-8.1,7.49S19.91,21.7,24.32,21.7Zm0-4.44a3.07,3.07,0,1,1,3.08-3.08A3.13,3.13,0,0,1,24.32,17.26ZM37,21.37H41.7L43.59,14l1.94,7.38h4.74L55.16,7H50l-2.1,7.16L45.78,7H41.39l-2.11,7.16L37.15,7H32ZM59,5.49a2.77,2.77,0,0,0,2.72-2.77,2.75,2.75,0,0,0-5.5,0A2.78,2.78,0,0,0,59,5.49ZM56.31,21.37h5.36V7H56.31Zm14.92.33A7.82,7.82,0,0,0,77.37,19l-3.53-2.83a3.62,3.62,0,0,1-2.55,1.14,3.08,3.08,0,0,1-3-3.11,3,3,0,0,1,3-3,3.55,3.55,0,0,1,2.5,1.11l3.52-2.89a7.64,7.64,0,0,0-6-2.66c-4.42,0-8.13,3.41-8.13,7.49S66.88,21.7,71.23,21.7Zm17.41-8.49,5-6.19h-6L84,12.07V.69L78.62,3.78V21.37H84v-3.3l1.16-1.45,2.64,4.75h6Zm8.64-7.72A2.77,2.77,0,0,0,100,2.72a2.75,2.75,0,0,0-5.49,0A2.78,2.78,0,0,0,97.28,5.49ZM94.56,21.37h5.36V7H94.56ZM14.68,23.68h0v7.39h-.86v-1.4a3,3,0,0,1-2.68,1.57,3.47,3.47,0,0,1-3.28-3.76,3.47,3.47,0,0,1,3.28-3.75,3,3,0,0,1,2.68,1.57V21.37l.86-.5Zm-.86,3.8c0-1.74-1-3-2.53-3a2.71,2.71,0,0,0-2.54,3,2.73,2.73,0,0,0,2.54,3C12.78,30.45,13.82,29.21,13.82,27.48Zm5.86,3A2.77,2.77,0,0,1,17,27.82H23c0-2.47-1.28-4.09-3.4-4.09a3.61,3.61,0,0,0-3.54,3.73,3.7,3.7,0,0,0,3.6,3.78,4.39,4.39,0,0,0,2.93-1.11l-.55-.59A3.46,3.46,0,0,1,19.68,30.45Zm0-5.93A2.47,2.47,0,0,1,22.16,27H17A2.71,2.71,0,0,1,19.65,24.52Zm7.21,6.72c1.44,0,2.58-.85,2.58-2.07s-1-1.71-2.35-2.13-2-.74-2-1.4.74-1.12,1.61-1.12a4.22,4.22,0,0,1,2.14.68l.43-.67a4.8,4.8,0,0,0-2.57-.8,2.21,2.21,0,0,0-2.47,2c0,1,.68,1.56,2.4,2.05,1.14.35,1.91.69,1.91,1.46s-.74,1.2-1.72,1.2a4.42,4.42,0,0,1-2.52-.92l-.45.64A4.87,4.87,0,0,0,26.86,31.24Zm4.3-8.75a.59.59,0,0,0,.6-.59.6.6,0,1,0-1.2,0A.59.59,0,0,0,31.16,22.49Zm-.43,8.58h.86V23.9h-.86Zm8.12-7.17v1.36a3,3,0,0,0-2.74-1.53,3.24,3.24,0,0,0-3.24,3.4,3.24,3.24,0,0,0,3.24,3.41A3.06,3.06,0,0,0,38.85,29v1.31c0,1.45-1,2.35-2.68,2.35a3.75,3.75,0,0,1-2.41-.85l-.39.69a4.73,4.73,0,0,0,2.9,1,3.17,3.17,0,0,0,3.44-3.15V23.9Zm-2.58,5.85a2.62,2.62,0,1,1,2.58-2.62A2.51,2.51,0,0,1,36.27,29.75Zm8.47-6a2.6,2.6,0,0,0-2.36,1.34V23.9h-.86v7.17h.86V26.5a2.11,2.11,0,0,1,2.25-2,1.92,1.92,0,0,1,1.94,2.05v4.5h.86V26.46A2.6,2.6,0,0,0,44.74,23.73Z"/>
            </svg>
          </a>
        </section>
        ${props.state === 'game' ? '<section id="table-info"></section>' : ''}
        <section id="user-info">
          ${props.state === 'game' ? `<p>Game #${props.game.id}</p>` : ''}
          ${props.state === 'game' ? '<button type="button" id="invite">Invite Player</button>' : ''}
          ${props.user ? `<button type="button" id="settings">${props.user}</button>
          <ul class="settings-list">
            <li><a href="/games" ${route.url === 'games' ? 'class="is-active"' : ''}>My Games</a></li>
            <li><a href="/profile">My Stats</a></li>
            <li><button type="button" id="logout">Log out</button></li>
          </ul>` : ''}
        </section>
      `;
    },
    attachTo: app
  })

  let tableInfo = new Reef('#table-info', {
    store: store,
    template: function(props) {
      return `
        <p class="date">Last Updated: ${props.game.id ? props.game.date.updated : ''}</p>
        <p class="vs">VS</p>
        <p class="name self">${props.game.id ? props.game.players[user].username : ''}</p>
        <p class="name opponent">${props.game.id ? props.game.players[opponent].username : ''}</p>
        <p class="record self">12 W / 6 L / 2 S</p>
        <p class="record opponent">6 W / 12 L / 6 S</p>
        <div class="icons self">
          <svg class="dealer ${props.game.dealer == user ? '' : 'is-hidden'}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29"><path d="M22.38 28.38a1.76 1.76 0 0 1-.83-.21l-7-3.71-7 3.71A1.74 1.74 0 0 1 5.59 28a1.77 1.77 0 0 1-.7-1.72l1.35-7.86L.53 12.9a1.76 1.76 0 0 1-.44-1.81A1.73 1.73 0 0 1 1.51 9.9l7.88-1.15 3.53-7.15a1.77 1.77 0 0 1 1.58-1 1.76 1.76 0 0 1 1.58 1l3.53 7.15 7.88 1.15a1.73 1.73 0 0 1 1.42 1.19 1.76 1.76 0 0 1-.44 1.81l-5.71 5.56 1.35 7.86a1.77 1.77 0 0 1-1.73 2.06Zm-7.88-5.95a1.84 1.84 0 0 1 .82.2l6.73 3.55-1.28-7.5a1.76 1.76 0 0 1 .5-1.56l5.45-5.31-7.53-1.1a1.73 1.73 0 0 1-1.32-1L14.5 2.93l-3.37 6.82a1.73 1.73 0 0 1-1.32 1l-7.53 1.1 5.45 5.31a1.75 1.75 0 0 1 .5 1.55L7 26.18l6.73-3.55a1.84 1.84 0 0 1 .77-.2Z" style="fill:#8477ff"/></svg>
          <svg class="turn ${props.game.turn == user ? '' : 'is-hidden'}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29"><path d="M14.5 1A13.5 13.5 0 1 0 28 14.5 13.49 13.49 0 0 0 14.5 1Zm0 25A11.5 11.5 0 1 1 26 14.5 11.51 11.51 0 0 1 14.5 26Zm5.25-10.5a1.25 1.25 0 0 1-1.25 1.25h-5a1.25 1.25 0 0 1-1.25-1.25v-7a1.25 1.25 0 0 1 2.5 0v5.75h3.75a1.25 1.25 0 0 1 1.25 1.25Z" style="fill:#8477ff"/></svg>
          <svg class="go ${props.game.go == user ? '' : 'is-hidden'}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39 29"><path d="M7.67 3.67c-3.2 0-5.11 1.72-5.11 5.47V20.3c0 3.74 1.91 5.5 5.11 5.5s5.12-1.76 5.12-5.5V16H8a.94.94 0 0 1-.86-1A.93.93 0 0 1 8 14h6.3a.85.85 0 0 1 .86.94v5.4c0 5.61-3.27 7.7-7.49 7.7S.19 25.91.19 20.3V9.14c0-5.58 3.27-7.67 7.45-7.67 4.61 0 7.52 2.63 7.52 6.23 0 .93-.47 1.22-1.19 1.22s-1.15-.25-1.18-.9c-.33-2.77-1.98-4.35-5.12-4.35ZM17.86 20.3V9.14c0-5.58 3.28-7.67 7.49-7.67s7.49 2.09 7.49 7.67V20.3c0 5.61-3.28 7.7-7.49 7.7s-7.49-2.09-7.49-7.7Zm12.6-11.16c0-3.75-1.91-5.47-5.11-5.47s-5.11 1.72-5.11 5.47V20.3c0 3.77 1.91 5.5 5.11 5.5s5.11-1.73 5.11-5.5Zm8.35 17.2A1.67 1.67 0 0 1 37.19 28a1.68 1.68 0 1 1 1.62-1.66ZM38.13 21a.91.91 0 0 1-1 .82.84.84 0 0 1-.94-.82c0-5.91-.43-12.71-.43-18.61a1.37 1.37 0 1 1 2.74 0c.03 5.92-.37 12.72-.37 18.61Z" style="fill:#8477ff"/></svg>
        </div>
        <div class="icons opponent">
          <svg class="dealer ${props.game.dealer == opponent ? '' : 'is-hidden'}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29"><path d="M22.38 28.38a1.76 1.76 0 0 1-.83-.21l-7-3.71-7 3.71A1.74 1.74 0 0 1 5.59 28a1.77 1.77 0 0 1-.7-1.72l1.35-7.86L.53 12.9a1.76 1.76 0 0 1-.44-1.81A1.73 1.73 0 0 1 1.51 9.9l7.88-1.15 3.53-7.15a1.77 1.77 0 0 1 1.58-1 1.76 1.76 0 0 1 1.58 1l3.53 7.15 7.88 1.15a1.73 1.73 0 0 1 1.42 1.19 1.76 1.76 0 0 1-.44 1.81l-5.71 5.56 1.35 7.86a1.77 1.77 0 0 1-1.73 2.06Zm-7.88-5.95a1.84 1.84 0 0 1 .82.2l6.73 3.55-1.28-7.5a1.76 1.76 0 0 1 .5-1.56l5.45-5.31-7.53-1.1a1.73 1.73 0 0 1-1.32-1L14.5 2.93l-3.37 6.82a1.73 1.73 0 0 1-1.32 1l-7.53 1.1 5.45 5.31a1.75 1.75 0 0 1 .5 1.55L7 26.18l6.73-3.55a1.84 1.84 0 0 1 .77-.2Z" style="fill:#8477ff"/></svg>
          <svg class="turn ${props.game.turn == opponent ? '' : 'is-hidden'}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29"><path d="M14.5 1A13.5 13.5 0 1 0 28 14.5 13.49 13.49 0 0 0 14.5 1Zm0 25A11.5 11.5 0 1 1 26 14.5 11.51 11.51 0 0 1 14.5 26Zm5.25-10.5a1.25 1.25 0 0 1-1.25 1.25h-5a1.25 1.25 0 0 1-1.25-1.25v-7a1.25 1.25 0 0 1 2.5 0v5.75h3.75a1.25 1.25 0 0 1 1.25 1.25Z" style="fill:#8477ff"/></svg>
          <svg class="go ${props.game.go == opponent ? '' : 'is-hidden'}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39 29"><path d="M7.67 3.67c-3.2 0-5.11 1.72-5.11 5.47V20.3c0 3.74 1.91 5.5 5.11 5.5s5.12-1.76 5.12-5.5V16H8a.94.94 0 0 1-.86-1A.93.93 0 0 1 8 14h6.3a.85.85 0 0 1 .86.94v5.4c0 5.61-3.27 7.7-7.49 7.7S.19 25.91.19 20.3V9.14c0-5.58 3.27-7.67 7.45-7.67 4.61 0 7.52 2.63 7.52 6.23 0 .93-.47 1.22-1.19 1.22s-1.15-.25-1.18-.9c-.33-2.77-1.98-4.35-5.12-4.35ZM17.86 20.3V9.14c0-5.58 3.28-7.67 7.49-7.67s7.49 2.09 7.49 7.67V20.3c0 5.61-3.28 7.7-7.49 7.7s-7.49-2.09-7.49-7.7Zm12.6-11.16c0-3.75-1.91-5.47-5.11-5.47s-5.11 1.72-5.11 5.47V20.3c0 3.77 1.91 5.5 5.11 5.5s5.11-1.73 5.11-5.5Zm8.35 17.2A1.67 1.67 0 0 1 37.19 28a1.68 1.68 0 1 1 1.62-1.66ZM38.13 21a.91.91 0 0 1-1 .82.84.84 0 0 1-.94-.82c0-5.91-.43-12.71-.43-18.61a1.37 1.37 0 1 1 2.74 0c.03 5.92-.37 12.72-.37 18.61Z" style="fill:#8477ff"/></svg>
        </div>
      `;
    }
  })

  let lobby = new Reef('#lobby', {
    store: store,
    template: function(props) {
      return `
        ${props.state === 'login' ? '<section id="login"></section>' : ''}
        ${props.state === 'profile' ? '<section id="profile"></section>' : ''}
      `;
    },
    attachTo: app
  })

  let login = new Reef('#login', {
    store: store,
    template: function(props) {
      return `
        <h1>${window.location.hash === '#login' ? 'Sit Down, Get Comfortable!' : ''}${window.location.hash === '#signup' ? 'Create an account.' : ''}</h1>
        <form action="">
          <label for="username">Username</label><br>
          <input type="text" id="login-field" name="username" value=""><br>
          <button type="button" id="login-submit">Login</button>
        </form>
        <p>${window.location.hash === '#login' ? `Don't have an account? <a href="#signup">Sign up</a>` : ''}${window.location.hash === '#signup' ? `Already have an account? <a href="#login">Login</a>` : ''}</p>
        `;
    },
    attachTo: lobby
  })

  // <div class="tabs">
  //   <ul role="tablist">
  //     <li role="presentation">
  //       <a href="#login" role="tab" aria-controls="login" aria-selected="true" tab-index="0">Login</a>
  //     </li>
  //     <li role="presentation">
  //       <a href="#signup" role="tab" aria-controls="signup" aria-selected="false"  tab-index="-1">Sign up</a>
  //     </li>
  //   </ul>
  //   <div id="login" role="tabpanel" aria-labelledby="tab-login">
  //     <p>Please enter your username in the field below.</p>
  //     <form action="">
  //       <label for="username">Username</label><br>
  //       <input type="text" id="login-field" name="username" value=""><br>
  //       <button type="button" id="login-submit">Login</button>
  //     </form>
  //     <p>Don't have an account? <a href="#signup">Sign up</a></p>
  //   </div>
  //   <div id="signup" role="tabpanel" aria-labelledby="tab-signup" hidden="hidden">
  //     <p>Enter a username in the field below.<p>
  //     <form action="">
  //       <label for="username">Username</label><br>
  //       <input type="text" id="signup-field" name="username" value=""><br>
  //       <button type="button" id="signup-submit">Create Account</button>
  //     </form>
  //     <p>Already have an account? <a href="#login">Login</a></p>
  //   </div>
  // </div>

  let profile = new Reef('#profile', {
    store: store,
    template: function(props) {
      return `
        <div class="tabs">
          <ul role="tablist">
            <li role="presentation">
              <a href="#my-games" role="tab" aria-controls="my-games" aria-selected="true" tab-index="0">My Games</a>
            </li>
            <li role="presentation">
              <a href="#my-stats" role="tab" aria-controls="my-stats" aria-selected="false" tab-index="-1">My Stats</a>
            </li>
          </ul>
          <div id="my-games" role="tabpanel" aria-labelledby="tab-my-games" >
            <button type="button" id="new-game">New Game</button>
            <ul class="game-list">
              ${props.user}
              ${props.players[props.user.toLowerCase()].games.open.map(function(game){
                return `<li class="game-card" data-id="${game}">
                  <h3>${getGame(game).players[1].username} vs ${getGame(game).players[2].username}</h3>
                  <p>Game #${getGame(game).id}</p>
                  <p>Last Updated: ${getGame(game).date.updated}</p>
                </li>`
              }).join('')}
            </ul>
          </div>
          <div id="my-stats" role="tabpanel" aria-labelledby="tab-my-stats" hidden="hidden">
            <p>Wins: ${props.players[props.user.toLowerCase()].wins}</p>
            <p>Loses: ${props.players[props.user.toLowerCase()].loses}</p>
            <p>Skunks: ${props.players[props.user.toLowerCase()].skunks}</p>
            <p>Double Skunks: ${props.players[props.user.toLowerCase()].doubleSkunks}</p>
            <p>Highest Hand Score: ${props.players[props.user.toLowerCase()].highestHandScore}</p>
            <p>Longest Win Streak: ${props.players[props.user.toLowerCase()].longestWinStreak}</p>
            <p>Biggest Win Lead: ${props.players[props.user.toLowerCase()].biggestLead}</p>
          </div>
        </div>
        `;
    }
  })

  let table = new Reef('#table', {
    store: store,
    template: function(props) {
      return `
      <section id="opponent" class="${props.game.players[opponent].colour}"></section>
      <section id="play"></section>
      <section id="self" class="${props.game.players[user].colour}"></section>
      <section id="log"></section>
      <section id="score"></section>`;
    }
  })

  let opponentArea = new Reef('#opponent', {
    store: store,
    template: function(props) {
      return `
        <div class="hand">
          <h2 class="border">${props.game.players[opponent].username}'s Hand ${props.game.go == opponent ? ' "Go!"' : ''}</h2>
          <div class="cards overlap">
            ${props.game.players[opponent].hand.map(function(card){
              return `<img class="card" src="images/cardBack.png" data-id="${card.id}" data-suit="${card.suit}" data-rank="${card.rank}" data-value="${card.value}"/>`
            }).join('')}
          </div>
        </div>
        <div class="discard">
          <h2 class="border">${props.game.players[opponent].username}'s Discard</h2>
          <div class="cards overlap">
            ${props.game.players[opponent].discard.map(function(card){
              return `<img class="card" src="images/card${card.id}.png" data-id="${card.id}" data-suit="${card.suit}" data-rank="${card.rank}" data-value="${card.value}"/>`
            }).join('')}
          </div>
        </div>
        <div class="crib ${props.game.dealer == opponent ? '' : 'is-hidden'}">
          <h2 class="border">${props.game.players[opponent].username}'s Crib</h2>
          <div class="cards overlap">
            ${props.game.crib.map(function(card){
              return `<img class="card" src="images/card${props.game.phase == 'count' ? card.id : "Back"}.png" data-id="${card.id}" data-suit="${card.suit}" data-rank="${card.rank}" data-value="${card.value}"/>`
            }).join('')}
          </div>
        </div>`;
    },
    attachTo: table
  })

  let playArea = new Reef('#play', {
    store: store,
    template: function(props) {
      return `
        <div class="deck">
          <h2>Deck</h2>
          <div class="cards">
            <img class="card" src="images/cardBack.png" />
          </div>
        </div>
        <div class="starter">
          <h2>Starter</h2>
          <div class="cards">
            <img class="card ${Object.keys(props.game.starter).length === 0 ? 'is-hidden' : ''}" src="images/card${props.game.starter.id}.png" data-id="${props.game.starter.id}" data-suit="${props.game.starter.suit}" data-rank="${props.game.starter.rank}" data-value="${props.game.starter.value}"/>
          </div>
        </div>
        <div class="play">
          <h2>Play</h2>
          <div class="opponent ${props.game.players[opponent].colour}">
            <div class="cards overlap">
              ${props.game.players[opponent].play.map(function(card){
                return `<img class="card" src="images/card${card.id}.png" data-id="${card.id}" data-suit="${card.suit}" data-rank="${card.rank}" data-value="${card.value}"/>`
              }).join('')}
            </div>
          </div>
          <div class="self ${props.game.players[user].colour}">
            <div class="cards overlap">
              ${props.game.players[user].play.map(function(card){
                return `<img class="card" src="images/card${card.id}.png" data-id="${card.id}" data-suit="${card.suit}" data-rank="${card.rank}" data-value="${card.value}"/>`
              }).join('')}
            </div>
          </div>
          <div class="tally">
            <p>${props.game.tally}/31</p>
          </div>
        </div>`;
    },
    attachTo: table
  })

  let selfArea = new Reef('#self', {
    store: store,
    template: function(props) {
      return `
        <div class="hand ${props.game.turn != user && props.game.phase == 'play' ? 'is-disabled' : ''}">
          <div class="header border">
            <h2>My Hand</h2>
            <div class="buttons">
              <button id="cut" ${props.game.phase == 'new' || props.game.phase == 'starter' ? '' : 'disabled'}>Cut</button>
              <button id="deal" ${props.game.phase == 'deal' && props.game.dealer == user ? '' : 'disabled'}>Shuffle & Deal</button>
              <button id="go" ${props.game.phase == 'play' && props.game.turn == user ? '' : 'disabled'}>Go!</button>
              <button id="reset" ${props.game.phase == 'count' ? '' : 'disabled'}>Reset</button>
              <button id="switch">Switch</button>
            </div>
          </div>
          <div class="cards">
            ${props.game.players[user].hand.map(function(card){
              return `<img class="card" src="images/card${card.id}.png" data-id="${card.id}" data-suit="${card.suit}" data-rank="${card.rank}" data-value="${card.value}"/>`
            }).join('')}
          </div>
        </div>
        <div class="discard">
          <h2 class="border">My Discard</h2>
          <div class="cards overlap">
            ${props.game.players[user].discard.map(function(card){
              return `<img class="card" src="images/card${card.id}.png" data-id="${card.id}" data-suit="${card.suit}" data-rank="${card.rank}" data-value="${card.value}"/>`
            }).join('')}
          </div>
        </div>
        <div class="crib ${props.game.dealer == user ? '' : 'is-hidden'}">
          <h2 class="border">My Crib</h2>
          <div class="cards overlap">
            ${props.game.crib.map(function(card){
              return `<img class="card" src="images/card${props.game.phase == 'count' ? card.id : "Back"}.png" data-id="${card.id}" data-suit="${card.suit}" data-rank="${card.rank}" data-value="${card.value}"/>`
            }).join('')}
          </div>
        </div>`;
    },
    attachTo: table
  })

  let log = new Reef('#log', {
    store: store,
    template: function(props) {
      return `
        <h2 class="border purple">Score Log</h2>
        <ul>
          <li>${props.game.date.created} | ${props.game.players[user].username}: Game #${props.game.id} started</li>
          ${props.game.log.map(function(item){
            return `<li>${item.date} | ${item.player}: +${item.value}pts (${item.type})</li>`
          }).join('')}
        </ul>
        `;
    },
    attachTo: table
  })

  let score = new Reef('#score', {
    store: store,
    template: function(props) {
      return `
        <div class="board self ${props.game.players[user].colour}">
          <div></div>
          <hr class="primary">
          <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
          <hr class="secondary">
          <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
          <hr class="secondary">
          <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
          <hr class="primary">
          <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
          <hr class="secondary">
          <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
          <hr class="secondary">
          <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
          <hr class="primary">
          <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
          <hr class="secondary">
          <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
          <hr class="secondary">
          <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
          <hr class="primary">
          <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
          <hr class="secondary">
          <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
          <hr class="secondary">
          <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div>
        <div class="markers">
          <p>120</p>
          <p class="secondary">110</p>
          <p class="secondary">100</p>
          <p>90</p>
          <p class="secondary">80</p>
          <p class="secondary">70</p>
          <p>60</p>
          <p class="secondary">50</p>
          <p class="secondary">40</p>
          <p>30</p>
          <p class="secondary">20</p>
          <p class="secondary">10</p>
        </div>
        <div class="board opponent ${props.game.players[opponent].colour}">
          <div></div>
          <hr class="primary">
          <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
          <hr class="secondary">
          <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
          <hr class="secondary">
          <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
          <hr class="primary">
          <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
          <hr class="secondary">
          <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
          <hr class="secondary">
          <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
          <hr class="primary">
          <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
          <hr class="secondary">
          <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
          <hr class="secondary">
          <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
          <hr class="primary">
          <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
          <hr class="secondary">
          <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
          <hr class="secondary">
          <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div>
        <div class="score self">
          <p>${props.game.players[user].username}</p>
          <p>${props.game.players[user].score}</p>
        </div>
        <div class="score opponent">
          <p>${props.game.players[opponent].username}</p>
          <p>${props.game.players[opponent].score}</p>
        </div>`;
    },
    attachTo: table
  })







  // Data manipulation

  /**
   * Check local storage for saved username, if found, skip login
   * @return {String}   - Stored username of returning player
   */
  let checkLocalStorage = function() {
    // Retrieve user from local storage
    let username = localStorage.getItem(user);
    if (username){
      store.data.players[username.toLowerCase()] = getPlayer(username);
      store.data.state = 'profile';
      lobby.attach(profile);
      lobby.dettach(login);
      console.log('STATE: Profile');
      return username;
    }
  }

  let linkHash = function() {
    console.log(window.location.hash);
    // If the url has no hash, bail
    if (window.location.hash.length < 1) return;
    // Otherwise, if the hash points to the My Games or My Stats, switch state to profile
    if (window.location.hash == '#my-games' || window.location.hash == '#my-stats'){
      store.data.state = 'profile';
      console.log('STATE: Profile');
    }
  }

  let resetHash = function() {
    let location = window.location.toString();
    console.log(location);
    if (location.indexOf('#') > 0){
      let cleanLocation = location.substring(0, location.indexOf('#'));
      window.history.replaceState({}, document.title, cleanLocation);
    }
  }

  /**
   * Reset the game state
   */
  let newGame = function(){
    // Reset the gameState to blank
    store.data = blankGameState;
  }

  /**
   * Cut the card deck
   */
  let cutDeck = function() {

    // Determine the first dealer in a new game
    if (store.data.game.phase === "new"){
      // Reset play area
      store.data.game.players[user].play = [];
      store.data.game.players[opponent].play = [];
      // Create duplicate of deck to draw from
      let drawDeck = cards.slice();
      // Draw two random cards and push them to play area
      for (let i = 0; i < 2; i++){
        let randomNum = Math.floor(Math.random() * (drawDeck.length - 1));
        if (i == 0) {
          store.data.game.players[user].play.push(drawDeck[randomNum]);
        } else {
          store.data.game.players[opponent].play.push(drawDeck[randomNum]);
        }
        drawDeck.splice(randomNum, 1);
      }
      // Determine who has the lower rank, if a tie, bail
      if (store.data.game.players[user].play[0].rank < store.data.game.players[opponent].play[0].rank){
        store.data.game.dealer = user;
        store.data.game.turn = opponent;
      } else if (store.data.game.players[user].play[0].rank > store.data.game.players[opponent].play[0].rank) {
        store.data.game.dealer = opponent;
        store.data.game.turn = user;
      } else {
        return;
      }
      // Once a dealer is determined, pass to the deal phase
      store.data.game.phase = "deal";

    // Determine the starter for the round
    } else if (store.data.game.phase === "starter"){
      let randomNum = Math.floor(Math.random() * (store.data.game.deck.length - 1));
      store.data.game.starter = store.data.game.deck[randomNum];
      store.data.game.deck.splice(randomNum, 1);
      // Score starter jack
      if (store.data.game.starter.rank === 11){
        console.log("STARTER: Jack");
        game[store.data.game.dealer].score += 2;
        newLog(game[store.data.game.dealer].username, 2, 'STARTER: Jack');
      }
      // Once the starter is determined, pass to the play phase
      store.data.game.phase = "play";
    }

  }

  // Select a random array of buttons from the bank
  let dealCards = function() {

    // Reset play area
    store.data.game.players[user].play = [];
    store.data.game.players[opponent].play = [];

    // Create a copy of the cards array
    let drawDeck = cards.slice();
    let numCards = drawDeck.length;
    let hands = [[],[]];
    for (let i = 0; i < 100; i++){
      let randomNum = Math.floor(Math.random() * (drawDeck.length - 1));
      if (drawDeck[randomNum]){
        if (hands[0].length < 6){
          hands[0].push(drawDeck[randomNum]);
        } else if (hands[1].length < 6){
          hands[1].push(drawDeck[randomNum]);
        } else {
          store.data.game.deck = drawDeck;
          break;
        }
        drawDeck.splice(randomNum, 1);
      } else {
        continue;
      }
    }

    // Assign a hand to each player
    store.data.game.players[user].hand = hands[0];
    store.data.game.players[opponent].hand = hands[1];

    store.data.game.players[user].hand = [{
      "id": 1,
      "suit": "club",
      "rank": 1,
      "value": 1
    },{
      "id": 2,
      "suit": "club",
      "rank": 2,
      "value": 2
    },{
      "id": 3,
      "suit": "club",
      "rank": 3,
      "value": 3
    },{
      "id": 4,
      "suit": "club",
      "rank": 4,
      "value": 4
    },{
      "id": 5,
      "suit": "club",
      "rank": 5,
      "value": 5
    },{
      "id": 6,
      "suit": "club",
      "rank": 6,
      "value": 6
    },]
    store.data.game.players[opponent].hand = [{
      "id": 1,
      "suit": "club",
      "rank": 1,
      "value": 1
    },{
      "id": 2,
      "suit": "club",
      "rank": 2,
      "value": 2
    },{
      "id": 3,
      "suit": "club",
      "rank": 3,
      "value": 3
    },{
      "id": 4,
      "suit": "club",
      "rank": 4,
      "value": 4
    },{
      "id": 5,
      "suit": "club",
      "rank": 5,
      "value": 5
    },{
      "id": 6,
      "suit": "club",
      "rank": 6,
      "value": 6
    },]

    // Once the deal is complete, pass to the crib phase
    store.data.game.phase = 'crib';

  }

  let go = function() {

    if (store.data.game.go == null){

      // Check whether the player has a valid card to play, if so alert, and bail
      if (checkValidPlay(user)){
        alert('You have a card you can play!');
        return;
      }

      // Assign the go
      store.data.game.go = user;

      // Switch the turn to the other player
      store.data.game.turn = opponent;

      // Assign a point to the other player
      store.data.game.players[opponent].score += 1;
      newLog(store.data.game.players[opponent].username, 1, 'PLAY: Go');

      // Check whether opponent has a valid card to play, if so, bail
      console.log('Does opponent have valid play', checkValidPlay(opponent))
      if (!checkValidPlay(opponent)){
        console.log('ROUND END: GO');
        playEnd();
      }

    }

  }

  let playEnd = function() {

    // Reset the tally to 0
    store.data.game.tally = 0;
    // Reset the go
    store.data.game.go = null;

    // Move played cards to the discard, and reset the play area for each player
    store.data.game.players[user].play.forEach((card, i) => {
      store.data.game.players[user].discard.push(card);
    });
    store.data.game.players[user].play = [];
    store.data.game.players[opponent].play.forEach((card, i) => {
      store.data.game.players[opponent].discard.push(card);
    });
    store.data.game.players[opponent].play = [];
    // Reset the global play array
    store.data.game.play = [];

    // Check whether either player still has cards left in hand
    if (store.data.game.players[user].hand.length !== 0 || store.data.game.players[opponent].hand.length !== 0){
      // Determine the first player for the next round
      store.data.game.turn == user ? store.data.game.turn = opponent : store.data.game.turn = user;
    } else {
      roundEnd();
    }
  }

  let roundEnd = function() {
    // Reset turn and go and pass to the count phase
    store.data.game.turn = null;
    store.data.game.phase = "count";
    // Score each hand and the crib
    store.data.game.players[user].score += scoreHand(store.data.game.players[user].discard, store.data.game.players[user].username);
    store.data.game.players[opponent].score += scoreHand(store.data.game.players[opponent].discard, store.data.game.players[opponent].username);
    if (store.data.game.dealer == user){
      store.data.game.players[user].score += scoreHand(store.data.game.crib, store.data.game.players[user].username);
    } else {
      store.data.game.players[opponent].score += scoreHand(store.data.game.crib, store.data.game.players[opponent].username);
    }
  }

  /**
   * Return a score for a hand of cards
   * @param {Array} hand - The array of cards to score
   * @return {Number}   - The score
   */

  let newLog = function(player, value, type) {
    store.data.game.log.push({
      player: player,
      value: value,
      type: type,
      date: getDate(true)
    })
  }

  let scoreHand = function(hand, name) {
    let handScore = 0;
    let suits = [];
    let ranks = [];
    let values = [];
    let fifteens = 0;

    // Create arrays for card suits, ranks and values
    hand.forEach((card, i) => {
      // Check for flush
      suits.push(card.suit);
      // Check for ranks
      ranks.push(card.rank);
      // Check for fifteens
      values.push(card.value);
      // Check for jack of same suit
      if (card.rank == 11 && card.suit == store.data.game.starter.suit){
        console.log('SCORE: Jack of Same Suit');
        newLog(name, 2, 'HAND: Jack of Same Suit');
        handScore += 2;
      }
    });

    // Add starter to the ranks and values arrays
    ranks.push(store.data.game.starter.rank);
    values.push(store.data.game.starter.value);

    // Check for fifteens
    for (let i = 0; i < (values.length - 1); i++){
      let sum = 0;
      let offset = 0;
      // Add value of the first card to the sum
      sum += values[i];
      for (let j = (i + 1); j < values.length; j++){
        sum += values[j];
        if (sum < 15){
          continue;
        } else if (sum == 15) {
          fifteens += 1;
        }
        // Reset back to the original number
        sum = values[i];
        // Check for double skip #-#-#
        if (i == 0 && offset == 1){
          let sumCopy = sum;
          sumCopy += (values[2] + values[4]);
          if (sumCopy == 15){
            fifteens += 1;
          }
        }
        // Increase offset to skip over a card
        offset += 1;
        j = i + offset;
      }

    }

    if (fifteens !== 0){
      handScore += 2 * fifteens;
      console.log('SCORE: ' + fifteens + ' fifteens');
      newLog(name, (2 * fifteens), 'HAND: ' + fifteens + ' fifteens');
    }

    // Check for flush
    suits = [...new Set(suits)];
    if (suits.length == 1){
      if (store.data.game.starter.suit == suits[0]){
        console.log('SCORE: 5 card flush');
        newLog(name, 5, 'HAND: 5 card flush');
        handScore += 5;
      } else {
        handScore += 4;
        console.log('SCORE: 4 card flush');
        newLog(name, 4, 'HAND: 4 card flush');
      }
    }

    // Check for nth of a kind
    let double = [];
    let triple = [];
    let quadruple = [];
    let ranksDupl = findDuplicates(ranks);
    Object.values(ranksDupl).forEach((val, i) => {
      if (val == 2){
        double.push(Object.keys(ranksDupl)[i]);
      } else if (val == 3){
        triple.push(Object.keys(ranksDupl)[i]);
      } else if (val == 4){
        quadruple.push(Object.keys(ranksDupl)[i]);
      }
    });

    /**
     * Check for runs during the score phase
     * @param {Array} arr - Array of ranks
     * @return {Array}    - Returns empty array if no run found, or a sorted array if run found
     */
    let findRunsHand = function(arr){
      // Sort the array
      arr.sort(function(a, b){return a - b});
      // Remove duplicates
      let uniq = [...new Set(arr)];
      let run = [];
      for (let i = 0; i < (uniq.length - 1); i++){
        // If run detected, push rank to run array
        if (uniq[i+1] - uniq[i] == 1){
          // If first loop, add the first rank to the run array
          if (run.length == 0){
            run.push(uniq[i]);
          }
          run.push(uniq[i+1]);
        // Otherwise, bail if run is greater than 2 or reset array and continue
        } else {
          // Run broken
          if (run.length > 2){
            break;
          // Run reset
          } else {
            run = [];
            break;
          }
        }
      }
      return run;
    }

    let run = findRunsHand(ranks);

    if (triple.length == 1){
      if (run.length == 3){
        // Triple Run of Three
        console.log('SCORE: triple run of three');
        newLog(name, 15, 'HAND: Triple run of three');
        handScore += 15;
      } else {
        // Three of a Kind
        console.log('SCORE: three of a kind');
        newLog(name, 6, 'HAND: Three of a kind');
        handScore += 6;
      }
    } else if (double.length == 2){
      if (run.length == 3){
        // Quadruple Run of Three
        console.log('SCORE: quadruple run of three');
        newLog(name, 16, 'HAND: Quadruple run of three');
        handScore += 16;
      } else {
        // 2 x Two of a Kind
        console.log('SCORE: 2 x two of a kind');
        newLog(name, 4, 'HAND: 2 Two of kinds');
        handScore += 4;
      }
    } else if (double.length == 1){
      if (run.length == 4){
        // Double Run of Four
        console.log('SCORE: double run of four');
        newLog(name, 10, 'HAND: Double run of four');
        handScore += 10;
      } else if (run.length == 3){
        if (run.includes(Number(double[0]))){
          // Double Run of Three
          console.log('SCORE: double run of three');
          newLog(name, 8, 'HAND: Double run of three');
          handScore += 8;
        } else {
          // Two of a Kind and a Run of Three
          console.log('SCORE: two of a kind and a run of three');
          newLog(name, 5, 'HAND: Two of a kind and a run of three');
          handScore += 5;
        }
      } else {
        // Two of a Kind
        console.log('SCORE: two of a kind');
        newLog(name, 2, 'HAND: Two of a kind');
        handScore += 2;
      }
    } else if (run.length == 3){
      // Run of Three
      console.log('SCORE: run of three');
      newLog(name, 3, 'HAND: Run of three');
      handScore += 3;
    } else if (run.length == 4){
      // Run of Four
      console.log('SCORE: run of four');
      newLog(name, 4, 'HAND: Run of four');
      handScore += 4;
    } else if (run.length == 5){
      // Run of Five
      console.log('SCORE: run of five');
      newLog(name, 5, 'HAND: Run of five');
      handScore += 5;
    }

    console.log(`${name}'s hand score is ${handScore}`);
    return handScore;
  }

  let updateScoreBoard = function() {
    let barSelf = document.querySelectorAll('#score .self div');
    for (let i = 0; i < store.data.game.players[user].score; i++){
      let num = (barSelf.length - i) - 1;
      barSelf[num].classList.add('is-colour');
    }
    let barOppo = document.querySelectorAll('#score .opponent div');
    for (let i = 0; i < store.data.game.players[opponent].score; i++){
      let num = (barOppo.length - i) - 1;
      barOppo[num].classList.add('is-colour');
    }
  }

  let reset = function(){
    // Switch dealer
    if (store.data.game.dealer == user){
      store.data.game.dealer = opponent;
      store.data.game.turn = user;
    } else {
      store.data.game.dealer = user;
      store.data.game.turn = opponent;
    }

    // Remove all card from the current play
    store.data.game.players[user].discard = [];
    store.data.game.players[opponent].discard = [];
    store.data.game.crib = [];
    store.data.game.starter = {};

    // Pass on to the deal phase
    store.data.game.phase = 'deal';

  }

  let switchPlayer = function() {
    let index1 = user;
    let index2 = opponent;
    user = index2;
    opponent = index1;
    app.render();
  }

  let getPlayer = function(username) {
    if (playersAPI[username.toLowerCase()] !== null){
      return playersAPI[username.toLowerCase()];
    } else {
      console.log('Player not found');
      return false;
    }
  }

  let getGame = function(id) {
    if (gamesAPI[id] !== null){
      return gamesAPI[id];
    } else {
      console.log('Game not found');
      return false;
    }
    // Retrieve the game state and update the UI
    // fetch(`https://crib.nowicki.workers.dev?game=${activeGame.id}`).then(function (response) {
    //     if (response.ok) {
    //         return response.json();
    //     }
    //     throw response.status;
    // }).then(function (data) {
    //     // store.data = data;
    //     console.log(data);
    // }).catch(function (error) {
    //     console.warn(error);
    // });
  }

  let setPlayer = function(username, data, create){

    console.log(playersAPI);
    // Update API

    // fetch('https://crib.nowicki.workers.dev', {
    //   method: 'PUT',
    //   // NOT SURE IF THIS WORKS
    //   body: JSON.stringify(data),
    //   // THIS WORKS (TESTED)
    //   // body: JSON.stringify({
    //   //     username: 'Gandalf',
    //   //     spell: 'You shall not pass!',
    //   //     pet: 'none'
    //   // }),
    //   headers: {
    //       'Content-Type': 'application/json'
    //   }
    // }).then(function (response) {
    //     if (response.ok) {
    //         return response.json();
    //     }
    //     throw response.status;
    // }).then(function (data) {
    //     console.log(data);
    // }).catch(function (error) {
    //     console.warn(error);
    // });


  }

  let setGame = function(id, data){
    //
    // fetch('https://crib.nowicki.workers.dev', {
    //   method: 'PUT',
    //   body: JSON.stringify(data),
    //   // body: JSON.stringify({
    //   //     id: 5,
    //   //     spell: 'You shall not pass!',
    //   //     pet: 'none'
    //   // }),
    //   headers: {
    //       'Content-Type': 'application/json'
    //   }
    // }).then(function (response) {
    //     if (response.ok) {
    //         return response.json();
    //     }
    //     throw response.status;
    // }).then(function (data) {
    //     console.log(data);
    // }).catch(function (error) {
    //     console.warn(error);
    // });
  }


	//
	// Inits & Event Listeners
	//

  // TEMPORARY TESTING FIX

  const playersAPI = {
    "zelda": {
      "username" : "Zelda",
      "games": {
        "open": [2,4],
        "closed": [1]
      },
      "wins": 1,
      "loses": 0,
      "skunks": 0,
      "doubleSkunks": 0,
      "highestHandScore": 0,
      "longestWinStreak": 0,
      "biggestLead": 0
    },
    "link": {
      "username" : "Link",
      "games": {
        "open": [2,3],
        "closed": [1]
      },
      "wins": 0,
      "loses": 1,
      "skunks": 1,
      "doubleSkunks": 0,
      "highestHandScore": 0,
      "longestWinStreak": 0,
      "biggestLead": 0
    },
    "ganon": {
      "username" : "Ganon",
      "games": {
        "open": [3,4],
        "closed": []
      },
      "wins": 0,
      "loses": 0,
      "skunks": 0,
      "doubleSkunks": 0,
      "highestHandScore": 0,
      "longestWinStreak": 0,
      "biggestLead": 0
    }
  };
  const gamesAPI = {
    1: {
      "id": 1,
      "date": {
        "created": getDate(),
        "updated": getDate(true)
      },
      "players": {
        1: {
          "username": "Zelda",
          "colour": "orange",
          "score": 121,
          "hand": [],
          "play": [],
          "discard": []
        },
        2: {
          "username": "Link",
          "colour": "green",
          "score": 87,
          "hand": [],
          "play": [],
          "discard": []
        }
      },
      "deck": cards,
      "crib": [],
      "play": [],
      "starter": {},
      "tally": 0,
      "dealer": null,
      "turn": null,
      "go": null,
      "phase": "new",
      "log": []
    },
    2: {
      "id": 2,
      "date": {
        "created": getDate(),
        "updated": getDate(true)
      },
      "players": {
        1: {
          "username": "Link",
          "colour": "orange",
          "score": 0,
          "hand": [],
          "play": [],
          "discard": []
        },
        2: {
          "username": "Zelda",
          "colour": "green",
          "score": 0,
          "hand": [],
          "play": [],
          "discard": []
        }
      },
      "deck": cards,
      "crib": [],
      "play": [],
      "starter": {},
      "tally": 0,
      "dealer": null,
      "turn": null,
      "go": null,
      "phase": "new",
      "log": []
    },
    3: {
      "id": 3,
      "date": {
        "created": getDate(),
        "updated": getDate(true)
      },
      "players": {
        1: {
          "username": "Ganon",
          "colour": "orange",
          "score": 0,
          "hand": [],
          "play": [],
          "discard": []
        },
        2: {
          "username": "Link",
          "colour": "green",
          "score": 0,
          "hand": [],
          "play": [],
          "discard": []
        }
      },
      "deck": cards,
      "crib": [],
      "play": [],
      "starter": {},
      "tally": 0,
      "dealer": null,
      "turn": null,
      "go": null,
      "phase": "new",
      "log": []
    },
    4: {
      "id": 4,
      "date": {
        "created": getDate(),
        "updated": getDate(true)
      },
      "players": {
        1: {
          "username": "Zelda",
          "colour": "orange",
          "score": 0,
          "hand": [],
          "play": [],
          "discard": []
        },
        2: {
          "username": "Ganon",
          "colour": "green",
          "score": 0,
          "hand": [],
          "play": [],
          "discard": []
        }
      },
      "deck": cards,
      "crib": [],
      "play": [],
      "starter": {},
      "tally": 0,
      "dealer": null,
      "turn": null,
      "go": null,
      "phase": "new",
      "log": []
    }
  };

  // const testGameState = gameFactory(games.nextID, data.user, getDate());
  // const testGameStateID = testGameState.id;
  // testGameState.players[1].username = "Link";
  // data.game[testGameState.id] = testGameState;

  // Check local storage for saved username


  store.data = data;
  let user;
  let opponent;

  store.data.user = checkLocalStorage();


  window.addEventListener('hashchange', function() {
    linkHash();
  })

  // Render event listeners
  document.addEventListener('reef:render', function (event){
    if (event.target.id == 'table'){
      updateScoreBoard();
    }
  })

  // Click event listeners
  document.addEventListener('click', function(event){

    appRefresh = false;
    tableRefresh = false;

    // Login button event listener
    if (event.target.id === 'login-submit'){
      event.preventDefault()
      let username = document.querySelector('#login-field').value;
      if (getPlayer(username)){
        store.data.players[username.toLowerCase()] = getPlayer(username);
        store.data.user = username;
        localStorage.setItem('user', username);
        store.data.state = 'profile';
        lobby.attach(profile);
        lobby.detach(login);
        console.log('STATE: Profile');
      } else {
        console.log('Player not found');
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
        lobby.attach(profile);
        lobby.detach(login);
        console.log('STATE: Profile');
      } else {
        console.log('Username already in use');
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

    // Card event listeners
    if (event.target.classList.contains('card')){
      let targetCard = event.target.dataset;
      let targetId = Number(event.target.dataset.id);

      let findCard = function(elem) {
        if (elem.id == targetId) {
          return elem
        };
      }

      if (store.data.game.phase === 'crib') {

        // Add selected card to the crib unless the player has 4 cards
        if (store.data.game.players[user].hand.length > 4) {
          store.data.game.crib.push(cards[targetId-1]);
          store.data.game.players[user].hand.splice(store.data.game.players[user].hand.findIndex(findCard), 1);

          // AI SELECTION
          store.data.game.crib.push(store.data.game.players[opponent].hand[0]);
          store.data.game.players[opponent].hand.splice(0, 1);
        }

        // If the crib is full, pass to the starter phase
        if (store.data.game.crib.length === 4){
          store.data.game.phase = 'starter';
        }

      } else if (store.data.game.phase === 'play') {

        // Check whether it's the player's turn and the selected card is valid
        if (store.data.game.turn == user && (Number(targetCard.value) + store.data.game.tally) < 32){

          //Add the card to the play area and remove from hand
          store.data.game.players[user].play.push(cards[targetId-1]);
          store.data.game.play.push(cards[targetId-1]);
          store.data.game.players[user].hand.splice(store.data.game.players[user].hand.findIndex(findCard), 1);

          // Update the tally
          store.data.game.tally += Number(targetCard.value);

          // If tally equals 15 or 31, assign points
          if (store.data.game.tally == 15){
            store.data.game.players[user].score += 2;
            newLog(store.data.game.players[user].username, 2, 'PLAY: Fifteen');
          } else if (store.data.game.tally == 31) {
            store.data.game.players[user].score += 2;
            newLog(store.data.game.players[user].username, 2, 'PLAY: 31');
          }

          // If same rank, assign points
          if (store.data.game.play.length > 1 && targetCard.rank == store.data.game.play[store.data.game.play.length - 2].rank){
            console.log('PLAY: double');
            store.data.game.players[user].score += 2;
            newLog(store.data.game.players[user].username, 2, 'PLAY: Double');
            if (store.data.game.play.length > 2 && targetCard.rank == store.data.game.play[store.data.game.play.length - 3].rank){
              console.log('PLAY: triple');
              store.data.game.players[user].score += 4;
              newLog(store.data.game.players[user].username, 2, 'PLAY: Triple');
              if (store.data.game.play.length > 3 && targetCard.rank == store.data.game.play[store.data.game.play.length - 4].rank){
                console.log('PLAY: quadruple');
                store.data.game.players[user].score += 6;
                newLog(store.data.game.players[user].username, 2, 'PLAY: Quadruple');
              }
            }
          }

          /**
           * Check for runs during the play phase
           * @param {Array} arr - The play sequence to check
           * @return {Array}    - Returns empty array if no run found, or a sorted array if run found
           */
          let findRunsPlay = function(arr){
            // Sort the array
            arr.sort(function(a, b){return a - b});
            // Check if current elem is either the same as previous or is one more
            let run = [];
            for (let i = 0; i < (arr.length - 1); i++){
              // Check for duplicate ranks
              let uniq = [...new Set(arr)];
              // If duplicate found, bail
              if (arr.length !== uniq.length) {
                break;
              }
              // If run detected, push rank to run array
              if (arr[i+1] - arr[i] == 1){
                // If first loop, add the first rank to the run array
                if (run.length == 0){
                  run.push(uniq[i]);
                }
                run.push(uniq[i+1]);
              // Otherwise, reset array and bail
              } else {
                run = [];
                break;
              }
            }
            return run;
          }

          // If sequence, assign points
          let runLength = 0;
          for (let i = 3; i < (store.data.game.play.length + 1); i++){
            let seq = store.data.game.play.slice(-i);
            seq = seq.map(x => x.rank);
            let run = findRunsPlay(seq);
            if (run.length > 2){
              runLength = run.length;
            }
          }

          if (runLength > 2) {
            console.log(`PLAY: ${runLength} card run`);
            store.data.game.players[user].score += runLength;
            newLog(store.data.game.players[user].username, runLength, `PLAY: Run of ${runLength}`);
          }

          // If opponent still has cards, they haven't passed, and the tally is not 31, switch turns
          if (store.data.game.players[opponent].hand.length > 0 && store.data.game.go !== opponent && store.data.game.tally < 31){
            store.data.game.turn = opponent;

          // If the tally is 31, end the round
          } else if (store.data.game.tally == 31){
            console.log('ROUND END: 31');
            playEnd();

          // If one player has passed, and the other no longer has a valid card to play
          } else if (store.data.game.go !== null && !checkValidPlay(user)) {
            console.log('ROUND END: EXTENDED GO');
            playEnd();

          // If both players no longer have cards, end the play phase
          } else if (store.data.game.players[user].hand.length === 0 && store.data.game.players[opponent].hand.length === 0){
            console.log('ROUND END: NO CARDS LEFT');
            store.data.game.players[user].score += 1;
            playEnd();
          }

        // Warn player if it's not their turn
        } else if (store.data.game.turn == opponent) {
          alert("It's your opponent's turn to play");

        // Warn player if the selected card is not valid
        } else {
          alert('Choose another card or go, this card would bust');
        }

    }
    }

    // Deal button event listener
    if (event.target.id === 'deal'){
      dealCards();
    }

    // New game button event listener
    if (event.target.id === 'new'){
      newGame();
    }

    // Cut deck button event listener
    if (event.target.id === 'cut'){
      cutDeck();
    }

    // Go button event listener
    if (event.target.id === 'go'){
      go();
    }

    if (event.target.id === 'switch'){
      switchPlayer();
    }

    if (event.target.id === 'reset'){
      reset();
    }

    // Update the app

    // Update server with new game state


  })

})();
