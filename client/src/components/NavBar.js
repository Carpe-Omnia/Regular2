import React from 'react';
import { NavLink } from 'react-router-dom';
import Hotkey from './Hotkey'

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: '#00d8ff',
  textDecoration: 'none',
  color: 'white',
}
const activelink = {
  background: 'darkblue'
}

const NavBar = () => {
  return ( //stuff that the user sees no matter what
    <div className="navbar" >
        <span >
          <NavLink className="navlink" to="/" exact id="navlink1" style={link} activeStyle={activelink} >
            Home<Hotkey text="1" click={true} />
          </NavLink>
        </span>

        <span >
          <NavLink className="navlink" to="/jokes" id="navlink2" style={link} activeStyle={activelink}>
            Jokes<Hotkey text="2" click={true} />
          </NavLink>
        </span>

        {!localStorage.getItem("username") ? //stuff the user sees if they're not logged in
        <span>
          <span>
            <NavLink className="navlink" to="/register" id="navlink3" style={link} activeStyle={activelink}>
              Register<Hotkey text="3" click={true} />
            </NavLink>
          </span>

          <span >
            <NavLink className="navlink" to="/login" id="navlink4" style={link} activeStyle={activelink}>
              Login<Hotkey text="4" click={true} />
            </NavLink>
          </span>
        </span>
        : //stuff the user sees if they're logged in
        <span>
          <NavLink className="navlink" to="/logout" id="navlink3" style={link} activeStyle={activelink}>
            Logout<Hotkey text="3" click={true} />
          </NavLink>
        </span>
        }
    </div>
  );
};
//note to self. Wrap these nav elements around some dope looking shit like the index bars from a while ago.
export default NavBar;
