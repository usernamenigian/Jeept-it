import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import styles from '../screens/styles'

export const manduriaoMoloMarkers = 
    [
    {value: 'Ana Ros Village',  latitude: 10.725809, longitude: 122.528350},
    {value: 'Mandurriao Plaza',  latitude: 10.717873, longitude: 122.537422},
    {value: 'Esplanade Uno',  latitude: 10.700778, longitude: 122.542669},
    {value: 'Iloilo Supermart - Molo',  latitude: 10.718063, longitude: 122.541748},
    {value: 'Molo Plaza',  latitude: 10.696873, longitude: 122.544026},
    {value: 'GT Plaza Mall Molo',  latitude: 10.696514, longitude: 122.545271},
    ]

export const manduriaoMolo = 
<View style = {styles.container}>
<MapView style = {styles.map}
initialRegion = {{
    latitude: 10.740320,
    longitude: 122.517204,
    latitudeDelta: 0.1,
    longitudeDelta: 0.045,
   }}>
       
<MapViewDirections
    origin = {{latitude: 10.696514, longitude: 122.545271}}
    waypoints = {[{latitude: 10.696873, longitude: 122.544026},
                  {latitude: 10.718063, longitude: 122.541748},
                  {latitude: 10.700778, longitude: 122.542669},
                  {latitude: 10.716574, longitude: 122.536770},
                  {latitude: 10.725809, longitude: 122.528350}]}
    destination = {{latitude: 10.740320, longitude: 122.517204}}
    apikey = {'AIzaSyDz4sKzFahw8gq6f045fSJ6_xTiIhX2x78'}
    strokeWidth = {4}
    strokeColor = "red"
    optimizeWaypoints={true}
   />

<MapViewDirections
    origin = {{latitude: 10.740320, longitude: 122.517204}}
    waypoints = {[{latitude: 10.725809, longitude: 122.528350},
                  {latitude: 10.716574, longitude: 122.536770},
                  {latitude: 10.700778, longitude: 122.542669},
                  {latitude: 10.718063, longitude: 122.541748},
                  {latitude: 10.696873, longitude: 122.544026}]}
    destination = {{latitude: 10.696514, longitude: 122.545271}}
    apikey = {'AIzaSyDz4sKzFahw8gq6f045fSJ6_xTiIhX2x78'}
    strokeWidth = {4}
    strokeColor = "red"
    optimizeWaypoints={true}
   />

   {manduriaoMoloMarkers.map((marker, index) => {
             return (<MapView.Marker
             coordinate = {{latitude: manduriaoMoloMarkers[index].latitude,
             longitude: manduriaoMoloMarkers[index].longitude}}
             pinColor = {"red"}
             title = {manduriaoMoloMarkers[index].value}
             /> 
             )})
  }

</MapView>
</View>






