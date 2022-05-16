import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, ImageBackground} from 'react-native';
import WelcomeScreen from './scripts/screens/WelcomeScreen'

export default function App() {
  return (
    <View style={styles.container}>
      
      <ImageBackground
       source={require('./assets/testbackground.jpg')}
       style={styles.backgroundImage}/>

      <WelcomeScreen/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  }
});
