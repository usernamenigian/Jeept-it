import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <ImageBackground 
          source={require('./assets/testbackground.jpg')}
          style={styles.backgroundImage}/>

      <View style={styles.logoContainer}>

        <View style={styles.titles}>
          <Image 
          source={require('./assets/favicon.png')}
          style={styles.logoImage}/>

          <Text style={styles.title}>JEEP IT</Text>
          <Text style={styles.subtitle1}>MAP FOR JEEPS</Text>
          <Text style={styles.subtitle2}>Jeep App for Commuters</Text>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0FF",
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    width: "50%",
    height: "50%",
  },
  titles: {
    alignItems: "center"
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
  },
  subtitle1: {
    fontSize: 30,
    fontWeight: "500",
  },
  subtitle2: {
    fontSize: 30,
    fontWeight: "300"
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  logoImage: {
    width: "25%",
    height: "25%",
    resizeMode: "cover",
  }
});
