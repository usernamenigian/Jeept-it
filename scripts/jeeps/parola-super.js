import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';

const parolaSuper =
  <View style = {styles.container}>
   <MapView style = {styles.map} 
    initialRegion = {{
     latitude: 10.692466,
     longitude: 122.583463,
     latitudeDelta: 0.1,
     longitudeDelta: 0.045,
    }}
   >
   <MapView.Marker
    coordinate = {{latitude: 10.692466,
    longitude: 122.583463}}
    pinColor = {"red"}
    title = {"Ferry Terminal Parola"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.695604,
    longitude: 122.579447}}
    pinColor = {"red"}
    title = {"Iloilo Avenue Lumber"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.691990,
    longitude: 122.574091}}
    pinColor = {"red"}
    title = {"Landbank Plaza Libertad"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.714237,
    longitude: 122.545294}}
    pinColor = {"red"}
    title = {"Iloilo Convention Center"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.692101,
    longitude: 122.572210}}
    pinColor = {"red"}
    title = {"Iloilo Society Commercial"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.691999,
    longitude: 122.569612}}
    pinColor = {"red"}
    title = {"Phinma University Of Iloilo"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.693343,
    longitude: 122.565749}}
    pinColor = {"red"}
    title = {"Mang Inasal 1st Store"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.693130,
    longitude: 122.564485}}
    pinColor = {"red"}
    title = {"Super/Iloilo Terminal Market"}
    />
   </MapView> 
  </View>

export default parolaSuper
 
