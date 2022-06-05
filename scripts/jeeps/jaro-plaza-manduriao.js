import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';
import React from 'react';
import MapViewDirections from 'react-native-maps-directions';
import styles from '../screens/styles'

export const JaroPlazaManduriaoMarkers = [
    {value: 'Carlos Bakeshop',  latitude: 10.725028, longitude: 122.549731},
    {value: 'Jolibee Festive',  latitude: 10.718549, longitude: 122.546994},
    {value: 'Iloilo Supermart - Manduriao',  latitude: 10.718177, longitude: 122.542674},
    {value: 'West Visayas Medical Center',  latitude: 10.718063, longitude: 122.541748},
    {value: 'Manduriao Plaza',  latitude: 10.717873, longitude: 122.537422},
    {value: 'Ana Ros Village',  latitude: 10.725809, longitude: 122.528350},
    {value: 'Hibao-an Terminal',  latitude: 10.740320, longitude: 122.517204},
    ]
export const jaroPlazaManduriao = 
<View style = {styles.mapContainer}>
<MapView style = {styles.map}
initialRegion = {{
    latitude: 10.722304,
    longitude: 122.554899,
    latitudeDelta: 0.1,
    longitudeDelta: 0.045,
   }}>

<MapViewDirections
    origin = {{latitude: 10.722304, longitude: 122.554899}}
    waypoints = {[{latitude: 10.725028, longitude: 122.549731},
                  {latitude: 10.718549, longitude: 122.546994},
                  {latitude: 10.718177, longitude: 122.542674},
                  {latitude: 10.718063, longitude: 122.541748},
                  {latitude: 10.717873, longitude: 122.537422},
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
                  {latitude: 10.717873, longitude: 122.537422},
                  {latitude: 10.718063, longitude: 122.541748},
                  {latitude: 10.718177, longitude: 122.542674},
                  {latitude: 10.718549, longitude: 122.546994},
                  {latitude: 10.725028, longitude: 122.549731}]}
    destination = {{latitude: 10.740320, longitude: 122.517204}}
    apikey = {'AIzaSyDz4sKzFahw8gq6f045fSJ6_xTiIhX2x78'}
    strokeWidth = {4}
    strokeColor = "red"
    optimizeWaypoints={true}
   />
   {JaroPlazaManduriaoMarkers.map((marker, index) => {
             return (<MapView.Marker
             coordinate = {{latitude: JaroPlazaManduriaoMarkers[index].latitude,
             longitude: JaroPlazaManduriaoMarkers[index].longitude}}
             pinColor = {"red"}
             title = {JaroPlazaManduriaoMarkers[index].value}
             /> 
             )})
  }
</MapView>
</View>

export default jaroPlazaManduriao