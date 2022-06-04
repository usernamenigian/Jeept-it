import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import styles from '../screens/styles'

export const parolaSuperMarkers = 
[
  {value: 'Ferry Terminal Parola', latitude: 10.692466, longitude: 122.583463},
  {value: 'Iloilo Avenue Lumber', latitude: 10.695604, longitude: 122.579447},
  {value: 'Landbank Plaza Libertad', latitude: 10.691990, longitude: 122.574091},
  {value: 'Iloilo Convention Center', latitude: 10.714237, longitude: 122.545294},
  {value: 'Iloilo Society Commercial', latitude: 10.692101, longitude: 122.572210},
  {value: 'Phinma University Of Iloilo', latitude: 10.691999, longitude: 122.569612},
  {value: 'Mang Inasal 1st Store', latitude: 10.693343, longitude: 122.565749},
  {value: 'Super/Iloilo Terminal Market', latitude: 10.693130, longitude: 122.564485}
]

export const parolaSuper =
  <View style = {styles.container}>
   <MapView style = {styles.map} 
    initialRegion = {{
     latitude: 10.692466,
     longitude: 122.583463,
     latitudeDelta: 0.1,
     longitudeDelta: 0.045,
    }}
   >

  <MapViewDirections
    origin = {{latitude: 10.692679, longitude: 122.583174}}
    waypoints = {[{latitude: 10.692883, longitude: 122.582737},
                  {latitude: 10.695167, longitude: 122.580010},
                  {latitude: 10.696467, longitude: 122.579146},
                  {latitude: 10.696371, longitude: 122.578933}, 
                  {latitude: 10.691828, longitude: 122.573920},
                  {latitude: 10.691663, longitude: 122.573703}, 
                  {latitude: 10.691981, longitude: 122.571671}, 
                  {latitude: 10.692020, longitude: 122.569031}, 
                  {latitude: 10.691789, longitude: 122.566291}, 
                  {latitude: 10.693443, longitude: 122.566341}]}
    destination = {{latitude: 10.693248, longitude: 122.564065}}
    apikey = {'AIzaSyDz4sKzFahw8gq6f045fSJ6_xTiIhX2x78'}
    strokeWidth = {4}
    strokeColor = "red"
    optimizeWaypoints={true}
  />

  {parolaSuperMarkers.map((marker, index) => {
             return (<MapView.Marker
             coordinate = {{latitude: parolaSuperMarkers[index].latitude,
             longitude: parolaSuperMarkers[index].longitude}}
             pinColor = {"red"}
             title = {parolaSuperMarkers[index].value}
             /> 
             )})
  }

  </MapView> 
</View>


 
