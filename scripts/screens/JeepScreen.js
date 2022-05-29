import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Card, Button } from 'react-native-paper';

import jeeps from '../JeepsList';
import styles from './styles';

class JeepScreen extends Component {
  constructor(props) {
    super(props)
  }
  
  render () {
    return (<ScrollView>
           {jeeps.map(( jeep, index) => {
             return (<Card key={index} style={styles.card}>
             <Card.Title title={jeeps[index].name}/>
              <Card.Content>
               <Button mode="contained" onPress={() => this.props.navigation.navigate('Maps', {jeepMap: jeeps[index].map})}>Go</Button>
              </Card.Content>
            </Card>)
            })}
          </ScrollView>
    )
  }
}

export default JeepScreen