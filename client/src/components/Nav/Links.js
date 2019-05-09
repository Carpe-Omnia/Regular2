import React from 'react';
import { NavLink } from 'react-router-dom';
const Places = (props) => {
  return (

      <div className="navlink_expand">
        <span className="navlink_icon_expand">
          <i className="material-icons">map</i>
        </span>
        <span className="navlink_text_expand" id="places_navlink"> Places (alpha) </span>
      </div>

  )
}
//<NavLink  to="/places" exact id="navlink_places" ></NavLink>
const ColorLink = (props) => {
  return (

    <div className="navlink_expand">
      <span className="navlink_icon_expand">
        <i className="material-icons">color_lens</i>
      </span>
      <span className="navlink_text_expand" id="color_navlink">
        Color
      </span>
    </div>

  )
}
{/*<NavLink to="/color" id="navlink_color">*/}
{/*  </NavLink> */}
const JokeLink = (props) => {
  return(

      <div className="navlink_expand">
        <span className="navlink_icon_expand">
          <i className="material-icons">view_list</i>
        </span>
        <span className="navlink_text_expand" id="joke_navlink"> Jokes </span>
      </div>

  )
}
/*
<NavLink to="/jokes" id="navlink_joke">
</NavLink>
*/
export {Places, ColorLink, JokeLink} ;
