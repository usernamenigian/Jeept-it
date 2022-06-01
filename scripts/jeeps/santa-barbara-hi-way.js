import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';
import React from 'react';
import MapViewDirections from 'react-native-maps-directions';
import styles from '../screens/styles'

const staBarbaraHiWay = 
<View style = {styles.mapContainer}>
<MapView style = {styles.map}
initialRegion = {{
    latitude: 10.722304,
    longitude: 122.554899,
    latitudeDelta: 0.1,
    longitudeDelta: 0.045,
   }}>

<MapView.Marker
coordinate = {{latitude: 10.725028,
    longitude: 122.549731}}
    pinColor = {"red"}
    title = {"Carlos Bakeshop"}
/>
<MapView.Marker
coordinate = {{latitude: 10.718549,
    longitude: 122.546994}}
    pinColor = {"red"}
    title = {"Jolibee Festive"}
/>
<MapView.Marker
coordinate = {{latitude: 10.718177,
    longitude: 122.542674}}
    pinColor = {"red"}
    title = {"Iloilo Supermart - Manduriao"}
/>
<MapView.Marker
coordinate = {{latitude: 10.718063,
    longitude: 122.541748}}
    pinColor = {"red"}
    title = {"West Visayas Medical Center"}
/>
<MapView.Marker
coordinate = {{latitude: 10.717873,
    longitude: 122.537422}}
    pinColor = {"red"}
    title = {"Manduriao Plaza"}
/>
<MapView.Marker
coordinate = {{latitude: 10.725809,
    longitude: 122.528350}}
    pinColor = {"red"}
    title = {"Ana Ros Village"}
/>
<MapView.Marker
coordinate = {{latitude: 10.740320,
    longitude: 122.517204}}
    pinColor = {"red"}
    title = {"Hibao-an Terminal"}
/>
</MapView>
</View>

export default staBarbaraHiWay