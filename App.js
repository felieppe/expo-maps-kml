import { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { Polygon } from 'react-native-maps';
import { fetchKML } from './utils/api';
import parseXML from './utils/parser';

export default function App() {
  const [kmlData, setKmlData] = useState(null);

  useEffect(() => { 
    fetchKML().then((data) => {
      const coordinates = parseXML(data);
      setKmlData(coordinates);
     }); 
  }, [])

  return (
    <View style={styles.container}>
      <MapView style={{flex: 1, width: '100%'}} initialRegion={{latitude: -34.3786111, longitude: -56.7263889, latitudeDelta: 0.004, longitudeDelta: 0.004}} mapType='satellite'>
        <Polygon coordinates={kmlData} strokeColor="#000" fillColor="rgba(255, 0, 0, 0.21)" />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
