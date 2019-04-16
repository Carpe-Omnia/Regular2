import React from 'react'
import Map from './Map'

const GetPlaces = (props) => {
  return(
    <div>
      This is Places:
      <form>
        Looking for:<input type="text" id="places_query" /><br/>
        Near: <input type="text" id="places_near" /><br/>
      </form>
      <button onClick={props.actions.get_places}>
        Get Places
      </button>
    </div>
  )
}

export default GetPlaces
