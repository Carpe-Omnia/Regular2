import React from 'react'
import { render } from 'react-dom';
import Map from './Map'
import InfoWindow from './InfoWindow'

class Places extends React.Component {
  constructor(props){
    super(props);
  }
  createInfoWindow(e, map) {
    const infoWindow = new window.google.maps.InfoWindow({
      content: '<div id="infoWindow" />',
      position: {lat: e.latLng.lat(), lng: e.latLng.lng() }
    })
    infoWindow.addListener('domready', e => {
      render(<InfoWindow />, document.getElementById('infoWindow'))
    })
    infoWindow.open(map) ;
  }
  render(){
    return (
      <div id="places">
        <h3>
          This is places
        </h3>
        <div>
        <Map
          id="map"
          options={{center: {lat: 40.356821, lng: -74.657421 }, zoom: 16}}
          onMapLoad={map => {
            var marker = new window.google.maps.Marker({
              position: {lat: 40.356821, lng: -74.657421 },
              map: map,
              title: 'Monseau House'
            })
            marker.addListener('click', e => {
              this.createInfoWindow(e, map)
            })
          }}
        />
        </div>
      </div>
    )
  }
}

export default Places
