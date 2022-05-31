import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';
import React from 'react';

import styles from '../screens/styles'

const lapaz = 
<View style = {styles.mapContainer}>
<MapView style = {styles.map}
initialRegion = {{
    latitude: 10.706722,
    longitude: 122.5681,
    latitudeDelta: 0.1,
    longitudeDelta: 0.045,
   }}>

<MapView.Marker
coordinate = {{latitude: 10.711622,
    longitude: 122.570649}}
    pinColor = {"red"}
    title = {"Lapaz District Plaza"}
/>
<MapView.Marker
coordinate = {{latitude: 10.709935,
    longitude: 122.570187}}
    pinColor = {"red"}
    title = {"Total Gasoline Station"}
/>
<MapView.Marker
coordinate = {{latitude: 10.709061,
    longitude: 122.567858}}
    pinColor = {"red"}
    title = {"Lapaz Public Market"}
/>
<MapView.Marker
coordinate = {{latitude: 10.708483,
    longitude: 122.56817}}
    pinColor = {"red"}
    title = {"Petron Gasoline Station"}
/>
<MapView.Marker
coordinate = {{latitude: 10.70822,
    longitude: 122.567837}}
    pinColor = {"red"}
    title = {"Metrobank"}
/>
<MapView.Marker
coordinate = {{latitude: 10.707935,
    longitude: 122.567179}}
    pinColor = {"red"}
    title = {"BDO"}
/>
<MapView.Marker
coordinate = {{latitude: 10.707553,
    longitude: 122.56703}}
    pinColor = {"red"}
    title = {"Landbank"}
/>
<MapView.Marker
coordinate = {{latitude: 10.707446,
    longitude: 122.567356}}
    pinColor = {"red"}
    title = {"Petron Gasoline Station"}
/>
<MapView.Marker
coordinate = {{latitude: 10.706884,
    longitude: 122.566633}}
    pinColor = {"red"}
    title = {"Gaisano Capital, Iloilo City"}
/>
<MapView.Marker
coordinate = {{latitude: 10.707127,
    longitude: 122.567494}}
    pinColor = {"red"}
    title = {"Suzuki Motors"}
/>
<MapView.Marker
coordinate = {{latitude: 10.706025,
    longitude: 122.566894}}
    pinColor = {"red"}
    title = {"Esplanade"}
/>
<MapView.Marker
coordinate = {{latitude: 10.704396,
    longitude: 122.568322}}
    pinColor = {"red"}
    title = {"Hall of Justice"}
/>
<MapView.Marker
coordinate = {{latitude: 10.70291,
    longitude: 122.567367}}
    pinColor = {"red"}
    title = {"St. Paul University"}
/>
<MapView.Marker
coordinate = {{latitude: 10.702558,
    longitude: 122.569031}}
    pinColor = {"red"}
    title = {"Iloilo Provincial Capitol"}
/>
<MapView.Marker
coordinate = {{latitude: 10.701359,
    longitude: 122.568164}}
    pinColor = {"red"}
    title = {"Atrium"}
/>
</MapView>
</View>

export default lapaz