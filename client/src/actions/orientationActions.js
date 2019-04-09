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

export function get_places(){
    var secret = 'B1WRD5T3HV10AFZMFFP4LVZ5UV4JY0OAWJMVS5W000AR1RO3'
    var id = 'OCCZ4YBNA05XSNJ2FCMDKAM5R0DLAUZJX2AMWGZWPDMUT0U2'
    var query = "coffee"
    var near = "princeton"
    return (dispatch) => {
    fetch(`https://api.foursquare.com/v2/venues/search?client_id=${id}&client_secret=${secret}&v=20160201&m=foursquare&near=${near}&query=${query}`)
    .then(res => res.json())
    .then(function(json){

      dispatch({
        type: 'SET_LOCATIONS',
        payload: {
          locations: json.response.venues
        }
      });
      console.log(json.response.venues)
      //document.getElementById('testing').innerHTML += (`${locations[0]}`)
    })
  }
}