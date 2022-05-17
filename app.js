import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, ImageBackground} from 'react-native';
import WelcomeScreen from './scripts/screens/WelcomeScreen'
import FareScreen from './scripts/screens/FareScreen';

export default function App() {
  return (
    <View style={styles.container}>
      
      <ImageBackground
       source={require('./assets/testbackground.jpg')}
       style={styles.backgroundImage}/>

      <FareScreen/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  }
});
