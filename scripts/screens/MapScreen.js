import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-paper';
import Map from '../Map';

import styles from './styles';

class MapScreen extends Component {
    render () {
        return (
            <View>
                <Card style={styles.card}>
                <Card.Title title="Map" />
                  <Card.Content>
                  {Map}
                  </Card.Content>
                </Card>

                <Card style={styles.card}>
                 <Card.Title title="Calculation" />
                  <Card.Content>
                  <Text>insert here</Text>
                  </Card.Content>
                </Card>
            </View>
        )
    }
    
}

export default MapScreen