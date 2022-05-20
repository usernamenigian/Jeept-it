import React, {Component} from 'react';
import {Text, View} from 'react-native';
import { Button, Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';

import styles from './styles';

class WelcomeScreen extends Component {
  constructor(props) {
    super(props)
  }
    render() {
        return (
          <Card style={styles.welcomeCard}>          
          <View style={styles.container}>

           <View style={styles.titles}>
            <Text style={styles.title}>JEEP IT</Text>
            <Text style={styles.subtitle1}>MAP FOR JEEPS</Text>
            <Text style={styles.subtitle2}>Jeep App for Commuters</Text>
           </View>

            <View style={styles.buttonContainer}>
            <Button mode="contained" onPress={() => this.props.navigation.navigate('Home')}>Get Started</Button>
            </View>
            
          </View>
          </Card>
        )
    }
} 
export default WelcomeScreen