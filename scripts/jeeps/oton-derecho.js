import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import styles from '../screens/styles'

export const otonDerechoMarkers = [
    {value: 'Small Ville',  latitude: 10.705882, longitude: 122.552442},
    {value: 'Esplanade',  latitude: 10.703346, longitude: 122.553135},
    {value: `Maxx's Stoplight`,  latitude: 10.717873, longitude: 122.537422},
    {value: 'Molo Terminal',  latitude: 10.698880, longitude: 122.547189},
    {value: 'Shell Molo',  latitude:  10.697205, longitude: 122.542973},
    {value: 'Villa Arevalo District Plaza',  latitude: 10.688931, longitude: 122.516236},
    {value: 'Mohon Terminal',  latitude: 10.693370, longitude: 122.499812},
    {value: 'Oton Plaza',  latitude: 10.692254, longitude: 122.478324},
    ]

const otonDerecho = 
<View style = {styles.container}>
<MapView style = {styles.map}
initialRegion = {{
    latitude: 10.708838,
    longitude: 122.551744,
    latitudeDelta: 0.1,
    longitudeDelta: 0.045,
   }}>
       
<MapViewDirections
    origin = {{latitude: 10.708838, longitude: 122.551744}}
    waypoints = {[{latitude: 10.705882, longitude: 122.552442},
                  {latitude: 10.703346, longitude: 122.553135},
                  {latitude: 10.699881, longitude: 122.553949},
                  {latitude: 10.698880, longitude: 122.547189},
                  {latitude: 10.697205, longitude: 122.542973},
                  {latitude: 10.688931, longitude: 122.516236},
                  {latitude: 10.693370, longitude: 122.499812}]}
    destination = {{latitude: 10.692254, longitude: 122.478324}}
    apikey = {'AIzaSyDz4sKzFahw8gq6f045fSJ6_xTiIhX2x78'}
    strokeWidth = {4}
    strokeColor = "red"
    optimizeWaypoints={true}
   />

<MapViewDirections
    origin = {{latitude: 10.692254, longitude: 122.478324}}
    waypoints = {[{latitude: 10.693370, longitude: 122.499812},
                  {latitude: 10.703346, longitude: 122.553135},
                  {latitude: 10.688931, longitude: 122.516236},
                  {latitude: 10.697205, longitude: 122.542973},
                  {latitude: 10.698880, longitude: 122.547189},
                  {latitude: 10.699881, longitude: 122.553949},
                  {latitude: 10.705882, longitude: 122.552442}]}
    destination = {{latitude: 10.708838, longitude: 122.551744}}
    apikey = {'AIzaSyDz4sKzFahw8gq6f045fSJ6_xTiIhX2x78'}
    strokeWidth = {4}
    strokeColor = "red"
    optimizeWaypoints={true}
   />
    {otonDerechoMarkers.map((marker, index) => {
             return (<MapView.Marker
             coordinate = {{latitude: otonDerechoMarkers[index].latitude,
             longitude: otonDerechoMarkers[index].longitude}}
             pinColor = {"red"}
             title = {otonDerechoMarkers[index].value}
             /> 
             )})
  }
</MapView>
</View>

export default otonDerecho