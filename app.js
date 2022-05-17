import React from 'react';
import WelcomeScreen from './scripts/screens/WelcomeScreen'
import FareScreen from './scripts/screens/FareScreen';
import HomeScreen from './scripts/screens/HomeScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={WelcomeScreen}/>
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Fare List" component={FareScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
  )
}