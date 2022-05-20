import React from 'react';
import { View } from 'react-native';
import { Button, Card } from 'react-native-paper';

import styles from './styles';

function HomeScreen ({ navigation }) {
  return (
    <View>
      <Card style={styles.card}>
        <Card.Title title="Jeepney Fare Guide" />
        <Card.Content>
          <Button mode="contained" onPress={() => navigation.navigate('Fare List')}>
            View
          </Button>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Title title="Jeepney List" />
        <Card.Content>
          <Button mode="contained" onPress={() => navigation.navigate('Jeep List')}>
            View
          </Button>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Title title="Map"/>
        <Card.Content>
          <Button mode="contained" onPress={() => navigation.navigate('Maps')}>
            View
          </Button>
        </Card.Content>
      </Card>

    </View>
  )
}
export default HomeScreen