import React, { useEffect, useState, useContext } from 'react';
import { Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const TrackScreen = () => {
    const { markLocation } = useContext(LocationContext);
    const [err, setErr] = useState(null);

    const startWatching = async () => {
        try {
            const { granted } = await requestPermissionsAsync();
            if (!granted) {
                throw new Error('Location permission not granted');
            }
            await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
            }, (location) => {
                markLocation(location);
            });
        } catch (e) {
            setErr(e);
        }
    };

    useEffect(() => {
        startWatching();
    }, []);

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Map />
            {err ? <Text>Please enable location services</Text> : null}
        </SafeAreaView>
    )  
};

TrackScreen.navigationOptions = {
    title: 'Find Distance',
    tabBarIcon: <MaterialCommunityIcons name="map-marker-distance" size={20} color="black" />
};

const Styles = StyleSheet.create({});

export default TrackScreen; 