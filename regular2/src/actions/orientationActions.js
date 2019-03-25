export function move(direction, z){
  return (
    {
      type: 'MOVE_ORIENTATION',
      payload: {
        direction: direction,
        z: z
      }
    }
  )
}

export function home(){
  return (
    {
      type: 'DEFAULT_ORIENTATION',
      payload: {
        orientation: [[0,0],[0,0],[0,0]],
        z: 0
      }
    }
  )
}
export function set_testing(){
  return (dispatch) => {
    return fetch('/api/jokes/testing')
      .then(response => response.json())
      .then(function(json){
        dispatch({
          type: 'SET_TESTING',
          payload: {
            testing: json.data
          }
        })
      })
  }
}

export function set_all_jokes(){
  return (dispatch) => {
    return fetch(`/api/jokes/index`)
        .then(res => res.json())
        .then(function(json){
          dispatch({
            type: 'SET_ALL_JOKES',
            payload: {
              all_jokes: json.data
            }
          })
        })
  }
}


export function add_joke(joke){
  return (
    {
      type: 'ADD_JOKE',
      payload: {
        joke: joke
      }
    }
  )
}

export function set_data_package(id){
  return(dispatch) => {
    return fetch(`api/messages/index/${id}`)
    .then (res => res.json())
    .then (function(json){
      dispatch({
        type: 'SET_DATAPACKAGE',
        payload: {
          datapackage: json.data.datapackage
        }
      })
    })
  }
}

export function set_profile(username){
  return(dispatch) => {
    return fetch(`api/users/show/${username}`)
      .then(res => res.json())
      .then(function(json){
        dispatch({
          type: 'SET_PROFILE',
          payload: {
            profile: {
              name: json.data.name,
              bio: json.data.bio
            }
          }
        })
      })
  }
}
export function set_my_jokes(id){
  return(dispatch) => {
    return fetch(`/api/jokes/myjokes/${id}`)
      .then(res => res.json())
      .then(function(json){
        dispatch({
          type: 'SET_MY_JOKES',
          payload: {
            my_jokes: json.data
          }
        })
      })
  }
}
