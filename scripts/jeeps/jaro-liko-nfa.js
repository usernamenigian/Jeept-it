import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';

import styles from '../screens/styles'

const jaroLikoNFA =
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
    origin={{ latitude: 10.7310066, longitude: 122.5491166 }}
    waypoints={[
      { latitude: 10.7244118, longitude: 122.5573263 },
      { latitude: 10.7006106, longitude: 122.5682697 },
      { latitude: 10.700849389350548, longitude: 122.56479350402707 },
      { latitude: 10.693342884160849, longitude: 122.56500322318966 },
      { latitude: 10.693378713471066, longitude: 122.56939969898468 },
      { latitude: 10.696315559533147, longitude: 122.57110560091364 }
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

  <MapView.Marker
    coordinate={{ latitude: 10.7310066, longitude: 122.5491166 }}
    pinColor={'red'}
    title={'Central Philippine University'}
  />
  <MapView.Marker
    coordinate={{ latitude: 10.7244118, longitude: 122.5573263 }}
    pinColor={'red'}
    title={'Jaro Plaza'}
  />
  <MapView.Marker
    coordinate={{ latitude: 10.7190179, longitude: 122.5608054 }}
    pinColor={'red'}
    title={'Jollibee'}
  />
  <MapView.Marker
    coordinate={{ latitude: 10.7135681, longitude: 122.5624973 }}
    pinColor={'red'}
    title={'West Visayas State University'}
  />
  <MapView.Marker
    coordinate={{ latitude: 10.7068854, longitude: 122.5666009 }}
    pinColor={'red'}
    title={'Gaisano Capital City'}
  />
  <MapView.Marker
    coordinate={{ latitude: 10.7006106, longitude: 122.5682697 }}
    pinColor={'red'}
    title={'The Atrium'}
  />
  <MapView.Marker
    coordinate={{ latitude: 10.6994123, longitude: 122.5630039 }}
    pinColor={'red'}
    title={'University of San Agustin'}
  />
  <MapView.Marker
    coordinate={{ latitude: 10.6941958, longitude: 122.565573 }}
    pinColor={'red'}
    title={'Robinsons Place'}
  />
  <MapView.Marker
    coordinate={{ latitude: 10.6926913, longitude: 122.5695755 }}
    pinColor={'red'}
    title={'Iloilo City Central Public Market'}
  />
  <MapView.Marker
    coordinate={{ latitude: 10.7015547, longitude: 122.5690689 }}
    pinColor={'red'}
    title={'Arroyo Fountain'}
  />
</MapView>
</View>

export default jaroLikoNFA