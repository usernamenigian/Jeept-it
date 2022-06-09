import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import styles from '../screens/styles'

export const lapuzMarkers = 
[
  {value: 'Lapuz loading area', latitude: 10.701391, longitude: 122.567687},
  {value: 'Philippine National Bank', latitude: 10.700997, longitude: 122.567439},
  {value: 'Cabalum Western College', latitude: 10.701157, longitude: 122.568511},
  {value: 'LBC', latitude: 10.699568, longitude: 122.569189},
  {value: 'Land Bank', latitude: 10.689913, longitude: 122.568876},
  {value: 'China Bank Savings', latitude: 10.698793, longitude: 122.569194},
  {value: 'Shopwise', latitude: 10.698145, longitude: 122.568733},
  {value: 'Chowking', latitude: 10.697201, longitude: 122.569268},
  {value: 'Citi Appliance', latitude: 10.695142, longitude: 122.571019},
  {value: 'Jollibee Lapuz', latitude: 10.693298, longitude: 122.57174},
  {value: '7-Eleven', latitude: 10.692948, longitude: 122.572281},
  {value: 'Plaza Libertad', latitude: 10.692632, longitude: 122.573688},
  {value: 'National Bureau of Investigation', latitude: 10.688953, longitude: 122.578608},
  {value: 'Iloilo City Porta', latitude: 10.690623, longitude: 122.582806},
  {value: 'Guimaras-Iloilo Ferry Terminal', latitude: 10.692458, longitude: 122.583144},
  {value: 'Iloilo City Fire Station', latitude: 10.694048, longitude: 122.572684}
]

export const lapuz = 
<View style = {styles.container}>
<MapView style = {styles.map}
initialRegion = {{
    latitude: 10.693389,
    longitude: 122.571689,
    latitudeDelta: 0.1,
    longitudeDelta: 0.045,
   }}>

<MapViewDirections
    origin = {{latitude: 10.701474, longitude: 122.567882}}
    waypoints = {[{latitude: 10.701605, longitude: 122.569714},
                  {latitude: 10.701485, longitude: 122.569004},
                  {latitude: 10.70121, longitude: 122.569072},
                  {latitude: 10.699106, longitude: 122.56906},
                  {latitude: 10.698952, longitude: 122.569028},
                  {latitude: 10.696632, longitude: 122.569021},
                  {latitude: 10.693843, longitude: 122.571031},
                  {latitude: 10.693497, longitude: 122.57175},
                  {latitude: 10.688232, longitude: 122.579357},
                  {latitude: 10.690653, longitude: 122.582331},
                  {latitude: 10.695112, longitude: 122.580017},
                  {latitude: 10.694289, longitude: 122.572616},
                  {latitude: 10.701748, longitude: 122.569746},
                ]}
    destination = {{latitude:10.701485, longitude: 122.567867}}
    apikey = {'AIzaSyDz4sKzFahw8gq6f045fSJ6_xTiIhX2x78'}
    strokeWidth = {4}
    strokeColor = "red"
    optimizeWaypoints={true}
   />

  {lapuzMarkers.map((marker, index) => {
             return (<MapView.Marker
             coordinate = {{latitude: lapuzMarkers[index].latitude,
             longitude: lapuzMarkers[index].longitude}}
             pinColor = {"red"}
             title = {lapuzMarkers[index].value}
             /> 
             )})
  }

</MapView>
</View>

