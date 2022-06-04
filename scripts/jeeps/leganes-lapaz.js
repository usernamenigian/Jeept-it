import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import styles from '../screens/styles'

export const leganesLapazMarkers = 
[
  {value: 'Leganes Commercial Complex', latitude: 10.786766, longitude: 122.589266},
  {value: 'CitiHardware Iloilo - Jaro', latitude: 10.772256, longitude: 122.583538},
  {value: 'CityMall Tagbak', latitude: 10.763576, longitude: 122.578559},
  {value: 'Ceres Northbound Terminal Iloilo City', latitude: 10.755068, longitude: 122.572003},
  {value: 'Toyota Iloilo, Inc.', latitude: 10.744049, longitude: 122.565313},
  {value: 'Bankers Village IV', latitude: 10.736712, longitude: 122.561254},
  {value: 'Jollibee Tabuc Suba', latitude: 10.730864, longitude: 122.559506},
  {value: 'J&T Express - Office', latitude: 10.728221, longitude: 122.556402},
  {value: 'BDO Iloilo - Jaro Branch', latitude: 10.726243, longitude: 122.556528},
  {value: 'Jaro Plaza', latitude: 10.724483, longitude: 122.557360},
  {value: 'SM Hypermarket Ilolilo', latitude: 10.720479, longitude: 122.561148},
  {value: 'Iloilo Science and Technology University', latitude: 10.715720, longitude: 122.566393},
  {value: 'Lapaz District Plaza', latitude: 10.711820, longitude: 122.570816}
]

export const leganesLapaz =
  <View style = {styles.container}>
    <MapView style = {styles.map} 
      initialRegion = {{
      latitude: 10.785772,
      longitude: 122.588824,
      latitudeDelta: 0.1,
      longitudeDelta: 0.045,
    }}
   >
     
  <MapViewDirections
    origin = {{latitude: 10.786766, longitude: 122.589266}}
    waypoints = {[{latitude: 10.784386, longitude: 122.587710},
                  {latitude: 10.781765, longitude: 122.586120}, 
                  {latitude: 10.773166, longitude: 122.584567}, 
                  {latitude: 10.759631, longitude: 122.576240}, 
                  {latitude: 10.730057, longitude: 122.559084}, 
                  {latitude: 10.727462, longitude: 122.555608}, 
                  {latitude: 10.725539, longitude: 122.557130}, 
                  {latitude: 10.724701, longitude: 122.556367}, 
                  {latitude: 10.723296, longitude: 122.557597}, 
                  {latitude: 10.724014, longitude: 122.558360}, 
                  {latitude: 10.717419, longitude: 122.565080}, 
                  {latitude: 10.710498, longitude: 122.570366}, 
                  {latitude: 10.711100, longitude: 122.571230}]}
    destination = {{latitude: 10.711089, longitude: 122.571241}}
    apikey = {'AIzaSyDz4sKzFahw8gq6f045fSJ6_xTiIhX2x78'}
    strokeWidth = {4}
    strokeColor = "red"
    optimizeWaypoints={true}
  />

  {leganesLapazMarkers.map((marker, index) => {
             return (<MapView.Marker
             coordinate = {{latitude: leganesLapazMarkers[index].latitude,
             longitude: leganesLapazMarkers[index].longitude}}
             pinColor = {"red"}
             title = {leganesLapazMarkers[index].value}
             /> 
             )})
  }
   </MapView> 
  </View>


