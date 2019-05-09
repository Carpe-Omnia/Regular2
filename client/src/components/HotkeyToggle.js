import React from 'react';
import {toggle_on, toggle_off} from '../style/icons' ;
var hotkey_helpers_on = true ;
function doToggleHotkey(event){
  event.preventDefault();
  if(hotkey_helpers_on){
    document.documentElement.style.setProperty('--non_mobile-display', 'none') ;
    document.documentElement.style.setProperty('--anti_mobile-display', 'inline') ;
    hotkey_helpers_on = false ;
  }
  else{
    document.documentElement.style.setProperty('--non_mobile-display', 'inline') ;
    document.documentElement.style.setProperty('--anti_mobile-display', 'none') ;
    hotkey_helpers_on = true ;
  }
}
class HotkeyToggle extends React.Component {
  render() {
    return (
      <div>
        <span className="non_mobile1" >
          <span className="non_mobile">
            Disable hotkey helpers
          </span>
          <span className="anti_mobile">
            Enable hotkey helpers
          </span>
        </span>
      </div>
    )
  }
}

export default HotkeyToggle
export {doToggleHotkey}
