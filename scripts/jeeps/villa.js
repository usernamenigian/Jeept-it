import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import styles from '../screens/styles'

export const villaMarkers = [
  {value:'Villa Plaza', latitude: 10.688, longitude: 122.51618},
  {value:'Quezon Barangay Hall', latitude: 10.6872591, longitude: 122.5192125},
  {value:'Jollibee', latitude: 10.6970243, longitude: 122.5429724},
  {value:'Molo Plaza', latitude: 10.6969435, longitude: 122.5441128},
  {value:'Mercury Drugstore',latitude: 10.6960269, longitude: 122.5446206},
  {value:'Molo Public Cemetery',latitude: 10.6971039, longitude: 122.5471934},
  {value:'Iloilo City National Highschool', latitude: 10.6977383, longitude: 122.5495828},
  {value:'Assumption de Iloilo', latitude: 10.7021203, longitude: 122.5657076},
  {value:'Atrium', latitude: 10.7006106, longitude: 122.5682697},
  {value:'Landbank', latitude: 10.6989775, longitude: 122.5688692},
  {value:'Chowking', latitude: 10.6984378, longitude: 122.5692699},
  {value:'UNITOP', latitude: 10.696622, longitude: 122.5686437},
  {value:'Mary Mart', latitude: 10.697044, longitude: 122.5674641},
  {value:'SM Delgado', latitude: 10.6986532, longitude: 122.5671546}
]

export const villa =
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
    origin={{latitude: 10.688, longitude: 122.51618}}
    waypoints={[
      {latitude: 10.687197843635623, longitude: 122.51701892988538},
      {latitude: 10.6970243, longitude: 122.5429724},
      {latitude: 10.6969435, longitude: 122.5441128},
      {latitude: 10.696281015826973, longitude: 122.54456174863462},
      {latitude: 10.699259415002901, longitude: 122.55020145218919},
      {latitude: 10.701190565458013, longitude: 122.56909037416517},
      {latitude: 10.696485546951646, longitude: 122.56888982758474},
    ]}
    destination={{latitude: 10.6986532, longitude: 122.5671546}}
    apikey={'AIzaSyDz4sKzFahw8gq6f045fSJ6_xTiIhX2x78'}
    strokeWidth={4}
    strokeColor="red"
    optimizeWaypoints={true}
  />

          <MapViewDirections
    origin={{latitude: 10.6986532, longitude: 122.5671546}}
    destination={{latitude: 10.701477371067462, longitude: 122.5676446977794}}
    apikey={'AIzaSyDz4sKzFahw8gq6f045fSJ6_xTiIhX2x78'}
    strokeWidth={4}
    strokeColor="red"
    optimizeWaypoints={true}
  />

  {villaMarkers.map((marker, index) => {
             return (<MapView.Marker
             coordinate = {{latitude: villaMarkers[index].latitude,
             longitude: villaMarkers[index].longitude}}
             pinColor = {"red"}
             title = {villaMarkers[index].value}
             /> 
             )})
  }

</MapView>
</View>

