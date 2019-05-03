import React from 'react';
var hotkeys_on = true ;
class ToggleHotkeys extends React.Component {
  doThing = (event) => {
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
  render(){
    return(
      <form>
        <span className="non_mobile1" onClick={event => this.doThing(event)}>
          <span className="hotkeys_on">
            Disable hotkeys
          </span>
          <span className="hotkeys_off">
            Enable hotkeys
          </span>
        </span>
      </form>
    )
  }
}
export default ToggleHotkeys ;
export {hotkeys_on} ;
