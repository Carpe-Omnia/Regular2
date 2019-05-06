import React from 'react' ;
import NavArrow from '../NavArrow' ;
const MyColors = (props) => {
  return(
    <div>
        <NavArrow direction="Left" actions={props.actions} z={props.z} text="colors" />
        <div className="main_page_content">
          This is my Colors
        </div>
    </div>
  )
}
export default MyColors ;
