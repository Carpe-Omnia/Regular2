import React from 'react';
import NavArrow from '../NavArrow'

const ParentTopRight = (props) => {
  return(
    <div id="parent-top-right" className="parentElement main_page_content" >
      <NavArrow direction="Left" actions={props.actions} z={props.z} text="Home"/>
      <h3> Top-Right </h3>

    </div>
  )
}

export default ParentTopRight
