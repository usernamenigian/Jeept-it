import React from 'react'
import {Text, View, Image, ImageBackground} from 'react-native';
import styles from '../styles';

const WelcomeScreen = () => {
    return (
        <View style={styles.logoContainer}>

            <ImageBackground 
            source={require('../../assets/testbackground.jpg')}
            style={styles.backgroundImage}/>

            <View style={styles.titles}>

            <Image 
            source={require('../../assets/favicon.png')}
            style={styles.logoImage}/>

            <Text style={styles.title}>JEEP IT</Text>
            <Text style={styles.subtitle1}>MAP FOR JEEPS</Text>
            <Text style={styles.subtitle2}>Jeep App for Commuters</Text>

            </View>
        </View>
    );
};

export default WelcomeScreen