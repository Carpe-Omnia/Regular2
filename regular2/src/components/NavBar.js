import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
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
          <NavLink to="/" exact id="navlink1" style={link} activeStyle={activelink} >
            Home<span className="non_mobile">(1)</span>
          </NavLink>
        </span>

        <span >
          <NavLink to="/jokes" id="navlink2" style={link} activeStyle={activelink}>
            Jokes<span className="non_mobile">(2)</span>
          </NavLink>
        </span>

        {!localStorage.getItem("username") ? //stuff the user sees if they're not logged in
        <span>
          <span>
            <NavLink to="/register" id="navlink3" style={link} activeStyle={activelink}>
              Register<span className="non_mobile">(3)</span>
            </NavLink>
          </span>

          <span >
            <NavLink to="/login" id="navlink4" style={link} activeStyle={activelink}>
              Login<span className="non_mobile">(4)</span>
            </NavLink>
          </span>
        </span>
        : //stuff the user sees if they're logged in
        <span>
          <NavLink to="/logout" id="navlink3" style={link} activeStyle={activelink}>
            Logout<span className="non_mobile">(3)</span>
          </NavLink>
        </span>
        }
    </div>
  );
};
//note to self. Wrap these nav elements around some dope looking shit like the index bars from a while ago.
export default NavBar;
