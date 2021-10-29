/* eslint-disable radix */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable comma-dangle */
import * as React from 'react';
import MovieWidget from '../components/MovieWidget';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { MovieData } from '../models/Movies';
import { cartActions } from '../../store/cartStore';


export default function Cart() {
    const dispatch = useDispatch();
    const cartItems: MovieData[] = useSelector((state: any) => state.cart.cartItems);

    React.useEffect(() => {
        dispatch(cartActions.getCartItems());
    }, [dispatch]);

    if (cartItems.length === 0) {
        return (
            <>
                <Header title="Cart Items" />
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>No items to view!</Text>

                </View>
            </>
        );
    }

    return (
        <>
            <Header title="Cart Items" />
            <SafeAreaView style={{ flex: 1 }}>
                <FlatList
                    data={cartItems}
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
