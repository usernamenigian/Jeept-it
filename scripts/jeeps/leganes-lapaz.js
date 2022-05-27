import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

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
   <MapView.Marker
    coordinate = {{latitude: 10.785772,
    longitude: 122.588824}}
    pinColor = {"red"}
    title = {"Leganes Town Plaza"}
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
    coordinate = {{latitude: 10.734997,
    longitude: 122.565291}}
    pinColor = {"red"}
    title = {"WaterWorld Iloilo"}
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
