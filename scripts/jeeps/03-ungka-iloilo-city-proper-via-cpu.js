import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';

import styles from '../screens/styles'

export const ungkaCPUMarkers =
  [
    { value: 'ITGSI Ungka Terminal', latitude: 10.745878, longitude: 122.539180},
    { value: 'Christ The King Memorial Park', latitude: 10.7457002, longitude: 122.5408506 },
    { value: 'Central Philippine University', latitude: 10.7310066, longitude: 122.5491166 },
    { value: 'Jaro Plaza', latitude: 10.7244118, longitude: 122.5573263 },
    { value: 'West Visayas State University', latitude: 10.7135681, longitude: 122.5624973 },
    { value: 'Gaisano Capital City', latitude: 10.7068854, longitude: 122.5666009 },
    { value: 'Casa Real', latitude: 10.701699, longitude: 122.569073 },
    { value: 'Museum of Philippine Economic History', latitude: 10.693033218383789, longitude: 122.572509765625 },
    { value: 'Plaza Libertad', latitude: 10.6926236, longitude: 122.573675 },
    { value: 'City Mall Parola', latitude: 10.691514696588158, longitude: 122.58258372479348 }
  ]

export const ungkaCPU =
  <View style={styles.container}>
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 10.708666,
        longitude: 122.562307,
        latitudeDelta: 0.1,
        longitudeDelta: 0.045,
      }}>

      <MapViewDirections
        origin={{ latitude: 10.746165, longitude: 122.539340}}
        waypoints={[
          { latitude: 10.724654, longitude: 122.556407 },
          { latitude: 10.694006, longitude: 122.570953 }
        ]}
        destination={{latitude: 10.691491, longitude: 122.582518,}}
        apikey={'AIzaSyDz4sKzFahw8gq6f045fSJ6_xTiIhX2x78'}
        strokeWidth={4}
        strokeColor="red"
        optimizeWaypoints={true}
      />

      <MapViewDirections
        origin={{latitude: 10.691491, longitude: 122.582518}}
        waypoints={[
          { latitude: 10.692255, longitude: 122.574311 },
          { latitude: 10.701188, longitude: 122.569082 },
          { latitude: 10.727999, longitude: 122.557175 },
        ]}
        destination={{latitude: 10.746246, longitude: 122.539338}}
        apikey={'AIzaSyDz4sKzFahw8gq6f045fSJ6_xTiIhX2x78'}
        strokeWidth={4}
        strokeColor="red"
        optimizeWaypoints={true}
      />

      {ungkaCPUMarkers.map((marker, index) => {
        return (<MapView.Marker
          coordinate={{
            latitude: ungkaCPUMarkers[index].latitude,
            longitude: ungkaCPUMarkers[index].longitude
          }}
          pinColor={"red"}
          title={ungkaCPUMarkers[index].value}
        />
        )
      })
      }

    </MapView>
  </View>