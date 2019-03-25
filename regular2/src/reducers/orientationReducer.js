function orientationReducer(state={
  orientation: [[0,0],[0,0],[0,0]],
  all_jokes: [],
  my_jokes: [],
  datapackage: [],
  profile: {
    name: "",
    bio: {headline: "", content: ""}
  }
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
        //return {orientation: newOr} ;
      }
      if (action.payload.direction === "Right") {
        pos[0] < 1 ? newOr[z] =   [pos[0] + 1, pos[1] ] : newOr = state.orientation ;
        return Object.assign({}, state, {orientation: newOr})
        //return {orientation: newOr} ;
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
    default:
      return state
  }
}

export default orientationReducer
