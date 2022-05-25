import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';

import styles from '../screens/styles'

const calaparanVilla =
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
    coordinate = {{latitude: 10.692331,
    longitude: 122.573544}}
    pinColor = {"red"}
    title = {"Plaza Libertad"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.691782,
    longitude: 122.569529}}
    pinColor = {"red"}
    title = {"PHINMA University Iloilo"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.696526,
    longitude: 122.568670}}
    pinColor = {"red"}
    title = {"UNITOP"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.695514,
    longitude: 122.566815}}
    pinColor = {"red"}
    title = {"1688 MALL"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.694987,
    longitude: 122.565204}}
    pinColor = {"red"}
    title = {"Robinsons Iloilo"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.694797,
    longitude: 122.562891}}
    pinColor = {"red"}
    title = {"Colegio de las Hijas de Jesus"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.693174,
    longitude: 122.559348}}
    pinColor = {"red"}
    title = {"Tanza Church"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.692837,
    longitude: 122.555848}}
    pinColor = {"red"}
    title = {"Robinsons Builders"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.679911,
    longitude: 122.517421}}
    pinColor = {"red"}
    title = {"Breakthrough"}
    />
   </MapView> 
  </View>

export default calaparanVilla;