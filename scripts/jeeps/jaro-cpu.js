import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import styles from '../screens/styles'

export const jaroCPUMarkers =
  [
    { value: 'Central Philippine University', latitude: 10.7310066, longitude: 122.5491166 },
    { value: 'Jaro Plaza', latitude: 10.7244118, longitude: 122.5573263 },
    { value: 'Jollibee', latitude: 10.7190179, longitude: 122.5608054 },
    { value: 'West Visayas State University', latitude: 10.7135681, longitude: 122.5624973 },
    { value: 'Gaisano Capital City', latitude: 10.7068854, longitude: 122.5666009 },
    { value: 'Arroyo Fountain', latitude: 10.7015547, longitude: 122.5690689 },
    { value: 'Jollibee', latitude: 10.6967916, longitude: 122.5689268 },
    { value: 'Museum of Philippine Economic History', latitude: 10.693033218383789, longitude: 122.572509765625 },
    { value: 'Plaza Libertad', latitude: 10.6926236, longitude: 122.573675 },
    { value: 'City Mall Parola', latitude: 10.691514696588158, longitude: 122.58258372479348 }
  ]

export const jaroCPU =
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
          { latitude: 10.6967916, longitude: 122.5689268 },
          { latitude: 10.691613003096371, longitude: 122.57402551918958 }
        ]}
        destination={{
          latitude: 10.691514696588158,
          longitude: 122.58258372479348,
        }}
        apikey={'AIzaSyDz4sKzFahw8gq6f045fSJ6_xTiIhX2x78'}
        strokeWidth={4}
        strokeColor="red"
        optimizeWaypoints={true}
      />

      <MapViewDirections
        origin={{
          latitude: 10.691514696588158,
          longitude: 122.58258372479348,
        }}
        waypoints={[
          { latitude: 10.693619677178722, longitude: 122.579265963030689 },
          { latitude: 10.693583433470499, longitude: 122.57165353956078 },
          { latitude: 10.705819981510704, longitude: 122.56767161686376 },
          { latitude: 10.720673590415752, longitude: 122.5594646452043 },
          { latitude: 10.723888430702711, longitude: 122.55840779610143 },
        ]}
        destination={{
          latitude: 10.732880454561142,
          longitude: 122.54965341320211,
        }}
        apikey={'AIzaSyDz4sKzFahw8gq6f045fSJ6_xTiIhX2x78'}
        strokeWidth={4}
        strokeColor="red"
        optimizeWaypoints={true}
      />


      {jaroCPUMarkers.map((marker, index) => {
        return (<MapView.Marker
          coordinate={{
            latitude: jaroCPUMarkers[index].latitude,
            longitude: jaroCPUMarkers[index].longitude
          }}
          pinColor={"red"}
          title={jaroCPUMarkers[index].value}
        />
        )
      })
      }
    </MapView>
  </View>

