import React, { Component } from 'react';
import {Index, jokesHash} from './Jokestuff';

class Jokes extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      jokes: []
    }
    var url = `/api/regular`
    fetch(url)
    .then((res) => {
      return res.json()
    })
    .then((json) => {
      this.setState({
        jokes: json.data
      })
      console.log(this.state.jokes)
    })
  }

  render() {
    var orientation = this.props.orientation.orientation[1] ;
    var Parent = jokesHash[`${orientation}`] ;
    return (
    <div>
      <h1> Jokes </h1>
      < Parent actions={this.props.actions}  z={this.props.z} jokes={this.state.jokes} />
    </div>
    )
  }
}

export { Jokes }
