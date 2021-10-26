//
// Global Variables
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

const playerFactory = (username) => {
  return {
    "username" : username,
    "games": {
      "open": [],
      "closed": []
    },
    "friends": {
      "accepted": [],
      "blocked": []
    },
    "invites": [],
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
      "updated": dateCreated,
      "completed": null
    },
    "players": {
      1: {
        "username": username,
        "colour": "orange",
        "score": 0,
        "hand": [],
        "play": [],
        "discard": []
      },
      2: {
        "username": null,
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
 * Check local storage for saved username, if found, skip login
 * @return {String}   - Stored username of returning player
 */
let checkLocalStorage = function() {
  // Retrieve user from local storage
  let username = localStorage.getItem('user');
  if (username){
    return username;
  }
}

/**
 * Clear local storage of saved username, refresh page
 */
let clearLocalStorage = function() {
  let username = localStorage.getItem('user');
  if (username){
    localStorage.removeItem('user');
  }
}

let login = async function(username, callback){
  let checkUser = await getProfileData(username, 'check')
  if (checkUser){
    localStorage.setItem('user', username);
    callback(username);
  } else {
    console.warn('User Does Not Exist');
    // *Display warning to user
  }
}

let signup = async function(username, callback){
  let checkUsername = await getProfileData(username, 'check');
  console.log(checkUsername);
  if (!checkUsername){
    let userData = playerFactory(username);
    console.log(userData);
    await setPlayer(userData);
    localStorage.setItem('user', username);
    callback(username, userData);
  } else {
    console.warn('Username Already In Use');
    // *Display warning to user
  }
}

/**
 * Get player profile from API
 * @param {String} username     - Username
 * @return {Object or Boolean}  - Returns profile object or false if none exists
 */
let getProfileData = async function(username, purpose, callback) {
  if (purpose == 'check'){
    let check;
    await fetch(`https://crib.nowicki.workers.dev?player=${username.toLowerCase()}`).then(function (response) {
        if (response.ok) {
            return response.json();
        }
        throw response.status;
    }).then(function (data) {
        console.log('User Exists', data);
        check = true;
    }).catch(function (error) {
        console.warn('User Does Not Exist', error);
        check = false;
    });
    return check;

  } else if (purpose == 'load'){
    let apiData = {
      player: {},
      games: {
        open: [],
        closed: []
      }
    }
    await fetch(`https://crib.nowicki.workers.dev?player=${username.toLowerCase()}`).then(function (response) {
        if (response.ok) {
            return response.json();
        }
        throw response.status;
    }).then(function (data) {
        console.log('Player Loaded', data);
        apiData.player = data;
    }).catch(function (error) {
        console.warn('Player Not Loaded', error);
        return false;
    });

    console.log(apiData);

    for (let i = 0; i < apiData.player.games.open.length; i++){
      await fetch(`https://crib.nowicki.workers.dev?game=${apiData.player.games.open[i]}`).then(function (response) {
          if (response.ok) {
              return response.json();
          }
          throw response.status;
      }).then(function (data) {
          console.log('Game Loaded', data);
          apiData.games.open.push(data);
      }).catch(function (error) {
          console.warn('Game Not Loaded', error);
          return false;
      });
    }

    console.log(apiData);
    callback(apiData);
    return apiData;

  }

  // Local testing API
  // if (playersAPI[username.toLowerCase()] !== null){
  //   return playersAPI[username.toLowerCase()];
  // } else {
  //   console.log('ERROR: Player not found');
  //   return false;
  // }
}

/**
 * Get game data from API
 * @param {String} id           - Game id
 * @return {Object or Boolean}  - Returns game data object or false if none exists
 */
let getTableData = async function(id, purpose, callback) {
  if (purpose == 'check'){
    let check;
    await fetch(`https://crib.nowicki.workers.dev?game=${id}`).then(function (response) {
        if (response.ok) {
            return response.json();
        }
        throw response.status;
    }).then(function (data) {
        console.log('Game Exists', data);
        check = true;
    }).catch(function (error) {
        console.warn('Game Does Not Exist', error);
        check = false;
    });
    return check;

  } else if (purpose == 'load') {
    let apiData = {
      game: {},
      players: {}
    };
    await fetch(`https://crib.nowicki.workers.dev?game=${id}`).then(function (response) {
        if (response.ok) {
            return response.json();
        }
        throw response.status;
    }).then(function (data) {
        console.log('Game Loaded', data);
        apiData.game = data;
    }).catch(function (error) {
        console.warn('Game Not Loaded', error);
        return false;
    });

    if (apiData.game.players[1].username != null){
      await fetch(`https://crib.nowicki.workers.dev?player=${apiData.game.players[1].username.toLowerCase()}`).then(function (response) {
          if (response.ok) {
              return response.json();
          }
          throw response.status;
      }).then(function (data) {
          console.log('Player 1 Loaded', data);
          apiData.players[apiData.game.players[1].username.toLowerCase()] = data;
      }).catch(function (error) {
          console.warn('Player 1 Not Loaded', error);
          return false;
      });
    }

    if (apiData.game.players[2].username != null){
      await fetch(`https://crib.nowicki.workers.dev?player=${apiData.game.players[2].username.toLowerCase()}`).then(function (response) {
          if (response.ok) {
              return response.json();
          }
          throw response.status;
      }).then(function (data) {
          console.log('Player 2 Loaded', data);
          apiData.players[apiData.game.players[2].username.toLowerCase()] = data;
      }).catch(function (error) {
          console.warn('Player 2 Not Loaded', error);
          return false;
      });
    }

    callback(apiData);
    return apiData;
  }

  // Local testing API
  // if (gamesAPI[id] !== null){
  //   return gamesAPI[id];
  // } else {
  //   console.log('ERROR: Game not found');
  //   return false;
  // }

}

let createGame = async function(username, player, callback){

  // Generate game id
  let id;
  let checking = true;
  while (checking) {
    // Generate a random 9 digit game id
    id = Math.floor(100000000 + Math.random() * 900000000);
    // Check API to see if id is already in use, if so try again, otherwise break
    let checkID = await getTableData(id, 'check');
    if (checkID){
      continue;
    } else {
      checking = false;
    }
  }
  let game = gameFactory(id, username, getDate());
  player.games.open.push(game.id);
  await setPlayer(player)
  await setGame(game);
  callback(player, game);
}




/**
 * Send updated player profile data to API
 * @param {String} data         - Player data object
 * @param {Boolean} create      - Whether new player
 * @return {Object or Boolean}  - Returns game data object or false if none exists
 */
let setPlayer = async function(data){
  await fetch('https://crib.nowicki.workers.dev', {
    method: 'PUT',
    body: JSON.stringify(data),
    // THIS WORKS (TESTED)
    // body: JSON.stringify({
    //     username: username,
    //     data: data
    // }),
    headers: {
        'Content-Type': 'application/json'
    }
  }).then(function (response) {
      if (response.ok) {
          return response.json();
      }
      throw response.status;
  }).then(function (data) {
      console.log('Player Updated', data);
  }).catch(function (error) {
      console.warn('Player Not Updated', error);
  });
}

let setGame = async function(data){
  await fetch('https://crib.nowicki.workers.dev', {
    method: 'PUT',
    body: JSON.stringify(data),
    // body: JSON.stringify({
    //     id: 5,
    //     spell: 'You shall not pass!',
    //     pet: 'none'
    // }),
    headers: {
        'Content-Type': 'application/json'
    }
  }).then(function (response) {
      if (response.ok) {
          return response.json();
      }
      throw response.status;
  }).then(function (data) {
      console.log('Game Updated', data);
  }).catch(function (error) {
      console.warn('Game Not Updated', error);
  });
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
      "updated": getDate(true),
      "completed": null
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
    "turn": 1,
    "go": null,
    "phase": "new",
    "log": []
  },
  2: {
    "id": 2,
    "date": {
      "created": getDate(),
      "updated": getDate(true),
      "completed": null
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
    "turn": 1,
    "go": null,
    "phase": "new",
    "log": []
  },
  3: {
    "id": 3,
    "date": {
      "created": getDate(),
      "updated": getDate(true),
      "completed": null
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
    "turn": 2,
    "go": null,
    "phase": "new",
    "log": []
  },
  4: {
    "id": 4,
    "date": {
      "created": getDate(),
      "updated": getDate(true),
      "completed": null
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
    "turn": 1,
    "go": null,
    "phase": "new",
    "log": []
  }
};




//
// Exports
//

export { cards, playerFactory, gameFactory, checkLocalStorage, clearLocalStorage, login, signup, getDate, getProfileData, getTableData, createGame, setPlayer, setGame, playersAPI, gamesAPI };
