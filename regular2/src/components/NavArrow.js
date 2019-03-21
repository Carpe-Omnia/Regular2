import React from 'react'

const NavArrow = (props) => {
  var name = `arrow ${props.direction}`
  var textname = `arrow ${props.direction}_text` ;
  var holdername = `arrow_holder_${props.direction}`
  function doClick(){
    document.getElementById(name).className = `moving_${props.direction}`
    var main_content = document.querySelector('.main_page_content');
    if (!!main_content){
      main_content.className = `content_moving_${props.direction}`
    }
    setTimeout(function(){props.actions.move(props.direction, props.z);}, 500);
  }
  return (
    <div className={holdername} id={holdername} >
      <div className={name} id={`${name}`} onClick={doClick}>
        ^
        <div className={`${textname}`} id={`${textname}`}>
          {props.text}
        </div>
      </div>
    </div>
  )
}

export default NavArrow
