import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import styles from '../screens/styles'

export const jaroLikoNFAMarkers =
  [
    { value: 'Central Philippine University', latitude: 10.7310066, longitude: 122.5491166 },
    { value: 'Jaro Plaza', latitude: 10.7244118, longitude: 122.5573263 },
    { value: 'Jollibee', latitude: 10.7190179, longitude: 122.5608054 },
    { value: 'West Visayas State University', latitude: 10.7135681, longitude: 122.5624973 },
    { value: 'Gaisano Capital City', latitude: 10.7068854, longitude: 122.5666009 },
    { value: 'Atrium', latitude: 10.7006106, longitude: 122.5682697 },
    { value: 'University of San Agustin', latitude: 10.6994123, longitude: 122.5630039 },
    { value: 'Robinsons Place', latitude: 10.6941958, longitude: 122.565573 },
    { value: 'Iloilo City Central Public Market', latitude: 10.6926913, longitude: 122.5695755 },
    { value: 'Arroyo Fountain', latitude: 10.7015547, longitude: 122.5690689 }
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
        origin={{ latitude: 10.7310066, longitude: 122.5491166 }}
        waypoints={[
          { latitude: 10.7244118, longitude: 122.5573263 },
          { latitude: 10.7068854, longitude: 122.5666009 },
          { latitude: 10.700627625045323, longitude: 122.56173624661956 },
          { latitude: 10.692554088885606, longitude: 122.56164941998576 },
          { latitude: 10.692346339397561, longitude: 122.5662754859327 },
          { latitude: 10.693521167089003, longitude: 122.56672697785767 },
          { latitude: 10.692019997854201, longitude: 122.5692067160391 },
          { latitude: 10.720673590415752, longitude: 122.5594646452043 },

        ]}
        destination={{
          latitude: 10.692921809616957,
          longitude: 122.57250608679131
        }}
        apikey={'AIzaSyDz4sKzFahw8gq6f045fSJ6_xTiIhX2x78'}
        strokeWidth={4}
        strokeColor="red"
        optimizeWaypoints={true}
      />

      <MapViewDirections
        origin={{ latitude: 10.692921809616957, longitude: 122.57250608679131 }}
        waypoints={[
          { latitude: 10.69279937833798, longitude: 122.57115508001195 },
          { latitude: 10.692035355019216, longitude: 122.57062370686315 },
          { latitude: 10.693801009050715, longitude: 122.56976239653316 },
          { latitude: 10.706636353205841, longitude: 122.5671367909634 },
          { latitude: 10.7244118, longitude: 122.5573263 },

        ]}
        destination={{
          latitude: 10.733007911409624,
          longitude: 122.54947994138692
        }}
        apikey={'AIzaSyDz4sKzFahw8gq6f045fSJ6_xTiIhX2x78'}
        strokeWidth={4}
        strokeColor="red"
        optimizeWaypoints={true}
      />

      {jaroLikoNFAMarkers.map((marker, index) => {
        return (<MapView.Marker
          coordinate={{
            latitude: jaroLikoNFAMarkers[index].latitude,
            longitude: jaroLikoNFAMarkers[index].longitude
          }}
          pinColor={"red"}
          title={jaroLikoNFAMarkers[index].value}
        />
        )
      })
      }

    </MapView>
  </View>

