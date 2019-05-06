import React from 'react' ;
import NavArrow from '../NavArrow' ;

const NewColor = (props) => {
  return(
    <div>
      <NavArrow direction="Right" actions={props.actions} z={props.z} text="colors" />
      <div className="main_page_content">
        This is new color
      </div>
    </div>
  )
}
export default NewColor ;
