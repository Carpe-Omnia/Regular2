function orientationReducer(state={
  orientation: [[0,0],[0,0],[0,0],[0,0]],
  all_jokes: [],
  my_jokes: [],
  datapackage: [],
  profile: {
    name: "",
    bio: {headline: "", content: ""}
  },
  testing: "",
  locations: [],
  user: {},
  snackbar_message: "",
  colors: [],
  my_colors: [],
  my_palettes: []
}, action){
  var newOr = state.orientation ;
  switch(action.type) {
    case 'DEFAULT_ORIENTATION':
      return state
    case 'MOVE_ORIENTATION':
      var z = parseInt(action.payload.z, 10);
      var pos = state.orientation[z] ;
      if (action.payload.direction === "Left"){
        pos[0] > -1 ? newOr[z] =  [ pos[0] - 1, pos[1] ]  : newOr = state.orientation ;
        return Object.assign({}, state, {orientation: newOr})
      }
      if (action.payload.direction === "Right") {
        pos[0] < 1 ? newOr[z] =   [pos[0] + 1, pos[1] ] : newOr = state.orientation ;
        return Object.assign({}, state, {orientation: newOr})
      }
      else {
        return state
      }
    case 'SET_ALL_JOKES':
      return Object.assign({}, state, {all_jokes: action.payload.all_jokes})
    case 'SET_MY_JOKES':
      return Object.assign({}, state, {my_jokes: action.payload.my_jokes})
    case 'SET_DATAPACKAGE':
      return Object.assign({}, state, {datapackage: action.payload.datapackage})
    case 'SET_PROFILE':
      return Object.assign({}, state, {profile: action.payload.profile})
    case 'SET_TESTING':
      return Object.assign({}, state, {testing: action.payload.testing})
    case 'SET_LOCATIONS':
      return Object.assign({}, state, {locations: action.payload.locations})
    case 'SET_USER':
      return Object.assign({}, state, {user: action.payload.user})
    case 'SET_SNACKBAR_MESSAGE':
      return Object.assign({}, state, {snackbar_message: action.payload.snackbar_message})
    case 'SET_COLORS':
      return Object.assign({}, state, {colors: action.payload.colors})
    case 'ADD_TO_MY_COLORS':
      return Object.assign({}, state, {
        my_colors: [action.payload.color, ...state.my_colors]
      })
    case 'SET_MY_COLORS':
      return Object.assign({}, state, {my_colors: action.payload.colors})
    case 'ADD_TO_MY_PALETTES':
      let other_palettes = state.my_palettes.filter(function(palette){
          return palette.id !== action.payload.palette.id ;
      })
      return Object.assign({}, state, {
        my_palettes: [action.payload.palette, ...other_palettes]
      })
    case 'ADD_TO_PALETTE':
      let num_palettes = state.my_palettes.length ;
      other_palettes = state.my_palettes.filter(function(palette){
        return palette.id !== action.payload.palette.id ;
      })
      return Object.assign({}, state, {
        my_palettes: [
          ...other_palettes,
          {
            name: action.payload.palette.name,
            colors: [...action.payload.palette.colors, action.payload.color]
          }
        ]
      })
    case 'ADD_JOKE':
      return Object.assign({}, state, {
        all_jokes: [action.payload.joke, ...state.all_jokes],
        my_jokes: [action.payload.joke, ...state.my_jokes],
      })
    default:
      return state
  }
}

export default orientationReducer
