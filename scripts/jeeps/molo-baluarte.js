import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import styles from '../screens/styles'

export const moloBaluarteMarkers = 
[
  {value: 'Fadriga auto repair services', latitude: 10.692636, longitude: 122.554727},
  {value: 'Sofia Lodge', latitude: 10.692570, longitude: 122.553859},
  {value: 'Farmart', latitude: 10.692218, longitude: 122.550839},
  {value: 'Baluarte Elementary School', latitude: 10.692166, longitude: 122.548412},
  {value: 'Townsville Studios', latitude: 10.693390, longitude: 122.546669},
  {value: 'St. Therese Chapels', latitude: 10.695253, longitude: 122.545159},
  {value: 'Mercury Drug', latitude: 10.696139, longitude: 122.544740},
  {value: 'Molo Public Cemetery', latitude: 10.697169, longitude: 122.547197},
  {value: 'Iloilo City National High School', latitude: 10.698428, longitude: 122.549132},
  {value: 'John B. Lacson Foundation', latitude: 10.699382, longitude: 122.552607},
  {value: 'UPV - Graduate and Continuing EducatBuildingion', latitude: 10.699731, longitude: 122.555143},
  {value: 'UnionBank of the Philippines - Iloilo-Gen. Luna', latitude: 10.700400, longitude: 122.561084},
  {value: 'University of San Agustin', latitude: 10.700744, longitude: 122.562861},
  {value: 'BPI Iloilo-General Luna Branch', latitude: 10.701258, longitude: 122.566149},
  {value: 'St. Paul University Iloilo', latitude: 10.702003, longitude: 122.567390},
  {value: 'Bank of Commerce', latitude: 10.701049, longitude: 122.568974},
  {value: 'Grand Xing Imperial Hotel', latitude: 10.699767, longitude: 122.569695},
  {value: 'Chowking', latitude: 10.697143, longitude: 122.569179},
  {value: 'Calle Real Business Center', latitude: 10.695574, longitude: 122.569816},
  {value: `Roberto's`, latitude: 10.693702, longitude: 122.571226},
  {value: '7-Eleven', latitude: 10.693054, longitude: 122.572298},
  {value: 'Plaza Libertad', latitude: 10.691918, longitude: 122.573735},
  {value: 'Philippine Charity Sweepstakes Office', latitude: 10.691661, longitude: 122.573831},
  {value: 'Iloilo Society Commercial', latitude: 10.692046, longitude: 122.572226},
  {value: 'Phinma University Of Iloilo', latitude: 10.691983, longitude: 122.569589},
  {value: 'Iloilo Central Market', latitude: 10.692955, longitude: 122.569156},
  {value: 'Botica China', latitude: 10.696083, longitude: 122.569179},
  {value: 'Unitop', latitude: 10.696398, longitude: 122.568471},
  {value: '7-Eleven', latitude: 10.695334, longitude: 122.565569},
  {value: 'Tanza Church', latitude: 10.693336, longitude: 122.559298},
  {value: 'Goldwyn & Jade Trading', latitude: 10.694514, longitude: 122.555129},
  {value: 'Infante', latitude: 10.692700, longitude: 122.555041}
]

export const moloBaluarte =
  <View style = {styles.container}>
    <MapView style = {styles.map} 
      initialRegion = {{
      latitude: 10.692636,
      longitude: 122.554727,
      latitudeDelta: 0.1,
      longitudeDelta: 0.045,
    }}
   >
  <MapViewDirections
    origin = {{latitude: 10.692568, longitude: 122.554742}}
    waypoints = {[{latitude: 10.691976, longitude: 122.548752},
                  {latitude: 10.695989, longitude: 122.544447}, 
                  {latitude: 10.699095, longitude: 122.549774}, 
                  {latitude: 10.699526, longitude: 122.552570}, 
                  {latitude: 10.699590, longitude: 122.552675}, 
                  {latitude: 10.699965, longitude: 122.555636}, 
                  {latitude: 10.699924, longitude: 122.555782}, 
                  {latitude: 10.701465, longitude: 122.567708}, 
                  {latitude: 10.701708, longitude: 122.568403}, 
                  {latitude: 10.701525, longitude: 122.569019}, 
                  {latitude: 10.699146, longitude: 122.569073}, 
                  {latitude: 10.696537, longitude: 122.569087},
                  {latitude: 10.696416, longitude: 122.569166},
                  {latitude: 10.693939, longitude: 122.570997},
                  {latitude: 10.692933, longitude: 122.572552},
                  {latitude: 10.691806, longitude: 122.573880},
                  {latitude: 10.691665, longitude: 122.573714},
                  {latitude: 10.692158, longitude: 122.569130},
                  {latitude: 10.696494, longitude: 122.569038},
                  {latitude: 10.693359, longitude: 122.558886},
                  {latitude: 10.694492, longitude: 122.555097},
                  {latitude: 10.694473, longitude: 122.555024},
                  {latitude: 10.692822, longitude: 122.555349}]}
    destination = {{latitude: 10.692636, longitude: 122.554946}}
    apikey = {'AIzaSyDz4sKzFahw8gq6f045fSJ6_xTiIhX2x78'}
    strokeWidth = {4}
    strokeColor = "red"
    optimizeWaypoints={true}
  />
  
  {moloBaluarteMarkers.map((marker, index) => {
             return (<MapView.Marker
             coordinate = {{latitude: moloBaluarteMarkers[index].latitude,
             longitude: moloBaluarteMarkers[index].longitude}}
             pinColor = {"red"}
             title = {moloBaluarteMarkers[index].value}
             /> 
             )})
  }

  </MapView> 
</View>


