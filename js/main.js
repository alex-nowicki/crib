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
    "friends": [],
    "blocked" : [],
    "notifications": {
      "unread": [],
      "read": []
    },
    "stats": {
      "wins": 0,
      "loses": 0,
      "skunks": 0,
      "doubleSkunks": 0,
      "highestHandScore": 0,
      "winStreak": 0,
      "biggestLead": 0
    }
  }
}

const notificationFactory = (date, type, status, sender, recipient, content) => {
  return {
    "date": date,
    "type": type,
    "status": status,
    "sender": sender,
    "recipient": recipient,
    "content": content
  }
}

const gameFactory = (id, player1, player2, dateCreated) => {
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
        "username": player1,
        "colour": "orange",
        "score": 0,
        "hand": [],
        "play": [],
        "discard": []
      },
      2: {
        "username": player2,
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
    "log": [],
    "winner": null
  }
}




//
// Methods
//

// Helper Functions


let setObjectValue = function (obj, type, path, value){

  /**
	 * If the path is a string, convert it to an array
	 * @param  {String|Array} path The path
	 * @return {Array}             The path array
	 */
	let stringToPath = function (path) {
		// If the path isn't a string, return it
		if (typeof path !== 'string') return path;
		// Create new array
		let output = [];
		// Split to an array with dot notation
		path.split('.').forEach(function (item, index) {
			// Split to an array with bracket notation
			item.split(/\[([^}]+)\]/g).forEach(function (key) {
				// Push to the new array
				if (key.length > 0) {
					output.push(key);
				}
			});
		});
		return output;
	};

	// Convert the path to an array if not already
	path = stringToPath(path);

  // Store the path length and the current place in the object
  let length = path.length;
  let current = obj;

  // Loop through the path
  path.forEach(function (key, index) {
    // If last item in the loop, assign the value
    if (index === length - 1){
      if (type == 'replace'){
        current[key] = value;
      } else if (type == 'add'){
        current[key].unshift(value);
      } else if (type == 'remove'){
        current[key].splice(current[key].indexOf(value), 1);
      } else if (type == 'plus'){
        current[key] += value;
      }
      console.log(current);
    // Otherwise, update the current place in the object
    } else {
      // If the key doesn't exist, create it
      if (!current[key]){
        current[key] = {};
      }
      // Update the current place in the object
      current = current[key];
    }
  });
}


