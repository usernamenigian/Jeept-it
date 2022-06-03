import React, { Component } from 'react';
import { View } from 'react-native';
import { Card } from 'react-native-paper';
import { Dropdown } from 'react-native-material-dropdown-v2';

class MapScreen extends Component {
  constructor(props) {
    super(props)
  }

  render () {

    const points = this.props.route.params.points
        return (
          <View>

          <Card>
           <Card.Title title={this.props.route.params.name}/>
            <Card.Content>

             <Dropdown
            label = 'Origin'
            data = {points}
            />

            <Dropdown
            label = 'Destination'
            data = {points}
            />
      
            </Card.Content>
          </Card>

          <Card>
          {this.props.route.params.jeepMap}
          </Card>
          
          </View>
        )
    }
}

export default MapScreen