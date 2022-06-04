import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import styles from '../screens/styles'

export const bitoonJaroPlazaMarkers = 
[
  {value: 'Bito-on', latitude: 10.750625, longitude: 122.589123},
  {value: 'Bito-on Elementary School', latitude: 10.750059, longitude: 122.589762},
  {value: 'Balabago', latitude: 10.740376, longitude: 122.582298},
  {value: 'TDT Powersteel Corporation', latitude: 10.725971, longitude: 122.579039},
  {value: 'Ticud', latitude: 10.718764, longitude: 122.579594},
  {value: 'Dumangas Terminal', latitude: 10.717816, longitude: 122.579454},
  {value: 'Ticud Elementary School', latitude: 10.717095, longitude: 122.578052},
  {value: 'Bamboo Craft', latitude: 10.711950, longitude: 122.571799},
  {value: 'Lapaz-1 Elementary School', latitude: 10.710980, longitude: 122.572060},
  {value: 'Iloilo City Police Office', latitude: 10.710553, longitude: 122.570836},
  {value: '7-eleven', latitude: 10.710263, longitude: 122.570363},
  {value: 'Jaro Plaza', latitude: 10.711691, longitude: 122.570687}
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
    origin = {{latitude: 10.751351, longitude: 122.589251}}
    waypoints = {[{latitude: 10.747546, longitude: 122.587892},
                  {latitude: 10.74483, longitude: 122.585992},
                  {latitude: 10.740508, longitude: 122.582824},
                  {latitude: 10.738541, longitude: 122.577522},
                  {latitude: 10.729429, longitude: 122.560425},
                  {latitude: 10.730158, longitude: 122.559123},
                  {latitude: 10.725845, longitude: 122.557732},
                  {latitude: 10.725544, longitude: 122.557081},
                  {latitude: 10.72462, longitude: 122.556396}
                ]}
    destination = {{latitude:10.724026, longitude: 122.556851}}
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

