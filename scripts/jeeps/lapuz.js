import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';

import styles from '../screens/styles'

const lapuz = 
<View style = {styles.mapContainer}>
<MapView style = {styles.map}
initialRegion = {{
    latitude: 10.693389,
    longitude: 122.571689,
    latitudeDelta: 0.1,
    longitudeDelta: 0.045,
   }}>

<MapView.Marker
coordinate = {{latitude: 10.701391,
    longitude: 122.567687}}
    pinColor = {"red"}
    title = {"Lapuz loading area"}
/>
<MapView.Marker
coordinate = {{latitude: 10.700997,
    longitude: 122.567439}}
    pinColor = {"red"}
    title = {"Philippine National Bank"}
/>
<MapView.Marker
coordinate = {{latitude: 10.701157,
    longitude: 122.568511}}
    pinColor = {"red"}
    title = {"Cabalum Western College"}
/>
<MapView.Marker
coordinate = {{latitude: 10.699568,
    longitude: 122.569189}}
    pinColor = {"red"}
    title = {"LBC"}
/>
<MapView.Marker
coordinate = {{latitude: 10.689913,
    longitude: 122.568876}}
    pinColor = {"red"}
    title = {"Land Bank"}
/>
<MapView.Marker
coordinate = {{latitude: 10.698793,
    longitude: 122.569194}}
    pinColor = {"red"}
    title = {"China Bank Savings"}
/>
<MapView.Marker
coordinate = {{latitude: 10.698145,
    longitude: 122.568733}}
    pinColor = {"red"}
    title = {"Shopwise"}
/>
<MapView.Marker
coordinate = {{latitude: 10.697201,
    longitude: 122.569268}}
    pinColor = {"red"}
    title = {"Chowking"}
/>
<MapView.Marker
coordinate = {{latitude: 10.695142,
    longitude: 122.571019}}
    pinColor = {"red"}
    title = {"Citi Appliance"}
/>
<MapView.Marker
coordinate = {{latitude: 10.693298,
    longitude: 122.57174}}
    pinColor = {"red"}
    title = {"Jollibee"}
/>
<MapView.Marker
coordinate = {{latitude: 10.692948,
    longitude: 122.572281}}
    pinColor = {"red"}
    title = {"7-Eleven"}
/>
<MapView.Marker
coordinate = {{latitude: 10.692632,
    longitude: 122.573688}}
    pinColor = {"red"}
    title = {"Plaza Libertad"}
/>
<MapView.Marker
coordinate = {{latitude: 10.688953,
    longitude: 122.578608}}
    pinColor = {"red"}
    title = {"National Bureau of Investigation"}
/>
<MapView.Marker
coordinate = {{latitude: 10.690623,
    longitude: 122.582806}}
    pinColor = {"red"}
    title = {"Iloilo City Port"}
/>
<MapView.Marker
coordinate = {{latitude: 10.692458,
    longitude: 122.583146}}
    pinColor = {"red"}
    title = {"Guimaras-Iloilo Ferry Terminal"}
/>
<MapView.Marker
coordinate = {{latitude: 10.694048,
    longitude: 122.572684}}
    pinColor = {"red"}
    title = {"Iloilo City Fire Station"}
/>
<MapView.Marker
coordinate = {{latitude: 10.700403,
    longitude: 122.570084}}
    pinColor = {"red"}
    title = {"Iloilo City Fire Station"}
/>
</MapView>
</View>

export default lapuz