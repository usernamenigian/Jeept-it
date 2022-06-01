import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import styles from '../screens/styles'

const leganesLapaz =
  <View style = {styles.container}>
   <MapView style = {styles.map} 
    initialRegion = {{
     latitude: 10.785772,
     longitude: 122.588824,
     latitudeDelta: 0.1,
     longitudeDelta: 0.045,
    }}
   >
     <MapViewDirections
    origin = {{latitude: 10.786766, longitude: 122.589266}}
    waypoints = {[{latitude: 10.784386, longitude: 122.587710},
                  {latitude: 10.781765, longitude: 122.586120}, 
                  {latitude: 10.773166, longitude: 122.584567}, 
                  {latitude: 10.759631, longitude: 122.576240}, 
                  {latitude: 10.730057, longitude: 122.559084}, 
                  {latitude: 10.727462, longitude: 122.555608}, 
                  {latitude: 10.725539, longitude: 122.557130}, 
                  {latitude: 10.724701, longitude: 122.556367}, 
                  {latitude: 10.723296, longitude: 122.557597}, 
                  {latitude: 10.724014, longitude: 122.558360}, 
                  {latitude: 10.717419, longitude: 122.565080}, 
                  {latitude: 10.710498, longitude: 122.570366}, 
                  {latitude: 10.711100, longitude: 122.571230}]}
    destination = {{latitude: 10.711089, longitude: 122.571241}}
    apikey = {'AIzaSyDz4sKzFahw8gq6f045fSJ6_xTiIhX2x78'}
    strokeWidth = {4}
    strokeColor = "red"
    optimizeWaypoints={true}
   />

   <MapView.Marker
    coordinate = {{latitude: 10.786766,
    longitude: 122.589266}}
    pinColor = {"red"}
    title = {"Leganes Commercial Complex"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.772256,
    longitude: 122.583538}}
    pinColor = {"red"}
    title = {"CitiHardware Iloilo - Jaro"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.763576,
    longitude: 122.578559}}
    pinColor = {"red"}
    title = {"CityMall Tagbak"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.755068,
    longitude: 122.572003}}
    pinColor = {"red"}
    title = {"Ceres Northbound Terminal Iloilo City"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.744049,
    longitude: 122.565313}}
    pinColor = {"red"}
    title = {"Toyota Iloilo, Inc."}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.736712,
    longitude: 122.561254}}
    pinColor = {"red"}
    title = {"Bankers Village IV"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.730864,
    longitude: 122.559506}}
    pinColor = {"red"}
    title = {"Jollibee Tabuc Suba"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.728221,
    longitude: 122.556402}}
    pinColor = {"red"}
    title = {"J&T Express - Office"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.726243,
    longitude: 122.556528}}
    pinColor = {"red"}
    title = {"BDO Iloilo - Jaro Branch"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.724483,
    longitude: 122.557360}}
    pinColor = {"red"}
    title = {"Jaro Plaza"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.720479,
    longitude: 122.561148}}
    pinColor = {"red"}
    title = {"SM Hypermarket Ilolilo"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.715720,
    longitude: 122.566393}}
    pinColor = {"red"}
    title = {"Iloilo Science and Technology University"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.711820,
    longitude: 122.570816}}
    pinColor = {"red"}
    title = {"Lapaz District Plaza"}
    />
   </MapView> 
  </View>

export default leganesLapaz
