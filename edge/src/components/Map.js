import React, { useContext } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Polyline, Circle, Marker } from 'react-native-maps'
import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {
    const { 
        state: { currentLocation, markedlocation }, 
        tappedLocation,
        calcDistance 
    } = useContext(LocationContext);

    if (!currentLocation) {
        return <ActivityIndicator size="large" style={{ marginTop: 200 }} />
    }
    
    return (
        <View>
            <Text style={Styles.insts}>Tap on the Map to know the distance</Text>
            <MapView 
                style={Styles.map} 
                initialRegion={{
                    ...currentLocation.coords,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                }}
                followsUserLocation={true}
                region={{
                    ...currentLocation.coords,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                }}
                onPress={ async (event) => {
                    await tappedLocation(event.nativeEvent.coordinate);
                    if (markedlocation == null) {
                        return null;
                    } else {
                        calcDistance({
                            latitude: currentLocation.coords.latitude,
                            longitude: currentLocation.coords.longitude
                        }, 
                        {
                            latitude: markedlocation.latitude,
                            longitude: markedlocation.longitude
                        });
                    }
                } }
                showsUserLocation={true}
            >
                <Circle 
                    center={currentLocation.coords} 
                    radius={35}
                    strokeColor="rgba(150, 150, 250, 1.0)"
                    fillColor="rgba(150, 150, 250, 1.0)"
                />
                
                {markedlocation != null ? 
                <Marker 
                    coordinate={markedlocation}
                />
                : null}

                {markedlocation != null ? 
                <Polyline 
                    coordinates={[{
                        latitude: currentLocation.coords.latitude,
                        longitude: currentLocation.coords.longitude
                    }, 
                    {
                        latitude: markedlocation.latitude,
                        longitude: markedlocation.longitude
                    }]}
                />
                : null}    
            </MapView>
            
        </View>
    );
};

const Styles = StyleSheet.create({
    map: {
        height: 600
    },
    insts: {
        padding: 10,
        marginVertical: 10,
        fontSize: 18
    }
});

export default Map;
