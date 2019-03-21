import React from 'react';
import parentHash from './HomeHash'

class HomeContainer extends React.Component {

  render() {
    var orientation = this.props.orientation.orientation[0] ;
    var Parent =  parentHash[`${orientation}`]  ;
    return (
    <div>
      < Parent actions={this.props.actions}  z={this.props.z} />
    </div>
    )
  }
}

export default HomeContainer
