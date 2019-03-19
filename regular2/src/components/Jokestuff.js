import React, { Component } from 'react';
import NavArrow from './NavArrow';

const Index = (props) =>  {
  return (
    <div>
      <h2> Read Jokes </h2>
      <h4> Tap or click on jokes to reveal the punchline </h4>
      <div id="joke_zone">
        <NavArrow direction="Left" actions={props.actions} z={props.z} text="submit a joke" />
        <NavArrow direction="Right" actions={props.actions} z={props.z} text="my jokes" />
          {props.jokes.map(function(joke){
            return (
              <div key={joke.id}>
                <div className="setup" id={`setup${joke.id}`} onClick={function(){
                  var placeId = `placeholder${joke.id}` ;
                  var punchId = `punchline${joke.id}`  ;
                  document.getElementById(`${placeId}`).style.display = "none" ;
                  document.getElementById(`${punchId}`).style.display = "block" ;
                }} >
                  {joke.setup}
                </div>
                <div className="placeholder" id={`placeholder${joke.id}`} onClick={function(){
                  var placeId = `placeholder${joke.id}` ;
                  var punchId = `punchline${joke.id}`  ;
                  document.getElementById(`${placeId}`).style.display = "none" ;
                  document.getElementById(`${punchId}`).style.display = "block" ;
                }}>
                  -------------
                </div>
                <div className="punchline" id={`punchline${joke.id}`}>
                  {joke.punchline}
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}


var jokesHash = {
  "-1,0": Index ,
  "0,0": Index ,
  "1,0": Index ,
}
export {Index, jokesHash}