/**
 * Return today's date
 * @param {Boolean} detailed - Include hours and minutes
 * @return {String}          - Returns the current date
 */
 let getDate = function(detailed) {
   let date = new Date();
   let day = String(date.getUTCDate());
   let month = String(date.getUTCMonth() + 1);
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

 let getDiffDate = function(date) {
   let diff = new Date().getTime() - new Date(date).getTime();
   let days = Math.floor(diff / (1000 * 60 * 60 * 24));
   diff = diff % (1000 * 60 * 60 * 24);
   let hours = Math.floor(diff / (1000 * 60 * 60));
   diff = diff % (1000 * 60 * 60);
   let minutes = Math.floor(diff / (1000 * 60));
   return `${days > 0 ? `${days} days ` : ''}${hours > 0 ? `${hours} hours ` : ''}${minutes} min`;
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

let checkUsername = async function(username, callback) {
  await fetch(`https://crib.nowicki.workers.dev?player=${username.toLowerCase()}`).then(function (response) {
      if (response.ok) {
          return response.json();
      }
      throw response.status;
  }).then(function (data) {
      console.log('User Exists', data);
      callback(true);
  }).catch(function (error) {
      console.warn('User Does Not Exist', error);
      callback(false);
  });
}

let checkGame = async function(id, callback) {
  await fetch(`https://crib.nowicki.workers.dev?game=${id}`).then(function (response) {
      if (response.ok) {
          return response.json();
      }
      throw response.status;
  }).then(function (data) {
      console.log('Game Exists', data);
      callback(true);
  }).catch(function (error) {
      console.warn('Game Does Not Exist', error);
      callback(false);
  });
}

/**
 * Get player profile from API
 * @param {String} username     - Username
 * @return {Object or Boolean}  - Returns profile object or false if none exists
 */
let getProfileData = async function(username, gamelist, callback) {

    let player = {};
    let games = {
      open: [],
      closed: []
    };

    await fetch(`https://crib.nowicki.workers.dev?player=${username.toLowerCase()}`).then(function (response) {
        if (response.ok) {
            return response.json();
        }
        throw response.status;
    }).then(function (data) {
        console.log('Player Loaded', data);
        player = data;
    }).catch(function (error) {
        console.warn('Player Not Loaded', error);
        return false;
    });

    if (gamelist){

      for (let i = 0; i < player.games.open.length; i++){
        await fetch(`https://crib.nowicki.workers.dev?game=${player.games.open[i]}`).then(function (response) {
            if (response.ok) {
                return response.json();
            }
            throw response.status;
        }).then(function (data) {
            console.log('Game Loaded', data);
            games.open.push(data);
        }).catch(function (error) {
            console.warn('Game Not Loaded', error);
            return false;
        });
      }

      for (let i = 0; i < player.games.closed.length; i++){
        await fetch(`https://crib.nowicki.workers.dev?game=${player.games.closed[i]}`).then(function (response) {
            if (response.ok) {
                return response.json();
            }
            throw response.status;
        }).then(function (data) {
            console.log('Game Loaded', data);
            games.closed.push(data);
        }).catch(function (error) {
            console.warn('Game Not Loaded', error);
            return false;
        });
      }

    }
    callback(player, games);
    // return apiData;
}

/**
 * Get game data from API
 * @param {String} id           - Game id
 * @return {Object or Boolean}  - Returns game data object or false if none exists
 */
let getTableData = async function(id, playerlist, callback) {
    let game = {};
    let players = {};

    await fetch(`https://crib.nowicki.workers.dev?game=${id}`).then(function (response) {
        if (response.ok) {
            return response.json();
        }
        throw response.status;
    }).then(function (data) {
        console.log('Game Loaded', data);
        game = data;
    }).catch(function (error) {
        console.warn('Game Not Loaded', error);
        return false;
    });

    if (playerlist){

      if (game.players[1].username != null){
        await fetch(`https://crib.nowicki.workers.dev?player=${game.players[1].username.toLowerCase()}`).then(function (response) {
            if (response.ok) {
                return response.json();
            }
            throw response.status;
        }).then(function (data) {
            console.log('Player 1 Loaded', data);
            players[game.players[1].username.toLowerCase()] = data;
        }).catch(function (error) {
            console.warn('Player 1 Not Loaded', error);
            return false;
        });
      }

      if (game.players[2].username != null){
        await fetch(`https://crib.nowicki.workers.dev?player=${game.players[2].username.toLowerCase()}`).then(function (response) {
            if (response.ok) {
                return response.json();
            }
            throw response.status;
        }).then(function (data) {
            console.log('Player 2 Loaded', data);
            players[game.players[2].username.toLowerCase()] = data;
        }).catch(function (error) {
            console.warn('Player 2 Not Loaded', error);
            return false;
        });
      }

    }

    callback(game, players);
    // return apiData;
}

/**
 * Get, update and upload player profile data
 * @param {String} player1 - Username of player 1
 * @param {String} player2 - Username of player 2
 * @callback callback - Returns game object
 */
let createGame = async function(player1, player2, callback){
  // Generate game id
  let id;
  let checking = true;
  while (checking) {
    // Generate a random 9 digit game id
    id = Math.floor(100000000 + Math.random() * 900000000);
    // Check API to see if id is already in use, if so try again, otherwise break
    await checkGame(id, function(check){
      if (!check){
        checking = false;
      }
    });
  }
  let game = gameFactory(id, player1, player2, getDate());
  await setGame(game, function(created){
    if(created){
      console.log('New Game Created');
    } else {
      console.warn('New Game Not Created');
    }
  });
  callback(game);
}

/**
 * Get, update and upload player profile data
 * @param {String} username - Player to update
 * @param {Object} changes - Changes to be made
 * @callback callback - Returns boolean and updated player object
 */
let updateProfileData = async function(username, changes, callback) {
  await getProfileData(username, false, async function(player){
    for (const elem of changes){
      await setObjectValue(player, elem.type, elem.path, elem.value);
    }
    await setPlayer(player, function(updated){
      if (updated){
        callback(true, player);
      } else {
        callback(false);
      }
    });
  })
}

/**
 * Get, update and upload game data
 * @param {String} id - Game to update
 * @param {Object} changes - Changes to be made
 * @callback callback - Returns boolean and updated game object
 */
let updateGameData = async function(id, changes, callback) {
  await getTableData(id, false, async function(game){
    for (const elem of changes){
      await setObjectValue(game, elem.type, elem.path, elem.value);
    }
    await setGame(game, function(updated){
      if (updated){
        callback(true, game);
      } else {
        callback(false);
      }
    });
  })
}

/**
 * Send updated player profile data to API
 * @param {Object} data - Player data object
 * @callback callback - Returns boolean
 */
let setPlayer = async function(data, callback){
  await fetch('https://crib.nowicki.workers.dev', {
    method: 'PUT',
    body: JSON.stringify(data),
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
      callback(true);
  }).catch(function (error) {
      console.warn('Player Not Updated', error);
      callback(false);
  });
}

/**
 * Send updated game data to API
 * @param {Object} data - Game data object
 * @callback callback - Returns boolean
 */
let setGame = async function(data, callback){
  await fetch('https://crib.nowicki.workers.dev', {
    method: 'PUT',
    body: JSON.stringify(data),
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
      callback(true);
  }).catch(function (error) {
      console.warn('Game Not Updated', error);
      callback(false);
  });
}




//
// Inits & Event Listeners
//




//
// Exports
//

export { cards, playerFactory, notificationFactory, gameFactory, checkLocalStorage, clearLocalStorage, checkUsername, checkGame, getDate, getDiffDate, getProfileData, getTableData, createGame, updateProfileData, updateGameData, setPlayer, setGame};
