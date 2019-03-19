import React from 'react'

const NavArrow = (props) => {
  var name = `arrow ${props.direction}`
  var textname = `arrow ${props.direction}_text`
  function doClick(){
    props.actions.move(props.direction, props.z);
  }
  return (
    <div className={`arrow_holder_${props.direction}`}>
      <div className={name} onClick={doClick}>
        ^
        <div className={`${textname}`}>
          {props.text}
        </div>
      </div>
    </div>
  )
}

export default NavArrow
