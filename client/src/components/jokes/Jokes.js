import React from 'react';
import jokesHash from './jokesHash'


class Jokes extends React.Component {
  constructor(props){
    super(props);
    this.props.actions.set_all_jokes();
    if (!!this.props.orientation.user.id && this.props.orientation.my_jokes.length !== 0){
      this.props.actions.set_my_jokes(this.props.orientation.user.id);
    }
  }

  render() {
    var orientation = this.props.orientation.orientation[1] ;
    var Parent = jokesHash[`${orientation}`] ;
    return (
    <div id="holds_joke_stuff">
      < Parent
      actions={this.props.actions}
      z={this.props.z}
      jokes={this.props.orientation.all_jokes}
      my_jokes={this.props.orientation.my_jokes}
      orientation={this.props.orientation}
      />
    </div>
    )
  }
}

export default Jokes
