import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';

function HomeScreen ({ navigation }) {
  return (
    <View style={styles.view}>
      <Card style={styles.card}>
        <Card.Title title="Jeepney Fare Guide" />
        <Card.Content>
          <Button mode="contained" onPress={() => navigation.navigate('Fare List')}>
            Navigate
          </Button>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Title title="Next Screen" />
        <Card.Content>
          <Button mode="contained" onPress={() => navigation.navigate('')}>
            Navigate
          </Button>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Title title="Next next screen"/>
        <Card.Content>
          <Button mode="contained" onPress={() => navigation.navigate('')}>
            Navigate
          </Button>
        </Card.Content>
      </Card>

    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: DefaultTheme.colors.background,
    paddingTop: 10
  },
  card: {
    width: '95%',
    marginTop: '5%',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
});

export default HomeScreen