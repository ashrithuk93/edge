import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import edgeApi from '../api/edgeApi';
import ScrollCard from '../components/ScrollCard';
import { Entypo } from '@expo/vector-icons';  

const UserScreen = () => {
    const [results, setResults] = useState([]);

    const getApi = async () => {
        const response = await edgeApi.get('/photos');
        setResults(response.data);
    }

    // gets the data from API evrytime this page is loaded
    useEffect(() => {
        getApi();
    }, []);

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text style={Styles.text}>Horizontal Scrollable</Text>
            <FlatList 
                data={results}
                keyExtractor={(item) => item.title}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => {
                    return (
                        <View>
                            <ScrollCard 
                                title={item.title}
                                thumbnail={item.thumbnailUrl}
                                picture={item.url}
                            />
                        </View>
                    )
                }}
            t/>
        </SafeAreaView>
    )
};

UserScreen.navigationOptions = {
    title: 'Scroll',
    tabBarIcon: <Entypo name="images" size={20} color="black" />
};

const Styles = StyleSheet.create({
    image: {
        height: 500,
        width: 300
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 80,
        paddingVertical: 20
    }
});

export default UserScreen;