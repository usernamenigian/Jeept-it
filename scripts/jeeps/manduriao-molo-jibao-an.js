import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';
import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

import styles from '../screens/styles'

const manduriaoMolo = 
<View style = {styles.mapContainer}>
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
<MapView.Marker
coordinate = {{latitude: 10.725809,
    longitude: 122.528350}}
    pinColor = {"red"}
    title = {"Ana Ros Village"}
/>
<MapView.Marker
coordinate = {{latitude: 10.716574,
    longitude: 122.536770}}
    pinColor = {"red"}
    title = {"Manduriao Plaza"}
/>
<MapView.Marker
coordinate = {{latitude: 10.700778,
    longitude: 122.542669}}
    pinColor = {"red"}
    title = {"Esplanade Uno"}
/>
<MapView.Marker
coordinate = {{latitude: 10.718063,
    longitude: 122.541748}}
    pinColor = {"red"}
    title = {"Iloilo Supermart - Molo"}
/>
<MapView.Marker
coordinate = {{latitude: 10.696873,
    longitude: 122.544026}}
    pinColor = {"red"}
    title = {"Molo Plaza"}
/>
<MapView.Marker
coordinate = {{latitude: 10.696514,
    longitude: 122.545271}}
    pinColor = {"red"}
    title = {"GT Plaza Mall Molo"}
/>
</MapView>
</View>

export default manduriaoMolo





