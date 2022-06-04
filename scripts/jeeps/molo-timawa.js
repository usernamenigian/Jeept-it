import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import styles from '../screens/styles'

export const moloTimawaMarkers = 
[
  {value: '611 Lopez Jaena St, Molo', latitude: 10.694336, longitude: 122.545543},
  {value: 'Tibiao Bakery, Inc.-Iloilo Main Branch', latitude: 10.690980, longitude: 122.543014},
  {value: 'Dino Coffe shop', latitude: 10.692491, longitude: 122.541842},
  {value: 'Esperanza’s', latitude: 10.694092, longitude: 122.540663},
  {value: 'Holy Rosary Academy', latitude: 10.694671, longitude: 122.540591},
  {value: 'JRC Glass Supply', latitude: 10.695474, longitude: 122.540216},
  {value: 'Iloilo Southprime Developers Inc', latitude: 10.696261, longitude: 122.541706},
  {value: 'Jollibee Iloilo Molo DT', latitude: 10.696948, longitude: 122.543037},
  {value: 'M Lhuillier', latitude: 10.696073, longitude: 122.544317},
  {value: 'St. Therese Chapels', latitude: 10.695240, longitude: 122.545186},
  {value: 'Mr Isada', latitude: 10.695808, longitude: 122.547613},
  {value: `Iloilo Doctors' Hospital, Inc.`, latitude: 10.696662, longitude: 122.554456},
  {value: '88 Plaza Hotel', latitude: 10.697329, longitude: 122.560518},
  {value: 'University of San Agustin Gymnasium', latitude: 10.696843, longitude: 122.561798},
  {value: 'EON CENTENNIAL PLAZA HOTEL', latitude: 10.694905, longitude: 122.561794},
  {value: '7-Eleven', latitude: 10.694197, longitude: 122.561873},
  {value: 'Go Hotels Iloilo', latitude: 10.694999, longitude: 122.565113},
  {value: 'Unitop', latitude: 10.696563, longitude: 122.568464},
  {value: 'China Bank - Iloilo-Mabini', latitude: 10.694861, longitude: 122.569151},
  {value: 'Iloilo Central Market', latitude: 10.692962, longitude: 122.569147},
  {value: 'Phinma University Of Iloilo', latitude: 10.691986, longitude: 122.569595},
  {value: 'UCKG ILOILO', latitude: 10.692040, longitude: 122.571525},
  {value: 'Shell', latitude: 10.692834, longitude: 122.572555},
  {value: 'Mercury Drugstore(Plaza Libertad)', latitude: 10.691902, longitude: 122.573667},
  {value: 'Pacifica Agrivet Suppies', latitude: 10.691721, longitude: 122.573485},
  {value: 'Rizal Street', latitude: 10.691976, longitude: 122.571793}
]

export const moloTimawa =
  <View style = {styles.container}>
    <MapView style = {styles.map} 
      initialRegion = {{
      latitude: 10.694336,
      longitude: 122.545543,
      latitudeDelta: 0.1,
      longitudeDelta: 0.045,
    }}
   >

  <MapViewDirections
    origin = {{latitude: 10.694324, longitude: 122.545554}}
    waypoints = {[{latitude: 10.690953, longitude: 122.543022},
                  {latitude: 10.695400, longitude: 122.539987}, 
                  {latitude: 10.697343, longitude: 122.543405}, 
                  {latitude: 10.695988, longitude: 122.544445}, 
                  {latitude: 10.694448, longitude: 122.545641}, 
                  {latitude: 10.695684, longitude: 122.546554}, 
                  {latitude: 10.696546, longitude: 122.554849}, 
                  {latitude: 10.697250, longitude: 122.561725}, 
                  {latitude: 10.694188, longitude: 122.561758}, 
                  {latitude: 10.696403, longitude: 122.569058}, 
                  {latitude: 10.692150, longitude: 122.569127}, 
                  {latitude: 10.692022, longitude: 122.569077},
                  {latitude: 10.692035, longitude: 122.569204},
                  {latitude: 10.692063, longitude: 122.569993},
                  {latitude: 10.691980, longitude: 122.571659},
                  {latitude: 10.692919, longitude: 122.572563},
                  {latitude: 10.691805, longitude: 122.573877},
                  {latitude: 10.691657, longitude: 122.573713}]}
    destination = {{latitude: 10.691955, longitude: 122.571796}}
    apikey = {'AIzaSyDz4sKzFahw8gq6f045fSJ6_xTiIhX2x78'}
    strokeWidth = {4}
    strokeColor = "red"
    optimizeWaypoints={true}
  />

  {moloTimawaMarkers.map((marker, index) => {
             return (<MapView.Marker
             coordinate = {{latitude: moloTimawaMarkers[index].latitude,
             longitude: moloTimawaMarkers[index].longitude}}
             pinColor = {"red"}
             title = {moloTimawaMarkers[index].value}
             /> 
             )})
  }

  </MapView> 
</View>
  
