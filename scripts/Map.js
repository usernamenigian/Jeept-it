import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';

import styles from './screens/styles'

const Map = 
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
    
    
    <MapView.Marker
    coordinate = {{latitude: 10.688,
    longitude: 122.51618}}
    pinColor = {"red"}
    title = {"Villa Plaza"}
    />
  <MapView.Marker
    coordinate = {{latitude: 10.6872591,
    longitude: 122.5192125}}
    pinColor = {"red"}
    title = {"Quezon Barangay Hall"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.6970243,
    longitude: 122.5429724}}
    pinColor = {"red"}
    title = {"Jollibee"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.6969435,
    longitude: 122.5441128}}
    pinColor = {"red"}
    title = {"Molo Plaza"}
    />
       <MapView.Marker
    coordinate = {{latitude: 10.6960269,
    longitude: 122.5446206}}
    pinColor = {"red"}
    title = {"Mercury Drugstore"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.6971039,
    longitude: 122.5471934}}
    pinColor = {"red"}
    title = {"Molo Public Cemetery"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.6977383,
    longitude: 122.5495828}}
    pinColor = {"red"}
    title = {"Iloilo City National Highschool"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.7021203,
    longitude: 122.5657076}}
    pinColor = {"red"}
    title = {"Assumption Iloilo"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.7006106,
    longitude: 122.5682697}}
    pinColor = {"red"}
    title = {"The Atrium"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.6989775,
    longitude: 122.5688692}}
    pinColor = {"red"}
    title = {"Landbank"}
    />
       <MapView.Marker
    coordinate = {{latitude: 10.6984378,
    longitude: 122.5692699}}
    pinColor = {"red"}
    title = {"Chowking"}
    />
       <MapView.Marker
    coordinate = {{latitude: 10.696622,
    longitude: 122.5686437}}
    pinColor = {"red"}
    title = {"Unitop"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.697044,
    longitude: 122.5674641}}
    pinColor = {"red"}
    title = {"Mary Mart"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.6986532,
    longitude: 122.5671546}}
    pinColor = {"red"}
    title = {"SM Delgado"}
    />


<MapView.Marker
    coordinate = {{latitude: 10.774,
    longitude: 122.574638}}
    pinColor = {"red"}
    title = {"Tagbak Bus Terminal"}
    />
       <MapView.Marker
    coordinate = {{latitude: 10.7445817,
    longitude: 122.56584}}
    pinColor = {"red"}
    title = {"Toyota"}
    />
           <MapView.Marker
    coordinate = {{latitude: 10.7410528,
    longitude: 122.5634871}}
    pinColor = {"red"}
    title = {"Jollibee"}
   />
  <MapView.Marker
    coordinate = {{latitude: 10.7244118,
    longitude: 122.5573263}}
    pinColor = {"red"}
    title = {"Jaro Plaza"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.7190179,
    longitude: 122.5608054}}
    pinColor = {"red"}
    title = {"Jollibee"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.7135681,
    longitude: 122.5624973}}
    pinColor = {"red"}
    title = {"West Visayas State University"}
    />
       <MapView.Marker
    coordinate = {{latitude: 10.7068854,
    longitude: 122.5666009}}
    pinColor = {"red"}
    title = {"Gaisano Capital City"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.7006106,
    longitude: 122.5682697}}
    pinColor = {"red"}
    title = {"The Atrium"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.6994123,
    longitude: 122.5630039}}
    pinColor = {"red"}
    title = {"University of San Agustin"}
    />
       <MapView.Marker
    coordinate = {{latitude: 10.6986532,
    longitude: 122.5671546}}
    pinColor = {"red"}
    title = {"SM Delgado"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.706645519257266,
    longitude: 122.56926365208066}}
    pinColor = {"red"}
    title = {"Rizal Lapaz Barangay Hall"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.70260509701925,
    longitude: 122.56837876372863}}
    pinColor = {"red"}
    title = {"Iloilo Provincial Capitol"}
    />


