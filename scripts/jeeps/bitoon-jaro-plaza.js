import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import styles from '../screens/styles'

export const bitoonJaroPlazaMarkers = 
[
  {value: 'Bito-on', latitude: 10.750625, longitude: 122.589123},
  {value: 'Bito-on Elementary School', latitude: 10.739250, longitude: 122.580121},
  {value: 'Balabago', latitude: 10.737813, longitude: 122.576125},
  {value: 'UCPB', latitude: 10.724689, longitude: 122.556049},
  {value: 'Jaro Plaza', latitude: 10.724362, longitude: 122.557294}
]

export const bitoonJaroPlaza =
<View style = {styles.container}>
<MapView style = {styles.map}
initialRegion = {{
    latitude: 10.728704,
    longitude: 122.579681,
    latitudeDelta: 0.1,
    longitudeDelta: 0.045,
   }}>

<MapViewDirections
    origin = {{latitude: 10.747657, longitude: 122.588003}}
    waypoints = {[{latitude: 10.740523, longitude: 122.582781},
                  {latitude: 10.729385, longitude: 122.560409},
                  {latitude: 10.730144, longitude: 122.559078},
                  {latitude: 10.725459, longitude: 122.557136},
                  {latitude: 10.724300, longitude: 122.556406}
                ]}
    destination = {{latitude:10.723098, longitude: 122.557695}}
    apikey = {'AIzaSyDz4sKzFahw8gq6f045fSJ6_xTiIhX2x78'}
    strokeWidth = {4}
    strokeColor = "red"
    optimizeWaypoints={true}
   />

 {bitoonJaroPlazaMarkers.map((marker, index) => {
             return (<MapView.Marker
             coordinate = {{latitude: bitoonJaroPlazaMarkers[index].latitude,
             longitude: bitoonJaroPlazaMarkers[index].longitude}}
             pinColor = {"red"}
             title = {bitoonJaroPlazaMarkers[index].value}
             /> 
             )})
 }
 
</MapView>
</View>

