import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';
import React from 'react';
import MapViewDirections from 'react-native-maps-directions';
import styles from '../screens/styles'

export const staBarbaraHiWayMarkers = [
    {value: 'Aganan',  latitude: 10.769423, longitude: 122.536407},
    {value: 'GT Town Center Pavia',  latitude: 10.753946, longitude: 122.537994},
    {value: `Ungka Terminal`,  latitude: 10.746239, longitude: 10.746239},
    {value: 'Carlos Bakeshop',  latitude: 10.725028, longitude: 122.549731},
    {value: 'Jolibee Diversion Taft',  latitude:  10.719780, longitude: 122.551934},
    {value: 'SM City Iloilo',  latitude: 10.714232, longitude: 122.551146},
    {value: 'San Rafael',  latitude: 10.708838, longitude: 122.551744},
    {value: `Maxx's Stoplight`,  latitude: 10.717873, longitude: 122.537422},
    ]

const staBarbaraHiWay = 
<View style = {styles.mapContainer}>
<MapView style = {styles.map}
initialRegion = {{
    latitude: 10.822037,
    longitude: 122.529196,
    latitudeDelta: 0.1,
    longitudeDelta: 0.045,
   }}>
<MapViewDirections
    origin = {{latitude: 10.822037, longitude: 122.529196}}
    destination = {{latitude: 10.717873, longitude: 122.537422}}
    apikey = {'AIzaSyDz4sKzFahw8gq6f045fSJ6_xTiIhX2x78'}
    strokeWidth = {4}
    strokeColor = "red"
    optimizeWaypoints={true}
   />

   {staBarbaraHiWayMarkers.map((marker, index) => {
            return (<MapView.Marker
            coordinate = {{latitude: staBarbaraHiWayMarkers[index].latitude,
            longitude: staBarbaraHiWayMarkers[index].longitude}}
            pinColor = {"red"}
            title = {staBarbaraHiWayMarkers[index].value}
            /> 
            )})
 }
</MapView>
</View>

export default staBarbaraHiWay