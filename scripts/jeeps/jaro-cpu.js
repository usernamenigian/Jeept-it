import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';

import styles from '../screens/styles'

const jaroCPU = 
  <View style = {styles.container}>
   <MapView style = {styles.map} 
    initialRegion = {{
     latitude:10.7310066,
     longitude: 122.5491166,
     latitudeDelta: 0.1,
     longitudeDelta: 0.045,
    }}
   >
   <MapView.Marker
    coordinate = {{latitude: 10.7310066,
    longitude: 122.5491166}}
    pinColor = {"red"}
    title = {"Central Philippine University"}
    />
  <MapView.Marker
    coordinate = {{latitude: 10.7244118,
    longitude: 122.5573263}}
    pinColor = {"red"}
    title = {"Jaro Plaza"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.7190179,
    longitude: 122.5608054}}
    pinColor = {"red"}
    title = {"Jollibee"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.7135681,
    longitude: 122.5624973}}
    pinColor = {"red"}
    title = {"West Visayas State University"}
    />
       <MapView.Marker
    coordinate = {{latitude: 10.7068854,
    longitude: 122.5666009}}
    pinColor = {"red"}
    title = {"Gaisano Capital City"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.7015547,
    longitude: 122.5690689}}
    pinColor = {"red"}
    title = {"Arroyo Fountain"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.6967916,
    longitude: 122.5689268}}
    pinColor = {"red"}
    title = {"Jollibee"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.693033218383789,
    longitude: 122.572509765625}}
    pinColor = {"red"}
    title = {"Museum of Philippine Economic History"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.6926236,
    longitude: 122.573675}}
    pinColor = {"red"}
    title = {"Plaza Libertad"}
    />
   </MapView> 
  </View>

export default jaroCPU