import React from 'react';
import homeHash from './HomeHash'

class HomeContainer extends React.Component {

  render() {
    var orientation = this.props.orientation.orientation[0] ;
    var Parent =  homeHash[`${orientation}`]  ;
    return (
    <div>
      < Parent actions={this.props.actions}  z={this.props.z} />
    </div>
    )
  }
}

export default HomeContainer
