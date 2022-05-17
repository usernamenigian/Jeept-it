import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
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

const styles = StyleSheet.create({
    logoContainer: {
        width: "100%",
        height: "100%",
        alignItems: "center"
      },
      titles: {
        marginTop: "50%",
        alignItems: "center"
      },
      title: {
        fontSize: 48,
        fontWeight: "bold",
      },
      subtitle1: {
        fontSize: 18,
        fontWeight: "500",
      },
      subtitle2: {
        fontSize: 18,
        fontWeight: "300"
      },
      logoImage: {
        width: "25%",
        height: "25%",
        resizeMode: "cover",
      },
      buttonContainer: {
        position: "absolute",
        bottom: 100,
        width: '70%'
      }
})

export default WelcomeScreen