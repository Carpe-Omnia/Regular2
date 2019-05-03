import React from 'react';
var dark_mode_on = false ;
class ToggleDarkMode extends React.Component {
  doThing = (event) => {
    console.log("toggling dark mode");
    if(dark_mode_on){
      document.documentElement.style.setProperty('--darkmode_off-display', 'inline') ;
      document.documentElement.style.setProperty('--darkmode_on-display', 'none') ;
      document.documentElement.style.setProperty('--main-theme-color', 'rgb(245, 248, 250)') ; /*off-white*/
      document.documentElement.style.setProperty('--secondary-theme-color', 'rgb(230, 236, 240)') ; /*grey*/
      document.documentElement.style.setProperty('--main-text-color', 'rgb(20, 23, 26)') ; /*black*/
      dark_mode_on = false ;
    }
    else{
      document.documentElement.style.setProperty('--darkmode_off-display', 'none') ;
      document.documentElement.style.setProperty('--darkmode_on-display', 'inline') ;
      document.documentElement.style.setProperty('--main-theme-color', 'rgb(62, 66, 81)') ; /*dark dark grey*/
      document.documentElement.style.setProperty('--secondary-theme-color', 'rgb(20, 23, 26)') ; /*black*/
      document.documentElement.style.setProperty('--main-text-color', 'rgb(245, 248, 250)') ; /*off-white*/
      dark_mode_on = true ;
    }
  }
  render(){
    return(
      <form>
        <span onClick={event => this.doThing(event)}>
          <span className="darkmode_off">
            Enable Dark Mode
          </span>
          <span className="darkmode_on">
            Disable Dark Mode
          </span>
        </span>
      </form>
    )
  }
}

export default ToggleDarkMode ;
