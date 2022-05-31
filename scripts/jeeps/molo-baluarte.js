import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';

import styles from '../screens/styles'

const moloBaluarte =
  <View style = {styles.container}>
   <MapView style = {styles.map} 
    initialRegion = {{
     latitude: 10.692636,
     longitude: 122.554727,
     latitudeDelta: 0.1,
     longitudeDelta: 0.045,
    }}
   >
   <MapView.Marker
    coordinate = {{latitude: 10.692636,
    longitude: 122.554727}}
    pinColor = {"red"}
    title = {"Fadriga auto repair services"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.692570,
    longitude: 122.553859}}
    pinColor = {"red"}
    title = {"Sofia Lodge"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.692218,
    longitude: 122.550839}}
    pinColor = {"red"}
    title = {"Farmart"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.692166,
    longitude: 122.548412}}
    pinColor = {"red"}
    title = {"Baluarte Elementary School"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.693390,
    longitude: 122.546669}}
    pinColor = {"red"}
    title = {"Townsville Studios"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.695253,
    longitude: 122.545159}}
    pinColor = {"red"}
    title = {"St. Therese Chapels"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.696139,
    longitude: 122.544740}}
    pinColor = {"red"}
    title = {"Mercury Drug"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.697169,
    longitude: 122.547197}}
    pinColor = {"red"}
    title = {"Molo Public Cemetery"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.698428,
    longitude: 122.549132}}
    pinColor = {"red"}
    title = {"Iloilo City National High School"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.699382,
    longitude: 122.552607}}
    pinColor = {"red"}
    title = {"John B. Lacson Foundation"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.699731,
    longitude: 122.555143}}
    pinColor = {"red"}
    title = {"UPV - Graduate and Continuing Education Building"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.700400,
    longitude: 122.561084}}
    pinColor = {"red"}
    title = {"UnionBank of the Philippines - Iloilo-Gen. Luna"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.700744,
    longitude: 122.562861}}
    pinColor = {"red"}
    title = {"University of San Agustin"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.701258,
    longitude: 122.566149}}
    pinColor = {"red"}
    title = {"BPI Iloilo-General Luna Branch"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.702003,
    longitude: 122.567390}}
    pinColor = {"red"}
    title = {"St. Paul University Iloilo"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.701049,
    longitude: 122.568974}}
    pinColor = {"red"}
    title = {"Bank of Commerce"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.699767,
    longitude: 122.569695}}
    pinColor = {"red"}
    title = {"Grand Xing Imperial Hotel"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.697143,
    longitude: 122.569179}}
    pinColor = {"red"}
    title = {"Chowking"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.695574,
    longitude: 122.569816}}
    pinColor = {"red"}
    title = {"Calle Real Business Center"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.693702,
    longitude: 122.571226}}
    pinColor = {"red"}
    title = {"Roberto's"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.693054,
    longitude: 122.572298}}
    pinColor = {"red"}
    title = {"7-Eleven"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.691918,
    longitude: 122.573735}}
    pinColor = {"red"}
    title = {"Plaza Libertad"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.691661,
    longitude: 122.573831}}
    pinColor = {"red"}
    title = {"Philippine Charity Sweepstakes Office"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.692046,
    longitude: 122.572226}}
    pinColor = {"red"}
    title = {"Iloilo Society Commercial"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.691983,
    longitude: 122.569589}}
    pinColor = {"red"}
    title = {"Phinma University Of Iloilo"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.692955,
    longitude: 122.569156}}
    pinColor = {"red"}
    title = {"Iloilo Central Market"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.696083,
    longitude: 122.569179}}
    pinColor = {"red"}
    title = {"Botica China"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.696398,
    longitude: 122.568471}}
    pinColor = {"red"}
    title = {"Unitop"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.695334,
    longitude: 122.565569}}
    pinColor = {"red"}
    title = {"7-Eleven"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.693336,
    longitude: 122.559298}}
    pinColor = {"red"}
    title = {"Tanza Church"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.694514,
    longitude: 122.555129}}
    pinColor = {"red"}
    title = {"Goldwyn & Jade Trading"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.692700,
    longitude: 122.555041}}
    pinColor = {"red"}
    title = {"Infante"}
    />
   </MapView> 
  </View>

export default moloBaluarte
