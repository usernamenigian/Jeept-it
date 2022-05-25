import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';

import styles from '../screens/styles'

const jeepname = 

<View style = {styles.mapContainer}>
    <MapView style = {styles.map}
    initialRegion = {{
     latitude: 10.701803,
     longitude: 122.568430,
     latitudeDelta: 0.1,
     longitudeDelta: 0.045,
    }}
   >
       <MapView.Marker
        coordinate = {{latitude: 0,
        longitude: 0}}
        pinColor = {"red"}
        title = {"location name"}
       />
   </MapView>
</View>

export default jeepname