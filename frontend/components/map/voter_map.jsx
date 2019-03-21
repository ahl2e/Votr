import React from 'react';

class VoterMap extends React.Component{



componentDidMount(){

  let map, infoWindow;
  map = new google.maps.Map(this.mapNode,{
      center: {lat: 38.9072, lng: -77.0369},
      zoom: 13
    });
  const mapOptions = {
    center: {
      lat: 38.9072,
      lng: -77.0369
    }, // D.C coords
    zoom: 13
  };

  map = new google.maps.Map(this.mapNode, mapOptions);
  infoWindow = new google.maps.InfoWindow;



        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }


  render(){

    return(
      <div>
        <div
          id='map'
          ref={ map => this.mapNode = map }>
        </div>
      </div>
    )
  }


}

export default VoterMap;
