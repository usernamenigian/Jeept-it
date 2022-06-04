import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';
import React from 'react';
import MapViewDirections from 'react-native-maps-directions';
import styles from '../screens/styles'

export const leganesSMMarkers = 
[{value: 'marker1', latitude: 10.697060, longitude: 122.554458},
 {value: 'marker2', latitude: 10.698030, longitude: 122.554955},
 {value: 'marker3', latitude: 10.698472, longitude: 122.554353},
 {value: 'marker4', latitude: 10.699358, longitude: 122.554064},
 {value: 'marker5', latitude: 10.705114, longitude: 122.552401},
 {value: 'marker6', latitude: 10.712008, longitude: 122.551532},
 {value: 'marker7', latitude: 10.714279, longitude: 122.551497},
 {value: 'marker8', latitude: 10.718960, longitude: 122.560833},
 {value: 'marker9', latitude: 10.720372, longitude: 122.561454},
 {value: 'marker10', latitude: 10.741096, longitude: 122.563622},
 {value: 'marker11', latitude: 10.753998, longitude: 122.572082},
 {value: 'marker12', latitude: 10.762747, longitude: 122.578588},
 {value: 'marker13', latitude: 10.771347, longitude: 122.583618},
 {value: 'marker14', latitude: 10.785407, longitude: 122.588642},
 {value: 'marker15', latitude: 10.733570, longitude: 122.560467},
 {value: 'marker16', latitude: 10.730197, longitude: 122.559458},
 {value: 'marker17', latitude: 10.724188, longitude: 122.555659}
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

   <MapView.Marker
    coordinate = {{latitude: 10.697060,
    longitude: 122.554458}}
    pinColor = {"red"}
    title = {"Iloilo Doctors' Hospital, inc."}
   />
   <MapView.Marker
    coordinate = {{latitude: 10.698030,
    longitude: 122.554955}}
    pinColor = {"red"}
    title = {"University of the Philippines Visayas"}
   />
   <MapView.Marker
    coordinate = {{latitude: 10.698472,
    longitude: 122.554353}}
    pinColor = {"red"}
    title = {"JD Bakeshop"}
   />
   <MapView.Marker
    coordinate = {{latitude: 10.699358,
    longitude: 122.554064}}
    pinColor = {"red"}
    title = {"Jollibee Iloilo Gen.Luna"}
   />
   <MapView.Marker
    coordinate = {{latitude: 10.705114,
    longitude: 122.552401}}
    pinColor = {"red"}
    title = {"CitiHardware Iloilo-Mandurriao"}
   />
   <MapView.Marker
    coordinate = {{latitude: 10.712008,
    longitude: 122.551532}}
    pinColor = {"red"}
    title = {"Plazuela de Iloilo"}
   />
   <MapView.Marker
    coordinate = {{latitude: 10.714279,
    longitude: 122.551497}}
    pinColor = {"red"}
    title = {"SM City"}
   />
   <MapView.Marker
    coordinate = {{latitude: 10.718960,
    longitude: 122.560833}}
    pinColor = {"red"}
    title = {"Jollibee E. Lopez"}
   />
   <MapView.Marker
    coordinate = {{latitude: 10.720372,
    longitude: 122.561454}}
    pinColor = {"red"}
    title = {"Sm Hypermarket Iloilo"}
   />
   <MapView.Marker
    coordinate = {{latitude: 10.741096,
    longitude: 122.563622}}
    pinColor = {"red"}
    title = {"SM Savemore Market"}
   />
   <MapView.Marker
    coordinate = {{latitude: 10.753998,
    longitude: 122.572082}}
    pinColor = {"red"}
    title = {"Ceres Northbound Terminal Iloilo City"}
   />
   <MapView.Marker
    coordinate = {{latitude: 10.762747,
    longitude: 122.578588}}
    pinColor = {"red"}
    title = {"CityMall Tagbak"}
   />
   <MapView.Marker
    coordinate = {{latitude: 10.771347,
    longitude: 122.583618}}
    pinColor = {"red"}
    title = {"CitiHardware Iloilo-Jaro"}
   />
   <MapView.Marker
    coordinate = {{latitude: 10.785407,
    longitude: 122.588642}}
    pinColor = {"red"}
    title = {"Leganes Plaza"}
   />
   <MapView.Marker
    coordinate = {{latitude: 10.733570,
    longitude: 122.560467}}
    pinColor = {"red"}
    title = {"Iloilo Supermart-Jaro"}
   />
   <MapView.Marker
    coordinate = {{latitude: 10.730197,
    longitude: 122.559458}}
    pinColor = {"red"}
    title = {"Jollibee Tabuc Suba"}
   />
   <MapView.Marker
    coordinate = {{latitude: 10.724188,
    longitude: 122.555659}}
    pinColor = {"red"}
    title = {"SM Savemore Market-Jaro"}
   />
   </MapView>
  </View>