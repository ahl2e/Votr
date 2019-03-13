import React from 'react';

class VoterMap extends React.Component{



componentDidMount(){
  const mapOptions = {
    center: {
      lat: 38.9072,
      lng: -77.0369
    }, // D.C coords
    zoom: 13
  };

  this.map = new google.maps.Map(this.mapNode, mapOptions);

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
