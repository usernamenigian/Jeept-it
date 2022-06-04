import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import styles from '../screens/styles'

export const lapazMarkers = 
[
  {value: 'Lapaz District Plaza', latitude: 10.711622, longitude: 122.570649},
  {value: 'Total Gasoline Station', latitude: 10.709935, longitude: 122.570187},
  {value: 'Lapaz Public Market', latitude: 10.709061, longitude: 122.567858},
  {value: 'Petron Gasoline Station', latitude: 10.708483, longitude: 122.56817},
  {value: 'Metrobank', latitude: 10.70822, longitude: 122.567837},
  {value: 'BDO', latitude: 10.707935, longitude: 122.567179},
  {value: 'Landbank', latitude: 10.707553, longitude: 122.56703},
  {value: 'Petron Gasoline Station', latitude: 10.707446, longitude: 122.567356},
  {value: 'Gaisano Capital, Iloilo City', latitude: 10.706884, longitude: 122.566633},
  {value: 'Suzuki Motors', latitude: 10.707127, longitude: 122.567494},
  {value: 'Esplanade', latitude: 10.706025, longitude: 122.566894},
  {value: 'Hall of Justice', latitude: 10.704396, longitude: 122.568322},
  {value: 'St. Paul University', latitude: 10.70291, longitude: 122.567367},
  {value: 'Iloilo Provincial Capitol', latitude: 10.702558, longitude: 122.569031},
  {value: 'Atrium', latitude: 10.701359, longitude: 122.568164}
]

export const lapaz = 
<View style = {styles.mapContainer}>
<MapView style = {styles.map}
initialRegion = {{
    latitude: 10.706722,
    longitude: 122.5681,
    latitudeDelta: 0.1,
    longitudeDelta: 0.045,
   }}>

<MapViewDirections
    origin = {{latitude: 10.711057, longitude: 122.571213}}
    waypoints = {[{latitude: 10.707765, longitude: 122.567043},
                  {latitude: 10.706208, longitude: 122.567426},
                  {latitude: 10.705068, longitude: 122.65783},
                  {latitude: 10.702121, longitude: 122.568122},
                  {latitude: 10.701812, longitude: 122.568232},
                  {latitude: 10.701682, longitude: 122.568394},
                  {latitude: 10.701475, longitude: 122.569008}
                ]}
    destination = {{latitude:10.701503, longitude: 122.569177}}
    apikey = {'AIzaSyDz4sKzFahw8gq6f045fSJ6_xTiIhX2x78'}
    strokeWidth = {4}
    strokeColor = "red"
    optimizeWaypoints={true}
   />

  {lapazMarkers.map((marker, index) => {
             return (<MapView.Marker
             coordinate = {{latitude: lapazMarkers[index].latitude,
             longitude: lapazMarkers[index].longitude}}
             pinColor = {"red"}
             title = {lapazMarkers[index].value}
             /> 
             )})
  }

</MapView>
</View>

