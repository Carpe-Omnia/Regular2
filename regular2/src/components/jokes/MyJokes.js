import React from 'react';
import NavArrow from '../NavArrow';
import Joke from './Joke';

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
        <div className="main_page_content">
          <h1>
            my jokes
          </h1>
          {this.state.my_jokes.map (function(joke){
            return (
              <Joke joke={joke} key={joke.id} />
            )
          })}
        </div>
      </div>
    )
  }
}

export default MyJokes
