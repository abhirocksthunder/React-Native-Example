/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import {FlatList, SafeAreaView} from 'react-native';

import * as products from '../mocks/products.json';
import MovieWidget from '../components/MovieWidget';
import Header from '../components/Header';

export default function Products() {
  return (
    <>
      <Header title="Products" />
      <SafeAreaView style={{flex: 1}}>
        <FlatList
          data={products.default}
          renderItem={MovieWidget}
          keyExtractor={item => item.title}
          numColumns={3}
          style={{flex: 1}}
          contentContainerStyle={{paddingVertical: 20}}
        />
      </SafeAreaView>
    </>
  );
}
