import React from 'react';
import homeHash from './HomeHash'

class HomeContainer extends React.Component {
  constructor(props){
    super(props);
    if(!!this.props.orientation.user.id){
      this.props.actions.set_data_package(this.props.orientation.user.id);
      this.props.actions.set_profile(this.props.orientation.user.username);
    }
  }
  render() {
    var orientation = this.props.orientation.orientation[0] ;
    var Parent =  homeHash["0,0"]  ;
    return (
    <div>
      < Parent actions={this.props.actions}  z={this.props.z} orientation={this.props.orientation} />
    </div>
    )
  }
}

export default HomeContainer
