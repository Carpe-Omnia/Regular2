import React from 'react'

const GetPlaces = (props) => {
  function near_me(event){
    event.preventDefault();
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(function(position){
        console.log(position.coords.latitude) ;
        console.log(position.coords.longitude) ;
        var coords = `${position.coords.latitude}, ${position.coords.longitude}` ;
        document.getElementById('places_near').value = coords ;
      })
    }
  }
  return(
    <div>
      <br/>
      <form>
        <label>Looking for:
          <input type="text" id="places_query" />
        </label>
        <br/>
        <label>Near:
          <input type="text" id="places_near" />
        </label>
        <button onClick={event => near_me(event)}>
          me
        </button>
      </form>

      <button onClick={props.actions.get_places} >
        Get Places
      </button>

    </div>
  )
}

export default GetPlaces
