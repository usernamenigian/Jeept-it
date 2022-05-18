import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Card } from 'react-native-paper';

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

const styles = StyleSheet.create({
  card: {
    width: '95%',
    marginTop: '5%',
    marginBottom: '5%',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
});

export default HomeScreen