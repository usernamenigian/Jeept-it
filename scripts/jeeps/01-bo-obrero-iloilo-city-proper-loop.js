import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import styles from '../screens/styles'


export const barrioObreroMarkers = 
[
  {value: 'Barrio Obrero Area', latitude: 10.699883, longitude: 122.587400},
  {value: 'Iloilo-Guimaras Ferry Wharf (FF Cruz, RORO)', latitude: 10.701751, longitude: 122.577301},
  {value: 'Casa Real de Iloilo', latitude: 10.701832, longitude: 122.569129},
  {value: 'YMCA Area', latitude: 10.697474, longitude: 122.568932},
  {value: 'Philippine Statistcis Authority', latitude: 10.698531, longitude: 122.569280},
  {value: 'Citadines', latitude: 10.698415, longitude: 122.568876},
  {value: 'Shopwise', latitude: 10.698145, longitude: 122.568664},
  {value: 'Hua Siong College of Iloilo (Main)', latitude: 10.69709, longitude: 122.569057},
  {value: 'Plazoleta Gay', latitude: 10.696817, longitude: 122.568937},
  {value: 'Calle Real and Old Iloilo Business District', latitude: 10.695507, longitude: 122.569798},
  {value: 'Iloilo Central Market', latitude: 10.692976, longitude: 122.569721},
  {value: 'Gaisano Capital Guanco', latitude: 10.692199, longitude: 122.569933},
  {value: 'University of Iloilo PHINMA', latitude: 10.691923, longitude: 122.569593},
  {value: 'Goldberry Lite Hotel', latitude: 10.692163, longitude: 122.570967},
  {value: 'Museum of Philippine Economic History', latitude: 10.693197, longitude: 122.572463},
  {value: 'Sunburst Park', latitude: 10.693800, longitude: 122.57190},
  {value: 'Social Security System', latitude: 10.693144, longitude: 122.571633}
]

export const barrioObrero = 
  <View style = {styles.container}>
   <MapView style = {styles.map}
    initialRegion = {{
     latitude: 10.701086,
     longitude: 122.579078,
     latitudeDelta: 0.1,
     longitudeDelta: 0.045,
   }}>

<MapViewDirections
    origin = {{latitude: 10.699883, longitude: 122.587400}}
    waypoints = {[{latitude: 10.699616, longitude: 122.587734},
                  {latitude: 10.697213, longitude: 122.585747},
                  {latitude: 10.697969, longitude: 122.584801},
                  {latitude: 10.697270, longitude: 122.583459},
                  {latitude: 10.698204, longitude: 122.582985},
                  {latitude: 10.698304, longitude: 122.582237},
                  {latitude: 10.699597, longitude: 122.581535},
                  {latitude: 10.702267, longitude: 122.571473},
                  {latitude: 10.70163921339008, longitude: 122.56916998318508},
                  {latitude: 10.696603, longitude: 122.569113},
                  {latitude: 10.693932, longitude: 122.571005},
                  {latitude: 10.692901, longitude: 122.572638},
                  {latitude: 10.691799, longitude: 122.573864},
                  {latitude: 10.691658, longitude: 122.573697},
                  {latitude: 10.692069, longitude: 122.569957},
                  {latitude: 10.692155, longitude: 122.569130},
                  {latitude: 10.693112, longitude: 122.569093}]}
    destination = {{latitude:10.693747, longitude: 122.569092}}
    apikey = {'AIzaSyDz4sKzFahw8gq6f045fSJ6_xTiIhX2x78'}
    strokeWidth = {4}
    strokeColor = "red"
    optimizeWaypoints={true}
   />

  {barrioObreroMarkers.map((marker, index) => {
             return (<MapView.Marker
             coordinate = {{latitude: barrioObreroMarkers[index].latitude,
             longitude: barrioObreroMarkers[index].longitude}}
             pinColor = {"red"}
             title = {barrioObreroMarkers[index].value}
             /> 
             )})
  }

</MapView>
</View>

