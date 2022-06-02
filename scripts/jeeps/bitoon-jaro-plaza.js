import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';
import React from 'react';
import MapViewDirections from 'react-native-maps-directions';
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

<MapViewDirections
    origin = {{latitude: 10.751351, longitude: 122.589251}}
    waypoints = {[{latitude: 10.747546, longitude: 122.587892},
                  {latitude: 10.74483, longitude: 122.585992},
                  {latitude: 10.740508, longitude: 122.582824},
                  {latitude: 10.738541, longitude: 122.577522},
                  {latitude: 10.729429, longitude: 122.560425},
                  {latitude: 10.730158, longitude: 122.559123},
                  {latitude: 10.725845, longitude: 122.557732},
                  {latitude: 10.725544, longitude: 122.557081},
                  {latitude: 10.72462, longitude: 122.556396}
                ]}
    destination = {{latitude:10.724026, longitude: 122.556851}}
    apikey = {'AIzaSyDz4sKzFahw8gq6f045fSJ6_xTiIhX2x78'}
    strokeWidth = {4}
    strokeColor = "red"
    optimizeWaypoints={true}
   />

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