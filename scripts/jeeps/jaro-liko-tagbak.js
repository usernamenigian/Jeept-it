import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import styles from '../screens/styles'

export const jaroLikoTagbakMarkers = [
  { value: 'Tagbak Bus Terminal', latitude: 10.774, longitude: 122.574638 },
  { value: 'Toyota', latitude: 10.7445817, longitude: 122.56584 },
  { value: 'Jollibee', latitude: 10.7410528, longitude: 122.5634871 },
  { value: 'Jaro Plaza', latitude: 10.7244118, longitude: 122.5573263 },
  { value: 'Jollibee', latitude: 10.7190179, longitude: 122.5608054 },
  { value: 'West Visayas State University', latitude: 10.7135681, longitude: 122.5624973 },
  { value: 'Gaisano Capital City', latitude: 10.7068854, longitude: 122.5666009 },
  { value: 'Atrium', latitude: 10.7006106, longitude: 122.5682697 },
  { value: 'University of San Agustin', latitude: 10.6994123, longitude: 122.5630039 },
  { value: 'SM Delgado', latitude: 10.6986532, longitude: 122.5671546 },
  { value: 'Rizal Lapaz Barangay Hall', latitude: 10.706645519257266, longitude: 122.56926365208066 },
  { value: 'Iloilo Provincial Capitol', latitude: 10.70260509701925, longitude: 122.56837876372863 }
]
export const jaroLikoTagbak =
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
        origin={{ latitude: 10.774, longitude: 122.574638 }}
        waypoints={[
          { latitude: 10.7068854, longitude: 122.5666009 },
          { latitude: 10.7445817, longitude: 122.56584 },
          { latitude: 10.70207967645561, longitude: 122.5682153295597 },
          { latitude: 10.699288913075755, longitude: 122.56173629056232 },
          { latitude: 10.694473729860558, longitude: 122.56240662325548 },
        ]}
        destination={{
          latitude: 10.7072972362503,
          longitude: 122.56923087308219,
        }}
        apikey={'AIzaSyDz4sKzFahw8gq6f045fSJ6_xTiIhX2x78'}
        strokeWidth={4}
        strokeColor="red"
        optimizeWaypoints={true}
      />

      <MapViewDirections
        origin={{ latitude: 10.7072972362503, longitude: 122.56923087308219 }}
        destination={{
          latitude: 10.774,
          longitude: 122.574638
        }}
        waypoints={[
          { latitude: 10.709290493752755, longitude: 122.5667762007508 },
        ]}
        apikey={'AIzaSyDz4sKzFahw8gq6f045fSJ6_xTiIhX2x78'}
        strokeWidth={4}
        strokeColor="red"
        optimizeWaypoints={true}
      />

      {jaroLikoTagbakMarkers.map((marker, index) => {
        return (<MapView.Marker
          coordinate={{
            latitude: jaroLikoTagbakMarkers[index].latitude,
            longitude: jaroLikoTagbakMarkers[index].longitude
          }}
          pinColor={"red"}
          title={jaroLikoTagbakMarkers[index].value}
        />
        )
      })
      }

    </MapView>
  </View>

