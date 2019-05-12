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
    <div id="get_places_div">
      <br/>
      <form id="places_form">
        <div className="places_input_div">
          <input type="text" id="places_query" placeholder="Looking For" className="places_input_entry"/>
           <span className="places_input_span"></span>
        </div>
        <div className="places_input_div">
          <input type="text" id="places_near" placeholder="Near" className="places_input_entry"/>
           <span className="places_input_span"></span>
        </div>
      </form>
      <button onClick={event => near_me(event)}>me</button>
      <button onClick={props.actions.get_places} >
        Get Places
      </button>

    </div>
  )
}

export default GetPlaces
