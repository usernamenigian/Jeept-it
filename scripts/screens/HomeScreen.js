import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Card } from 'react-native-paper';
import styles from './styles';

class HomeScreen extends Component {
  render () {
    return (
     <View>
      <Card style={styles.card}>
        <Card.Title title="Jeepney Fare Guide" />
        <Card.Content>
         <Button mode="contained" onPress={() => this.props.navigation.navigate('Fare List')}>View</Button>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Title title="Jeepney List" />
        <Card.Content>
          <Button mode="contained" onPress={() => this.props.navigation.navigate('Jeep List')}>View</Button>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Title title="Jeepney Location" />
        <Card.Content>
          <Button mode="contained" onPress={() => this.props.navigation.navigate('Jeep Location')}>View</Button>
        </Card.Content>
      </Card>
      
     </View>
    )
  }
}
export default HomeScreen