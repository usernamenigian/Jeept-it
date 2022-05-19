import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Card, Button } from 'react-native-paper';

import jeeps from '../JeepsList';
import styles from './styles';

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
export default JeepScreen