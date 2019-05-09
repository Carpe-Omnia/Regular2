import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Hotkey from './Hotkey'
import HotkeyToggle from './HotkeyToggle'
import {doToggleHotkey} from './HotkeyToggle'
import ToggleHotkeys from './ToggleHotkeys'
import {doHotkeyToggle} from './ToggleHotkeys'
import ToggleDarkMode from './ToggleDarkMode'
import {doDarkToggle} from './ToggleDarkMode'
import {Places, ColorLink, JokeLink} from './Nav/Links'
import detectMobile from '../utility/detectMobile'

class NavBar extends React.Component {
  state = {
    anchorE1: null,
    anchorE2: null
  };
  handleClick = event => {
     this.setState({ anchorEl: event.currentTarget });
   };
   handleClick2 = event => {
     this.setState({ anchorE2: event.currentTarget });
   }
  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  handleClose2 = () => {
    this.setState({ anchorE2: null });
  };
  handleLogout = () => {
    this.props.actions.home() ;
    this.props.actions.set_user({}) ;
    localStorage.setItem("username", "") ;
    localStorage.setItem("id", "") ;
    localStorage.setItem("email", "") ;
    this.setState({ anchorEl: null });
    document.getElementById('navlink1').click() ;
  }
  render(){
    const { anchorEl } = this.state;
    const { anchorE2 } = this.state;
    return (
      <div className="navbar" >
        <span >
          <NavLink className="navlink" to="/" exact id="navlink1">
            <span className="navlink_icon">
              <i className="material-icons">home</i>
            </span>
            <span className="navlink_text"> Home </span>
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
         <MenuItem onClick={event => doDarkToggle(event)}>
           <ToggleDarkMode />
         </MenuItem>
         {!this.props.orientation.user.id ? //not logged in stuff
         <span>
          <NavLink  to="/register" id="navlink3" onClick={this.handleClose}>
            <MenuItem >
              <div className="navlink_expand">
                <span className="navlink_icon_expand">
                  <i className="material-icons">account_box</i>
                </span>
                <span className="navlink_text_expand" id="navlink_register"> Register </span>
              </div>
            </MenuItem>
          </NavLink>
           <span >
            <NavLink  to="/login" id="navlink4"  onClick={this.handleClose}>
              <MenuItem >
                <span className="navlink_expand">
                   <span className="navlink_icon_expand">
                     <i className="material-icons">account_circle</i>
                   </span>
                   <span className="navlink_text_expand"  id="navlink_login"> Login </span>
                 </span>
               </MenuItem>
            </NavLink>
           </span>
         </span>
         : //logged in stuff
         <span>
          <NavLink to="/messages" id="navlink5" onClick={this.handleClose}>
           <MenuItem >
            <span className="navlink_expand">
             <span className="navlink_icon_expand">
               <i className="material-icons ">mail_outline</i>
             </span>
             <span className="navlink_text_expand">
              Messages (beta)
             </span>
            </span>
           </MenuItem>
          </NavLink>
          <NavLink to="/profile" id="navlink6" onClick={this.handleClose}>
             <MenuItem >
              <span className="navlink_expand">
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
             <span className="navlink_expand" id="navlink3" onClick={this.handleLogout}>
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
              <MenuItem onClick={event => doHotkeyToggle(event)}>
                <span className="navlink_expand" id="toggle_hotkeys_icon">
                  {<i className="material-icons hotkeys_on">toggle_on</i>}
                </span>
                <span className="" id="toggle_hotkeys_icon">
                  <i className="material-icons hotkeys_off">toggle_off</i>
                </span>
                <ToggleHotkeys />
              </MenuItem>
            <MenuItem onClick={event => doToggleHotkey(event)}>
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
       </Menu>
       <Button aria-owns={anchorE2 ? 'simple-menu2' : undefined}
         aria-haspopup="true" onClick={this.handleClick2}>
         <span className="menu_expand_icon">
          <i class="material-icons">code</i>
         </span>
       </Button>
       <Menu id="simple-menu2" anchorEl={anchorE2} open={Boolean(anchorE2)} onClose={this.handleClose2}>
          <span></span>
          <NavLink to="/color" id="navlink_color"><MenuItem onClick={this.handleClose2} > <ColorLink/> </MenuItem></NavLink>
          <NavLink to="/jokes" id="navlink_joke"> <MenuItem onClick={this.handleClose2} > <JokeLink/> </MenuItem> </NavLink>
          <NavLink  to="/places" exact id="navlink_places" ><MenuItem onClick={this.handleClose2} > <Places/> </MenuItem></NavLink>
      </Menu>
      </div>
    )
  }
};

export default NavBar;
