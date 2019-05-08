import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import logout from './Logout' ;
import Hotkey from './Hotkey'
import HotkeyToggle from './HotkeyToggle'
import ToggleHotkeys from './ToggleHotkeys'
import ToggleDarkMode from './ToggleDarkMode'
import detectMobile from '../utility/detectMobile'

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
    return (
      <div className="navbar" >
        <span >
          <NavLink className="navlink" to="/color" id="navlink6">
            <span className="navlink_icon">
              <i className="material-icons">color_lens</i>
            </span>
            <span className="navlink_text">
              Color
            </span>
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
          <span className="menu_expand_icon">
            <i className="material-icons expand_menu_button">account_circle</i>
          </span>
        </Button>
        <Menu
         id="simple-menu"
         anchorEl={anchorEl}
         open={Boolean(anchorEl)}
         onClose={this.handleClose}
         >
         <MenuItem>
           <span className="navlink_icon_expand">
             <i className="material-icons darkmode_off" >brightness_3</i>
           </span>
           <span className="navlink_icon_expand">
             <i className="material-icons darkmode_on" >brightness_5</i>
           </span>
           <ToggleDarkMode />
         </MenuItem>
         {!localStorage.getItem("username") ? //not logged in stuff
         <span>
          <NavLink className="navlink_expand" to="/register" id="navlink3">
            <MenuItem>
              <span className="navlink_icon_expand">
                <i className="material-icons">account_box</i>
              </span>
              <span className="navlink_text_expand"> Register </span>
            </MenuItem>
          </NavLink>
           <span >
            <NavLink className="navlink_expand" to="/login" id="navlink4">
              <MenuItem>
                 <span className="navlink_icon_expand">
                   <i className="material-icons">account_circle</i>
                 </span>
                 <span className="navlink_text_expand"> Login </span>
               </MenuItem>
            </NavLink>
           </span>
         </span>
         : //logged in stuff
         <span>
          <NavLink className="navlink_expand" to="/messages" id="navlink5">
           <MenuItem>
             <span className="navlink_icon_expand">
               <i className="material-icons ">mail_outline</i>
             </span>
             <span className="navlink_text_expand">
              Messages (beta)
             </span>
           </MenuItem>
          </NavLink>
          <NavLink className="navlink_expand" to="/profile" id="navlink6">
             <MenuItem>
              <span>
                <span className="navlink_icon_expand">
                  <i className="material-icons ">account_box</i>
                </span>
                <span className="navlink_text_expand">
                  Profile (beta)
                </span>
              </span>
            </MenuItem>
          </NavLink>
           <MenuItem>
             <span className="navlink_expand" id="navlink3" onClick={() => logout()}>
               <span className="navlink_icon_expand">
                 <i className="material-icons ">exit_to_app</i>
               </span>
               <span className="navlink_text_expand">
                Logout
               </span>
              </span>
           </MenuItem>
          </span>
          }
          {!detectMobile() ? //desktop only stuff
            <span>
              <MenuItem>
              <span className="navlink_expand" id="toggle_hotkeys_icon">
                {<i className="material-icons hotkeys_on">toggle_on</i>}
              </span>
              <span className="" id="toggle_hotkeys_icon">
                <i className="material-icons hotkeys_off">toggle_off</i>
              </span>
              <ToggleHotkeys />
            </MenuItem>
            <MenuItem>
              <span className="navlink_expand">
                <i className="material-icons non_mobile" >toggle_on</i>
              </span>
              <span className="">
                <i className="material-icons anti_mobile" >toggle_off</i>
              </span>
              <span className="navlink_text_expand" id="toggle_hotkey_helpers_text">
               <HotkeyToggle />
              </span>
            </MenuItem>
          </span>
          :
          <span></span> //mobile only stuff
        }
          <NavLink className="navlink_expand" to="/places" exact id="navlink0" >
            <MenuItem>
                <span className="navlink_icon_expand">
                  <i className="material-icons">map</i>
                </span>
                <span className="navlink_text_expand"> Places (alpha) </span>
            </MenuItem>
          </NavLink>
       </Menu>

      </div>
    )
  }
};

export default NavBar;
