import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';

import WelcomeScreen from './scripts/screens/WelcomeScreen'
import HomeScreen from './scripts/screens/HomeScreen';
import FareScreen from './scripts/screens/FareScreen';
import JeepScreen from './scripts/screens/JeepScreen';
import MapScreen from './scripts/screens/MapScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={WelcomeScreen}/>
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Fare List" component={FareScreen}/>
          <Stack.Screen name="Jeep List" component={JeepScreen}/>
          <Stack.Screen name="Maps" component={MapScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
  )
}