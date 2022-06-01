import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';
import React from 'react';
import MapViewDirections from 'react-native-maps-directions';
import styles from '../screens/styles'

const mandurriaoSM = 
<View style = {styles.container}>
   <MapView style = {styles.map} 
    initialRegion = {{
     latitude: 10.717405,
     longitude: 122.545082,
     latitudeDelta: 0.1,
     longitudeDelta: 0.045,
    }}
   >

   <MapViewDirections
    origin = {{latitude: 10.723016, longitude: 122.540866}}
    waypoints = {[{latitude: 10.717903, longitude: 122.540989},
                  {latitude: 10.716477, longitude: 122.536880},
                  {latitude: 10.707372, longitude: 122.542593},
                  {latitude: 10.724868, longitude: 122.549583},
                  {latitude: 10.700578, longitude: 122.561771},
                  {latitude: 10.694128, longitude: 122.561749}]}
    destination = {{latitude: 10.695224, longitude: 122.565118}}
    apikey = {'AIzaSyDz4sKzFahw8gq6f045fSJ6_xTiIhX2x78'}
    strokeWidth = {4}
    strokeColor = "red"
    optimizeWaypoints={true}
   />
   <MapViewDirections
    origin = {{latitude: 10.695224, longitude: 122.565118}}
    waypoints = {[{latitude: 10.696310, longitude: 122.568798},
                  {latitude: 10.692209, longitude: 122.569088},
                  {latitude: 10.692188, longitude: 122.567940},
                  {latitude: 10.697533, longitude: 122.567768},
                  {latitude: 10.724973, longitude: 122.549669},
                  {latitude: 10.724805, longitude: 122.549400},
                  {latitude: 10.708105, longitude: 122.542840},
                  {latitude: 10.716402, longitude: 122.536912},
                  {latitude: 10.715305, longitude: 122.535791}]}
    destination = {{latitude: 10.723016, longitude: 122.540866}}
    apikey = {'AIzaSyDz4sKzFahw8gq6f045fSJ6_xTiIhX2x78'}
    strokeWidth = {4}
    strokeColor = "red"
    optimizeWaypoints={true}
   />

   <MapView.Marker
    coordinate = {{latitude: 10.714279,
    longitude: 122.551497}}
    pinColor = {"red"}
    title = {"SM City"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.719613,
    longitude: 122.551798}}
    pinColor = {"red"}
    title = {"Jollibee Diversion Taft"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.717273,
    longitude: 122.546454}}
    pinColor = {"red"}
    title = {"Festive Walk"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.714237,
    longitude: 122.545294}}
    pinColor = {"red"}
    title = {"Iloilo Convention Center"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.717163,
    longitude: 122.537069}}
    pinColor = {"red"}
    title = {"Mandurriao Plaza"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.718217,
    longitude: 122.541813}}
    pinColor = {"red"}
    title = {"Western Visayas Medical Center"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.718196,
    longitude: 122.542693}}
    pinColor = {"red"}
    title = {"Mandurriao Supermart"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.712008,
    longitude: 122.551532}}
    pinColor = {"red"}
    title = {"Plazuela de Iloilo"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.698694,
    longitude: 122.561837}}
    pinColor = {"red"}
    title = {"University of San Agustin"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.694740,
    longitude: 122.561821}}
    pinColor = {"red"}
    title = {"Colegio de las Hijas de Jesus"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.695194,
    longitude: 122.565343}}
    pinColor = {"red"}
    title = {"Robinsons Ilolo"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.696933,
    longitude: 122.567733}}
    pinColor = {"red"}
    title = {"Marymart"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.697903,
    longitude: 122.567249}}
    pinColor = {"red"}
    title = {"SM Delgado"}
    />
   </MapView> 
  </View>

export default mandurriaoSM;