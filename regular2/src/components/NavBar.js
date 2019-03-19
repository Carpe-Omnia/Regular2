import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar" >
        <span ><NavLink to="/" id="navlink1" >Home</NavLink></span><span className="non_mobile">(1)</span>
        <span>-   -   -</span>
        <span ><NavLink to="/jokes" id="navlink2" >Jokes</NavLink></span><span className="non_mobile">(2)</span>
        <span>-   -   -</span>
        <span ><NavLink to="/register" id="navlink3" >Register</NavLink></span><span className="non_mobile">(3)</span>
        <span>-   -   -</span>
        <span ><NavLink to="/login" id="navlink4" >Login</NavLink></span><span className="non_mobile">(4)</span>
    </div>
  );
};
//note to self. Wrap these nav elements around some dope looking shit like the index bars from a while ago.
export default NavBar;
