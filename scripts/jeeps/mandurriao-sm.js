import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';
import React from 'react';

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