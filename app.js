import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.logoContainer}>

        <View style={styles.titles}>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
