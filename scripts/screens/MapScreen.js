import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-paper';
import { Dropdown } from 'react-native-material-dropdown-v2';

class MapScreen extends Component {
  constructor(props) {
    super(props)
    
  }
  points = this.props.route.params.points

  render () {
        return (
          <View>

          <Card>
           <Card.Title title={this.props.route.params.name}/>
            <Card.Content>

             <Dropdown
            label = 'Origin'
            data = {this.points}
            onChangeText={this.onChangeText}
            />

            <Dropdown
            label = 'Destination'
            data = {this.points}
            onChangeText={this.onChangeText}
            />

            <Text>Total Distance: {calculateDistance(this.points[0], this.points[1])}</Text>
      
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
function calculateDistance(mk1, mk2) {
  var R = 6371.0710; // Radius of the Earth in miles
  var rlat1 = mk1.latitude * (Math.PI/180); // Convert degrees to radians
  var rlat2 = mk2.latitude * (Math.PI/180); // Convert degrees to radians
  var difflat = rlat2-rlat1; // Radian difference (latitudes)
  var difflon = (mk2.longitude-mk1.longitude) * (Math.PI/180); // Radian difference (longitudes)
  
  var d = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat/2)*Math.sin(difflat/2)+Math.cos(rlat1)*Math.cos(rlat2)*Math.sin(difflon/2)*Math.sin(difflon/2)));
      return d
}

export default MapScreen