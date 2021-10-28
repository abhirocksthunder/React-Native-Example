/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable comma-dangle */
import * as React from 'react';


import * as movies from '../mocks/movies.json';
import MovieWidget from '../components/MovieWidget';
import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native';
import Header from '../components/Header';


const movieData = movies as any;

export default function Movies() {
    return (
        <>
            <Header title="Shop" />
            <Text style={{fontSize:20, fontWeight:'bold', color:'black', marginTop:10, marginLeft:10}}>New Release Films</Text>
            <SafeAreaView style={{ flex: 1 }}>
                <FlatList
                    data={movieData.default}
                    renderItem={MovieWidget}
                    keyExtractor={item => item.title}
                    numColumns={3}
                    style={{ flex: 1 }}
                    contentContainerStyle={{ paddingVertical: 20 }}
                />
            </SafeAreaView>
        </>
    );
}
