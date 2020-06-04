import React, { useEffect, useState } from 'react';
// React

// Styling and components
import styles from '../assets/styles'

import {
    View,
    Text,
    FlatList,
    ImageBackground,
    SafeAreaView,
    TouchableOpacity,
    Modal,
    StyleSheet
} from 'react-native';

import { 
    Button, 
    Icon
 } from 'native-base'

// Google maps core components

import
MapView,
{ PROVIDER_GOOGLE,
Marker } 
 from 'react-native-maps'



const GoogleMap = (props) => {
    return (
        <View style={Mapstyles.container}>
            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={Mapstyles.map}
                region={{
                    latitude: 57.68505,
                    longitude: 11.97796,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }} >
                <Marker
                    key="1"
                    coordinate={{
                        latitude: 57.68505,
                        longitude: 11.97796,
                    }}
                >
                
                </Marker>
            </MapView>
        </View>
    )
}

const Mapstyles = StyleSheet.create({
    container: {
        marginTop: 50,
        ...StyleSheet.absoluteFillObject,
        height: 800,
        width: 800,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default GoogleMap;

