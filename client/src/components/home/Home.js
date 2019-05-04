import React from 'react';
import NavArrow from '../NavArrow'
import Hotkey from '../Hotkey'
const Home = (props) => {
  return (
    <div id="parent-top-center" className="parentElement">
    {!!localStorage.getItem('username') ?
      <div>
        <NavArrow direction="Left" actions={props.actions} z={props.z} text="Messages"/>
        <NavArrow direction="Right" actions={props.actions} z={props.z} text="Profile"/>
      </div>
      :
      <span></span>
    }
      <div className="main_page_content">
        {/* This is where I put whatever I want to be on the front page that day */}
        <div id="home_featured_div">
          <h4>Today's Featured Application</h4>
          <iframe
            id="featured_content_today"
            title="featured" width="600" height="450" src="https://www.youtube.com/embed/LG_L3r7iXL0"
            frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowFullScreen>
          </iframe>
          <div id="featured_content_text">
            <p>
              Team Quinn is a little side-project I've been working on to track lawn-signs for a political campaign.
              The web-app features a React front end with Redux-thunk middleware, a Rails/PostgreSQL back end, and integration with
              the Google Maps/Places API.
            </p>
          </div> {/*end featured content text*/}
        </div> {/*end home_featured div*/}
        <div id="about_tomaz">
          <h4>About Tomaz</h4>
          <div id="about_tomaz_text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div> {/*end main_page_content*/}
    </div> /*end parentElement*/
  )
}

export default Home
