import React from 'react';
import homeHash from './HomeHash'

class HomeContainer extends React.Component {
  constructor(props){
    super(props);
    if(!!this.props.orientation.user.id){
      if(this.props.orientation.datapackage.length === 0){
        this.props.actions.set_data_package(this.props.orientation.user.id);
      }
      if(!this.props.orientation.profile.name){
        this.props.actions.set_profile(this.props.orientation.user.id);
      }
    }
  }
  render() {
    var Parent =  homeHash["0,0"]  ;
    return (
    <div>
      < Parent actions={this.props.actions}  z={this.props.z} orientation={this.props.orientation} />
    </div>
    )
  }
}

export default HomeContainer
