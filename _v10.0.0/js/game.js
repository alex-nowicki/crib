//
// Imports
//

import { notificationFactory, cards, checkLocalStorage, clearLocalStorage, getDate, getTableData, updateData } from './main.js';

(function () {

	//
	// Variables
	//

  const data = {
    user: null,
    game: {},
    players: {},
    dialog: {
      pane: null
    },
    alert: null,
    icons: {
      attention: `<svg class="icon-attention" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29"><path d="M27 27.29H2a2 2 0 0 1-1.73-3l12.5-21.65a2 2 0 0 1 3.46 0l12.5 21.65a2 2 0 0 1-1.73 3ZM14.5 3.64 2 25.29h25L14.5 3.64Zm-.87-.5Zm-.32 14.53c0 .58.46.95 1.2.95a1.07 1.07 0 0 0 1.18-.95c0-1 .05-2.13.11-3.27s.11-2.32.11-3.28a1.27 1.27 0 0 0-1.4-1.23 1.28 1.28 0 0 0-1.42 1.23c0 1 .06 2.14.11 3.28s.11 2.32.11 3.27Zm1.21 2.27A1.47 1.47 0 0 0 13 21.43a1.48 1.48 0 1 0 1.48-1.49Z"/></svg>`,
      accept: `<svg class="icon-accept" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29"><path d="M21.88 9.32a1.24 1.24 0 0 1 0 1.76l-8.6 8.6a1.23 1.23 0 0 1-1.76 0l-4.4-4.4a1.24 1.24 0 1 1 1.76-1.76L12.4 17l7.72-7.71a1.24 1.24 0 0 1 1.76.03ZM28 14.5A13.5 13.5 0 1 1 14.5 1 13.49 13.49 0 0 1 28 14.5Zm-2 0A11.5 11.5 0 1 0 14.5 26 11.51 11.51 0 0 0 26 14.5Z"/></svg>`,
      reject: `<svg class="icon-reject" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29"><path d="M19.88 9.12a1.24 1.24 0 0 1 0 1.76l-3.61 3.62 3.61 3.62a1.24 1.24 0 0 1 0 1.76 1.23 1.23 0 0 1-1.76 0l-3.62-3.61-3.62 3.61a1.23 1.23 0 0 1-1.76 0 1.24 1.24 0 0 1 0-1.76l3.61-3.62-3.61-3.62a1.24 1.24 0 0 1 1.76-1.76l3.62 3.61 3.62-3.61a1.24 1.24 0 0 1 1.76 0Zm8.12.62v9.52a2 2 0 0 1-.59 1.42l-6.73 6.73a2 2 0 0 1-1.42.59H9.74a2 2 0 0 1-1.42-.59l-6.73-6.73A2 2 0 0 1 1 19.26V9.74a2 2 0 0 1 .59-1.42l6.73-6.73A2 2 0 0 1 9.74 1h9.52a2 2 0 0 1 1.42.59l6.73 6.73A2 2 0 0 1 28 9.74Zm-2 0L19.26 3H9.74L3 9.74v9.52L9.74 26h9.52L26 19.26Z"/></svg>`,
      turn: `<svg class="icon-turn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29"><path d="M14.5 1A13.5 13.5 0 1 0 28 14.5 13.49 13.49 0 0 0 14.5 1Zm0 25A11.5 11.5 0 1 1 26 14.5 11.51 11.51 0 0 1 14.5 26Zm5.25-10.5a1.25 1.25 0 0 1-1.25 1.25h-5a1.25 1.25 0 0 1-1.25-1.25v-7a1.25 1.25 0 0 1 2.5 0v5.75h3.75a1.25 1.25 0 0 1 1.25 1.25Z"/></svg>`,
      dealer: `<svg class="icon-dealer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29"><path d="M22.38 28.38a1.76 1.76 0 0 1-.83-.21l-7-3.71-7 3.71A1.74 1.74 0 0 1 5.59 28a1.77 1.77 0 0 1-.7-1.72l1.35-7.86L.53 12.9a1.76 1.76 0 0 1-.44-1.81A1.73 1.73 0 0 1 1.51 9.9l7.88-1.15 3.53-7.15a1.77 1.77 0 0 1 1.58-1 1.76 1.76 0 0 1 1.58 1l3.53 7.15 7.88 1.15a1.73 1.73 0 0 1 1.42 1.19 1.76 1.76 0 0 1-.44 1.81l-5.71 5.56 1.35 7.86a1.77 1.77 0 0 1-1.73 2.06Zm-7.88-5.95a1.84 1.84 0 0 1 .82.2l6.73 3.55-1.28-7.5a1.76 1.76 0 0 1 .5-1.56l5.45-5.31-7.53-1.1a1.73 1.73 0 0 1-1.32-1L14.5 2.93l-3.37 6.82a1.73 1.73 0 0 1-1.32 1l-7.53 1.1 5.45 5.31a1.75 1.75 0 0 1 .5 1.55L7 26.18l6.73-3.55a1.84 1.84 0 0 1 .77-.2Z"/></svg>`,
      go: `<svg class="icon-go" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39 29"><path d="M7.67 3.67c-3.2 0-5.11 1.72-5.11 5.47V20.3c0 3.74 1.91 5.5 5.11 5.5s5.12-1.76 5.12-5.5V16H8a.94.94 0 0 1-.86-1A.93.93 0 0 1 8 14h6.3a.85.85 0 0 1 .86.94v5.4c0 5.61-3.27 7.7-7.49 7.7S.19 25.91.19 20.3V9.14c0-5.58 3.27-7.67 7.45-7.67 4.61 0 7.52 2.63 7.52 6.23 0 .93-.47 1.22-1.19 1.22s-1.15-.25-1.18-.9c-.33-2.77-1.98-4.35-5.12-4.35ZM17.86 20.3V9.14c0-5.58 3.28-7.67 7.49-7.67s7.49 2.09 7.49 7.67V20.3c0 5.61-3.28 7.7-7.49 7.7s-7.49-2.09-7.49-7.7Zm12.6-11.16c0-3.75-1.91-5.47-5.11-5.47s-5.11 1.72-5.11 5.47V20.3c0 3.77 1.91 5.5 5.11 5.5s5.11-1.73 5.11-5.5Zm8.35 17.2A1.67 1.67 0 0 1 37.19 28a1.68 1.68 0 1 1 1.62-1.66ZM38.13 21a.91.91 0 0 1-1 .82.84.84 0 0 1-.94-.82c0-5.91-.43-12.71-.43-18.61a1.37 1.37 0 1 1 2.74 0c.03 5.92-.37 12.72-.37 18.61Z"/></svg>`
    },

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
    return counts;
  }

  /**
   * Check for runs during the play phase
   * @param {Array} arr - The play sequence to check
   * @return {Array}    - Returns empty array if no run found, or a sorted array if run found
   */
  let findRunsPlay = function(arr){
    let run = [];
    for (let i = 3; i <= arr.length; i++){
      // Slice off sequence to test
      let seq = arr.slice(-i);
      // Check for duplicate ranks
      let uniq = [...new Set(seq)];
      // If duplicate found, bail
      if (seq.length != uniq.length) {
        break;
      }
      // Sort the array
      seq.sort(function(a, b){return a - b});
      // Loop through the array to detect run
      for (let j = 0; j < (seq.length - 1); j++){
        if (seq[j+1] - seq[j] == 1){
          // If final pass, log seq
          if (j == seq.length - 2) {
            run = seq;
          // Otherwise, continue
          } else {
            continue;
          }
        } else {
          break;
        }
      }
    }
    return run;
  }

  findRunsPlay([1, 2, 3, 4, 5, 6]);

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
    for (let i = 0; i < (uniq.length - 2); i++){
      let seq = uniq.slice(i, uniq.length);
      for (let j = 0; j < (seq.length - 1); j++){
        // If run detected, push card to array
        if (seq[j+1] - seq[j] == 1){
          // If first pass, push first card as well
          if (j == 0){
            run.push(seq[j]);
          }
          run.push(seq[j+1]);
        // Otherwise, bail
        } else {
          // If run is smaller than 2, reset
          if (!(run.length > 2)){
            run = [];
          }
          break;
        }
      }
      // If run is detected, bail to prevent further checks
      if (run.length > 2) {
        break;
      }
    }
    return run;
  }

  /**
   * Check for subsets whose sum meets the target during the score phase
   * @param {Array} arr - Array of values
   * @param {Array} target - Target sum
   * @return {Array}    - Returns empty array if no run found, or an array of subsets if found
   */
  let findSubsets = function (arr, target) {
    let result = [];
    let fork = function (i = 0, sum = 0, subset = []) {
      // If sum equals target, log subset and bail
      if (sum === target) {
        result.push(subset);
        return;
      }
      // If end of array, bail
      if (i === arr.length) {
        return;
      }
      // If sum + current arr elem is lesser or equal to target, skip to next int, add to sum, and merge subset and arr elem into new arr
      if (sum + arr[i] <= target) {
        fork(i + 1, sum + arr[i], subset.concat(arr[i]));
      }
      // Otherwise, skip int and continue
      fork(i + 1, sum, subset);
    }

    fork();
    return result;
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
      obj.game.log.unshift(newLog(obj, obj.game.players[obj.game.dealer].username));

    // Determine the starter for the round
    } else if (obj.game.phase === "starter"){
      let randomNum = Math.floor(Math.random() * (obj.game.deck.length - 1));
      // obj.game.starter = obj.game.deck[randomNum];
      // obj.game.deck.splice(randomNum, 1);
      obj.game.starter = {
        "id": 11,
        "suit": "club",
        "rank": 11,
        "value": 10,
        "svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 190">
      <path d="M140 7v176q0 7-7 7H7q-7 0-7-7V7q0-7 7-7h126q7 0 7 7" style="fill:#fff"/>
      <path d="M13.72 27.9v-1a.46.46 0 0 1 .51-.51h3.21a.46.46 0 0 1 .51.51v1a3.12 3.12 0 0 0 3.39 3.21 3.16 3.16 0 0 0 3.48-3.21V14a.46.46 0 0 1 .51-.51h3.18A.46.46 0 0 1 29 14v13.9c0 4.11-3.09 6.84-7.68 6.84s-7.6-2.74-7.6-6.84Zm112.56 134.2v1.05a.46.46 0 0 1-.51.51h-3.21a.46.46 0 0 1-.51-.51v-1.05a3.12 3.12 0 0 0-3.39-3.21 3.16 3.16 0 0 0-3.48 3.21V176a.46.46 0 0 1-.51.51h-3.18a.46.46 0 0 1-.49-.51v-13.9c0-4.11 3.09-6.84 7.68-6.84s7.6 2.74 7.6 6.84ZM26.25 46.42a4.11 4.11 0 0 0-1.06.15 4 4 0 0 0 .87-2.51 4.06 4.06 0 1 0-8.12 0 4 4 0 0 0 .87 2.51 4.11 4.11 0 0 0-1.06-.15 4.07 4.07 0 1 0 3.4 6.29l-2 4.79h5.62l-2-4.79a4.06 4.06 0 1 0 3.4-6.29Zm87.5 97.16a4.11 4.11 0 0 0 1.06-.15 4 4 0 0 0-.87 2.51 4.06 4.06 0 0 0 8.12 0 4 4 0 0 0-.87-2.51 4.11 4.11 0 0 0 1.06.15 4.07 4.07 0 1 0-3.4-6.29l2-4.79h-5.62l2 4.79a4.06 4.06 0 1 0-3.4 6.29Zm-9.93-52.68-3.66 18.3a1 1 0 0 1-1 .8H40.82a1 1 0 0 1-1-.8l-3.64-18.3a1 1 0 0 1 .7-1.16l6-1.76a27.49 27.49 0 0 1 54.24 0l6 1.76a1 1 0 0 1 .7 1.16ZM40 125h60v-10H40Z"/>
    </svg>`
      };
      obj.game.log.unshift(newLog(obj, obj.game.players[obj.game.turn].username, null, {starter: obj.game.starter, other: null}));
      // Once the starter is determined, pass to the play phase
      obj.game.phase = "play";
      // Score starter jack
      if (obj.game.starter.rank === 11){
        obj.game.players[obj.game.dealer].score += 2;
        obj.game.log.unshift(newLog(obj, obj.game.players[obj.game.dealer].username, ['Starter jack'], {starter: obj.game.starter, other: null}, 2));
        // Check for game winner
        if (obj.game.players[obj.game.dealer].score > 60){
          obj.game.winner = obj.game.players[obj.game.dealer].username;
          obj.game.winningPlay = newLog(obj, obj.game.players[obj.game.dealer].username, ['Starter jack'], {starter: obj.game.starter, other: null}, 2);
        }
      }
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
        // alert('You have a card you can play!');
        obj.alert = 'go';
        console.log('Go Alert!')
        return;
      }
      // Assign the go
      obj.game.go = obj.userIndex;
      // Switch the turn to the other player
      obj.game.turn = obj.oppoIndex;
      // Assign a point to the other player
      obj.game.players[obj.oppoIndex].score += 1;
      obj.game.log.unshift(newLog(obj, obj.game.players[obj.oppoIndex].username, ['Go!'], {starter: null, other: null}, 1));
      // Check for game winner
      if (obj.game.players[obj.oppoIndex].score > 60){
        obj.game.winner = obj.game.players[obj.oppoIndex].username;
        obj.game.winningPlay = newLog(obj, obj.game.players[obj.oppoIndex].username, ['Go!'], {starter: null, other: null}, 1);
      }
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
    obj.game.log.unshift(newLog(obj, null, ['Round end']));
    // Reset turn and go and pass to the count phase
    obj.game.turn = null;
    obj.game.go = null;
    obj.game.phase = "count";

    let nonDealerIndex;
    obj.game.dealer == obj.userIndex ? nonDealerIndex = obj.oppoIndex : nonDealerIndex = obj.userIndex;

    // Score non-dealer hand
    let nonDealerHand = scoreHand(obj, obj.game.players[nonDealerIndex].discard, obj.game.players[nonDealerIndex].username);
    console.log(nonDealerHand);
    obj.game.players[nonDealerIndex].score += nonDealerHand.value;
    obj.game.players[nonDealerIndex].highestHandScore = Math.max(obj.game.players[nonDealerIndex].highestHandScore, nonDealerHand.value);
    obj.game.log.unshift(newLog(obj, nonDealerHand.player, nonDealerHand.description, nonDealerHand.cards, nonDealerHand.value));

    // Check for winner
    if (obj.game.players[nonDealerIndex].score > 60){
      obj.game.winner = obj.game.players[nonDealerIndex].username;
      obj.game.winningPlay = newLog(obj, nonDealerHand.player, nonDealerHand.description, nonDealerHand.cards, nonDealerHand.value);

    // Otherwise, score dealer's hand
    } else {
      let dealerHand = scoreHand(obj, obj.game.players[obj.game.dealer].discard, obj.game.players[obj.game.dealer].username);
      console.log(dealerHand);
      obj.game.players[obj.game.dealer].score += dealerHand.value;
      obj.game.players[obj.game.dealer].highestHandScore = Math.max(obj.game.players[obj.game.dealer].highestHandScore, dealerHand.value);
      obj.game.log.unshift(newLog(obj, dealerHand.player, dealerHand.description, dealerHand.cards, dealerHand.value));

      // Check for winner
      if (obj.game.players[obj.game.dealer].score > 60){
        obj.game.winner = obj.game.players[obj.game.dealer].username;
        obj.game.winningPlay = newLog(obj, dealerHand.player, dealerHand.description, dealerHand.cards, dealerHand.value);

      // Otherwise, score dealer's crib
      } else {
        let dealerCrib = scoreHand(obj, obj.game.crib, obj.game.players[obj.game.dealer].username);
        console.log(dealerCrib);
        obj.game.players[obj.game.dealer].score += dealerCrib.value;
        obj.game.players[obj.game.dealer].highestHandScore = Math.max(obj.game.players[obj.game.dealer].highestHandScore, dealerCrib.value);
        obj.game.log.unshift(newLog(obj, dealerCrib.player, dealerCrib.description, dealerCrib.cards, dealerCrib.value));

        // Check for winner
        if (obj.game.players[obj.game.dealer].score > 60){
          obj.game.winner = obj.game.players[obj.game.dealer].username;
          obj.game.winningPlay = newLog(obj, dealerCrib.player, dealerCrib.description, dealerCrib.cards, dealerCrib.value);

        // Otherwise, start a new round
        } else {
          // Pass on to the deal phase
          obj.game.phase = 'deal';
          switchDealer(obj);
          // Log the new dealer
          obj.game.log.unshift(newLog(obj, obj.game.players[obj.game.dealer].username));
        }
      }
    }
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
    return {
      phase: obj.game.phase,
      player: player,
      description: description,
      cards: {
        starter: cards.starter,
        other: cards.other
      },
      value: value,
      date: getDate(true)
    }
  }

  /**
   * Assign a score to the hand of cards
   * @param {Array} hand - Player who performed the action
   * @param {String} name - Player who's hand is being scored
   * @return {Number}     - Returns the value of the hand
   */
  let scoreHand = function(obj, hand, name) {
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
        log.description.push('Jack of starter suit');
        log.value += 2;
      }
    });

    // Add starter to the ranks and values arrays
    ranks.push(obj.game.starter.rank);
    values.push(obj.game.starter.value);

    // Check for fifteens
    fifteens = findSubsets(values, 15).length;
    console.log(fifteens)

    if (fifteens != 0){
      log.description.push(`${fifteens} fifteen${fifteens > 1 ? 's' : ''}`);
      log.value += (2 * fifteens);
    }

    // Check for flush
    suits = [...new Set(suits)];
    if (suits.length == 1){
      if (obj.game.starter.suit == suits[0]){
        log.description.push('5 card flush');
        log.value += 5;
      } else {
        log.description.push('4 card flush');
        log.value += 4;
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

    if (quadruple.length == 1){
      // Four of a Kind
      log.description.push('Four of a kind');
      log.value += 12;
    } else if (triple.length == 1){
      if (run.length == 3){
        // Triple Run of Three
        log.description.push('Triple run of three');
        log.value += 15;
      } else if (double.length == 1) {
        // Three of a Kind and a Two of a Kind
        log.description.push('Three of a kind and two of a kind');
        log.value += 8;
      } else {
        // Three of a Kind
        log.description.push('Three of a kind');
        log.value += 6;
      }
    } else if (double.length == 2){
      if (run.length == 3){
        // Quadruple Run of Three
        log.description.push('Quadruple run of three');
        log.value += 16;
      } else {
        // 2 x Two of a Kind
        log.description.push('2 Two of kinds');
        log.value += 4;
      }
    } else if (double.length == 1){
      if (run.length == 4){
        // Double Run of Four
        log.description.push('Double run of four');
        log.value += 10;
      } else if (run.length == 3){
        if (run.includes(Number(double[0]))){
          // Double Run of Three
          log.description.push('Double run of three');
          log.value += 8;
        } else {
          // Two of a Kind and a Run of Three
          log.description.push('Two of a kind and a run of three');
          log.value += 5;
        }
      } else {
        // Two of a Kind
        log.description.push('Two of a kind');
        log.value += 2;
      }
    } else if (run.length == 3){
      // Run of Three
      log.description.push('Run of three');
      log.value += 3;
    } else if (run.length == 4){
      // Run of Four
      log.description.push('Run of four');
      log.value += 4;
    } else if (run.length == 5){
      // Run of Five
      log.description.push('Run of five');
      log.value += 5;
    }

    return log;
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
   * Refresh Table Data
   */
  let refreshTable = async function(id){
    let tableData = await getTableData(id);
    store.data.game = tableData.game;
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

  let initTable = async function(){

    try {
      let urlSearchParams = new URLSearchParams(window.location.search);
      let params = Object.fromEntries(urlSearchParams.entries());
      let tableData = await getTableData(params.id);
      console.log(tableData);
      store.data.players = tableData.players;
      store.data.game = tableData.game;
    } catch (error){
      console.log(error);
    }

    if (store.data.game.players[1].username.toLowerCase() == store.data.user.toLowerCase()){
      store.data.userIndex = 1;
      store.data.oppoIndex = 2;
    } else {
      store.data.userIndex = 2;
      store.data.oppoIndex = 1;
    }

    let app = new Reef('#app', {
      store: store,
      template: function(props) {
        return `
          <div id="dialog" class="${props.dialog.pane != null || props.game.phase == 'end' ? `` : `is-hidden`}">

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

            <section id="game-end" class="${props.game.phase == 'end' ? `is-active` : `is-hidden`}">
              <h1>${props.game.winner} Wins!</h1>
              <p class="large">Final score is ${props.game.players[1].score} (${props.game.players[1].username}) / ${props.game.players[2].score} (${props.game.players[2].username})</p>

              ${Object.keys(props.game.winningPlay).length != 0 ? `
                <p class="large">
                  ${props.game.winningPlay.phase == 'starter' ||  props.game.winningPlay.phase == 'play' ? `${props.game.winner} scored a
                    ${props.game.winningPlay.description.map(function(description){
                      return `${description}`
                    }).join(' + ')}
                    for ${props.game.winningPlay.value}pt${props.game.winningPlay.value > 1 ? `s` : ``} to win the game.
                  ` : ``}
                  ${props.game.winningPlay.phase == 'count' ? `${props.game.winner} scored a ${props.game.winningPlay.value}pt hand
                    (${props.game.winningPlay.description.map(function(description){
                      return `${description}`
                    }).join(' / ')}) to win the game.
                  ` : ``}
                  ${props.game.winningPlay.phase == 'forfeit' ? `${props.game.winningPlay.player} forfeited the game.` : ''}
                </p>

                ${(props.game.winningPlay.cards.other != null || props.game.winningPlay.cards.starter != null) ? `
                  <div class="cards overlap flex-row">
                    ${props.game.winningPlay.cards.starter != null ? `
                      <div class="card starter">
                        ${props.game.winningPlay.cards.starter.svg}
                      </div>` : ''}
                    ${props.game.winningPlay.cards.other.map(function(card){
                      return `
                        <div class="card">
                          ${card.svg}
                        </div>
                      `
                    }).join('')}
                  </div>
                ` : ``}

              ` : ``}

              <form action="">
                <div class="flex-row">
                  <button type="button" class="account big">My Account</button>
                  <button type="button" class="logout big">Logout</button>
                </div>
              </form>
            </section>
          </div>
          <header>
            <section id="site-info">
              <a class="logo-group" href="http://nowickidesign.com/">
                <svg class="logo" viewBox="0 0 100 33.46">
                  <path d="M14.68,18.42,9.57,21.37V13.49a2.16,2.16,0,0,0-2.16-2.36,2,2,0,0,0-2,2.19v8.05H0V7H5.36V8.46A5.05,5.05,0,0,1,9.41,6.69a5.2,5.2,0,0,1,5.27,5.55Zm9.64,3.28c4.38,0,8.07-3.44,8.07-7.52S28.7,6.69,24.32,6.69s-8.1,3.41-8.1,7.49S19.91,21.7,24.32,21.7Zm0-4.44a3.07,3.07,0,1,1,3.08-3.08A3.13,3.13,0,0,1,24.32,17.26ZM37,21.37H41.7L43.59,14l1.94,7.38h4.74L55.16,7H50l-2.1,7.16L45.78,7H41.39l-2.11,7.16L37.15,7H32ZM59,5.49a2.77,2.77,0,0,0,2.72-2.77,2.75,2.75,0,0,0-5.5,0A2.78,2.78,0,0,0,59,5.49ZM56.31,21.37h5.36V7H56.31Zm14.92.33A7.82,7.82,0,0,0,77.37,19l-3.53-2.83a3.62,3.62,0,0,1-2.55,1.14,3.08,3.08,0,0,1-3-3.11,3,3,0,0,1,3-3,3.55,3.55,0,0,1,2.5,1.11l3.52-2.89a7.64,7.64,0,0,0-6-2.66c-4.42,0-8.13,3.41-8.13,7.49S66.88,21.7,71.23,21.7Zm17.41-8.49,5-6.19h-6L84,12.07V.69L78.62,3.78V21.37H84v-3.3l1.16-1.45,2.64,4.75h6Zm8.64-7.72A2.77,2.77,0,0,0,100,2.72a2.75,2.75,0,0,0-5.49,0A2.78,2.78,0,0,0,97.28,5.49ZM94.56,21.37h5.36V7H94.56ZM14.68,23.68h0v7.39h-.86v-1.4a3,3,0,0,1-2.68,1.57,3.47,3.47,0,0,1-3.28-3.76,3.47,3.47,0,0,1,3.28-3.75,3,3,0,0,1,2.68,1.57V21.37l.86-.5Zm-.86,3.8c0-1.74-1-3-2.53-3a2.71,2.71,0,0,0-2.54,3,2.73,2.73,0,0,0,2.54,3C12.78,30.45,13.82,29.21,13.82,27.48Zm5.86,3A2.77,2.77,0,0,1,17,27.82H23c0-2.47-1.28-4.09-3.4-4.09a3.61,3.61,0,0,0-3.54,3.73,3.7,3.7,0,0,0,3.6,3.78,4.39,4.39,0,0,0,2.93-1.11l-.55-.59A3.46,3.46,0,0,1,19.68,30.45Zm0-5.93A2.47,2.47,0,0,1,22.16,27H17A2.71,2.71,0,0,1,19.65,24.52Zm7.21,6.72c1.44,0,2.58-.85,2.58-2.07s-1-1.71-2.35-2.13-2-.74-2-1.4.74-1.12,1.61-1.12a4.22,4.22,0,0,1,2.14.68l.43-.67a4.8,4.8,0,0,0-2.57-.8,2.21,2.21,0,0,0-2.47,2c0,1,.68,1.56,2.4,2.05,1.14.35,1.91.69,1.91,1.46s-.74,1.2-1.72,1.2a4.42,4.42,0,0,1-2.52-.92l-.45.64A4.87,4.87,0,0,0,26.86,31.24Zm4.3-8.75a.59.59,0,0,0,.6-.59.6.6,0,1,0-1.2,0A.59.59,0,0,0,31.16,22.49Zm-.43,8.58h.86V23.9h-.86Zm8.12-7.17v1.36a3,3,0,0,0-2.74-1.53,3.24,3.24,0,0,0-3.24,3.4,3.24,3.24,0,0,0,3.24,3.41A3.06,3.06,0,0,0,38.85,29v1.31c0,1.45-1,2.35-2.68,2.35a3.75,3.75,0,0,1-2.41-.85l-.39.69a4.73,4.73,0,0,0,2.9,1,3.17,3.17,0,0,0,3.44-3.15V23.9Zm-2.58,5.85a2.62,2.62,0,1,1,2.58-2.62A2.51,2.51,0,0,1,36.27,29.75Zm8.47-6a2.6,2.6,0,0,0-2.36,1.34V23.9h-.86v7.17h.86V26.5a2.11,2.11,0,0,1,2.25-2,1.92,1.92,0,0,1,1.94,2.05v4.5h.86V26.46A2.6,2.6,0,0,0,44.74,23.73Z"/>
                </svg>
              </a>
            </section>
            <section id="table-info"></section>
            <section id="user-info" class="flex-row">
              <p>Game #${props.game.id}</p>
              <p>Logged in as ${props.user}</p>
              <button type="button" class="account">My Account</button>
              <button type="button" class="logout">Logout</button>
            </section>
          </header>
          <main id="table"></main>
          <footer>
            <p>© Nowicki Design ${new Date().getFullYear()}</p>
          </footer>
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
          <section id="prompts"></section>
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

    let prompts = new Reef('#prompts', {
      store: store,
      template: function(props) {
        return `
        <div class="instructions">
          ${props.game.phase == 'new' ? `
            ${props.game.turn == props.userIndex ? `
              ${props.icons.turn}
              <h3>You` : `<h3>${props.game.players[props.oppoIndex].username}`} must cut the deck to determine the first dealer.</h3>
          ` : ''}
          ${props.game.phase == 'deal' ? `
            ${props.game.dealer == props.userIndex ? `
              ${props.icons.dealer}
              <h3>You are` : `<h3>${props.game.players[props.oppoIndex].username} is`} the dealer.</h3>
            ${props.game.dealer == props.userIndex ? `
              ${props.icons.turn}
              <h3>You` : `<h3>${props.game.players[props.oppoIndex].username}`} must shuffle and deal the cards.</h3>
          ` : ''}
          ${props.game.phase == 'crib' ? `
            ${props.game.turn == props.userIndex ? `
              ${props.icons.turn}
              <h3>You` : `<h3>${props.game.players[props.oppoIndex].username}`} must select two cards to add to ${props.game.dealer == props.userIndex ? 'your' : `their`} crib.</h3>
          ` : ''}
          ${props.game.phase == 'starter' ? `
            ${props.game.turn == props.userIndex ? `
              ${props.icons.turn}
              <h3>You` : `<h3>${props.game.players[props.oppoIndex].username}`} must cut the deck to reveal the starter.</h3>
          ` : ''}
          ${props.game.phase == 'play' ? `
            ${props.game.turn == props.userIndex ? `
              ${props.icons.turn}
              <h3>You` : `<h3>${props.game.players[props.oppoIndex].username}`} must select a card to play or Go!</h3>
          ` : ''}
          ${props.alert != null ? `
            <div class="alert attention flex-row" data-type="${props.alert}">
              ${props.icons.attention}
              ${props.alert == 'go' ? `<h3>If you can play a card from your hand, you must!</h3>` : ''}
              ${props.alert == 'bust' ? `<h3>You can't play a card that will exceed 31!</h3>` : ''}
            </div>
          ` : ``}
        </div>

        `;
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
                return `<div class="card" data-id="${card.id}" data-suit="${card.suit}" data-rank="${card.rank}" data-value="${card.value}">
                  ${cardBack}
                </div>`
              }).join('')}
            </div>
          </div>
          <div class="discard">
            <h2 class="border">${props.game.players[props.oppoIndex].username}'s Discard</h2>
            <div class="cards overlap flex-row">
              ${props.game.players[props.oppoIndex].discard.map(function(card){
                return `<div class="card" data-id="${card.id}" data-suit="${card.suit}" data-rank="${card.rank}" data-value="${card.value}">
                  ${card.svg}
                </div>`
              }).join('')}
            </div>
          </div>
          <div class="crib ${props.game.dealer == props.oppoIndex ? '' : 'is-hidden'}">
            <h2 class="border">${props.game.players[props.oppoIndex].username}'s Crib</h2>
            <div class="cards overlap flex-row">
              ${props.game.crib.map(function(card){
                return `<div class="card" data-id="${card.id}" data-suit="${card.suit}" data-rank="${card.rank}" data-value="${card.value}">
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
                  return `<div class="card" data-id="${card.id}" data-suit="${card.suit}" data-rank="${card.rank}" data-value="${card.value}">
                    ${card.svg}
                  </div>`
                }).join('')}
              </div>
            </div>
            <div class="self ${props.game.players[props.userIndex].colour}">
              <div class="cards overlap flex-row">
                ${props.game.players[props.userIndex].play.map(function(card){
                  return `<div class="card" data-id="${card.id}" data-suit="${card.suit}" data-rank="${card.rank}" data-value="${card.value}">
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
          <div class="hand">
            <div class="section-header border flex-row">
              <h2>My Hand</h2>
              <div class="button-group flex-row">
                <button id="cut" ${(props.game.phase == 'new' && props.userIndex == 2) || (props.game.phase == 'starter' && props.game.dealer != props.userIndex) ? '' : 'disabled'}>Cut</button>
                <button id="deal" ${props.game.phase == 'deal' && props.game.dealer == props.userIndex ? '' : 'disabled'}>Shuffle & Deal</button>
                <button id="go" ${props.game.phase == 'play' && props.game.turn == props.userIndex ? '' : 'disabled'}>Go!</button>
                <button id="switch">Switch</button>
              </div>
            </div>
            <div class="cards flex-row">
              ${props.game.players[props.userIndex].hand.map(function(card){
                return `<button type="button" class="card unstyled" data-id="${card.id}" data-suit="${card.suit}" data-rank="${card.rank}" data-value="${card.value}" ${props.game.turn != props.userIndex ? 'disabled' : ''}>
                  ${card.svg}
                </button>`
              }).join('')}
            </div>
          </div>
          <div class="discard">
            <h2 class="border">My Discard</h2>
            <div class="cards overlap flex-row">
              ${props.game.players[props.userIndex].discard.map(function(card){
                return `<div class="card" data-id="${card.id}" data-suit="${card.suit}" data-rank="${card.rank}" data-value="${card.value}">
                  ${card.svg}
                </div>`
              }).join('')}
            </div>
          </div>
          <div class="crib ${props.game.dealer == props.userIndex ? '' : 'is-hidden'}">
            <h2 class="border">My Crib</h2>
            <div class="cards overlap flex-row">
              ${props.game.crib.map(function(card){
                return `<div class="card" data-id="${card.id}" data-suit="${card.suit}" data-rank="${card.rank}" data-value="${card.value}">
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
                ${item.phase == 'deal' ? `<p class="small">${item.player} is the dealer ${props.icons.dealer}</p>` : ''}
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
                ${item.phase == 'end' ? `
                  <p class="small">${item.player} is the winner!</p>
                ` : ''}
                ${item.phase == 'forfeit' ? `
                  <p class="small">${item.player} forfeited the game</p>
                ` : ''}

                ${(item.cards.other != null || item.cards.starter != null) && index < 5 ? `
                  <div class="cards mini flex-row">
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
    // Initiate the Game Table
    initTable();
  } else {
    window.location.replace(`/`);
  }

  // Refresh game data every 10 seconds
  // setInterval(refreshTable(store.game.id), 10000);

  // Hash change event listeners
  // window.addEventListener('hashchange', function() {
  //
  // })

  // Render event listeners
  // document.addEventListener('reef:render', function (event){
  //
  // })

  // Click event listeners
  document.addEventListener('click', async function(event){

    // Create non-reactive store data object to make changes to
    let storeCopy = store.dataCopy;
    let updateUI = false;
    let updateGame = false;

    //
    // Alerts
    //

    // Dismiss active alert
    storeCopy.alert = null;

    //
    // Dialogs
    //

    // Button to return to profile


    //
    // Change Log
    //

    let eventType;
    let changeLog = {
      user: {
        username: storeCopy.game.players[storeCopy.userIndex].username.toLowerCase(),
        changes: []
      },
      other: {
        username: storeCopy.game.players[storeCopy.oppoIndex].username.toLowerCase(),
        changes: []
      },
      game: {
        id: store.data.game.id,
        changes: []
      }
    }

    if (event.target.classList.contains('logout')) {
      clearLocalStorage();
      window.location.replace('/');
    }

    if (event.target.classList.contains('account')) {
      window.location.replace('/');
    }

    if (event.target.classList.contains('reload')) {
      window.location.reload();
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
        updateUI = true;
        updateGame = true;

        // Add selected card to the crib
        storeCopy.game.crib.push(cards[targetId-1]);
        storeCopy.game.players[storeCopy.userIndex].hand.splice(storeCopy.game.players[storeCopy.userIndex].hand.findIndex(findCard), 1);

        // If user has selected two cards, change turn
        if (storeCopy.game.players[storeCopy.userIndex].hand.length == 4) {
          if (storeCopy.game.turn == storeCopy.userIndex){
            storeCopy.game.turn = storeCopy.oppoIndex;
          } else {
            storeCopy.game.turn = storeCopy.userIndex;
          }
        }

        // If the crib is full, pass to the starter phase, and change turn
        if (storeCopy.game.crib.length === 4){
          storeCopy.game.phase = 'starter';
          if (storeCopy.game.dealer == storeCopy.userIndex){
            storeCopy.game.turn = storeCopy.oppoIndex;
          } else {
            storeCopy.game.turn = storeCopy.userIndex;
          }
        }

      } else if (storeCopy.game.phase === 'play') {
        updateUI = true;

        // Check whether it's the player's turn and the selected card is valid
        if (storeCopy.game.turn == storeCopy.userIndex && (Number(targetCard.value) + storeCopy.game.tally) < 32){
          updateGame = true;

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
            log.description.push('Thirty-one');
            log.value += 2;
            logCardCount = logCardMax;
          }

          // If same rank, assign points
          if (storeCopy.game.play.length > 1 && targetCard.rank == storeCopy.game.play[storeCopy.game.play.length - 2].rank){
            let type;
            storeCopy.game.players[storeCopy.userIndex].score += 2;
            type = 'Double';
            log.value += 2;
            logCardCount = logCardCount < 2 ? logCardCount = 2 : logCardCount;
            if (storeCopy.game.play.length > 2 && targetCard.rank == storeCopy.game.play[storeCopy.game.play.length - 3].rank){
              storeCopy.game.players[storeCopy.userIndex].score += 4;
              type = 'Triple';
              log.value += 4;
              logCardCount = logCardCount < 3 ? logCardCount = 3 : logCardCount;
              if (storeCopy.game.play.length > 3 && targetCard.rank == storeCopy.game.play[storeCopy.game.play.length - 4].rank){
                storeCopy.game.players[storeCopy.userIndex].score += 6;
                type = 'Quadruple';
                log.value += 6;
                logCardCount = logCardCount < 4 ? logCardCount = 4 : logCardCount;
              }
            }
            log.description.push(type);
          }

          // If sequence, assign points
          let run = [];
          if (storeCopy.game.play.length > 2){
            run = findRunsPlay(storeCopy.game.play.map(x => x.rank));
          }

          if (run.length > 2) {
            storeCopy.game.players[storeCopy.userIndex].score += run.length;
            log.description.push(`Run of ${run.length}`);
            log.value += run.length;
            logCardCount = logCardCount < run.length ? logCardCount = run.length : logCardCount;
          }

          if (log.value > 0){
            if (logCardCount == logCardMax){
              log.cards.other = [...storeCopy.game.play];
            } else {
              log.cards.other = [...storeCopy.game.play].slice(-logCardCount);
            }
            storeCopy.game.log.unshift(newLog(storeCopy, log.player, log.description, log.cards, log.value));
            if (storeCopy.game.players[storeCopy.userIndex].score > 60){
              storeCopy.game.winner = storeCopy.game.players[storeCopy.userIndex].username;
              storeCopy.game.winningPlay = newLog(storeCopy, log.player, log.description, log.cards, log.value);
            }
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
          updateGame = true;
          console.log('ROUND END: EXTENDED GO');
          playEnd(storeCopy);

          // If both players no longer have cards, end the play phase
          } else if (storeCopy.game.players[storeCopy.userIndex].hand.length === 0 && storeCopy.game.players[storeCopy.oppoIndex].hand.length === 0){
            console.log('ROUND END: NO CARDS LEFT');
            // Assign the automatic Go! points
            storeCopy.game.players[storeCopy.userIndex].score += 1;
            storeCopy.game.log.unshift(newLog(storeCopy, storeCopy.game.players[storeCopy.userIndex].username, ['Go!'], {starter: null, other: null}, 1));
            if (storeCopy.game.players[storeCopy.userIndex].score > 60){
              storeCopy.game.winner = storeCopy.game.players[storeCopy.userIndex].username;
              storeCopy.game.winningPlay = newLog(storeCopy, storeCopy.game.players[storeCopy.userIndex].username, ['Go!'], {starter: null, other: null}, 1);
            }
            playEnd(storeCopy);
          }

        // Warn player if the selected card is not valid
        } else {
          storeCopy.alert = 'bust';
        }

      }
    }

    // Deal button event listener
    if (event.target.id === 'deal'){
      updateUI = true;
      updateGame = true;
      dealCards(storeCopy);
    }

    // Cut deck button event listener
    if (event.target.id === 'cut'){
      updateUI = true;
      updateGame = true;
      cutDeck(storeCopy);
    }

    // Go button event listener
    if (event.target.id === 'go'){
      updateUI = true;
      updateGame = true;
      go(storeCopy);
      console.log(storeCopy.alert);
    }

    // TESTING
    if (event.target.id === 'switch'){
      updateUI = true;
      let switchPlayer = function(){
        let index1 = storeCopy.userIndex;
        let index2 = storeCopy.oppoIndex;
        storeCopy.userIndex = index2;
        storeCopy.oppoIndex = index1;
      };
      switchPlayer();
    }

    // Check for end of game
    if (storeCopy.game.winner != null && storeCopy.game.phase != 'end') {
      updateUI = true;
      updateGame = true;
      storeCopy.game.phase = 'end';
      console.log('GAME END');

      let winner = {};
      let loser = {};

      if (storeCopy.game.winner == storeCopy.game.players[storeCopy.userIndex].username){
        winner.id = 'user';
        winner.index = storeCopy.userIndex;
        loser.id = 'other';
        loser.index = storeCopy.oppoIndex;
      } else {
        winner.id = 'other';
        winner.index = storeCopy.oppoIndex;
        loser.id = 'user';
        loser.index = storeCopy.userIndex;
      }

      // Reset game variables
      storeCopy.game.turn = null;
      storeCopy.game.dealer = null;
      storeCopy.game.go = null;

      storeCopy.game.date.completed = getDate(true);

      // Add final log
      storeCopy.game.log.unshift(newLog(storeCopy, storeCopy.game.winner));

      // Notify winner
      let notifyWinner = notificationFactory(getDate(), 'win', 'received', changeLog[loser.id].username, changeLog[winner.id].username, changeLog.game.id);

      changeLog[winner.id].changes.push({
        path: 'notifications.unread',
        value: notifyWinner,
        type: 'add'
      })

      // Notify loser
      let notifyLoser = notificationFactory(getDate(), 'lose', 'received', changeLog[winner.id].username, changeLog[loser.id].username, changeLog.game.id);

      changeLog[loser.id].changes.push({
        path: 'notifications.unread',
        value: notifyLoser,
        type: 'add'
      })

      // Log stats
      changeLog[loser.id].changes.push({
        path: 'stats.loses',
        value: 1,
        type: 'plus'
      })
      changeLog[loser.id].changes.push({
        path: 'stats.winStreak',
        value: 0,
        type: 'replace'
      })
      if (storeCopy.game.players[loser.index].score < 61){
        changeLog[loser.id].changes.push({
          path: 'stats.doubleSkunks',
          value: 1,
          type: 'plus'
        })
      } else if (storeCopy.game.players[loser.index].score < 91){
        changeLog[loser.id].changes.push({
          path: 'stats.skunks',
          value: 1,
          type: 'plus'
        })
      }
      if (storeCopy.game.players[loser.index].highestHandScore > storeCopy.players[storeCopy.game.players[loser.index].username.toLowerCase()].stats.highestHandScore){
        changeLog[loser.id].changes.push({
          path: 'stats.highestHandScore',
          value: storeCopy.game.players[loser.index].highestHandScore,
          type: 'replace'
        })
      }
      changeLog[winner.id].changes.push({
        path: 'stats.wins',
        value: 1,
        type: 'plus'
      })
      changeLog[winner.id].changes.push({
        path: 'stats.winStreak',
        value: 1,
        type: 'plus'
      })
      if ((storeCopy.game.players[winner.index].score - storeCopy.game.players[loser.index].score) > storeCopy.players[storeCopy.game.players[winner.index].username.toLowerCase()].stats.biggestLead){
        changeLog[winner.id].changes.push({
          path: 'stats.biggestLead',
          value: storeCopy.game.players[winner.index].score - storeCopy.game.players[loser.index].score,
          type: 'replace'
        })
      }
      if (storeCopy.game.players[winner.index].highestHandScore > storeCopy.players[storeCopy.game.players[winner.index].username.toLowerCase()].stats.highestHandScore){
        changeLog[winner.id].changes.push({
          path: 'stats.highestHandScore',
          value: storeCopy.game.players[winner.index].highestHandScore,
          type: 'replace'
        })
      }

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

      // Reveal game end dialog
      openDialog(storeCopy, 'game-end');

    }


    //
    // UI Updates
    //

    if (updateGame) {
      storeCopy.game.date.updated = getDate(true);
      store.data.game = storeCopy.game
    }

    if (updateUI) {
      console.log('Original', store.data);
      console.log('Changed', storeCopy);
      store.data = storeCopy;
    }


    //
    // API Updates
    //

    if (changeLog.user.changes.length > 0){
      try {
        await updateData(changeLog.user);
      } catch (error) {
        console.error(error);
        // Show dialog and prompt user to reload the page
        openDialog(store.data, 'error');
      }
    }
    if (changeLog.other.changes.length > 0){
      try {
        await updateData(changeLog.other);
      } catch (error) {
        console.error(error);
        // Show dialog and prompt user to reload the page
        openDialog(store.data, 'error');
      }
    }
    if (updateGame){
      changeLog.game.changes.push({
        path: null,
        value: storeCopy.game,
        type: 'replace'
      })
      try {
        await updateData(changeLog.game);
      } catch (error) {
        console.error(error);
        // Show dialog and prompt user to reload the page
        openDialog(store.data, 'error');
      }
    }




  })

})();
