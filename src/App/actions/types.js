// Define list of actions
const actions = [
  // Usuarios
  "SIGN_USER",
  "ADD_ALBUM",
  "ADD_SONG",
  
  //SERVER
  "ALBUMS",
  "SONGS",

  //PLAYER
  "PLAY_SONG",
];

// Convert into Object
const actionTypes = {};
  actions.forEach(action => {
    actionTypes[action] = action;
  });


export default actionTypes;