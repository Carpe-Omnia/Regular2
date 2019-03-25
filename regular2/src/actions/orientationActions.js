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

export function set_all_jokes(all_jokes){
  return (
    {
      type: 'SET_ALL_JOKES',
      payload: {
        all_jokes: all_jokes
      }
    }
  )
}

export function set_my_jokes(my_jokes){
  return (
    {
      type: 'SET_MY_JOKES',
      payload: {
        my_jokes: my_jokes
      }
    }
  )
}

export function set_data_package(datapackage){
  return (
    {
      type: 'SET_DATAPACKAGE',
      payload: {
        datapackage: datapackage
      }
    }
  )
}

export function set_profile(profile){
  return (
    {
      type: 'SET_PROFILE',
      payload: {
        profile: profile
      }
    }
  )
}
