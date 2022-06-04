import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import styles from '../screens/styles'

export const jaroLikoNFAMarkers = 
[
  {value: 'Central Philippine University', latitude: 10.7310066, longitude: 122.5491166},
  {value: 'Jaro Plaza', latitude: 10.7244118, longitude: 122.5573263},
  {value: 'Jollibee', latitude: 10.7190179, longitude: 122.5608054},
  {value: 'West Visayas State University', latitude: 10.7135681, longitude: 122.5624973},
  {value: 'Gaisano Capital City', latitude: 10.7068854, longitude: 122.5666009},
  {value: 'The Atrium', latitude: 10.7006106, longitude: 122.5682697},
  {value: 'University of San Agustin', latitude: 10.6994123, longitude: 122.5630039},
  {value: 'Robinsons Place', latitude: 10.6941958, longitude: 122.565573},
  {value: 'Iloilo City Central Public Market', latitude: 10.6926913, longitude: 122.5695755},
  {value: 'Arroyo Fountain', latitude: 10.7015547, longitude: 122.5690689}
]

export const jaroLikoNFA =
<View style={styles.container}>
<MapView
  style={styles.map}
  initialRegion={{
    latitude: 10.69746,
    longitude: 122.562401,
    latitudeDelta: 0.1,
    longitudeDelta: 0.045,
  }}>

  <MapViewDirections
    origin={{latitude: 10.7310066, longitude: 122.5491166}}
    waypoints={[
      { latitude: 10.7244118, longitude: 122.5573263},
      { latitude: 10.7006106, longitude: 122.5682697},
      { latitude: 10.700849389350548, longitude: 122.56479350402707},
      { latitude: 10.693342884160849, longitude: 122.56500322318966},
      { latitude: 10.693378713471066, longitude: 122.56939969898468},
      { latitude: 10.696315559533147, longitude: 122.57110560091364}
    ]}
    destination={{
      latitude: 10.7015547,
      longitude: 122.5690689,
    }}
    apikey={'AIzaSyDz4sKzFahw8gq6f045fSJ6_xTiIhX2x78'}
    strokeWidth={4}
    strokeColor="red"
    optimizeWaypoints={true}
  />

  {jaroLikoNFAMarkers.map((marker, index) => {
             return (<MapView.Marker
             coordinate = {{latitude: jaroLikoNFAMarkers[index].latitude,
             longitude: jaroLikoNFAMarkers[index].longitude}}
             pinColor = {"red"}
             title = {jaroLikoNFAMarkers[index].value}
             /> 
             )})
  }
  
</MapView>
</View>

