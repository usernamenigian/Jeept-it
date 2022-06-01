import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';
import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

import styles from '../screens/styles'

const otonDerecho = 
<View style = {styles.mapContainer}>
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

<MapView.Marker
coordinate = {{latitude: 10.705882,
    longitude: 122.552442}}
    pinColor = {"red"}
    title = {"Small Ville"}
/>
<MapView.Marker
coordinate = {{latitude: 10.703346,
    longitude: 122.553135}}
    pinColor = {"red"}
    title = {"Esplanade"}
/>
<MapView.Marker
coordinate = {{latitude: 10.699881,
    longitude: 122.553949}}
    pinColor = {"red"}
    title = {"Maxx's Stoplight"}
/>
<MapView.Marker
coordinate = {{latitude: 10.718063,
    longitude: 122.541748}}
    pinColor = {"red"}
    title = {"West Visayas Medical Center"}
/>
<MapView.Marker
coordinate = {{latitude: 10.698880,
    longitude: 122.547189}}
    pinColor = {"red"}
    title = {"Molo Terminal"}
/>
<MapView.Marker
coordinate = {{latitude: 10.697205,
    longitude: 122.542973}}
    pinColor = {"red"}
    title = {"Shell Molo"}
/>
<MapView.Marker
coordinate = {{latitude: 10.688931,
    longitude: 122.516236}}
    pinColor = {"red"}
    title = {"Villa Arevalo District Plaza"}
/>
<MapView.Marker
coordinate = {{latitude: 10.693370,
    longitude: 122.499812}}
    pinColor = {"red"}
    title = {"Mohon Terminal"}
/>
<MapView.Marker
coordinate = {{latitude: 10.692254,
    longitude: 122.478324}}
    pinColor = {"red"}
    title = {"Oton Plaza"}
/>
</MapView>
</View>

export default otonDerecho