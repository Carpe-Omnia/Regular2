import React from 'react';
var hotkeys_on = true ;
function doHotkeyToggle(event){
  event.preventDefault();
  if(hotkeys_on){
    document.documentElement.style.setProperty('--hotkeys_on-display', 'none') ;
    document.documentElement.style.setProperty('--hotkeys_off-display', 'inline') ;
    hotkeys_on = false ;
  }
  else{
    document.documentElement.style.setProperty('--hotkeys_on-display', 'inline') ;
    document.documentElement.style.setProperty('--hotkeys_off-display', 'none') ;
    hotkeys_on = true ;
  }
}
class ToggleHotkeys extends React.Component {
  render(){
    return(
      <div className="non_mobile1">
        <span >
          <span className="hotkeys_on">
            Disable hotkeys
          </span>
          <span className="hotkeys_off">
            Enable hotkeys
          </span>
        </span>
      </div>
    )
  }
}
export default ToggleHotkeys ;
export {hotkeys_on, doHotkeyToggle} ;
