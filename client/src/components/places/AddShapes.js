import React from 'react'
import add_shapes from './placeHelpers/place_shapes' ;

const AddShapes = (props) => {
  return(
    <div id="addShapes">
      <button onClick={event => add_shapes(event)}>
        Add Shapes
      </button>
    </div>
  )
}

export default AddShapes
