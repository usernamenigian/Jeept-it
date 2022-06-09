import React, { Component } from 'react';
import { Card, Text } from 'react-native-paper';
import { Dropdown } from 'react-native-material-dropdown-v2';

import jeeps from '../JeepsList';
import myArray from '../Array'
import styles from './styles';

class JeepLocation extends Component {
  constructor(props) {
    super(props)
    this.state={
        data: markerDropdown,
        location: '',
    }
  }
  
  render () {
    return (<Card>
           <Dropdown
            label = 'Location'
            data = {this.state.data}
            value={this.state.location}
            onChangeText={(value) => this.setState({location: value})}
            />

            <Text>{this.state.location}</Text>
            <Text>{getJeep(this.state.location)}</Text>
          </Card>
    )
  }
}

const markerDropdown = new myArray();

for (let i = 0; i < jeeps.length; i++) {
  for (let j = 0; j < jeeps[i].markers.length; j++) {
    markerDropdown.push({ value: jeeps[i].markers[j].value });
  }
}

function getJeep(location) {
  const availableJeeps = []
  for (let i = 0, j = 0; i < jeeps.length; i++) {
    for (let j = 0; j < jeeps[i].markers.length; j++) {
      if (location == jeeps[i].markers[j].value) {
        availableJeeps.push(`${jeeps[i].name}, `)
      } 
    }
  }
  return availableJeeps
}

export default JeepLocation