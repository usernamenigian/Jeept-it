import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import styles from '../screens/styles'

export const leganesSMMarkers = 
[{value: 'Iloilo Doctors Hospital, inc.', latitude: 10.697060, longitude: 122.554458},
 {value: 'University of the Philippines Visayas', latitude: 10.698030, longitude: 122.554955},
 {value: 'JD Bakeshop', latitude: 10.698472, longitude: 122.554353},
 {value: 'Jollibee Iloilo Gen.Luna', latitude: 10.699358, longitude: 122.554064},
 {value: 'CitiHardware Iloilo-Mandurriao', latitude: 10.705114, longitude: 122.552401},
 {value: 'Plazuela de Iloilo', latitude: 10.712008, longitude: 122.551532},
 {value: 'SM City', latitude: 10.714279, longitude: 122.551497},
 {value: 'Jollibee E. Lopez', latitude: 10.718960, longitude: 122.560833},
 {value: 'SM Hypermarket Iloilo', latitude: 10.720372, longitude: 122.561454},
 {value: 'SM Savemore Market', latitude: 10.741096, longitude: 122.563622},
 {value: 'Ceres Northbound Terminal Iloilo City', latitude: 10.753998, longitude: 122.572082},
 {value: 'CityMall Tagbak', latitude: 10.762747, longitude: 122.578588},
 {value: 'CitiHardware Iloilo-Jaro', latitude: 10.771347, longitude: 122.583618},
 {value: 'Leganes Plaza', latitude: 10.785407, longitude: 122.588642},
 {value: 'Iloilo Supermart-Jaro', latitude: 10.733570, longitude: 122.560467},
 {value: 'Jollibee Tabuc Suba', latitude: 10.730197, longitude: 122.559458},
 {value: 'SM Savemore Market-Jaro', latitude: 10.724188, longitude: 122.555659}
]

export const leganesSM =
 <View style = {styles.container}>
   <MapView style = {styles.map} 
    initialRegion = {{
     latitude: 10.733934,
     longitude: 122.560964,
     latitudeDelta: 0.1,
     longitudeDelta: 0.045,
    }}
   >

   <MapViewDirections
    origin = {{latitude: 10.786812, longitude: 122.589242}}
    destination = {{latitude: 10.694506, longitude: 122.555167}}
    apikey = {'AIzaSyDz4sKzFahw8gq6f045fSJ6_xTiIhX2x78'}
    strokeWidth = {4}
    strokeColor = "red"
    optimizeWaypoints={true}
   />
   <MapViewDirections
    origin = {{latitude: 10.694506, longitude: 122.555167}}
    waypoints = {[{latitude: 10.719997, longitude: 122.562060}]}
    destination = {{latitude: 10.786812, longitude: 122.589242}}
    apikey = {'AIzaSyDz4sKzFahw8gq6f045fSJ6_xTiIhX2x78'}
    strokeWidth = {4}
    strokeColor = "red"
    optimizeWaypoints={true}
   />

   {leganesSMMarkers.map((marker, index) => {
    return (<MapView.Marker
     coordinate = {{latitude: leganesSMMarkers[index].latitude,
     longitude: leganesSMMarkers[index].longitude}}
     pinColor = {"red"}
     title = {leganesSMMarkers[index].value}
    /> 
    )})
   }
   </MapView>
  </View>