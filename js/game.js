//
// Imports
//

import { cards, checkLocalStorage, clearLocalStorage, getDate, getProfileData, getTableData, updateProfileData, updateGameData } from './main.js';

(function () {

	//
	// Variables
	//

  const data = {
    state: "login", // welcome, check, profile, game
    user: null,
    game: {},
    players: {},

    // For switch player testing
    userIndex: null,
    oppoIndex: null
  }

  let cardBack = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 190">
  <path d="M140 7v176q0 7-7 7H7q-7 0-7-7V7q0-7 7-7h126q7 0 7 7" style="fill:#fff"/>
  <path style="fill:#4485bf" d="M133 183H7V7h126v176"/>
  <path d="M113 27v136H27V27h86m5-5H22v146h96V22ZM47.78 34.76a4.38 4.38 0 0 1 0 6.19L40.71 48l-7.07-7a4.38 4.38 0 1 1 7.07-5 4.36 4.36 0 0 1 7.07-1.28Zm36.55 3.66a4.11 4.11 0 0 0-1.06.15 4 4 0 0 0 .87-2.51 4.06 4.06 0 0 0-8.12 0 4 4 0 0 0 .87 2.51 4.11 4.11 0 0 0-1.06-.15 4.07 4.07 0 1 0 3.4 6.29l-2 4.79h5.62l-2-4.79a4.06 4.06 0 1 0 3.4-6.29ZM60.84 56.36a4.37 4.37 0 0 0-.84 1.28 4.37 4.37 0 1 0-7.07 4.91L60 69.62l7-7.07a4.38 4.38 0 0 0-6.19-6.19ZM103.58 60a4.11 4.11 0 0 0-1.06.15 4 4 0 0 0 .87-2.51 4.06 4.06 0 0 0-8.12 0 4 4 0 0 0 .87 2.51 4.11 4.11 0 0 0-1.06-.15 4.07 4.07 0 1 0 3.4 6.29l-2 4.79h5.62l-2-4.79a4.06 4.06 0 1 0 3.4-6.29Zm-42.74 82.76A4.37 4.37 0 0 0 60 144a4.37 4.37 0 1 0-7.11 5l7.11 7 7-7a4.38 4.38 0 0 0-6.19-6.19Zm42.74 3.66a4.11 4.11 0 0 0-1.06.15 4 4 0 0 0 .87-2.51 4.06 4.06 0 0 0-8.12 0 4 4 0 0 0 .87 2.51 4.11 4.11 0 0 0-1.06-.15 4.07 4.07 0 1 0 3.4 6.29l-2 4.79h5.62l-2-4.79a4.06 4.06 0 1 0 3.4-6.29ZM80.47 78a4.37 4.37 0 0 0-.88 1.28A4.61 4.61 0 0 0 78.7 78a4.38 4.38 0 0 0-6.19 6.19l7.08 7.07 7.07-7.07A4.38 4.38 0 0 0 80.47 78Zm-35.55 3.62a4.11 4.11 0 0 0-1.06.15 4 4 0 0 0 .87-2.51 4.06 4.06 0 1 0-8.12 0 4 4 0 0 0 .87 2.51 4.11 4.11 0 0 0-1.06-.15 4.07 4.07 0 1 0 3.4 6.29l-2 4.79h5.62l-2-4.79a4.06 4.06 0 1 0 3.4-6.29Zm55.25 17.94a4.37 4.37 0 0 0-.88 1.28 4.37 4.37 0 1 0-7.07 4.91l7.07 7.07 7.07-7.07a4.38 4.38 0 0 0-6.19-6.19Zm-35.54 3.66a4.11 4.11 0 0 0-1.06.15 4.07 4.07 0 1 0-6.39 0 4.11 4.11 0 0 0-1.06-.15 4.07 4.07 0 1 0 3.4 6.29l-2 4.79h5.63l-2-4.79a4.06 4.06 0 1 0 3.4-6.29Zm-23 17.94a4.37 4.37 0 0 0-.88 1.28 4.37 4.37 0 1 0-7.07 4.91l7.07 7.07 7.07-7.07a4.38 4.38 0 0 0-6.19-6.19Zm42.74 3.66a4.11 4.11 0 0 0-1.06.15 4 4 0 0 0 .87-2.51 4.06 4.06 0 0 0-8.12 0 4 4 0 0 0 .87 2.51 4.11 4.11 0 0 0-1.06-.15 4.07 4.07 0 1 0 3.4 6.29l-2 4.79h5.62l-2-4.79a4.06 4.06 0 1 0 3.4-6.29Z" style="fill:#3a72ad"/>
  <path d="M67.49 45.26a4.39 4.39 0 0 1-6.16 0l1.9 4.21H57.6l1.9-4.21a4.38 4.38 0 0 1-6.16-6.22L60.41 32l7.08 7.07a4.39 4.39 0 0 1 0 6.19Zm40.15-4.51L99.52 32l-8.13 8.75 8.13 8.75Zm-20.9 19.92-7.08-7.07-7.07 7.07a4.38 4.38 0 0 0 6.16 6.22l-1.9 4.21h5.63l-1.9-4.21a4.38 4.38 0 0 0 6.16-6.22Zm-38.13 1.68-8.13-8.75-8.12 8.75 8.12 8.75Zm38.13 84.72L79.66 140l-7.07 7.07a4.38 4.38 0 0 0 6.16 6.22l-1.9 4.21h5.63l-1.9-4.21a4.38 4.38 0 0 0 6.16-6.22Zm-38.13 1.68L40.48 140l-8.12 8.75 8.12 8.75Zm57.75-66.48-7.07-7.07-7.07 7.07a4.37 4.37 0 0 0 6.15 6.22l-1.89 4.21h5.62l-1.89-4.21a4.37 4.37 0 0 0 6.15-6.22ZM68.23 84l-8.12-8.8L52 84l8.13 8.75Zm-20.45 19.87-7.07-7.07-7.07 7.07a4.37 4.37 0 0 0 6.15 6.22l-1.89 4.21h5.62l-1.89-4.21a4.37 4.37 0 0 0 6.15-6.22Zm40.16 1.68-8.13-8.75-8.12 8.75 8.12 8.75Zm-20.45 19.92-7.08-7.07-7.07 7.07a4.38 4.38 0 0 0 6.16 6.22l-1.9 4.21h5.63l-1.9-4.21a4.38 4.38 0 0 0 6.16-6.22Zm40.15 1.68-8.12-8.75-8.13 8.75 8.13 8.75Z" style="fill:#2b62a1"/>
</svg>`

	//
	// Methods
	//



  // Helper Functions

  /**
   * Check whether a player has a valid card to play
   * @param {Number} id - The player id
   * @return {Boolean}  - Returns true if a valid card exists
   */
  let checkValidPlay = function(obj, id){
    let diff = 31 - obj.game.tally;
    let isValid = false;
    obj.game.players[id].hand.forEach((card, i) => {
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



  // Game Functions


  /**
   * Draw 1-2 random cards from the deck
   */
  let cutDeck = function(obj) {

    console.log(obj);

    // Determine the first dealer in a new game
    if (obj.game.phase === "new"){
      // Reset play area
      console.log(obj.game.players);
      console.log(obj.game.players[obj.userIndex]);
      obj.game.players[obj.userIndex].play = [];
      obj.game.players[obj.oppoIndex].play = [];
      // Create duplicate of deck to draw from
      let drawDeck = cards.slice();
      // Draw two random cards and push them to play area
      for (let i = 0; i < 2; i++){
        let randomNum = Math.floor(Math.random() * (drawDeck.length - 1));
        if (i == 0) {
          obj.game.players[obj.userIndex].play.push(drawDeck[randomNum]);
        } else {
          obj.game.players[obj.oppoIndex].play.push(drawDeck[randomNum]);
        }
        drawDeck.splice(randomNum, 1);
      }
      // Determine who has the lower rank, if a tie, bail
      if (obj.game.players[obj.userIndex].play[0].rank < obj.game.players[obj.oppoIndex].play[0].rank){
        obj.game.dealer = obj.userIndex;
        obj.game.turn = obj.oppoIndex;
      } else if (obj.game.players[obj.userIndex].play[0].rank > obj.game.players[obj.oppoIndex].play[0].rank) {
        obj.game.dealer = obj.oppoIndex;
        obj.game.turn = obj.userIndex;
      } else {
        return;
      }
      // Once a dealer is determined, pass to the deal phase
      obj.game.phase = "deal";
      newLog(obj, obj.game.players[obj.game.dealer].username);

    // Determine the starter for the round
    } else if (obj.game.phase === "starter"){
      let randomNum = Math.floor(Math.random() * (obj.game.deck.length - 1));
      // obj.game.starter = obj.game.deck[randomNum];
      // obj.game.deck.splice(randomNum, 1);
      obj.game.starter = obj.game.deck[0];
      obj.game.deck.splice(0, 1);
      newLog(obj, obj.game.players[obj.game.turn].username, null, {starter: obj.game.starter, other: null});
      // Score starter jack
      if (obj.game.starter.rank === 11){
        console.log("STARTER: Jack");
        obj.game.players[obj.game.dealer].score += 2;
        newLog(obj, obj.game.players[obj.game.dealer].username, ['STARTER: Jack'], {starter: obj.game.starter, other: null}, 2);
      }
      // Once the starter is determined, pass to the play phase
      obj.game.phase = "play";
    }

  }

  /**
   * Deal random cards from the deck to each player
   */
  let dealCards = function(obj) {

    // Reset play area
    resetTable(obj);

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
          obj.game.deck = drawDeck;
          break;
        }
        drawDeck.splice(randomNum, 1);
      } else {
        continue;
      }
    }

    // Assign a hand to each player
    obj.game.players[obj.userIndex].hand = hands[0];
    obj.game.players[obj.oppoIndex].hand = hands[1];

    // Once the deal is complete, pass to the crib phase
    obj.game.phase = 'crib';

  }

  /**
   * Process the Go! action
   */
  let go = function(obj) {
    if (obj.game.go == null){
      // Check whether the player has a valid card to play, if so alert, and bail
      if (checkValidPlay(obj, obj.userIndex)){
        alert('You have a card you can play!');
        return;
      }
      // Assign the go
      obj.game.go = obj.userIndex;
      // Switch the turn to the other player
      obj.game.turn = obj.oppoIndex;
      // Assign a point to the other player
      obj.game.players[obj.oppoIndex].score += 1;
      newLog(obj, obj.game.players[obj.oppoIndex].username, ['Go!'], {starter: null, other: null}, 1);
      // Check whether opponent has a valid card to play, if so, bail, otherwise end of play
      if (checkValidPlay(obj, obj.oppoIndex)){
        return;
      } else {
        console.log('ROUND END: GO');
        playEnd(obj);
      }
    }
  }

  /**
   * Clean up and reset after the end of a play phase
   */
  let playEnd = function(obj) {

    // Reset the tally to 0
    obj.game.tally = 0;
    // Reset the go
    obj.game.go = null;

    // Move played cards to the discard, and reset the play area for each player
    obj.game.players[obj.userIndex].play.forEach((card, i) => {
      obj.game.players[obj.userIndex].discard.push(card);
    });
    obj.game.players[obj.userIndex].play = [];
    obj.game.players[obj.oppoIndex].play.forEach((card, i) => {
      obj.game.players[obj.oppoIndex].discard.push(card);
    });
    obj.game.players[obj.oppoIndex].play = [];
    // Reset the global play array
    obj.game.play = [];

    // Check whether either player still has cards left in hand
    if (obj.game.players[obj.userIndex].hand.length !== 0 || obj.game.players[obj.oppoIndex].hand.length !== 0){
      // Determine the first player for the next round
      obj.game.turn == obj.userIndex ? obj.game.turn = obj.oppoIndex : obj.game.turn = obj.userIndex;
    } else {
      roundEnd(obj);
    }
  }

  /**
   * Clean up, hand scoring and reset at the end of the round
   */
  let roundEnd = function(obj) {
    // Log end of the round
    newLog(obj, null, ['Round end']);
    // Reset turn and go and pass to the count phase
    obj.game.turn = null;
    obj.game.go = null;
    obj.game.phase = "count";
    // Score each hand and the crib
    obj.game.players[obj.userIndex].score += scoreHand(obj, obj.game.players[obj.userIndex].discard, obj.game.players[obj.userIndex].username);
    obj.game.players[obj.oppoIndex].score += scoreHand(obj, obj.game.players[obj.oppoIndex].discard, obj.game.players[obj.oppoIndex].username);
    if (obj.game.dealer == obj.userIndex){
      obj.game.players[obj.userIndex].score += scoreHand(obj, obj.game.crib, obj.game.players[obj.userIndex].username);
    } else {
      obj.game.players[obj.oppoIndex].score += scoreHand(obj, obj.game.crib, obj.game.players[obj.oppoIndex].username);
    }
    // Pass on to the deal phase
    obj.game.phase = 'deal';
    switchDealer(obj);
    // Log the new dealer
    newLog(obj, obj.game.players[obj.game.dealer].username);
  }

  /**
   * Clean up and reset at the end of the game
   */
  let gameEnd = function(obj) {

  }

  /**
   * Log the action in the game data
   * @param {String} player - Player who performed the action
   * @param {Array} description - List of descriptions of the action
   * @param {String} type - Value of the play, if applicable
   * @param {Object} cards - Cards involved, if applicable
   * @param {Number} value - Score value of the action, if applicable
   */
  let newLog = function(obj, player, description, cards = {starter: null, other: null}, value = 0) {
    obj.game.log.unshift({
      phase: obj.game.phase,
      player: player,
      description: description,
      cards: {
        starter: cards.starter,
        other: cards.other
      },
      value: value,
      date: getDate(true)
    })
  }

  /**
   * Assign a score to the hand of cards
   * @param {Array} hand - Player who performed the action
   * @param {String} name - Player who's hand is being scored
   * @return {Number}     - Returns the value of the hand
   */
  let scoreHand = function(obj, hand, name) {
    let handScore = 0;
    let suits = [];
    let ranks = [];
    let values = [];
    let fifteens = 0;
    let log = {
      player: name,
      description: [],
      cards: {
        starter: obj.game.starter,
        other: hand
      },
      value: 0
    }

    // Create arrays for card suits, ranks and values
    hand.forEach((card, i) => {
      // Check for flush
      suits.push(card.suit);
      // Check for ranks
      ranks.push(card.rank);
      // Check for fifteens
      values.push(card.value);
      // Check for jack of same suit
      if (card.rank == 11 && card.suit == obj.game.starter.suit){
        console.log('SCORE: Jack of Same Suit');
        log.description.push('Jack of Same Suit');
        log.value += 2;
        handScore += 2;
      }
    });

    // Add starter to the ranks and values arrays
    ranks.push(obj.game.starter.rank);
    values.push(obj.game.starter.value);

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
      log.description.push(`${fifteens} fifteen${fifteens > 1 ? 's' : ''}`);
      log.value += (2 * fifteens);
    }

    // Check for flush
    suits = [...new Set(suits)];
    if (suits.length == 1){
      if (obj.game.starter.suit == suits[0]){
        console.log('SCORE: 5 card flush');
        log.description.push('5 card flush');
        log.value += 5;
        handScore += 5;
      } else {
        console.log('SCORE: 4 card flush');
        log.description.push('4 card flush');
        log.value += 4;
        handScore += 4;
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

    let run = findRunsHand(ranks);

    if (triple.length == 1){
      if (run.length == 3){
        // Triple Run of Three
        console.log('SCORE: triple run of three');
        log.description.push('Triple run of three');
        log.value += 15;
        handScore += 15;
      } else {
        // Three of a Kind
        console.log('SCORE: three of a kind');
        log.description.push('Three of a kind');
        log.value += 6;
        handScore += 6;
      }
    } else if (double.length == 2){
      if (run.length == 3){
        // Quadruple Run of Three
        console.log('SCORE: quadruple run of three');
        log.description.push('Quadruple run of three');
        log.value += 16;
        handScore += 16;
      } else {
        // 2 x Two of a Kind
        console.log('SCORE: 2 x two of a kind');
        log.description.push('2 Two of kinds');
        log.value += 4;
        handScore += 4;
      }
    } else if (double.length == 1){
      if (run.length == 4){
        // Double Run of Four
        console.log('SCORE: double run of four');
        log.description.push('Double run of four');
        log.value += 10;
        handScore += 10;
      } else if (run.length == 3){
        if (run.includes(Number(double[0]))){
          // Double Run of Three
          console.log('SCORE: double run of three');
          log.description.push('Double run of three');
          log.value += 8;
          handScore += 8;
        } else {
          // Two of a Kind and a Run of Three
          console.log('SCORE: two of a kind and a run of three');
          log.description.push('Two of a kind and a run of three');
          log.value += 5;
          handScore += 5;
        }
      } else {
        // Two of a Kind
        console.log('SCORE: two of a kind');
        log.description.push('Two of a kind');
        log.value += 2;
        handScore += 2;
      }
    } else if (run.length == 3){
      // Run of Three
      console.log('SCORE: run of three');
      log.description.push('Run of three');
      log.value += 3;
      handScore += 3;
    } else if (run.length == 4){
      // Run of Four
      console.log('SCORE: run of four');
      log.description.push('Run of four');
      log.value += 4;
      handScore += 4;
    } else if (run.length == 5){
      // Run of Five
      console.log('SCORE: run of five');
      log.description.push('Run of five');
      log.value += 5;
      handScore += 5;
    }

    console.log(`${name}'s hand score is ${handScore}`);
    newLog(obj, log.player, log.description, log.cards, log.value);
    return handScore;
  }

  /**
   * Reset the table, removing all cards from play, starter, crib and discard
   */
  let resetTable = function(obj){
    obj.game.players[obj.userIndex].play = [];
    obj.game.players[obj.oppoIndex].play = [];
    obj.game.players[obj.userIndex].discard = [];
    obj.game.players[obj.oppoIndex].discard = [];
    obj.game.crib = [];
    obj.game.starter = {};
  }

  /**
   * Assign the new dealer
   */
  let switchDealer = function(obj){
    if (obj.game.dealer == obj.userIndex){
      obj.game.dealer = obj.oppoIndex;
      obj.game.turn = obj.userIndex;
    } else {
      obj.game.dealer = obj.userIndex;
      obj.game.turn = obj.oppoIndex;
    }
  }

  /**
   * Load game from API, based on URL
   */
  let loadGame = function(){
    let urlSearchParams = new URLSearchParams(window.location.search);
    let params = Object.fromEntries(urlSearchParams.entries());
    getTableData(params.id, true, initTable);
  }




  //
  // State-based UI Templates
  //

  Reef.debug(true);

  let store = new Reef.Store({
    data: {}
  })

  let initTable = function(game, players){



    store.data.game = game;
    store.data.players = players
    console.log(store.data);

    if (store.data.game.players[1].username.toLowerCase() == store.data.user.toLowerCase()){
      store.data.userIndex = 1;
      store.data.oppoIndex = 2;
    } else {
      store.data.userIndex = 2;
      store.data.oppoIndex = 1;
    }



    store.data.state = 'game';
    console.log('STATE: Game');

    let userInfo = new Reef('#user-info', {
      store: store,
      template: function(props) {
        return `
        <p>Game #${props.game.id}</p>
        <p>Logged in as ${props.user}</p>
        <button type="button" id="logout">Logout</button>
        `;
      }
    })

    let table = new Reef('#table', {
      store: store,
      template: function(props) {
        return `
        <section id="opponent" class="${props.game.players[props.oppoIndex].colour}"></section>
        <section id="play"></section>
        <section id="self" class="${props.game.players[props.userIndex].colour}"></section>
        <section id="log"></section>
        <section id="score"></section>
        `;
      }
    })

    let style = new Reef('style', {
      store: store,
      template: function(props) {
        return `
          #score .board.self > div:nth-last-of-type(-n+${props.game.players[props.userIndex].score}){
            background: var(--${props.game.players[props.userIndex].colour});
          }
          #score .board.opponent > div:nth-last-of-type(-n+${props.game.players[props.oppoIndex].score}){
            background: var(--${props.game.players[props.oppoIndex].colour});
          }
        `
      },
      attachTo: table
    })

    let tableInfo = new Reef('#table-info', {
      store: store,
      template: function(props) {
        return `
        <p class="date">Last Updated: ${props.game.date.updated}</p>
        <p class="vs">VS</p>
        <p class="name self">${props.game.players[props.userIndex].username}</p>
        <p class="name opponent">${props.game.players[props.oppoIndex].username}</p>
        <p class="record self">${props.players[props.game.players[props.userIndex].username.toLowerCase()].stats.wins} W / ${props.players[props.game.players[props.userIndex].username.toLowerCase()].stats.loses} L / ${props.players[props.game.players[props.userIndex].username.toLowerCase()].stats.skunks} S</p>
        <p class="record opponent">${props.players[props.game.players[props.oppoIndex].username.toLowerCase()].stats.wins} W / ${props.players[props.game.players[props.oppoIndex].username.toLowerCase()].stats.loses} L / ${props.players[props.game.players[props.oppoIndex].username.toLowerCase()].stats.skunks} S</p>
        <div class="icons self flex-row">
          <svg class="icon-dealer ${props.game.dealer == props.userIndex ? '' : 'is-hidden'}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29"><path d="M22.38 28.38a1.76 1.76 0 0 1-.83-.21l-7-3.71-7 3.71A1.74 1.74 0 0 1 5.59 28a1.77 1.77 0 0 1-.7-1.72l1.35-7.86L.53 12.9a1.76 1.76 0 0 1-.44-1.81A1.73 1.73 0 0 1 1.51 9.9l7.88-1.15 3.53-7.15a1.77 1.77 0 0 1 1.58-1 1.76 1.76 0 0 1 1.58 1l3.53 7.15 7.88 1.15a1.73 1.73 0 0 1 1.42 1.19 1.76 1.76 0 0 1-.44 1.81l-5.71 5.56 1.35 7.86a1.77 1.77 0 0 1-1.73 2.06Zm-7.88-5.95a1.84 1.84 0 0 1 .82.2l6.73 3.55-1.28-7.5a1.76 1.76 0 0 1 .5-1.56l5.45-5.31-7.53-1.1a1.73 1.73 0 0 1-1.32-1L14.5 2.93l-3.37 6.82a1.73 1.73 0 0 1-1.32 1l-7.53 1.1 5.45 5.31a1.75 1.75 0 0 1 .5 1.55L7 26.18l6.73-3.55a1.84 1.84 0 0 1 .77-.2Z"/></svg>
          <svg class="icon-turn ${props.game.turn == props.userIndex ? '' : 'is-hidden'}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29"><path d="M14.5 1A13.5 13.5 0 1 0 28 14.5 13.49 13.49 0 0 0 14.5 1Zm0 25A11.5 11.5 0 1 1 26 14.5 11.51 11.51 0 0 1 14.5 26Zm5.25-10.5a1.25 1.25 0 0 1-1.25 1.25h-5a1.25 1.25 0 0 1-1.25-1.25v-7a1.25 1.25 0 0 1 2.5 0v5.75h3.75a1.25 1.25 0 0 1 1.25 1.25Z"/></svg>
          <svg class="icon-go ${props.game.go == props.userIndex ? '' : 'is-hidden'}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39 29"><path d="M7.67 3.67c-3.2 0-5.11 1.72-5.11 5.47V20.3c0 3.74 1.91 5.5 5.11 5.5s5.12-1.76 5.12-5.5V16H8a.94.94 0 0 1-.86-1A.93.93 0 0 1 8 14h6.3a.85.85 0 0 1 .86.94v5.4c0 5.61-3.27 7.7-7.49 7.7S.19 25.91.19 20.3V9.14c0-5.58 3.27-7.67 7.45-7.67 4.61 0 7.52 2.63 7.52 6.23 0 .93-.47 1.22-1.19 1.22s-1.15-.25-1.18-.9c-.33-2.77-1.98-4.35-5.12-4.35ZM17.86 20.3V9.14c0-5.58 3.28-7.67 7.49-7.67s7.49 2.09 7.49 7.67V20.3c0 5.61-3.28 7.7-7.49 7.7s-7.49-2.09-7.49-7.7Zm12.6-11.16c0-3.75-1.91-5.47-5.11-5.47s-5.11 1.72-5.11 5.47V20.3c0 3.77 1.91 5.5 5.11 5.5s5.11-1.73 5.11-5.5Zm8.35 17.2A1.67 1.67 0 0 1 37.19 28a1.68 1.68 0 1 1 1.62-1.66ZM38.13 21a.91.91 0 0 1-1 .82.84.84 0 0 1-.94-.82c0-5.91-.43-12.71-.43-18.61a1.37 1.37 0 1 1 2.74 0c.03 5.92-.37 12.72-.37 18.61Z"/></svg>
        </div>
        <div class="icons opponent flex-row">
          <svg class="icon-dealer ${props.game.dealer == props.oppoIndex ? '' : 'is-hidden'}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29"><path d="M22.38 28.38a1.76 1.76 0 0 1-.83-.21l-7-3.71-7 3.71A1.74 1.74 0 0 1 5.59 28a1.77 1.77 0 0 1-.7-1.72l1.35-7.86L.53 12.9a1.76 1.76 0 0 1-.44-1.81A1.73 1.73 0 0 1 1.51 9.9l7.88-1.15 3.53-7.15a1.77 1.77 0 0 1 1.58-1 1.76 1.76 0 0 1 1.58 1l3.53 7.15 7.88 1.15a1.73 1.73 0 0 1 1.42 1.19 1.76 1.76 0 0 1-.44 1.81l-5.71 5.56 1.35 7.86a1.77 1.77 0 0 1-1.73 2.06Zm-7.88-5.95a1.84 1.84 0 0 1 .82.2l6.73 3.55-1.28-7.5a1.76 1.76 0 0 1 .5-1.56l5.45-5.31-7.53-1.1a1.73 1.73 0 0 1-1.32-1L14.5 2.93l-3.37 6.82a1.73 1.73 0 0 1-1.32 1l-7.53 1.1 5.45 5.31a1.75 1.75 0 0 1 .5 1.55L7 26.18l6.73-3.55a1.84 1.84 0 0 1 .77-.2Z"/></svg>
          <svg class="icon-turn ${props.game.turn == props.oppoIndex ? '' : 'is-hidden'}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29"><path d="M14.5 1A13.5 13.5 0 1 0 28 14.5 13.49 13.49 0 0 0 14.5 1Zm0 25A11.5 11.5 0 1 1 26 14.5 11.51 11.51 0 0 1 14.5 26Zm5.25-10.5a1.25 1.25 0 0 1-1.25 1.25h-5a1.25 1.25 0 0 1-1.25-1.25v-7a1.25 1.25 0 0 1 2.5 0v5.75h3.75a1.25 1.25 0 0 1 1.25 1.25Z"/></svg>
          <svg class="icon-go ${props.game.go == props.oppoIndex ? '' : 'is-hidden'}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39 29"><path d="M7.67 3.67c-3.2 0-5.11 1.72-5.11 5.47V20.3c0 3.74 1.91 5.5 5.11 5.5s5.12-1.76 5.12-5.5V16H8a.94.94 0 0 1-.86-1A.93.93 0 0 1 8 14h6.3a.85.85 0 0 1 .86.94v5.4c0 5.61-3.27 7.7-7.49 7.7S.19 25.91.19 20.3V9.14c0-5.58 3.27-7.67 7.45-7.67 4.61 0 7.52 2.63 7.52 6.23 0 .93-.47 1.22-1.19 1.22s-1.15-.25-1.18-.9c-.33-2.77-1.98-4.35-5.12-4.35ZM17.86 20.3V9.14c0-5.58 3.28-7.67 7.49-7.67s7.49 2.09 7.49 7.67V20.3c0 5.61-3.28 7.7-7.49 7.7s-7.49-2.09-7.49-7.7Zm12.6-11.16c0-3.75-1.91-5.47-5.11-5.47s-5.11 1.72-5.11 5.47V20.3c0 3.77 1.91 5.5 5.11 5.5s5.11-1.73 5.11-5.5Zm8.35 17.2A1.67 1.67 0 0 1 37.19 28a1.68 1.68 0 1 1 1.62-1.66ZM38.13 21a.91.91 0 0 1-1 .82.84.84 0 0 1-.94-.82c0-5.91-.43-12.71-.43-18.61a1.37 1.37 0 1 1 2.74 0c.03 5.92-.37 12.72-.37 18.61Z"/></svg>
        </div>`;
      },
      attachTo: table
    })

    let opponentArea = new Reef('#opponent', {
      store: store,
      template: function(props) {
        return `
          <div class="hand">
            <h2 class="border">${props.game.players[props.oppoIndex].username}'s Hand ${props.game.go == props.oppoIndex ? ' "Go!"' : ''}</h2>
            <div class="cards overlap flex-row">
              ${props.game.players[props.oppoIndex].hand.map(function(card){
                return `<div class="card" data-id="${card.id}" data-suit="${card.suit}" data-rank="${card.rank}" data-value="${card.value}"/>
                  ${cardBack}
                </div>`
              }).join('')}
            </div>
          </div>
          <div class="discard">
            <h2 class="border">${props.game.players[props.oppoIndex].username}'s Discard</h2>
            <div class="cards overlap flex-row">
              ${props.game.players[props.oppoIndex].discard.map(function(card){
                return `<div class="card" data-id="${card.id}" data-suit="${card.suit}" data-rank="${card.rank}" data-value="${card.value}"/>
                  ${card.svg}
                </div>`
              }).join('')}
            </div>
          </div>
          <div class="crib ${props.game.dealer == props.oppoIndex ? '' : 'is-hidden'}">
            <h2 class="border">${props.game.players[props.oppoIndex].username}'s Crib</h2>
            <div class="cards overlap flex-row">
              ${props.game.crib.map(function(card){
                return `<div class="card" data-id="${card.id}" data-suit="${card.suit}" data-rank="${card.rank}" data-value="${card.value}"/>
                  ${props.game.phase == 'count' || props.game.phase == 'deal' ? card.svg : cardBack}
                </div>`
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
              <div class="card">
                ${cardBack}
              </div>
            </div>
          </div>
          <div class="starter">
            <h2>Starter</h2>
            <div class="cards">
              ${Object.keys(props.game.starter).length === 0 ? '' : `
                <div class="card" data-id="${props.game.starter.id}" data-suit="${props.game.starter.suit}" data-rank="${props.game.starter.rank}" data-value="${props.game.starter.value}">
                  ${props.game.starter.svg}
                </div>
              `}
            </div>
          </div>
          <div class="play">
            <h2>Play</h2>
            <div class="opponent ${props.game.players[props.oppoIndex].colour}">
              <div class="cards overlap flex-row">
                ${props.game.players[props.oppoIndex].play.map(function(card){
                  return `<div class="card" data-id="${card.id}" data-suit="${card.suit}" data-rank="${card.rank}" data-value="${card.value}"/>
                    ${card.svg}
                  </div>`
                }).join('')}
              </div>
            </div>
            <div class="self ${props.game.players[props.userIndex].colour}">
              <div class="cards overlap flex-row">
                ${props.game.players[props.userIndex].play.map(function(card){
                  return `<div class="card" data-id="${card.id}" data-suit="${card.suit}" data-rank="${card.rank}" data-value="${card.value}"/>
                    ${card.svg}
                  </div>`
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
          <div class="hand ${props.game.phase == 'starter' || (props.game.turn != props.userIndex && props.game.phase == 'play') ? 'is-disabled' : ''}">
            <div class="section-header border flex-row">
              <h2>My Hand</h2>
              <div class="button-group flex-row">
                <button id="cut" ${(props.game.phase == 'new' || props.game.phase == 'starter') && props.game.dealer != props.userIndex ? '' : 'disabled'}>Cut</button>
                <button id="deal" ${props.game.phase == 'deal' && props.game.dealer == props.userIndex ? '' : 'disabled'}>Shuffle & Deal</button>
                <button id="go" ${props.game.phase == 'play' && props.game.turn == props.userIndex ? '' : 'disabled'}>Go!</button>
                <button id="switch">Switch</button>
              </div>
            </div>
            <div class="cards flex-row">
              ${props.game.players[props.userIndex].hand.map(function(card){
                return `<button type="button" class="card unstyled" data-id="${card.id}" data-suit="${card.suit}" data-rank="${card.rank}" data-value="${card.value}"/>
                  ${card.svg}`
              }).join('')}
            </div>
          </div>
          <div class="discard">
            <h2 class="border">My Discard</h2>
            <div class="cards overlap flex-row">
              ${props.game.players[props.userIndex].discard.map(function(card){
                return `<div class="card" data-id="${card.id}" data-suit="${card.suit}" data-rank="${card.rank}" data-value="${card.value}"/>
                  ${card.svg}
                </div>`
              }).join('')}
            </div>
          </div>
          <div class="crib ${props.game.dealer == props.userIndex ? '' : 'is-hidden'}">
            <h2 class="border">My Crib</h2>
            <div class="cards overlap flex-row">
              ${props.game.crib.map(function(card){
                return `<div class="card" data-id="${card.id}" data-suit="${card.suit}" data-rank="${card.rank}" data-value="${card.value}"/>
                  ${props.game.phase == 'count' || props.game.phase == 'deal' ? card.svg : cardBack}
                </div>`
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
          <ul class="lines scrollbar">
            ${props.game.log.map(function(item, index){
              return `<li data-index="${index}">
                <p class="date small">${item.date}</p>
                ${item.phase == 'deal' ? `<p class="small">${item.player} is the dealer <svg class="icon-dealer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29"><path d="M22.38 28.38a1.76 1.76 0 0 1-.83-.21l-7-3.71-7 3.71A1.74 1.74 0 0 1 5.59 28a1.77 1.77 0 0 1-.7-1.72l1.35-7.86L.53 12.9a1.76 1.76 0 0 1-.44-1.81A1.73 1.73 0 0 1 1.51 9.9l7.88-1.15 3.53-7.15a1.77 1.77 0 0 1 1.58-1 1.76 1.76 0 0 1 1.58 1l3.53 7.15 7.88 1.15a1.73 1.73 0 0 1 1.42 1.19 1.76 1.76 0 0 1-.44 1.81l-5.71 5.56 1.35 7.86a1.77 1.77 0 0 1-1.73 2.06Zm-7.88-5.95a1.84 1.84 0 0 1 .82.2l6.73 3.55-1.28-7.5a1.76 1.76 0 0 1 .5-1.56l5.45-5.31-7.53-1.1a1.73 1.73 0 0 1-1.32-1L14.5 2.93l-3.37 6.82a1.73 1.73 0 0 1-1.32 1l-7.53 1.1 5.45 5.31a1.75 1.75 0 0 1 .5 1.55L7 26.18l6.73-3.55a1.84 1.84 0 0 1 .77-.2Z"/></svg></p>` : ''}
                ${item.phase == 'starter' ? `<p class="small">${item.player} cuts the deck, starter revealed</p>` : ''}
                ${item.phase == 'play' ? `
                  ${item.value > 0 ? `
                    <p class="small">${item.player} scores ${item.value}pts
                      (${item.description.map(function(description){
                        return `${description}`
                      }).join(' / ')})</p>
                  ` : `
                    ${item.description.map(function(description){
                      return `<p class="small">${description}</p>`
                    }).join('')}
                  `}
                ` : ''}
                ${item.phase == 'count' ? `
                  <p class="small">${item.player}'s hand scores
                    ${item.value > 0 ? `
                      ${item.value}pts
                        (${item.description.map(function(description){
                          return `${description}`
                        }).join(' / ')})</p>
                    ` : 'nothing'}
                ` : ''}

                ${(item.cards.other != null || item.cards.starter != null) && index < 5 ? `
                  <div class="cards mini">
                    ${item.cards.starter != null ? `
                      <div class="card starter">
                        ${item.cards.starter.svg}
                      </div>` : ''}
                    ${item.cards.other != null ? `
                      ${item.cards.other.map(function(card){
                        return `<div class="card">
                          ${card.svg}
                        </div>`
                      }).join('')}
                    ` : ''}
                  </div>
                ` : ''}

              </li>`
            }).join('')}
            <li>
              <p class="small">Game #${props.game.id} started on ${props.game.date.created}</p>
            </li>
          </ul>
          `;
      },
      attachTo: table
    })

    let score = new Reef('#score', {
      store: store,
      template: function(props) {
        return `
          <div class="board self ${props.game.players[props.userIndex].colour}">
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
          <div class="board opponent ${props.game.players[props.oppoIndex].colour}">
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
            <p>${props.game.players[props.userIndex].username}</p>
            <p>${props.game.players[props.userIndex].score}</p>
          </div>
          <div class="score opponent">
            <p>${props.game.players[props.oppoIndex].username}</p>
            <p>${props.game.players[props.oppoIndex].score}</p>
          </div>`;
      },
      attachTo: table
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
    // Load game and players from API
    loadGame();
  } else {
    window.location.replace(`/`);
    // dialog.classList.toggle('is-open');
  }











  // Refresh game data every 10 seconds
  // setInterval(loadGame, 10000);

  // Hash change event listeners
  // window.addEventListener('hashchange', function() {
  //
  // })

  // Render event listeners
  // document.addEventListener('reef:render', function (event){
  //
  // })

  // Click event listeners
  document.addEventListener('click', function(event){

    // Create non-reactive store data object to make changes to
    let storeCopy = store.dataCopy;
    console.log(store.data);
    console.log(storeCopy);

    if (event.target.id === 'logout') {
      clearLocalStorage();
      window.location.replace('/');
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

      if (storeCopy.game.phase === 'crib') {

        // Add selected card to the crib unless the player has 4 cards
        if (storeCopy.game.players[storeCopy.userIndex].hand.length > 4) {
          storeCopy.game.crib.push(cards[targetId-1]);
          storeCopy.game.players[storeCopy.userIndex].hand.splice(storeCopy.game.players[storeCopy.userIndex].hand.findIndex(findCard), 1);

          // AI SELECTION
          // storeCopy.game.crib.push(storeCopy.game.players[storeCopy.oppoIndex].hand[0]);
          // storeCopy.game.players[storeCopy.oppoIndex].hand.splice(0, 1);
        }

        // If the crib is full, pass to the starter phase
        if (storeCopy.game.crib.length === 4){
          storeCopy.game.phase = 'starter';
        }

      } else if (storeCopy.game.phase === 'play') {

        // Check whether it's the player's turn and the selected card is valid
        if (storeCopy.game.turn == storeCopy.userIndex && (Number(targetCard.value) + storeCopy.game.tally) < 32){

          //Add the card to the play area and remove from hand
          storeCopy.game.players[storeCopy.userIndex].play.push(cards[targetId-1]);
          storeCopy.game.play.push(cards[targetId-1]);
          storeCopy.game.players[storeCopy.userIndex].hand.splice(storeCopy.game.players[storeCopy.userIndex].hand.findIndex(findCard), 1);

          // Start tracking info for the log
          let log = {
            player: storeCopy.game.players[storeCopy.userIndex].username,
            description: [],
            cards: {
              starter: null,
              other: null
            },
            value: 0
          }
          let logCardCount = 0;
          let logCardMax = storeCopy.game.play.length;

          // Update the tally
          storeCopy.game.tally += Number(targetCard.value);

          // If tally equals 15 or 31, assign points
          if (storeCopy.game.tally == 15){
            storeCopy.game.players[storeCopy.userIndex].score += 2;
            log.description.push('Fifteen');
            log.value += 2;
            logCardCount = logCardMax;
          } else if (storeCopy.game.tally == 31) {
            storeCopy.game.players[storeCopy.userIndex].score += 2;
            log.description.push('Thirty-One');
            log.value += 2;
            logCardCount = logCardMax;
          }

          // If same rank, assign points
          if (storeCopy.game.play.length > 1 && targetCard.rank == storeCopy.game.play[storeCopy.game.play.length - 2].rank){
            let type;
            console.log('PLAY: double');
            storeCopy.game.players[storeCopy.userIndex].score += 2;
            type = 'Double';
            log.value += 2;
            logCardCount = logCardCount < 2 ? logCardCount = 2 : logCardCount;
            console.l
            if (storeCopy.game.play.length > 2 && targetCard.rank == storeCopy.game.play[storeCopy.game.play.length - 3].rank){
              console.log('PLAY: triple');
              storeCopy.game.players[storeCopy.userIndex].score += 4;
              type = 'Triple';
              log.value += 4;
              logCardCount = logCardCount < 3 ? logCardCount = 3 : logCardCount;
              if (storeCopy.game.play.length > 3 && targetCard.rank == storeCopy.game.play[storeCopy.game.play.length - 4].rank){
                console.log('PLAY: quadruple');
                storeCopy.game.players[storeCopy.userIndex].score += 6;
                type = 'Quadruple';
                log.value += 6;
                logCardCount = logCardCount < 4 ? logCardCount = 4 : logCardCount;
              }
            }
            log.description.push(type);
          }

          // If sequence, assign points
          let runLength = 0;
          for (let i = 3; i < (storeCopy.game.play.length + 1); i++){
            let seq = storeCopy.game.play.slice(-i);
            seq = seq.map(x => x.rank);
            let run = findRunsPlay(seq);
            if (run.length > 2){
              runLength = run.length;
            }
          }

          if (runLength > 2) {
            console.log(`PLAY: ${runLength} card run`);
            storeCopy.game.players[storeCopy.userIndex].score += runLength;
            log.description.push(`Run of ${runLength}`);
            log.value += runLength;
            logCardCount = logCardCount < runLength ? logCardCount = runLength : logCardCount;
          }

          if (log.value > 0){
            if (logCardCount == logCardMax){
              log.cards.other = [...storeCopy.game.play];
            } else {
              log.cards.other = [...storeCopy.game.play].slice(-logCardCount);
            }
            newLog(storeCopy, log.player, log.description, log.cards, log.value);
          }

          // If opponent still has cards, they haven't passed, and the tally is not 31, switch turns
          if (storeCopy.game.players[storeCopy.oppoIndex].hand.length > 0 && storeCopy.game.go !== storeCopy.oppoIndex && storeCopy.game.tally < 31){
            storeCopy.game.turn = storeCopy.oppoIndex;

          // If the tally is 31, end the round
          } else if (storeCopy.game.tally == 31){
            console.log('ROUND END: 31');
            playEnd(storeCopy);

          // If one player has passed, and the other no longer has a valid card to play
        } else if (storeCopy.game.go !== null && !checkValidPlay(storeCopy, storeCopy.userIndex)) {
            console.log('ROUND END: EXTENDED GO');
            playEnd(storeCopy);

          // If both players no longer have cards, end the play phase
          } else if (storeCopy.game.players[storeCopy.userIndex].hand.length === 0 && storeCopy.game.players[storeCopy.oppoIndex].hand.length === 0){
            console.log('ROUND END: NO CARDS LEFT');
            // Assign the automatic Go! points
            storeCopy.game.players[storeCopy.userIndex].score += 1;
            newLog(storeCopy, storeCopy.game.players[storeCopy.userIndex].username, ['Go!'], {starter: null, other: null}, 1);
            playEnd(storeCopy);
          }

        // Warn player if it's not their turn
        } else if (storeCopy.game.turn == storeCopy.oppoIndex) {
          alert("It's your opponent's turn to play");

        // Warn player if the selected card is not valid
        } else {
          alert('Choose another card or go, this card would bust');
        }

      }
    }

    // Deal button event listener
    if (event.target.id === 'deal'){
      dealCards(storeCopy);

    }

    // Cut deck button event listener
    if (event.target.id === 'cut'){
      cutDeck(storeCopy);

    }

    // Go button event listener
    if (event.target.id === 'go'){
      go(storeCopy);
    }

    // TESTING
    if (event.target.id === 'switch'){
      let switchPlayer = function(){
        let index1 = storeCopy.userIndex;
        let index2 = storeCopy.oppoIndex;
        storeCopy.userIndex = index2;
        storeCopy.oppoIndex = index1;
      };
      switchPlayer();
    }

    // Check for end of game
    if (storeCopy.game.players[storeCopy.userIndex].score == 121 || storeCopy.game.players[storeCopy.oppoIndex].score == 121){
      console.log('GAME END');
      gameEnd(storeCopy);
    }

    // Update the app
    storeCopy.game.date.updated = getDate(true);

    console.log(store.data);
    console.log(storeCopy);
    store.data = storeCopy;


    // Update server with new game state


  })

})();
