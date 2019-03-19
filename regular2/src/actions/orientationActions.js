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
        orientation: [[0,0],[0,0][0,0]],
        z: 0
      }
    }
  )
}
