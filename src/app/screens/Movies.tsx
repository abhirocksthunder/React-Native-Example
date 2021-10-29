/* eslint-disable radix */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable comma-dangle */
import * as React from 'react';
import MovieWidget from '../components/MovieWidget';
import { FlatList, SafeAreaView, Text } from 'react-native';
import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { moviesActions } from '../../store/moviesStore';
import agent from '../../api/agent';
import { MovieData } from '../models/Movies';


export default function Movies() {
    const dispatch = useDispatch();
    const newReleases: MovieData[] = useSelector((state: any) => state.movies.movies);
    const releases = Array.from(newReleases).sort((a,b)=>parseInt(a.price.split(' ')[1]) - parseInt(b.price.split(' ')[1]));

    React.useEffect(() => {
        const fetchNewReleases = () => {
            const response = agent.movies.list();
            dispatch(moviesActions.getNewReleases(response.default as MovieData[]));
        };
        fetchNewReleases();
    }, [dispatch]);


    return (
        <>
            <Header title="Shop" />
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', marginTop: 10, marginLeft: 10 }}>New Release Films</Text>
            <SafeAreaView style={{ flex: 1 }}>
                <FlatList
                    data={releases}
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
