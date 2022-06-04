import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';

import styles from '../screens/styles'

export const calaparanVillaMarkers = 
[{value: 'Plaza Libertad', latitude: 10.692331, longitude: 122.573544}, 
 {value: 'PHINMA University Iloilo', latitude: 10.691782, longitude: 122.569529},
 {value: 'UNITOP', latitude: 10.696526, longitude: 122.568670},
 {value: '1688 MALL', latitude: 10.695514, longitude: 122.566815},
 {value: 'Robinsons Iloilo', latitude: 10.694987, longitude: 122.565204},
 {value: 'Colegio de las Hijas de Jesus', latitude: 10.694797, longitude: 122.562891},
 {value: 'Tanza Church', latitude: 10.693174, longitude: 122.559348},
 {value: 'Robinsons Builders', latitude: 10.692837, longitude: 122.555848},
 {value: 'Breakthrough', latitude: 10.679911, longitude: 122.517421}
]

export const calaparanVilla =
  <View style = {styles.container}>
   <MapView style = {styles.map} 
    initialRegion = {{
     latitude: 10.717405,
     longitude: 122.545082,
     latitudeDelta: 0.1,
     longitudeDelta: 0.045,
    }}
   >

   <MapViewDirections
    origin = {{latitude: 10.691797, longitude: 122.573818}}
    waypoints = {[{latitude: 10.692967, longitude: 122.572557},
                  {latitude: 10.691965, longitude: 122.571612},
                  {latitude: 10.692157, longitude: 122.569135},
                  {latitude: 10.696469, longitude: 122.569063},
                  {latitude: 10.694480, longitude: 122.555091},
                  {latitude: 10.692804, longitude: 122.555181},
                  {latitude: 10.691986, longitude: 122.549297},
                  {latitude: 10.682024, longitude: 122.539196}]}
    destination = {{latitude: 10.680258, longitude: 122.517407}}
    apikey = {'AIzaSyDz4sKzFahw8gq6f045fSJ6_xTiIhX2x78'}
    strokeWidth = {4}
    strokeColor = "red"
    optimizeWaypoints={true}
   />
   
   <MapViewDirections
    origin = {{latitude: 10.692804, longitude: 122.555181}}
    waypoints = {[{latitude: 10.696409, longitude: 122.569001},
                  {latitude: 10.691997, longitude: 122.569237}]}
    destination = {{latitude:10.691797, longitude: 122.573818}}
    apikey = {'AIzaSyDz4sKzFahw8gq6f045fSJ6_xTiIhX2x78'}
    strokeWidth = {4}
    strokeColor = "red"
    optimizeWaypoints={true}
   />

   {calaparanVillaMarkers.map((marker, index) => {
    return (<MapView.Marker
     coordinate = {{latitude: calaparanVillaMarkers[index].latitude,
     longitude: calaparanVillaMarkers[index].longitude}}
     pinColor = {"red"}
     title = {calaparanVillaMarkers[index].value}
    /> 
    )})
   }

   </MapView> 
  </View>