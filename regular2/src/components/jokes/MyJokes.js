import React, { Component } from 'react';
import NavArrow from '../NavArrow';

class MyJokes extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      my_jokes: []
    }
    var id = localStorage.getItem("id")
    var url = `/api/jokes/myjokes/${id}`
    fetch(url)
    .then(res => res.json())
    .then((json) => {
      this.setState(
        {my_jokes: json.data}
      )
    })
    .then( console.log(this.state.my_jokes))
  }
  render() {
    return (
      <div>
        <NavArrow direction="Left" actions={this.props.actions} z={this.props.z} text="Read Jokes" />
        <h1>
          my jokes
        </h1>
        {this.state.my_jokes.map (function(joke){
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
    )
  }
}

export default MyJokes
