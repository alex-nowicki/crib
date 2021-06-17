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
        "dealer": false,
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
        "dealer": false,
        "wins": 0,
        "loses": 0,
        "skunks": 0
      }
    ],
    "deck": [],
    "crib": [],
    "starter": {},
    "playTally": 0,
    "phase": "new"
  }

	let gameState;
  // Phases: New, Deal, Crib, Play, Count, Reset, End
  // New phase,


  let app = {
    welcome: {
      section: document.querySelector('.welcome'),
      buttons: document.querySelectorAll('.welcome button')
    },
    self: {
      hand: document.querySelector('.self .hand'),
      discard: document.querySelector('.self .discard')
    },
    opponent: {
      hand: document.querySelector('.opponent .hand'),
      discard: document.querySelector('.opponent .discard')
    },
    play: {
      self: document.querySelector('.play .self'),
      opponent: document.querySelector('.play .opponent'),
      tally: document.querySelector('.play .tally')
    },
    draw: {

    },
    crib: document.querySelector('.crib .crib'),
    buttons: {
      deal: document.querySelector('#deal'),
      cut: document.querySelector('#cut'),
      go: document.querySelector('#go'),
      new: document.querySelector('#new')
    }
  }




	//
	// Methods
	//

  let getGameState = function(data) {
    // Check to see if there are any changes to the game state
    gameState = data;
  }

  let setGameState = function(data) {
    // Update API
    let options = {
      user: 'alex-nowicki',
      token: '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'
    }
    gitrows.options(options);

    gitrows.replace(path, gameState)
      .then((response)=>{
        console.log(response);
      })
      .catch((error)=>{
        console.log(error);
      });
  }

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
    gameState = blankGameState;
    gameState.phase = 'new';

  }

  let createCard = function(card){
    let newNode = document.createElement('img');
    newNode.src = `images/card${card.id}.png`;
    newNode.classList.add('card');
    newNode.dataset.id = card.id;
    newNode.dataset.suit = card.suit;
    newNode.dataset.rank = card.rank;
    newNode.dataset.value = card.value;
    return newNode;
  }

  let removeAllCards = function(){
    let cardsInDOM = document.querySelectorAll('.card');
    for (card of cardsInDOM){
      card.remove();
    }
  }

  let resetPlay = function(){
    // During the deal phase, clear play
    if (gameState.phase == "deal"){
      gameState.players.forEach((item, i) => {
        item.play = [];
      });
    // During the play phase, move cards to discard
    } else if (gameState.phase == "play"){
      gameState.players.forEach((item, i) => {
        let player = gameState.players[i];
        item.play.forEach((item, i) => {
          player.discard.append(item);
        });
      });
      item.play = [];
    }
  }

  let updateUI = function(state){
    // Update player names
    for (let i = 0; i < app.welcome.buttons.length; i++){
      app.welcome.buttons[i].innerHTML = gameState.players[i].name;
    }

    // Remove all created cards
    removeAllCards();

    // Update starter


    // Update hands
    if (state.players[0].hand.length > 0){
      let self;
      // Iterate through the list of players
      state.players.forEach((item, i) => {
        // Identify the player's hand
        playerIDs.self == i ? self = true : self = false;
        // Iterate through the player's hand and create cards
        state.players[i].hand.forEach((item, i) => {
          let card = createCard(item);
          // Deal cards to the appropriate player
          if (self){
            app.self.hand.append(card);
          } else {
            card.src = `images/cardBack.png`;
            app.opponent.hand.append(card);
          }
        });
      });
    }

    // Update play
    if (state.players[0].play.length > 0){
      let self;
      // Iterate through the list of players
      state.players.forEach((item, i) => {
        // Identify the player's hand
        playerIDs.self == i ? self = true : self = false;
        // Iterate through the player's hand and create cards
        state.players[i].play.forEach((item, i) => {
          let card = createCard(item);
          // Deal cards to the appropriate player
          if (self){
            app.play.self.append(card);
          } else {
            app.play.opponent.append(card);
          }
        });
      });
    }

    // Update discards
    if (state.players[0].discard.length > 0){
      let self;
      // Iterate through the list of players
      state.players.forEach((item, i) => {
        // Identify the player's discard
        playerIDs.self == i ? self = true : self = false;
        state.players[i].discard.forEach((item, i) => {
          let card = createCard(item);
          // Fill discard with cards from the appropriate player
          if (self){
            app.self.discard.append(card);
          } else {
            app.opponent.discard.append(card);
          }
        });
      });
    }

    // Update crib
    if (state.crib.length > 0){
      state.crib.forEach((item, i) => {
        let card = createCard(item);
        card.src = `images/cardBack.png`;
        app.crib.append(card);
      });
    }

    // Update tally

    // Update count

    // Toggle button states
    if (gameState.phase == "new"){
      app.buttons.cut.disabled = false;
    } else if (gameState.phase == "deal"){
      app.buttons.deal.disabled = false;
      app.buttons.new.disabled = true;
      app.buttons.cut.disabled = true;
    } else if (gameState.phase == "crib"){
      app.buttons.deal.disabled = true;
    } else if (gameState.phase == "play"){

    } else if (gameState.phase == "count"){

    } else if (gameState.phase == "reset"){

    } else if (gameState.phase == "end"){

    }

  }

  let cutDeck = function() {
    resetPlay();
    let drawDeck = cards.slice();
    for (let i = 0; i < 2; i++){
      let randomNum = Math.floor(Math.random() * 53);
      gameState.players[i].play.push(drawDeck[randomNum]);
      drawDeck.splice(randomNum, 1);
    }
    if (gameState.players[playerIDs.self].play[0].rank > gameState.players[playerIDs.opponent].play[0].rank){
      gameState.players[playerIDs.self].dealer = true;
      gameState.players[playerIDs.opponent].dealer = false;
    } else if (gameState.players[playerIDs.self].play[0].rank < gameState.players[playerIDs.opponent].play[0].rank) {
      gameState.players[playerIDs.self].dealer = false;
      gameState.players[playerIDs.opponent].dealer = true;
    } else {
      return;
    }
    gameState.phase = "deal";
  }


  // Select a random array of buttons from the bank
  let dealCards = function() {
    // Clear play area of cards from new game cut
    resetPlay();
    // Create a copy of the cards array
    let drawDeck = cards.slice();
    let numCards = drawDeck.length;
    let hands = [[],[]];
    for (let i = 0; i < 100; i++){
      let randomNum = Math.floor(Math.random() * 53);
      if (drawDeck[randomNum]){
        if (hands[0].length < 6){
          hands[0].push(drawDeck[randomNum]);
        } else if (hands[1].length < 6){
          hands[1].push(drawDeck[randomNum]);
        } else {
          break;
        }
        drawDeck.splice(randomNum, 1);
      } else {
        continue;
      }
    }

    // Update game state
    gameState.deck = drawDeck;
    gameState.players.forEach((item, i) => {
      gameState.players[i].hand = hands[i];
    });
    gameState.phase = 'crib';

  }


	//
	// Inits & Event Listeners
	//

  // Retrieve the game state and update the UI
  const gitrows = new Gitrows();
  let path = '@github/alex-nowicki/alex-nowicki.github.io/data/crib.json';

  gitrows.get(path)
    .then(data => {
      getGameState(data);
      console.log(gameState);
      updateUI(gameState);
    })
    .catch(error => console.error(error))

  let playerIDs = identifyPlayer();

  // Click event listeners
  document.addEventListener('click', function(event){

    // Card event listeners
    if (event.target.classList.contains('card')){

      if (gameState.phase === 'crib') {
        // event.target.src = "images/cardBack.png";
        gameState.crib.push();
        app.crib.append(event.target);

        if (app.crib.children.length === 4){
          gameState.phase = 'play';
          alert(gameState.phase);
        }

      } else if (gameState.phase === 'play') {
        app.play.self.append(event.target);

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

    }

    // Player identification buttons event listeners
    if (event.target.classList.contains('identify')){
      playerIDs.self = Number(event.target.dataset.id);
      playerIDs.self == 0 ? playerIDs.opponent = 1 : playerIDs.opponent = 0;
      localStorage.setItem('playerIDs', JSON.stringify(playerIDs));
      app.welcome.section.classList.add('is-hidden');
    }

    console.log(gameState);
    // Update game state
    setGameState(gameState);
    // Update UI
    updateUI(gameState);

  })

})();




// Step 1: Determine the dealer

// Step 2: Deal 6 cards to each player

// Push hands to the JSON

// Step 3: Each player discards two cards to the crib

// Step 4: Cut and reveal starter

// Step 5: play

// Step 6: Counting the hands

// Step 7: Reset

// Empty JSON arrays
