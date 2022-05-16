import React, {Component} from 'react';
import {Text, View, Image, ImageBackground} from 'react-native';
import styles from '../styles';
import Button from '../button/Button';

class WelcomeScreen extends Component {
    render() {
        return (
            <View style={styles.logoContainer}>

            <View style={styles.titles}>

            <Image 
            source={require('../../assets/favicon.png')}
            style={styles.logoImage}/>

            <Text style={styles.title}>JEEP IT</Text>
            <Text style={styles.subtitle1}>MAP FOR JEEPS</Text>
            <Text style={styles.subtitle2}>Jeep App for Commuters</Text>

            </View>
            <View style={styles.buttonContainer}>
            <Button
             backgroundColor={"#FFF"}
             textColor={"#000"}
             content={"Get Started"}
             onPress={() => {
                 console.warn('next screen')
            }}
            />
            </View>
            
        </View>
        )
    }
}

export default WelcomeScreen