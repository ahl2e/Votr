import React from 'react';

class VoterMap extends React.Component{
  constructor(props){
    super(props);
  }



componentDidMount(){
  let map, infoWindow, curentPos, geocoder;
  map = new google.maps.Map(this.mapNode,{
      center: {lat: 38.9072, lng: -77.0369},
      zoom: 13
    });
  const mapOptions = {
    center: {lat: 38.9072,lng: -77.0369}, // D.C coords
    zoom: 15
  };

  map = new google.maps.Map(this.mapNode, mapOptions);
  infoWindow = new google.maps.InfoWindow;
  geocoder = new google.maps.Geocoder();

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
             currentPos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('My Location.');
            infoWindow.open(map);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          handleLocationError(false, infoWindow, map.getCenter());
        }

        var address = this.combineVoterAddress();
        var coords = {lat: this.props.voter.lat, lng: this.props.voter.lng};
        var marker = new google.maps.Marker({
            map: map,
            position: coords
        });
        map.setCenter(coords);

      }



combineVoterAddress(){
  const voter = this.props.voter;
  return voter.address + " " + voter.city +", " + voter.state +  " " + voter.zip;
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
