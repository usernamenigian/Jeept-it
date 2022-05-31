import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';

const moloTimawa =
  <View style = {styles.container}>
   <MapView style = {styles.map} 
    initialRegion = {{
     latitude: 10.694336,
     longitude: 122.545543,
     latitudeDelta: 0.1,
     longitudeDelta: 0.045,
    }}
   >
   <MapView.Marker
    coordinate = {{latitude: 10.694336,
    longitude: 122.545543}}
    pinColor = {"red"}
    title = {"611 Lopez Jaena St, Molo"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.690980,
    longitude: 122.543014}}
    pinColor = {"red"}
    title = {"Tibiao Bakery, Inc.–Iloilo Main Branch"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.692491,
    longitude: 122.541842}}
    pinColor = {"red"}
    title = {"Dino Coffe shop"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.694092,
    longitude: 122.540663}}
    pinColor = {"red"}
    title = {"Esperanza’s"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.694671,
    longitude: 122.540591}}
    pinColor = {"red"}
    title = {"Holy Rosary Academy"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.695474,
    longitude: 122.540216}}
    pinColor = {"red"}
    title = {"JRC Glass Supply"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.696261,
    longitude: 122.541706}}
    pinColor = {"red"}
    title = {"Iloilo Southprime Developers Inc"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.696948,
    longitude: 122.543037}}
    pinColor = {"red"}
    title = {"Jollibee Iloilo Molo DT"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.696073,
    longitude: 122.544317}}
    pinColor = {"red"}
    title = {"M Lhuillier"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.695240,
    longitude: 122.545186}}
    pinColor = {"red"}
    title = {"St. Therese Chapels"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.695808,
    longitude: 122.547613}}
    pinColor = {"red"}
    title = {"Mr Isada"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.696662,
    longitude: 122.554456}}
    pinColor = {"red"}
    title = {"Iloilo Doctors' Hospital, Inc."}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.697329,
    longitude: 122.560518}}
    pinColor = {"red"}
    title = {"88 Plaza Hotel"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.696843,
    longitude: 122.561798}}
    pinColor = {"red"}
    title = {"University of San Agustin Gymnasium"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.694905,
    longitude: 122.561794}}
    pinColor = {"red"}
    title = {"EON CENTENNIAL PLAZA HOTEL"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.694197,
    longitude: 122.561873}}
    pinColor = {"red"}
    title = {"7-Eleven"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.694999,
    longitude: 122.565113}}
    pinColor = {"red"}
    title = {"Go Hotels Iloilo"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.696563,
    longitude: 122.568464}}
    pinColor = {"red"}
    title = {"Unitop"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.694861,
    longitude: 122.569151}}
    pinColor = {"red"}
    title = {"China Bank - Iloilo-Mabini"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.692962,
    longitude: 122.569147}}
    pinColor = {"red"}
    title = {"Iloilo Central Market"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.691986,
    longitude: 122.569595}}
    pinColor = {"red"}
    title = {"Phinma University Of Iloilo"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.692040,
    longitude: 122.571525}}
    pinColor = {"red"}
    title = {"UCKG ILOILO"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.692834,
    longitude: 122.572555}}
    pinColor = {"red"}
    title = {"Shell"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.691902,
    longitude: 122.573667}}
    pinColor = {"red"}
    title = {"Mercury Drugstore(Plaza Libertad)"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.691721,
    longitude: 122.573485}}
    pinColor = {"red"}
    title = {"Pacifica Agrivet Suppies"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.691976,
    longitude: 122.571793}}
    pinColor = {"red"}
    title = {"Rizal Street"}
    />
   </MapView> 
  </View>
  
export default moloTimawa