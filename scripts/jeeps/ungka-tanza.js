import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';
import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

import styles from '../screens/styles'

const ungkaTanza = 
<View style = {styles.container}>
<MapView style = {styles.map}
initialRegion = {{
    latitude: 10.719394,
    longitude: 122.551809,
    latitudeDelta: 0.1,
    longitudeDelta: 0.045,
   }}>

<MapView.Marker
coordinate = {{latitude: 10.745352,
    longitude: 122.540766}}
    pinColor = {"red"}
    title = {"Christ the King Memorial Park"}
/>
<MapView.Marker
coordinate = {{latitude: 10.743802,
    longitude: 122.540294}}
    pinColor = {"red"}
    title = {"ACE Medical Center"}
/>
<MapView.Marker
coordinate = {{latitude: 10.741904,
    longitude: 122.539489}}
    pinColor = {"red"}
    title = {"Sambag Jaro Police Station"}
/>
<MapView.Marker
coordinate = {{latitude: 10.736754,
    longitude: 122.536875}}
    pinColor = {"red"}
    title = {"University of San Agustine"}
/>
<MapView.Marker
coordinate = {{latitude: 10.729742,
    longitude: 122.545822}}
    pinColor = {"red"}
    title = {"Luis Mirasol Elementary School"}
/>
<MapView.Marker
coordinate = {{latitude: 10.726666,
    longitude: 122.549829}}
    pinColor = {"red"}
    title = {"Jaro Public Cemetary"}
/>
<MapView.Marker
coordinate = {{latitude: 10.719287,
    longitude: 122.552781}}
    pinColor = {"red"}
    title = {"7-eleven"}
/>
<MapView.Marker
coordinate = {{latitude: 10.719616,
    longitude: 122.551559}}
    pinColor = {"red"}
    title = {"Shell Gasoline Station"}
/>
<MapView.Marker
coordinate = {{latitude: 10.716899,
    longitude: 122.552569}}
    pinColor = {"red"}
    title = {"Petron Gasoline Station"}
/>
<MapView.Marker
coordinate = {{latitude: 10.714293,
    longitude: 122.551124}}
    pinColor = {"red"}
    title = {"SM City Iloilo"}
/>
<MapView.Marker
coordinate = {{latitude: 10.713164,
    longitude: 122.552580}}
    pinColor = {"red"}
    title = {"Save More"}
/>
<MapView.Marker
coordinate = {{latitude: 10.712779,
    longitude: 122.551485}}
    pinColor = {"red"}
    title = {"Plazuela Road"}
/>
<MapView.Marker
coordinate = {{latitude: 10.711516,
    longitude: 122.551392}}
    pinColor = {"red"}
    title = {"Pag-ibig Fund"}
/>
<MapView.Marker
coordinate = {{latitude: 10.710101,
    longitude: 122.552537}}
    pinColor = {"red"}
    title = {"Chowking"}
/>
<MapView.Marker
coordinate = {{latitude: 10.710206,
    longitude: 122.552816}}
    pinColor = {"red"}
    title = {"Mang Inasal"}
/>
<MapView.Marker
coordinate = {{latitude: 10.708310,
    longitude: 122.552719}}
    pinColor = {"red"}
    title = {"Green Fields Iloilo"}
/>
<MapView.Marker
coordinate = {{latitude: 10.704982,
    longitude: 122.554043}}
    pinColor = {"red"}
    title = {"Saint Joseph School"}
/>
<MapView.Marker
coordinate = {{latitude: 10.702050,
    longitude: 122.553532}}
    pinColor = {"red"}
    title = {"Iloilo Diversion Bridge"}
/>
<MapView.Marker
coordinate = {{latitude: 10.703094,
    longitude: 122.554228}}
    pinColor = {"red"}
    title = {"Esplanade 3"}
/>
<MapView.Marker
coordinate = {{latitude: 10.698079,
    longitude: 122.555360}}
    pinColor = {"red"}
    title = {"University of the Philippines"}
/>
<MapView.Marker
coordinate = {{latitude: 10.697044,
    longitude: 122.554263}}
    pinColor = {"red"}
    title = {"Iloilo Doctors Hospital"}
/>
<MapView.Marker
coordinate = {{latitude: 10.695853,
    longitude: 122.556433}}
    pinColor = {"red"}
    title = {"Tanza Cemetary"}
/>
</MapView>
</View>

export default ungkaTanza