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

  const blankGameStateOld = {
    "players": [
      {
        "name": "Felix",
        "colour": "orange",
        "score": 0,
        "hand": [],
        "play": [],
        "discard": [],
        "wins": 0,
        "loses": 0,
        "skunks": 0
      },
      {
        "name": "Talia",
        "colour": "green",
        "score": 0,
        "hand": [],
        "play": [],
        "discard": [],
        "wins": 0,
        "loses": 0,
        "skunks": 0
      }
    ],
    "deck": [],
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

  const players = [];
  const playerFactory = (username) => {
    return {
      "username" : username,
      "games": {
        "open": [],
        "closed": []
      },
      "wins": 0,
      "loses": 0,
      "skunks": 0
    }
  }

  const games = {
    "nextID": 1,
  }
  const gameFactory = (id, username, dateCreated) => {
    // games.nextID ++;
    return {
      "id": id,
      "date": {
        "created": dateCreated,
        "updated": dateCreated
      },
      "players": [
        {
          "username": username,
          "colour": "orange",
          "score": 0,
          "hand": [],
          "play": [],
          "discard": []
        },
        {
          "username": null,
          "colour": "green",
          "score": 0,
          "hand": [],
          "play": [],
          "discard": []
        }
      ],
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
    let diff = 31 - store.data.tally;
    let isValid = false;
    store.data.players[id].hand.forEach((card, i) => {
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

  let app = new Reef('#app', {
    store: store,
    template: function(props) {
      return `
        <header></header>
        <section id="welcome" class="is-hidden"></section>
        <section id="opponent" class="${props.players[playerIDs.opponent].colour}"></section>
        <section id="play"></section>
        <section id="self" class="${props.players[playerIDs.self].colour}"></section>
        <section id="log"></section>
        <section id="score"></section>
        <footer></footer>`;
    }
  });

  let welcome = new Reef('#welcome', {
    store: store,
    template: function(props) {
      return `
        <p>Who are you?</p>
        <button class="identify" data-id="0">${props.players[0].username}</button>
        <button class="identify" data-id="1">${props.players[1].username}</button>`;
    },
    attachTo: app
  })

  let header = new Reef('header', {
    store: store,
    template: function(props) {
      return `
        <p class="date">Last Updated: ${props.date.updated}</p>
        <p class="vs">VS</p>
        <p class="name self">${props.players[playerIDs.self].username}</p>
        <p class="name opponent">${props.players[playerIDs.opponent].username}</p>
        <p class="record self">12 W / 6 L / 2 S</p>
        <p class="record opponent">6 W / 12 L / 6 S</p>
        <div class="icons self">
          <svg class="dealer ${props.dealer == playerIDs.self ? '' : 'is-hidden'}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29"><path d="M22.38 28.38a1.76 1.76 0 0 1-.83-.21l-7-3.71-7 3.71A1.74 1.74 0 0 1 5.59 28a1.77 1.77 0 0 1-.7-1.72l1.35-7.86L.53 12.9a1.76 1.76 0 0 1-.44-1.81A1.73 1.73 0 0 1 1.51 9.9l7.88-1.15 3.53-7.15a1.77 1.77 0 0 1 1.58-1 1.76 1.76 0 0 1 1.58 1l3.53 7.15 7.88 1.15a1.73 1.73 0 0 1 1.42 1.19 1.76 1.76 0 0 1-.44 1.81l-5.71 5.56 1.35 7.86a1.77 1.77 0 0 1-1.73 2.06Zm-7.88-5.95a1.84 1.84 0 0 1 .82.2l6.73 3.55-1.28-7.5a1.76 1.76 0 0 1 .5-1.56l5.45-5.31-7.53-1.1a1.73 1.73 0 0 1-1.32-1L14.5 2.93l-3.37 6.82a1.73 1.73 0 0 1-1.32 1l-7.53 1.1 5.45 5.31a1.75 1.75 0 0 1 .5 1.55L7 26.18l6.73-3.55a1.84 1.84 0 0 1 .77-.2Z" style="fill:#8477ff"/></svg>
          <svg class="turn ${props.turn == playerIDs.self ? '' : 'is-hidden'}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29"><path d="M14.5 1A13.5 13.5 0 1 0 28 14.5 13.49 13.49 0 0 0 14.5 1Zm0 25A11.5 11.5 0 1 1 26 14.5 11.51 11.51 0 0 1 14.5 26Zm5.25-10.5a1.25 1.25 0 0 1-1.25 1.25h-5a1.25 1.25 0 0 1-1.25-1.25v-7a1.25 1.25 0 0 1 2.5 0v5.75h3.75a1.25 1.25 0 0 1 1.25 1.25Z" style="fill:#8477ff"/></svg>
          <svg class="go ${props.go == playerIDs.self ? '' : 'is-hidden'}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39 29"><path d="M7.67 3.67c-3.2 0-5.11 1.72-5.11 5.47V20.3c0 3.74 1.91 5.5 5.11 5.5s5.12-1.76 5.12-5.5V16H8a.94.94 0 0 1-.86-1A.93.93 0 0 1 8 14h6.3a.85.85 0 0 1 .86.94v5.4c0 5.61-3.27 7.7-7.49 7.7S.19 25.91.19 20.3V9.14c0-5.58 3.27-7.67 7.45-7.67 4.61 0 7.52 2.63 7.52 6.23 0 .93-.47 1.22-1.19 1.22s-1.15-.25-1.18-.9c-.33-2.77-1.98-4.35-5.12-4.35ZM17.86 20.3V9.14c0-5.58 3.28-7.67 7.49-7.67s7.49 2.09 7.49 7.67V20.3c0 5.61-3.28 7.7-7.49 7.7s-7.49-2.09-7.49-7.7Zm12.6-11.16c0-3.75-1.91-5.47-5.11-5.47s-5.11 1.72-5.11 5.47V20.3c0 3.77 1.91 5.5 5.11 5.5s5.11-1.73 5.11-5.5Zm8.35 17.2A1.67 1.67 0 0 1 37.19 28a1.68 1.68 0 1 1 1.62-1.66ZM38.13 21a.91.91 0 0 1-1 .82.84.84 0 0 1-.94-.82c0-5.91-.43-12.71-.43-18.61a1.37 1.37 0 1 1 2.74 0c.03 5.92-.37 12.72-.37 18.61Z" style="fill:#8477ff"/></svg>
        </div>
        <div class="icons opponent">
          <svg class="dealer ${props.dealer == playerIDs.opponent ? '' : 'is-hidden'}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29"><path d="M22.38 28.38a1.76 1.76 0 0 1-.83-.21l-7-3.71-7 3.71A1.74 1.74 0 0 1 5.59 28a1.77 1.77 0 0 1-.7-1.72l1.35-7.86L.53 12.9a1.76 1.76 0 0 1-.44-1.81A1.73 1.73 0 0 1 1.51 9.9l7.88-1.15 3.53-7.15a1.77 1.77 0 0 1 1.58-1 1.76 1.76 0 0 1 1.58 1l3.53 7.15 7.88 1.15a1.73 1.73 0 0 1 1.42 1.19 1.76 1.76 0 0 1-.44 1.81l-5.71 5.56 1.35 7.86a1.77 1.77 0 0 1-1.73 2.06Zm-7.88-5.95a1.84 1.84 0 0 1 .82.2l6.73 3.55-1.28-7.5a1.76 1.76 0 0 1 .5-1.56l5.45-5.31-7.53-1.1a1.73 1.73 0 0 1-1.32-1L14.5 2.93l-3.37 6.82a1.73 1.73 0 0 1-1.32 1l-7.53 1.1 5.45 5.31a1.75 1.75 0 0 1 .5 1.55L7 26.18l6.73-3.55a1.84 1.84 0 0 1 .77-.2Z" style="fill:#8477ff"/></svg>
          <svg class="turn ${props.turn == playerIDs.opponent ? '' : 'is-hidden'}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29"><path d="M14.5 1A13.5 13.5 0 1 0 28 14.5 13.49 13.49 0 0 0 14.5 1Zm0 25A11.5 11.5 0 1 1 26 14.5 11.51 11.51 0 0 1 14.5 26Zm5.25-10.5a1.25 1.25 0 0 1-1.25 1.25h-5a1.25 1.25 0 0 1-1.25-1.25v-7a1.25 1.25 0 0 1 2.5 0v5.75h3.75a1.25 1.25 0 0 1 1.25 1.25Z" style="fill:#8477ff"/></svg>
          <svg class="go ${props.go == playerIDs.opponent ? '' : 'is-hidden'}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39 29"><path d="M7.67 3.67c-3.2 0-5.11 1.72-5.11 5.47V20.3c0 3.74 1.91 5.5 5.11 5.5s5.12-1.76 5.12-5.5V16H8a.94.94 0 0 1-.86-1A.93.93 0 0 1 8 14h6.3a.85.85 0 0 1 .86.94v5.4c0 5.61-3.27 7.7-7.49 7.7S.19 25.91.19 20.3V9.14c0-5.58 3.27-7.67 7.45-7.67 4.61 0 7.52 2.63 7.52 6.23 0 .93-.47 1.22-1.19 1.22s-1.15-.25-1.18-.9c-.33-2.77-1.98-4.35-5.12-4.35ZM17.86 20.3V9.14c0-5.58 3.28-7.67 7.49-7.67s7.49 2.09 7.49 7.67V20.3c0 5.61-3.28 7.7-7.49 7.7s-7.49-2.09-7.49-7.7Zm12.6-11.16c0-3.75-1.91-5.47-5.11-5.47s-5.11 1.72-5.11 5.47V20.3c0 3.77 1.91 5.5 5.11 5.5s5.11-1.73 5.11-5.5Zm8.35 17.2A1.67 1.67 0 0 1 37.19 28a1.68 1.68 0 1 1 1.62-1.66ZM38.13 21a.91.91 0 0 1-1 .82.84.84 0 0 1-.94-.82c0-5.91-.43-12.71-.43-18.61a1.37 1.37 0 1 1 2.74 0c.03 5.92-.37 12.72-.37 18.61Z" style="fill:#8477ff"/></svg>
        </div>
      `;
    },
    attachTo: app
  })

  let opponent = new Reef('#opponent', {
    store: store,
    template: function(props) {
      return `
        <div class="hand">
          <h2 class="border">${props.players[playerIDs.opponent].username}'s Hand ${props.go == playerIDs.opponent ? ' "Go!"' : ''}</h2>
          <div class="cards overlap">
            ${props.players[playerIDs.opponent].hand.map(function(card){
              return `<img class="card" src="images/cardBack.png" data-id="${card.id}" data-suit="${card.suit}" data-rank="${card.rank}" data-value="${card.value}"/>`
            }).join('')}
          </div>
        </div>
        <div class="discard">
          <h2 class="border">${props.players[playerIDs.opponent].username}'s Discard</h2>
          <div class="cards overlap">
            ${props.players[playerIDs.opponent].discard.map(function(card){
              return `<img class="card" src="images/card${card.id}.png" data-id="${card.id}" data-suit="${card.suit}" data-rank="${card.rank}" data-value="${card.value}"/>`
            }).join('')}
          </div>
        </div>
        <div class="crib ${props.dealer == playerIDs.opponent ? '' : 'is-hidden'}">
          <h2 class="border">${props.players[playerIDs.opponent].username}'s Crib</h2>
          <div class="cards overlap">
            ${props.crib.map(function(card){
              return `<img class="card" src="images/card${props.phase == 'count' ? card.id : "Back"}.png" data-id="${card.id}" data-suit="${card.suit}" data-rank="${card.rank}" data-value="${card.value}"/>`
            }).join('')}
          </div>
        </div>`;
    },
    attachTo: app
  })

  let play = new Reef('#play', {
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
            <img class="card ${Object.keys(props.starter).length === 0 ? 'is-hidden' : ''}" src="images/card${props.starter.id}.png" data-id="${props.starter.id}" data-suit="${props.starter.suit}" data-rank="${props.starter.rank}" data-value="${props.starter.value}"/>
          </div>
        </div>
        <div class="play">
          <h2>Play</h2>
          <div class="opponent ${props.players[playerIDs.opponent].colour}">
            <div class="cards overlap">
              ${props.players[playerIDs.opponent].play.map(function(card){
                return `<img class="card" src="images/card${card.id}.png" data-id="${card.id}" data-suit="${card.suit}" data-rank="${card.rank}" data-value="${card.value}"/>`
              }).join('')}
            </div>
          </div>
          <div class="self ${props.players[playerIDs.self].colour}">
            <div class="cards overlap">
              ${props.players[playerIDs.self].play.map(function(card){
                return `<img class="card" src="images/card${card.id}.png" data-id="${card.id}" data-suit="${card.suit}" data-rank="${card.rank}" data-value="${card.value}"/>`
              }).join('')}
            </div>
          </div>
          <div class="tally">
            <p>${props.tally}/31</p>
          </div>
        </div>`;
    },
    attachTo: app
  })

  let self = new Reef('#self', {
    store: store,
    template: function(props) {
      return `
        <div class="hand ${props.turn != playerIDs.self && props.phase == 'play' ? 'is-disabled' : ''}">
          <div class="header border">
            <h2>My Hand</h2>
            <div class="buttons">
              <button id="cut" ${props.phase == 'new' || props.phase == 'starter' ? '' : 'disabled'}>Cut</button>
              <button id="deal" ${props.phase == 'deal' && props.dealer == playerIDs.self ? '' : 'disabled'}>Deal</button>
              <button id="go" ${props.phase == 'play' ? '' : 'disabled'}>Go</button>
              <button id="reset" ${props.phase == 'count' ? '' : 'disabled'}>Reset</button>
              <button id="new">New</button>
              <button id="switch">Switch</button>
            </div>
          </div>
          <div class="cards">
            ${props.players[playerIDs.self].hand.map(function(card){
              return `<img class="card" src="images/card${card.id}.png" data-id="${card.id}" data-suit="${card.suit}" data-rank="${card.rank}" data-value="${card.value}"/>`
            }).join('')}
          </div>
        </div>
        <div class="discard">
          <h2 class="border">My Discard</h2>
          <div class="cards overlap">
            ${props.players[playerIDs.self].discard.map(function(card){
              return `<img class="card" src="images/card${card.id}.png" data-id="${card.id}" data-suit="${card.suit}" data-rank="${card.rank}" data-value="${card.value}"/>`
            }).join('')}
          </div>
        </div>
        <div class="crib ${props.dealer == playerIDs.self ? '' : 'is-hidden'}">
          <h2 class="border">My Crib</h2>
          <div class="cards overlap">
            ${props.crib.map(function(card){
              return `<img class="card" src="images/card${props.phase == 'count' ? card.id : "Back"}.png" data-id="${card.id}" data-suit="${card.suit}" data-rank="${card.rank}" data-value="${card.value}"/>`
            }).join('')}
          </div>
        </div>`;
    },
    attachTo: app
  })

  let log = new Reef('#log', {
    store: store,
    template: function(props) {
      return `
        <h2 class="border purple">Score Log</h2>
        <ul>
          <li>${props.date.created} | ${props.players[0].username}: Game #${props.id} started</li>
          ${props.log.map(function(item){
            return `<li>${item.date} | ${item.player}: +${item.value}pts (${item.type})</li>`
          }).join('')}
        </ul>
        `;
    },
    attachTo: app
  })

  let score = new Reef('#score', {
    store: store,
    template: function(props) {
      return `
        <div class="board self ${props.players[playerIDs.self].colour}">
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
        <div class="board opponent ${props.players[playerIDs.opponent].colour}">
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
          <p>${props.players[playerIDs.self].username}</p>
          <p>${props.players[playerIDs.self].score}</p>
        </div>
        <div class="score opponent">
          <p>${props.players[playerIDs.opponent].username}</p>
          <p>${props.players[playerIDs.opponent].score}</p>
        </div>`;
    },
    attachTo: app
  })


  // Data manipulation

  /**
   * Retrieve player ids from local storage, or if absent, create ids
   * @return {Object}   - The numerical id of each player
   */
  let identifyPlayer = function() {
    // Retrieve player id from local storage
    let id = JSON.parse(localStorage.getItem('playerIDs'));
    if (!id){
      id = {};
      // Ask user to identify themselves
      app.welcome.section.classList.remove('is-hidden');
    }
    return id;
  }

  /**
   * Reset the game state
   */
  let newGame = function(){
    // Reset the gameState to blank
    store.data = blankGameState;
  }

  let cutDeck = function() {

    // Determine the first dealer in a new game
    if (store.data.phase === "new"){
      // Reset play area
      for (let i = 0; i < 2; i++){
        store.data.players[i].play = [];
      }
      // Create duplicate of deck to draw from
      let drawDeck = cards.slice();
      // Draw two random cards and push them to play area
      for (let i = 0; i < 2; i++){
        let randomNum = Math.floor(Math.random() * (drawDeck.length - 1));
        store.data.players[i].play.push(drawDeck[randomNum]);
        drawDeck.splice(randomNum, 1);
      }
      // Determine who has the lower rank, if a tie, bail
      if (store.data.players[playerIDs.self].play[0].rank < store.data.players[playerIDs.opponent].play[0].rank){
        store.data.dealer = playerIDs.self;
        store.data.turn = playerIDs.opponent;
      } else if (store.data.players[playerIDs.self].play[0].rank > store.data.players[playerIDs.opponent].play[0].rank) {
        store.data.dealer = playerIDs.opponent;
        store.data.turn = playerIDs.self;
      } else {
        return;
      }
      // Once a dealer is determined, pass to the deal phase
      store.data.phase = "deal";

    // Determine the starter for the round
    } else if (store.data.phase === "starter"){
      let randomNum = Math.floor(Math.random() * (store.data.deck.length - 1));
      store.data.starter = store.data.deck[randomNum];
      store.data.deck.splice(randomNum, 1);
      // Score starter jack
      if (store.data.starter.rank === 11){
        console.log("STARTER: Jack");
        store.data.players[store.data.dealer].score += 2;
        newLog(store.data.players[store.data.dealer].username, 2, 'STARTER: Jack');
      }
      // Once the starter is determined, pass to the play phase
      store.data.phase = "play";
    }

  }

  // Select a random array of buttons from the bank
  let dealCards = function() {

    // Reset play area
    for (let i = 0; i < 2; i++){
      store.data.players[i].play = [];
    }

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
          store.data.deck = drawDeck;
          break;
        }
        drawDeck.splice(randomNum, 1);
      } else {
        continue;
      }
    }

    // Assign a hand to each player
    store.data.players[0].hand = hands[0];
    store.data.players[1].hand = hands[1];

    store.data.players[0].hand = [{
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
    store.data.players[1].hand = [{
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
    store.data.phase = 'crib';

  }

  let go = function() {

    if (store.data.go == null){

      // Check whether the player has a valid card to play, if so alert, and bail
      if (checkValidPlay(playerIDs.self)){
        alert('You have a card you can play!');
        return;
      }

      // Assign the go
      store.data.go = playerIDs.self;

      // Switch the turn to the other player
      store.data.turn = playerIDs.opponent;

      // Assign a point to the other player
      store.data.players[playerIDs.opponent].score += 1;
      newLog(store.data.players[playerIDs.opponent].username, 1, 'PLAY: Go');

      // Check whether opponent has a valid card to play, if so, bail
      console.log('Does opponent have valid play', checkValidPlay(playerIDs.opponent))
      if (!checkValidPlay(playerIDs.opponent)){
        console.log('ROUND END: GO');
        playEnd();
      }

    }

  }

  let playEnd = function() {

    // Reset the tally to 0
    store.data.tally = 0;
    // Reset the go
    store.data.go = null;

    // Move played cards to the discard, and reset the play area for each player
    store.data.players[playerIDs.self].play.forEach((card, i) => {
      store.data.players[playerIDs.self].discard.push(card);
    });
    store.data.players[playerIDs.self].play = [];
    store.data.players[playerIDs.opponent].play.forEach((card, i) => {
      store.data.players[playerIDs.opponent].discard.push(card);
    });
    store.data.players[playerIDs.opponent].play = [];
    // Reset the global play array
    store.data.play = [];

    // Check whether either player still has cards left in hand
    if (store.data.players[playerIDs.self].hand.length !== 0 || store.data.players[playerIDs.opponent].hand.length !== 0){
      // Determine the first player for the next round
      store.data.turn == playerIDs.self ? store.data.turn = playerIDs.opponent : store.data.turn = playerIDs.self;
    } else {
      roundEnd();
    }
  }

  let roundEnd = function() {
    // Reset turn and go and pass to the count phase
    store.data.turn = null;
    store.data.phase = "count";
    // Score each hand and the crib
    store.data.players[playerIDs.self].score += scoreHand(store.data.players[playerIDs.self].discard, store.data.players[playerIDs.self].username);
    store.data.players[playerIDs.opponent].score += scoreHand(store.data.players[playerIDs.opponent].discard, store.data.players[playerIDs.opponent].username);
    if (playerIDs.self == store.dealer){
      store.data.players[playerIDs.self].score += scoreHand(store.data.crib, store.data.players[playerIDs.self].username);
    } else {
      store.data.players[playerIDs.opponent].score += scoreHand(store.data.crib, store.data.players[playerIDs.opponent].username);
    }
  }

  /**
   * Return a score for a hand of cards
   * @param {Array} hand - The array of cards to score
   * @return {Number}   - The score
   */

  let newLog = function(player, value, type) {
    store.data.log.push({
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
      if (card.rank == 11 && card.suit == store.data.starter.suit){
        console.log('SCORE: Jack of Same Suit');
        newLog(name, 2, 'HAND: Jack of Same Suit');
        handScore += 2;
      }
    });

    // Add starter to the ranks and values arrays
    ranks.push(store.data.starter.rank);
    values.push(store.data.starter.value);

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

    console.log('SCORE: ' + fifteens + ' fifteens');
    newLog(name, (2 * fifteens), 'HAND: ' + fifteens + ' fifteens');
    handScore += 2 * fifteens;

    // Check for flush
    suits = [...new Set(suits)];
    if (suits.length == 1){
      console.log('SCORE: 4 card flush');
      newLog(name, 4, 'HAND: 4 card flush');
      handScore += 4;
      if (store.data.starter.suit == suits[0]){
        console.log('SCORE: 5 card flush');
        newLog(name, 5, 'HAND: 5 card flush');
        handScore += 1;
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

    // Check for runs
    let findRuns = function(arr){
      // Sort the array
      arr.sort(function(a, b){return a - b});
      // Remove duplicates
      let uniq = [...new Set(arr)];
      // Check if current elem is either the same as previous or is one more
      let run = [];
      for (let i = 0; i < (uniq.length - 1); i++){
        if (uniq[i+1] - uniq[i] == 1){
          // Run detected
          if (run.length == 0){
            run.push(uniq[i]);
          }
          run.push(uniq[i+1]);
        } else {
          // Run broken
          if (run.length > 2){
            break;
          // Run reset
          } else {
            run = [];
          }
        }
      }
      return run;
    }

    let run = findRuns(ranks);

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
    for (let i = 0; i < store.data.players[playerIDs.self].score; i++){
      let num = (barSelf.length - i) - 1;
      barSelf[num].classList.add('is-colour');
    }

    let barOppo = document.querySelectorAll('#score .opponent div');
    for (let i = 0; i < store.data.players[playerIDs.opponent].score; i++){
      let num = (barOppo.length - i) - 1;
      barOppo[num].classList.add('is-colour');
    }

  }

  let reset = function(){
    // Switch dealer
    if (store.data.dealer == playerIDs.self){
      store.data.dealer = playerIDs.opponent;
      store.data.turn = playerIDs.self;
    } else {
      store.data.dealer = playerIDs.self;
      store.data.turn = playerIDs.opponent;
    }

    // Remove all card from the current play
    store.data.players[playerIDs.self].discard = [];
    store.data.players[playerIDs.opponent].discard = [];
    store.data.crib = [];
    store.data.starter = {};

    // Pass on to the deal phase
    store.data.phase = 'deal';

    console.log(store.data);

  }

  let switchPlayer = function() {
    let index1 = playerIDs.self;
    let index2 = playerIDs.opponent;
    playerIDs.self = index2;
    playerIDs.opponent = index1;
    app.render();
  }

  let updateAPI = function(data) {
    // Update API
    // fetch('https://crib.nowicki.workers.dev', {
    //     method: 'PUT',
    //     body: JSON.stringify(data),
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
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

  // Retrieve the game state and update the UI
  // let activeGame = 1;
  // fetch(`https://crib.nowicki.workers.dev?game=${activeGame}`).then(function (response) {
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

  // TEMPORARY TESTING FIX
  let userInput = "Zelda"
  players[userInput] = playerFactory(userInput);
  players["Link"] = playerFactory("Link");
  console.log(players);
  const blankGameState = gameFactory(games.nextID, players["Zelda"].username, getDate());
  blankGameState.players[1].username = "Link";
  console.log(blankGameState);
  store.data = blankGameState;






  let playerIDs = identifyPlayer();

  // Render event listeners
  document.addEventListener('render', function (event){
    updateScoreBoard();
  })

  // Click event listeners
  document.addEventListener('click', function(event){

    // Card event listeners
    if (event.target.classList.contains('card')){
      let targetCard = event.target.dataset;
      let targetId = Number(event.target.dataset.id);

      let findCard = function(elem) {
        if (elem.id == targetId) {
          return elem
        };
      }

      if (store.data.phase === 'crib') {

        // Add selected card to the crib unless the player has 4 cards
        if (store.data.players[playerIDs.self].hand.length > 4) {
          store.data.crib.push(cards[targetId-1]);
          store.data.players[playerIDs.self].hand.splice(store.data.players[playerIDs.self].hand.findIndex(findCard), 1);

          // AI SELECTION
          store.data.crib.push(store.data.players[playerIDs.opponent].hand[0]);
          store.data.players[playerIDs.opponent].hand.splice(0, 1);
        }

        // If the crib is full, pass to the starter phase
        if (store.data.crib.length === 4){
          store.data.phase = 'starter';
        }

      } else if (store.data.phase === 'play') {

        // Check whether it's the player's turn and the selected card is valid
        if (store.data.turn == playerIDs.self && (Number(targetCard.value) + store.data.tally) < 32){

          //Add the card to the play area and remove from hand
          store.data.players[playerIDs.self].play.push(cards[targetId-1]);
          store.data.play.push(cards[targetId-1]);
          store.data.players[playerIDs.self].hand.splice(store.data.players[playerIDs.self].hand.findIndex(findCard), 1);

          // Update the tally
          store.data.tally += Number(targetCard.value);

          // If tally equals 15 or 31, assign points
          if (store.data.tally == 15){
            store.data.players[playerIDs.self].score += 2;
            newLog(store.data.players[playerIDs.self].username, 2, 'PLAY: Fifteen');
          } else if (store.data.tally == 31) {
            store.data.players[playerIDs.self].score += 2;
            newLog(store.data.players[playerIDs.self].username, 2, 'PLAY: 31');
          }

          // If same rank, assign points
          if (store.data.play.length > 1 && targetCard.rank == store.data.play[store.data.play.length - 2].rank){
            console.log('PLAY: double');
            store.data.players[playerIDs.self].score += 2;
            newLog(store.data.players[playerIDs.self].username, 2, 'PLAY: Double');
            if (store.data.play.length > 2 && targetCard.rank == store.data.play[store.data.play.length - 3].rank){
              console.log('PLAY: triple');
              store.data.players[playerIDs.self].score += 4;
              newLog(store.data.players[playerIDs.self].username, 2, 'PLAY: Triple');
              if (store.data.play.length > 3 && targetCard.rank == store.data.play[store.data.play.length - 4].rank){
                console.log('PLAY: quadruple');
                store.data.players[playerIDs.self].score += 6;
                newLog(store.data.players[playerIDs.self].username, 2, 'PLAY: Quadruple');
              }
            }
          }

          // Check for runs
          let findRuns = function(arr){
            // Sort the array
            arr.sort(function(a, b){return a - b});
            console.log('sorted arr', arr);
            // Remove duplicates
            let uniq = arr;
            // let uniq = [...new Set(arr)];
            // console.log('uniq arr', uniq);
            // Check if current elem is either the same as previous or is one more
            let run = [];
            for (let i = 0; i < (uniq.length - 1); i++){
              if (uniq[i+1] - uniq[i] == 1){
                // Run detected
                if (run.length == 0){
                  run.push(uniq[i]);
                }
                run.push(uniq[i+1]);
                console.log('run detected', run)
              } else {
                // Run broken
                if (run.length > 2){
                  console.log('run shorter than 2', run)
                  break;
                // Run reset
                } else {
                  console.log('run broken, reset', run)
                  run = [];
                }
              }
            }
            console.log('run complete', run)
            return run;
          }

          // If sequence, assign points
          let runLength = 0;
          for (let i = 3; i < (store.data.play.length + 1); i++){
            let seq = store.data.play.slice(-i);
            seq = seq.map(x => x.rank);
            console.log('seq', seq)
            let run = findRuns(seq);
            if (run.length > 2){
              console.log(i, 'We have a run');
              runLength = run.length;
              console.log('run length is ' + runLength)
            } else {
              console.log('There is no run');
              break;
            }
          }

          if (runLength > 2) {
            store.data.players[playerIDs.self].score += runLength;
            newLog(store.data.players[playerIDs.self].username, runLength, `PLAY: Run of ${runLength}`);
          }

          // If opponent still has cards, they haven't passed, and the tally is not 31, switch turns
          if (store.data.players[playerIDs.opponent].hand.length > 0 && store.data.go !== playerIDs.opponent && store.data.tally < 31){
            store.data.turn = playerIDs.opponent;

          // If the tally is 31, end the round
          } else if (store.data.tally == 31){
            console.log('ROUND END: 31');
            playEnd();

          // If one player has passed, and the other no longer has a valid card to play
          } else if (store.data.go !== null && !checkValidPlay(playerIDs.self)) {
            console.log('ROUND END: EXTENDED GO');
            playEnd();

          // If both players no longer have cards, end the play phase
          } else if (store.data.players[playerIDs.self].hand.length === 0 && store.data.players[playerIDs.opponent].hand.length === 0){
            console.log('ROUND END: NO CARDS LEFT');
            store.data.players[playerIDs.self].score += 1;
            playEnd();
          }

        // Warn player if it's not their turn
        } else if (store.data.turn == playerIDs.opponent) {
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

    // Player identification buttons event listeners
    if (event.target.classList.contains('identify')){
      playerIDs.self = Number(event.target.dataset.id);
      playerIDs.self == 0 ? playerIDs.opponent = 1 : playerIDs.opponent = 0;
      localStorage.setItem('playerIDs', JSON.stringify(playerIDs));
      app.welcome.section.classList.add('is-hidden');
    }

    // Update server with new game state
    // updateAPI(store.data);

  })

})();
