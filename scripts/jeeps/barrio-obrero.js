import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';
import React from 'react';

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