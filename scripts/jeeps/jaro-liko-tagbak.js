import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';

import styles from '../screens/styles'


const jaroLikoTagbak =
<View style = {styles.container}>
<MapView style = {styles.map} 
 initialRegion = {{
  latitude:10.7617375,
  longitude: 122.5769638,
  latitudeDelta: 0.1,
  longitudeDelta: 0.045,
 }}
>
   <MapView.Marker
 coordinate = {{latitude: 10.774,
 longitude: 122.574638}}
 pinColor = {"red"}
 title = {"Tagbak Bus Terminal"}
 />
    <MapView.Marker
 coordinate = {{latitude: 10.7445817,
 longitude: 122.56584}}
 pinColor = {"red"}
 title = {"Toyota"}
 />
        <MapView.Marker
 coordinate = {{latitude: 10.7410528,
 longitude: 122.5634871}}
 pinColor = {"red"}
 title = {"Jollibee"}
/>
<MapView.Marker
 coordinate = {{latitude: 10.7244118,
 longitude: 122.5573263}}
 pinColor = {"red"}
 title = {"Jaro Plaza"}
 />
<MapView.Marker
 coordinate = {{latitude: 10.7190179,
 longitude: 122.5608054}}
 pinColor = {"red"}
 title = {"Jollibee"}
 />
<MapView.Marker
 coordinate = {{latitude: 10.7135681,
 longitude: 122.5624973}}
 pinColor = {"red"}
 title = {"West Visayas State University"}
 />
    <MapView.Marker
 coordinate = {{latitude: 10.7068854,
 longitude: 122.5666009}}
 pinColor = {"red"}
 title = {"Gaisano Capital City"}
 />
<MapView.Marker
 coordinate = {{latitude: 10.7006106,
 longitude: 122.5682697}}
 pinColor = {"red"}
 title = {"The Atrium"}
 />
<MapView.Marker
 coordinate = {{latitude: 10.6994123,
 longitude: 122.5630039}}
 pinColor = {"red"}
 title = {"University of San Agustin"}
 />
    <MapView.Marker
 coordinate = {{latitude: 10.6986532,
 longitude: 122.5671546}}
 pinColor = {"red"}
 title = {"SM Delgado"}
 />
<MapView.Marker
 coordinate = {{latitude: 10.706645519257266,
 longitude: 122.56926365208066}}
 pinColor = {"red"}
 title = {"Rizal Lapaz Barangay Hall"}
 />
<MapView.Marker
 coordinate = {{latitude: 10.70260509701925,
 longitude: 122.56837876372863}}
 pinColor = {"red"}
 title = {"Iloilo Provincial Capitol"}
 />
   </MapView> 
  </View>

export default jaroLikoTagbak