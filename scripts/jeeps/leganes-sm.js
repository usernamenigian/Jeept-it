import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';
import React from 'react';

import styles from '../screens/styles'

const leganesSM =
 <View style = {styles.container}>
   <MapView style = {styles.map} 
    initialRegion = {{
     latitude: 10.733934,
     longitude: 122.560964,
     latitudeDelta: 0.1,
     longitudeDelta: 0.045,
    }}
   >
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

export default leganesSM;