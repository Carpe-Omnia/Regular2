import React from 'react'
import GetPlaces from './GetPlaces'
import Places from './Places'
import SimpleSnackbar from './Snack.js' ;

class PlacesContainer extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div id="places_wrapper">
        <Places actions={this.props.actions} orientation={this.props.orientation} z="3" locations={this.props.locations} />
        <GetPlaces actions={this.props.actions} locations={this.props.orientation.locations} />
        <SimpleSnackbar />
      </div>
    )
  }
}

export default PlacesContainer ;
