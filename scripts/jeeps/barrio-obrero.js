import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';
import React from 'react';
import MapViewDirections from 'react-native-maps-directions';
import styles from '../screens/styles'

const barrioObrero = 
<View style = {styles.mapContainer}>
<MapView style = {styles.map}
initialRegion = {{
    latitude: 10.701086,
    longitude: 122.579078,
    latitudeDelta: 0.1,
    longitudeDelta: 0.045,
   }}>

<MapViewDirections
    origin = {{latitude: 10.701514, longitude: 122.569248}}
    waypoints = {[{latitude: 10.702253, longitude: 122.571536},
                  {latitude: 10.701255, longitude: 122.578912},
                  {latitude: 10.69558, longitude: 122.58446}
                ]}
    destination = {{latitude:10.699557, longitude: 122.587749}}
    apikey = {'AIzaSyDz4sKzFahw8gq6f045fSJ6_xTiIhX2x78'}
    strokeWidth = {4}
    strokeColor = "red"
    optimizeWaypoints={true}
   />

<MapView.Marker
coordinate = {{latitude: 10.702346,
    longitude: 122.571702}}
    pinColor = {"red"}
    title = {"Rizal Barangay Hall"}
/>
<MapView.Marker
coordinate = {{latitude: 10.702442,
    longitude: 122.574623}}
    pinColor = {"red"}
    title = {"Jalandoni Memorial Elementary School"}
/>
<MapView.Marker
coordinate = {{latitude: 10.700899,
    longitude: 122.573316}}
    pinColor = {"red"}
    title = {"Progreso Lapuz"}
/>
<MapView.Marker
coordinate = {{latitude: 10.701579,
    longitude: 122.577781}}
    pinColor = {"red"}
    title = {"FASTCAT RoRo Terminal"}
/>
<MapView.Marker
coordinate = {{latitude: 10.696068,
    longitude: 122.585445}}
    pinColor = {"red"}
    title = {"Barrio Obrero Park"}
/>
<MapView.Marker
coordinate = {{latitude: 10.698039,
    longitude: 122.58543}}
    pinColor = {"red"}
    title = {"Barrio Obrero Elementary and High School"}
/>
<MapView.Marker
coordinate = {{latitude: 10.699403,
    longitude: 122.587475}}
    pinColor = {"red"}
    title = {"Barrio Obrero Elementary and High School"}
/>
</MapView>
</View>

export default barrioObrero