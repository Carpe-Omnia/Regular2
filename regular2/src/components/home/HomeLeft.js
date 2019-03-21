import React from 'react';
import NavArrow from '../NavArrow'

const ParentTopLeft = (props) => {
  return(
    <div id="parent-top-left" className="parentElement main_page_content">
      <NavArrow direction="Right" actions={props.actions} z={props.z} text="Home"/>
      <h3> Top-left </h3>
    </div>
  )
}

export default ParentTopLeft
