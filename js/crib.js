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

  const blankGameState = {
    "players": [
      {
        "name": "Player 1",
        "score": 0,
        "hand": [],
        "play": [],
        "discard": [],
        "wins": 0,
        "loses": 0,
        "skunks": 0
      },
      {
        "name": "Player 2",
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
    "phase": "new"
  }



	//
	// Methods
	//

  // Helper Functions

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

  let store = new Reef.Store({
    data: {}
  })

  let app = new Reef('#app', {
    store: store,
    template: function(props) {
      return `
        <section id="welcome" class="is-hidden"></section>
        <section id="opponent" ${props.turn == playerIDs.opponent ? 'class="active"' : ''}></section>
        <section id="draw"></section>
        <section id="play"></section>
        <section id="crib"></section>
        <section id="self" ${props.turn == playerIDs.self ? 'class="active"' : ''}></section>`;
    }
  });

  let welcome = new Reef('#welcome', {
    store: store,
    template: function(props) {
      return `
        <p>Who are you?</p>
        <button class="identify" data-id="0">${props.players[0].name}</button>
        <button class="identify" data-id="1">${props.players[1].name}</button>`;
    },
    attachTo: app
  })

  let opponent = new Reef('#opponent', {
    store: store,
    template: function(props) {
      return `
        <div class="info">
          <h2>Opponent Area${props.dealer == playerIDs.opponent ? ' (dealer)' : ''} ${store.data.go == playerIDs.opponent ? '"Go!"' : ''}</h2>
          <h3>Name: ${props.players[playerIDs.self].name}</h3>
          <h3>Score: ${props.players[playerIDs.opponent].score}</h3>
        </div>
        <div class="hand">
          <h3>Hand</h3>
          ${props.players[playerIDs.opponent].hand.map(function(card){
            return `<img class="card" src="images/cardBack.png" data-id="${card.id}" data-suit="${card.suit}" data-rank="${card.rank}" data-value="${card.value}"/>`
          }).join('')}
        </div>
        <div class="discard">
          <h3>Discard</h3>
          ${props.players[playerIDs.opponent].discard.map(function(card){
            return `<img class="card" src="images/card${card.id}.png" data-id="${card.id}" data-suit="${card.suit}" data-rank="${card.rank}" data-value="${card.value}"/>`
          }).join('')}
        </div>`;
    },
    attachTo: app
  })

  let draw = new Reef('#draw', {
    store: store,
    template: function(props) {
      return `
        <h2>Draw Area</h2>
        <h3>Current Phase: ${props.phase}</h3>
        <div class="deck">
          <img class="card" src="images/cardBack.png" />
          <img class="card ${Object.keys(props.starter).length === 0 ? 'is-hidden' : ''}" src="images/card${props.starter.id}.png" data-id="${props.starter.id}" data-suit="${props.starter.suit}" data-rank="${props.starter.rank}" data-value="${props.starter.value}"/>
        </div>
        <button id="deal" disabled>Deal Cards</button>
        <button id="new">New Game</button>
        <button id="reset">Reset</button>
        <button id="switch">Switch Player</button>`;
    },
    attachTo: app
  })

  let play = new Reef('#play', {
    store: store,
    template: function(props) {
      return `
        <h2>Play Area</h2>
        <div class="opponent">
          <h3>Opponent</h3>
          ${props.players[playerIDs.opponent].play.map(function(card){
            return `<img class="card" src="images/card${card.id}.png" data-id="${card.id}" data-suit="${card.suit}" data-rank="${card.rank}" data-value="${card.value}"/>`
          }).join('')}
        </div>
        <div class="self">
          <h3>Self</h3>
          ${props.players[playerIDs.self].play.map(function(card){
            return `<img class="card" src="images/card${card.id}.png" data-id="${card.id}" data-suit="${card.suit}" data-rank="${card.rank}" data-value="${card.value}"/>`
          }).join('')}
        </div>
        <div class="tally">${props.tally}</div>`;
    },
    attachTo: app
  })

  let crib = new Reef('#crib', {
    store: store,
    template: function(props) {
      return `
        <h2>Crib</h2>
        <div class="${props.phase == 'count' ? 'is-shown' : ''}">
          ${props.crib.map(function(card){
            return `<img class="card" src="images/card${props.phase == 'count' ? card.id : "Back"}.png" data-id="${card.id}" data-suit="${card.suit}" data-rank="${card.rank}" data-value="${card.value}"/>`
          }).join('')}
        </div>`;
    },
    attachTo: app
  })

  let self = new Reef('#self', {
    store: store,
    template: function(props) {
      return `
        <div class="info">
          <h2>Self Area${props.dealer == playerIDs.self ? ' (dealer)' : ''} ${props.go == playerIDs.self ? '"Go!"' : ''}</h2>
          <h3>Name: ${props.players[playerIDs.self].name}</h3>
          <h3>Score: ${props.players[playerIDs.self].score}</h3>
        </div>
        <div class="hand">
          <h3>Hand</h3>
          ${props.players[playerIDs.self].hand.map(function(card){
            return `<img class="card" src="images/card${card.id}.png" data-id="${card.id}" data-suit="${card.suit}" data-rank="${card.rank}" data-value="${card.value}"/>`
          }).join('')}
        </div>
        <div class="discard">
          <h3>Discard</h3>
          ${props.players[playerIDs.self].discard.map(function(card){
            return `<img class="card" src="images/card${card.id}.png" data-id="${card.id}" data-suit="${card.suit}" data-rank="${card.rank}" data-value="${card.value}"/>`
          }).join('')}
        </div>
        <div class="buttons">
          <button id="cut" disabled>Cut Deck</button>
          <button id="go" disabled>Go</button>
        </div>`;
    },
    attachTo: app
  })


  // Data manipulation

  // If local storage does not have value, user identifies which player they are
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

  let newGame = function(){
    // Reset the gameState to blank
    store.data = blankGameState;
  }

  let enableButtons = function() {
    // Toggle button states
    if (store.data.phase == "new"){
      document.querySelector('#deal').disabled = true;
      document.querySelector('#new').disabled = false;
      document.querySelector('#cut').disabled = false;
      document.querySelector('#go').disabled = true;
      document.querySelector('#reset').disabled = true;
    } else if (store.data.phase == "deal"){
      document.querySelector('#deal').disabled = false;
      document.querySelector('#new').disabled = false;
      document.querySelector('#cut').disabled = true;
      document.querySelector('#go').disabled = true;
      document.querySelector('#reset').disabled = true;
    } else if (store.data.phase == "crib"){
      document.querySelector('#deal').disabled = true;
      document.querySelector('#new').disabled = false;
      document.querySelector('#cut').disabled = true;
      document.querySelector('#go').disabled = true;
      document.querySelector('#reset').disabled = true;
    } else if (store.data.phase == "starter"){
      document.querySelector('#deal').disabled = true;
      document.querySelector('#new').disabled = false;
      document.querySelector('#cut').disabled = false;
      document.querySelector('#go').disabled = true;
      document.querySelector('#reset').disabled = true;
    } else if (store.data.phase == "play"){
      document.querySelector('#deal').disabled = true;
      document.querySelector('#new').disabled = false;
      document.querySelector('#cut').disabled = true;
      document.querySelector('#go').disabled = false;
      document.querySelector('#reset').disabled = true;
    } else if (store.data.phase == "count"){
      document.querySelector('#deal').disabled = true;
      document.querySelector('#new').disabled = false;
      document.querySelector('#cut').disabled = true;
      document.querySelector('#go').disabled = true;
      document.querySelector('#reset').disabled = false;
    } else if (store.data.phase == "reset"){

    } else if (store.data.phase == "end"){

    }
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
    store.data.players[playerIDs.self].score += score(store.data.players[playerIDs.self].discard);
    store.data.players[playerIDs.opponent].score += score(store.data.players[playerIDs.opponent].discard);
    if (playerIDs.self == store.dealer){
      store.data.players[playerIDs.self].score += score(store.data.crib);
    } else {
      store.data.players[playerIDs.opponent].score += score(store.data.crib);
    }
  }

  /**
   * Return a score for a hand of cards
   * @param {Array} hand - The array of cards to score
   * @return {Number}   - The score
   */
  let score = function(hand) {
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
    handScore += 2 * fifteens;

    // Check for flush
    suits = [...new Set(suits)];
    if (suits.length == 1){
      console.log('SCORE: 4 card flush');
      handScore += 4;
      if (store.data.starter.suit == suits[0]){
        console.log('SCORE: 5 card flush');
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
        handScore += 15;
      } else {
        // Three of a Kind
        console.log('SCORE: three of a kind');
        handScore += 6;
      }
    } else if (double.length == 2){
      if (run.length == 3){
        // Quadruple Run of Three
        console.log('SCORE: quadruple run of three');
        handScore += 16;
      } else {
        // 2 x Two of a Kind
        console.log('SCORE: 2 x two of a kind');
        handScore += 4;
      }
    } else if (double.length == 1){
      if (run.length == 4){
        // Double Run of Four
        console.log('SCORE: double run of four');
        handScore += 10;
      } else if (run.length == 3){
        if (run.includes(Number(double[0]))){
          // Double Run of Three
          console.log('SCORE: double run of three');
          handScore += 8;
        } else {
          // Two of a Kind and a Run of Three
          console.log('SCORE: two of a kind and a run of three');
          handScore += 5;
        }
      } else {
        // Two of a Kind
        console.log('SCORE: two of a kind');
        handScore += 2;
      }
    } else if (run.length == 3){
      // Run of Three
      console.log('SCORE: run of three');
      handScore += 3;
    } else if (run.length == 4){
      // Run of Four
      console.log('SCORE: run of four');
      handScore += 4;
    } else if (run.length == 5){
      // Run of Five
      console.log('SCORE: run of five');
      handScore += 5;
    }

    console.log('Hand score is ' + handScore);
    return handScore;
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

  let updateServer = function(data) {
    // Update API
    let options = {
      user: 'alex-nowicki',
      token: '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'
    }

    gitrows.options(options);
    gitrows.replace(path, store.data)
      .then((response)=>{
        // console.log(response);
      })
      .catch((error)=>{
        // console.log(error);
      });
  }


	//
	// Inits & Event Listeners
	//

  // Retrieve the game state and update the UI
  const gitrows = new Gitrows();
  let path = '@github/alex-nowicki/alex-nowicki.github.io/data/crib.json';

  gitrows.get(path)
    .then((data)=>{
      console.log(data);
      store.data = data;
      // console.log(store.data);
      app.render();
    })
    .catch((error)=>{
      // console.error(error)
    });

  document.addEventListener('render', function (event){
    if (event.target.id == 'self' || event.target.id == 'draw'){
      enableButtons();
    }
  })

  let playerIDs = identifyPlayer();

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
          } else if (store.data.tally == 31) {
            store.data.players[playerIDs.self].score += 2;
          }

          // If same rank, assign points
          if (store.data.play.length > 1 && targetCard.rank == store.data.play[store.data.play.length - 2].rank){
            console.log('PLAY: double');
            store.data.players[playerIDs.self].score += 2;
            if (store.data.play.length > 2 && targetCard.rank == store.data.play[store.data.play.length - 3].rank){
              console.log('PLAY: triple');
              store.data.players[playerIDs.self].score += 4;
              if (store.data.play.length > 3 && targetCard.rank == store.data.play[store.data.play.length - 4].rank){
                console.log('PLAY: quadruple');
                store.data.players[playerIDs.self].score += 6;
              }
            }
          }

          // If sequence, assign points


          // Check for runs
          let findRuns = function(arr){
            // Sort the array
            arr.sort(function(a, b){return a - b});
            // Remove duplicates
            let uniq = arr;
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

          for (let i = 3; i < (store.data.play.length + 1); i++){
            let seq = store.data.play.slice(-i);
            console.log('seq', seq);
            seq = store.data.play.map(x => x.rank);
            console.log('seq', seq);
            let run = findRuns(seq);
            console.log('run', run);
            if (run.length > 2){
              console.log('We have a run');
            } else {
              console.log('There is no run');
              break;
            }
          }

          // if (store.data.play.length > 2){
          //   let seqLength = 0;
          //   let playSeq = store.data.play.map(x => x.rank);
          //   for (let i = 3; i <= playSeq.length; i++){
          //     let arr = playSeq.slice(-i);
          //     console.log(i);
          //     console.log(playSeq);
          //     console.log(arr);
          //     let max = Math.max(...arr);
          //     let min = Math.min(...arr);
          //     if (max - min + 1 == arr.length){
          //       console.log('PLAY: sequence of', arr.length);
          //       seqLength = arr.length;
          //     } else {
          //       //break;
          //     }
          //   }
          //   if (seqLength > 2){
          //     console.log(seqLength, 'points awarded');
          //     store.data.players[playerIDs.self].score += seqLength;
          //   }
          // }

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
    // updateServer(store.data);

  })

})();
