import React from 'react';
import jokesHash from './jokesHash'


class Jokes extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      jokes: [],
      my_jokes: []
    }
    fetch(`/api/regular`)
    .then(res => res.json()) //gets jokes in general
    .then((json) => {
      this.setState({jokes: json.data})
    })
    fetch(`/api/jokes/myjokes/${localStorage.getItem("id")}`)
    .then(res => res.json())
    .then((json) => {
      this.setState({my_jokes: json.data})
    })
    .then( console.log(this.state.my_jokes))

  }
  adjustState = (joke) =>{
    console.log(`adjustState is being called by ${this}`)
    this.setState({
      jokes: [...this.state.jokes, joke],
      my_jokes:[...this.state.my_jokes, joke]
    })
    console.log(this.state)
  }
  render() {
    var orientation = this.props.orientation.orientation[1] ;
    var Parent = jokesHash[`${orientation}`] ;
    return (
    <div>
      < Parent
      actions={this.props.actions}
      z={this.props.z} jokes={this.state.jokes}
      my_jokes={this.state.my_jokes}
      adjustState={this.adjustState}
      />
    </div>
    )
  }
}

export default Jokes
