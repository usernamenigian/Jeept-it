import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import styles from '../screens/styles'

export const ungkaTanzaMarkers = 
[
  {value: 'Christ the King Memorial Park', latitude: 10.745352, longitude: 122.540766},
  {value: 'ACE Medical Center', latitude: 10.743802, longitude: 122.540294},
  {value: 'Sambag Jaro Police Station', latitude: 10.741904, longitude: 122.539489},
  {value: 'University of San Agustine', latitude: 10.736754, longitude: 122.536875},
  {value: 'Luis Mirasol Elementary School', latitude: 10.729742, longitude: 122.545822},
  {value: 'Jaro Public Cemetary', latitude: 10.726666, longitude: 122.549829},
  {value: '7-eleven', latitude: 10.719287, longitude: 122.552781},
  {value: 'Shell Gasoline Station', latitude: 10.719616, longitude: 122.551559},
  {value: 'Petron Gasoline Station', latitude: 10.716899, longitude: 122.552569},
  {value: 'SM City Iloilo', latitude: 10.714293, longitude: 122.551124},
  {value: 'Save More', latitude: 10.713164, longitude: 122.552580},
  {value: 'Plazuela Road', latitude: 10.712779, longitude: 122.551485},
  {value: 'Pag-ibig Fund', latitude: 10.711516, longitude: 122.551392},
  {value: 'Chowking', latitude: 10.710101, longitude: 122.552537},
  {value: 'Mang Inasal', latitude: 10.710206, longitude: 122.552816},
  {value: 'Green Fields Iloilo', latitude: 10.708310, longitude: 122.552719},
  {value: 'Saint Joseph School', latitude: 10.704982, longitude: 122.554043},
  {value: 'Iloilo Diversion Bridge', latitude: 10.702050, longitude: 122.553532},
  {value: 'Esplanade 3', latitude: 10.703094, longitude: 122.554228},
  {value: 'University of the Philippines', latitude: 10.698079, longitude: 122.555360},
  {value: 'Iloilo Doctors Hospital', latitude: 10.697044, longitude: 122.554263},
  {value: 'Tanza Cemetary', latitude: 10.695853, longitude: 122.556433},
  
]

export const ungkaTanza = 
<View style = {styles.container}>
<MapView style = {styles.map}
initialRegion = {{
    latitude: 10.719394,
    longitude: 122.551809,
    latitudeDelta: 0.1,
    longitudeDelta: 0.045,
   }}>

<MapViewDirections
    origin = {{latitude: 10.746258, longitude: 122.539106}}
    waypoints = {[{latitude: 10.742185, longitude: 122.539294},
                  {latitude: 10.738248, longitude: 122.538188},
                  {latitude: 10.730363, longitude: 122.543466},
                  {latitude: 10.724114, longitude: 122.550004},
                  {latitude: 10.719482, longitude: 122.552113},
                  {latitude: 10.709553, longitude: 122.551626},
                  {latitude: 10.699759, longitude: 122.55415},
                  {latitude: 10.698835, longitude: 122.554505}
                ]}
    destination = {{latitude:10.695679, longitude: 122.554823}}
    apikey = {'AIzaSyDz4sKzFahw8gq6f045fSJ6_xTiIhX2x78'}
    strokeWidth = {4}
    strokeColor = "red"
    optimizeWaypoints={true}
   />

 {ungkaTanzaMarkers.map((marker, index) => {
             return (<MapView.Marker
             coordinate = {{latitude: ungkaTanzaMarkers[index].latitude,
             longitude: ungkaTanzaMarkers[index].longitude}}
             pinColor = {"red"}
             title = {ungkaTanzaMarkers[index].value}
             /> 
             )})
  }

</MapView>
</View>

