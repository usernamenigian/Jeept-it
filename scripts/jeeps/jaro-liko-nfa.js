import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';

import styles from '../screens/styles'

const jaroLikoNFA =
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
 coordinate = {{latitude: 10.7310066,
 longitude: 122.5491166}}
 pinColor = {"red"}
 title = {"Central Philippine University"}
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
 coordinate = {{latitude: 10.6941958,
 longitude: 122.565573}}
 pinColor = {"red"}
 title = {"Robinsons Place"}    
 />
        <MapView.Marker
 coordinate = {{latitude: 10.6926913,
 longitude: 122.5695755}}
 pinColor = {"red"}
 title = {"Iloilo City Central Public Market"}    
 />
    <MapView.Marker
 coordinate = {{latitude: 10.6937917,
 longitude: 122.5719355}}
 pinColor = {"red"}
 title = {"Sunburst Park"}    
 />
    <MapView.Marker
 coordinate = {{latitude: 10.7015547,
 longitude: 122.5690689}}
 pinColor = {"red"}
 title = {"Arroyo Fountain"}
 />

</MapView> 
</View>

export default jaroLikoNFA