import React from 'react';
import NavArrow from '../NavArrow';
import Joke from './Joke';

const MyJokes = (props) => {
  return (
    <div>
      <NavArrow direction="Left" actions={props.actions} z={props.z} text="Read Jokes" />
      <div className="main_page_content">
        <div id="my_jokes_container">
          <div id="my_jokes_header" >
            <h2>
              My Jokes
            </h2>
          </div>
          {props.my_jokes.map (function(joke){
            return (
              <Joke joke={joke} key={joke.id} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default MyJokes
