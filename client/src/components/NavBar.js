import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import Hotkey from './Hotkey'
import HotkeyToggle from './HotkeyToggle'
import ToggleHotkeys from './ToggleHotkeys'
import ToggleDarkMode from './ToggleDarkMode'

class NavBar extends React.Component {
  state = {
    anchorE1: null
  };
  handleClick = event => {
     this.setState({ anchorEl: event.currentTarget });
   };
  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  render(){
    const { anchorEl } = this.state;
    return ( //stuff that the user sees no matter what

      <div className="navbar" >
        <span >
          <NavLink className="navlink" to="/places" exact id="navlink0" >
            <span className="navlink_icon">
              <i className="material-icons">map</i>
            </span>
            <span className="navlink_text"> Places </span>
            <Hotkey text="0" click={true} />
          </NavLink>
        </span>

        <span >
          <NavLink className="navlink" to="/" exact id="navlink1">
            <span className="navlink_icon">
              <i className="material-icons">home</i>
            </span>
            <span className="navlink_text"> Home </span>
            <Hotkey text="1" click={true} />
          </NavLink>
        </span>
        <span >
            <NavLink className="navlink" to="/jokes" id="navlink2">
              <span className="navlink_icon">
                <i className="material-icons">view_list</i>
              </span>
              <span className="navlink_text"> Jokes </span>
              <Hotkey text="2" click={true} />
            </NavLink>
        </span>
        <Button aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true" onClick={this.handleClick}>
          <span className="navlink_icon_expand">
            <i className="material-icons expand_menu_button">account_circle</i>
          </span>
        </Button>
        <Menu
         id="simple-menu"
         anchorEl={anchorEl}
         open={Boolean(anchorEl)}
         onClose={this.handleClose}
         >
         {!localStorage.getItem("username") ?
         <span>
          <MenuItem>
            <NavLink className="navlink_expand" to="/register" id="navlink3">
              <span className="navlink_icon_expand">
                <i className="material-icons">account_box</i>
              </span>
              <span className="navlink_text_expand"> Register </span>
              <Hotkey text="3" click={true} />
            </NavLink>
          </MenuItem>
           <span >
            <MenuItem>
             <NavLink className="navlink_expand" to="/login" id="navlink4">
               <span className="navlink_icon_expand">
                 <i className="material-icons">account_circle</i>
               </span>
               <span className="navlink_text_expand"> Login </span>
               <Hotkey text="4" click={true} />
             </NavLink>
            </MenuItem>
           </span>
         </span>
         :
         <MenuItem>
           <NavLink className="navlink_expand" to="/logout" id="navlink3">
             <span className="navlink_icon_expand">
               <i className="material-icons ">account_circle</i>
             </span>
             <span className="navlink_text_expand">
              Logout
             </span>
           </NavLink>
         </MenuItem>
          }
          <MenuItem>
            <span className="navlink_icon_expand">
              <i className="material-icons darkmode_off" >brightness_3</i>
            </span>
            <span className="navlink_icon_expand">
              <i className="material-icons darkmode_on" >brightness_5</i>
            </span>
            <ToggleDarkMode />
          </MenuItem>
          <MenuItem>
            <span className="navlink_icon_expand" id="toggle_hotkeys_icon">
              {<i className="material-icons hotkeys_on">toggle_on</i>}
            </span>
            <span className="navlink_icon_expand" id="toggle_hotkeys_icon">
              <i className="material-icons hotkeys_off">toggle_off</i>
            </span>
            <ToggleHotkeys />
          </MenuItem>
          <MenuItem>
            <span className="navlink_icon_expand">
              <i className="material-icons non_mobile" >toggle_on</i>
            </span>
            <span className="navlink_icon_expand">
              <i className="material-icons anti_mobile" >toggle_off</i>
            </span>
            <span className="navlink_text_expand" id="toggle_hotkey_helpers_text">
             <HotkeyToggle />
            </span>
          </MenuItem>
       </Menu>

      </div>
    )
  }
};
//note to self. Wrap these nav elements around some dope looking shit like the index bars from a while ago.
export default NavBar;