<MapView.Marker
    coordinate = {{latitude: 10.7310066,
    longitude: 122.5491166}}
    pinColor = {"red"}
    title = {"Central Philippine University"}
    />
  <MapView.Marker
    coordinate = {{latitude: 10.7244118,
    longitude: 122.5573263}}
    pinColor = {"red"}
    title = {"Jaro Plaza"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.7190179,
    longitude: 122.5608054}}
    pinColor = {"red"}
    title = {"Jollibee"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.7135681,
    longitude: 122.5624973}}
    pinColor = {"red"}
    title = {"West Visayas State University"}
    />
       <MapView.Marker
    coordinate = {{latitude: 10.7068854,
    longitude: 122.5666009}}
    pinColor = {"red"}
    title = {"Gaisano Capital City"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.7006106,
    longitude: 122.5682697}}
    pinColor = {"red"}
    title = {"The Atrium"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.6994123,
    longitude: 122.5630039}}
    pinColor = {"red"}
    title = {"University of San Agustin"}
    />
       <MapView.Marker
    coordinate = {{latitude: 10.6941958,
    longitude: 122.565573}}
    pinColor = {"red"}
    title = {"Robinsons Place"}    
    />
           <MapView.Marker
    coordinate = {{latitude: 10.6926913,
    longitude: 122.5695755}}
    pinColor = {"red"}
    title = {"Iloilo City Central Public Market"}    
    />
       <MapView.Marker
    coordinate = {{latitude: 10.6937917,
    longitude: 122.5719355}}
    pinColor = {"red"}
    title = {"Sunburst Park"}    
    />
       <MapView.Marker
    coordinate = {{latitude: 10.7015547,
    longitude: 122.5690689}}
    pinColor = {"red"}
    title = {"Arroyo Fountain"}
    />



<MapView.Marker
    coordinate = {{latitude: 10.7457002,
    longitude: 122.5408506}}
    pinColor = {"red"}
    title = {"Christ the King Memorial Park"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.7310066,
    longitude: 122.5491166}}
    pinColor = {"red"}
    title = {"Central Philippine University"}
    />
  <MapView.Marker
    coordinate = {{latitude: 10.7244118,
    longitude: 122.5573263}}
    pinColor = {"red"}
    title = {"Jaro Plaza"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.7190179,
    longitude: 122.5608054}}
    pinColor = {"red"}
    title = {"Jollibee"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.7135681,
    longitude: 122.5624973}}
    pinColor = {"red"}
    title = {"West Visayas State University"}
    />
       <MapView.Marker
    coordinate = {{latitude: 10.7068854,
    longitude: 122.5666009}}
    pinColor = {"red"}
    title = {"Gaisano Capital City"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.7015547,
    longitude: 122.5690689}}
    pinColor = {"red"}
    title = {"Arroyo Fountain"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.6967916,
    longitude: 122.5689268}}
    pinColor = {"red"}
    title = {"Jollibee"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.693033218383789,
    longitude: 122.572509765625}}
    pinColor = {"red"}
    title = {"Museum of Philippine Economic History"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.6926236,
    longitude: 122.573675}}
    pinColor = {"red"}
    title = {"Plaza Libertad"}
    />



<MapView.Marker
    coordinate = {{latitude: 10.7310066,
    longitude: 122.5491166}}
    pinColor = {"red"}
    title = {"Central Philippine University"}
    />
  <MapView.Marker
    coordinate = {{latitude: 10.7244118,
    longitude: 122.5573263}}
    pinColor = {"red"}
    title = {"Jaro Plaza"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.7190179,
    longitude: 122.5608054}}
    pinColor = {"red"}
    title = {"Jollibee"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.7135681,
    longitude: 122.5624973}}
    pinColor = {"red"}
    title = {"West Visayas State University"}
    />
       <MapView.Marker
    coordinate = {{latitude: 10.7068854,
    longitude: 122.5666009}}
    pinColor = {"red"}
    title = {"Gaisano Capital City"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.7015547,
    longitude: 122.5690689}}
    pinColor = {"red"}
    title = {"Arroyo Fountain"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.6967916,
    longitude: 122.5689268}}
    pinColor = {"red"}
    title = {"Jollibee"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.693033218383789,
    longitude: 122.572509765625}}
    pinColor = {"red"}
    title = {"Museum of Philippine Economic History"}
    />
   <MapView.Marker
    coordinate = {{latitude: 10.6926236,
    longitude: 122.573675}}
    pinColor = {"red"}
    title = {"Plaza Libertad"}
    />

   </MapView> 
  </View>

export default Map

