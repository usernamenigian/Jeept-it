import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-paper';
import { Dropdown } from 'react-native-material-dropdown-v2';

import fare from '../Fare'

class MapScreen extends Component {
  constructor(props) {
    super(props)
    this.state={
    data: this.props.route.params.markers,
    index1: 0,
    index2: 0
    }
  }

  getIndex1 = (value, i, data) => {
    this.setState({index1: i})
    console.log(i);
  }

  getIndex2 = (value, i, data) => {
    this.setState({index2: i})
    console.log(i);
  }

  render () {
     const markers = this.state.data
        return (
          <View>

          <Card>
           <Card.Title title={this.props.route.params.name}/>
            <Card.Content>

             <Dropdown
            label = 'Origin'
            data = {markers}
            onChangeText={this.getIndex1}
            />

            <Dropdown
            label = 'Destination'
            data = {markers}
            onChangeText={this.getIndex2}
            />

            <Text>Total Distance: {calculateDistance(markers[this.state.index1], markers[this.state.index2])} KM</Text>
            <Text>Total Fare: {calcluteTotalFare(calculateDistance(markers[this.state.index1], markers[this.state.index2]))}</Text>
      
            </Card.Content>
          </Card>

          <Card>
          {this.props.route.params.jeepMap}
          </Card>
          
          </View>
        )
    }
}

//Haversine formula
function calculateDistance(marker1, marker2) {
  let R = 6371.0710 // Radius of the Earth in km
  let rlat1 = marker1.latitude * (Math.PI/180) // Convert degrees to radians
  let rlat2 = marker2.latitude * (Math.PI/180) // Convert degrees to radians
  let difflat = rlat2 - rlat1 // Radian difference (latitudes)
  let difflon = (marker2.longitude - marker1.longitude) * (Math.PI/180) // Radian difference (longitudes)
  
  let distance = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat / 2) * Math.sin(difflat / 2) +
  Math.cos(rlat1) * Math.cos(rlat2) * Math.sin(difflon / 2) * Math.sin(difflon / 2)))
  
  console.log('Exact distance: ' + distance + 'KM')
  return Math.ceil(distance)
}

function calcluteTotalFare(distance) {
  for (let i = 0; i < fare.length; i++) {
    if (distance === fare[i][0]) {
      return fare[i][1] + 'PHP regular ' + fare[i][2] + 'PHP discounted'
    }
  }
}

export default MapScreen