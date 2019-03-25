import React from 'react';
import jokesHash from './jokesHash'


class Jokes extends React.Component {
  constructor(props){
    super(props);
    fetch(`/api/jokes/index`)
    .then(res => res.json()) //gets jokes in general
    .then((json) => {
      this.props.actions.set_all_jokes(json.data)
    })
    fetch(`/api/jokes/myjokes/${localStorage.getItem("id")}`)
    .then(res => res.json())
    .then((json) => {
      this.props.actions.set_my_jokes(json.data)
    })
  }
  adjustState = (joke) =>{
    this.props.actions.set_all_jokes([...this.props.orientation.all_jokes, joke])
    this.props.actions.set_my_jokes([...this.props.orientation.my_jokes, joke])
  }
  render() {
    var orientation = this.props.orientation.orientation[1] ;
    var Parent = jokesHash[`${orientation}`] ;
    return (
    <div>
      < Parent
      actions={this.props.actions}
      z={this.props.z}
      jokes={this.props.orientation.all_jokes}
      my_jokes={this.props.orientation.my_jokes}
      adjustState={this.adjustState}
      />
    </div>
    )
  }
}

export default Jokes
