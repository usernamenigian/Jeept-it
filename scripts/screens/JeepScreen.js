import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-paper';

import jeeps from '../JeepsList';

class JeepScreen extends Component {
  constructor (props) {
    super(props)
  }
    render() {
        return (
          <ScrollView style={styles.card}>
            {jeepList}
          </ScrollView>
        )
    }
}

const jeepList = jeeps.map((jeep, index) => {
  return (<Card key={index}>
          <Card.Title title={jeeps[index].name}/>
           <Card.Content>
            <Button mode="contained" onPress={() => getRoutes(index)}>Go</Button>
           </Card.Content>
         </Card>)
})

function getRoutes(index) {
  alert(jeeps[index].routes)
}

const styles = StyleSheet.create({
  card: {
    width: '95%',
    marginTop: '5%',
    marginBotttom: '5%',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
})

export default JeepScreen