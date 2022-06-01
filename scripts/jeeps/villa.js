import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import styles from '../screens/styles'

const villa =
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
    origin={{ latitude: 10.688, longitude: 122.51618 }}
    waypoints={[
      { latitude: 10.687197843635623, longitude: 122.51701892988538 },
      { latitude: 10.6970243, longitude: 122.5429724 },
      { latitude: 10.6969435, longitude: 122.5441128 },
      { latitude: 10.696281015826973, longitude: 122.54456174863462 },
      { latitude: 10.699259415002901, longitude: 122.55020145218919 },
      { latitude: 10.701190565458013, longitude: 122.56909037416517},
      { latitude: 10.696485546951646, longitude: 122.56888982758474 },
    ]}
    destination={{ latitude: 10.6986532, longitude: 122.5671546 }}
    apikey={'AIzaSyDz4sKzFahw8gq6f045fSJ6_xTiIhX2x78'}
    strokeWidth={4}
    strokeColor="red"
    optimizeWaypoints={true}
  />

          <MapViewDirections
    origin={{ latitude: 10.6986532, longitude: 122.5671546 }}
    destination={{ latitude: 10.701477371067462, longitude: 122.5676446977794 }}
    apikey={'AIzaSyDz4sKzFahw8gq6f045fSJ6_xTiIhX2x78'}
    strokeWidth={4}
    strokeColor="red"
    optimizeWaypoints={true}
  />


  <MapView.Marker
    coordinate={{ latitude: 10.688, longitude: 122.51618 }}
    pinColor={'red'}
    title={'Villa Plaza'}
  />
  <MapView.Marker
    coordinate={{ latitude: 10.6872591, longitude: 122.5192125 }}
    pinColor={'red'}
    title={'Quezon Barangay Hall'}
  />
  <MapView.Marker
    coordinate={{ latitude: 10.6970243, longitude: 122.5429724 }}
    pinColor={'red'}
    title={'Jollibee'}
  />
  <MapView.Marker
    coordinate={{ latitude: 10.6969435, longitude: 122.5441128 }}
    pinColor={'red'}
    title={'Molo Plaza'}
  />
  <MapView.Marker
    coordinate={{ latitude: 10.6960269, longitude: 122.5446206 }}
    pinColor={'red'}
    title={'Mercury Drugstore'}
  />
  <MapView.Marker
    coordinate={{ latitude: 10.6971039, longitude: 122.5471934 }}
    pinColor={'red'}
    title={'Molo Public Cemetery'}
  />
  <MapView.Marker
    coordinate={{ latitude: 10.6977383, longitude: 122.5495828 }}
    pinColor={'red'}
    title={'Iloilo City National Highschool'}
  />
  <MapView.Marker
    coordinate={{ latitude: 10.7021203, longitude: 122.5657076 }}
    pinColor={'red'}
    title={'Assumption Iloilo'}
  />
  <MapView.Marker
    coordinate={{ latitude: 10.7006106, longitude: 122.5682697 }}
    pinColor={'red'}
    title={'The Atrium'}
  />
  <MapView.Marker
    coordinate={{ latitude: 10.6989775, longitude: 122.5688692 }}
    pinColor={'red'}
    title={'Landbank'}
  />
  <MapView.Marker
    coordinate={{ latitude: 10.6984378, longitude: 122.5692699 }}
    pinColor={'red'}
    title={'Chowking'}
  />
  <MapView.Marker
    coordinate={{ latitude: 10.696622, longitude: 122.5686437 }}
    pinColor={'red'}
    title={'Unitop'}
  />
  <MapView.Marker
    coordinate={{ latitude: 10.697044, longitude: 122.5674641 }}
    pinColor={'red'}
    title={'Mary Mart'}
  />
  <MapView.Marker
    coordinate={{ latitude: 10.6986532, longitude: 122.5671546 }}
    pinColor={'red'}
    title={'SM Delgado'}
  />
</MapView>
</View>

export default villa
