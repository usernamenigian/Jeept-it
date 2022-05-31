import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';
import React from 'react';

import styles from '../screens/styles'

const bitoonJaroPlaza = 
<View style = {styles.container}>
<MapView style = {styles.map}
initialRegion = {{
    latitude: 10.728704,
    longitude: 122.579681,
    latitudeDelta: 0.1,
    longitudeDelta: 0.045,
   }}>

<MapView.Marker
coordinate = {{latitude: 10.750625,
    longitude: 122.589123}}
    pinColor = {"red"}
    title = {"Bito-on"}
/>
<MapView.Marker
coordinate = {{latitude: 10.750059,
    longitude: 122.589762}}
    pinColor = {"red"}
    title = {"Bito-on Elementary School"}
/>
<MapView.Marker
coordinate = {{latitude: 10.740376,
    longitude: 122.582298}}
    pinColor = {"red"}
    title = {"Balabago"}
/>
<MapView.Marker
coordinate = {{latitude: 10.725971,
    longitude: 122.579039}}
    pinColor = {"red"}
    title = {"TDT Powersteel Corporation"}
/>
<MapView.Marker
coordinate = {{latitude: 10.718764,
    longitude: 122.579594}}
    pinColor = {"red"}
    title = {"Ticud"}
/>
<MapView.Marker
coordinate = {{latitude: 10.717816,
    longitude: 122.579454}}
    pinColor = {"red"}
    title = {"Dumangas Terminal"}
/>
<MapView.Marker
coordinate = {{latitude: 10.717095,
    longitude: 122.578052}}
    pinColor = {"red"}
    title = {"Ticud Elementary School"}
/>
<MapView.Marker
coordinate = {{latitude: 10.713371,
    longitude: 122.574276}}
    pinColor = {"red"}
    title = {"Lopez Jaena Street"}
/>
<MapView.Marker
coordinate = {{latitude: 10.711950,
    longitude: 122.571799}}
    pinColor = {"red"}
    title = {"Bamboo Craft"}
/>
<MapView.Marker
coordinate = {{latitude: 10.710980,
    longitude: 122.572060}}
    pinColor = {"red"}
    title = {"Lapaz-1 Elementary School"}
/>
<MapView.Marker
coordinate = {{latitude: 10.710553,
    longitude: 122.570836}}
    pinColor = {"red"}
    title = {"Iloilo City Police Office"}
/>
<MapView.Marker
coordinate = {{latitude: 10.710263,
    longitude: 122.570363}}
    pinColor = {"red"}
    title = {"7-eleven"}
/>
<MapView.Marker
coordinate = {{latitude: 10.711691,
    longitude: 122.570687}}
    pinColor = {"red"}
    title = {"Jaro Plaza"}
/>
</MapView>
</View>

export default bitoonJaroPlaza