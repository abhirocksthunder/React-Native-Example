/* eslint-disable radix */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import { ActivityIndicator, FlatList, SafeAreaView } from 'react-native';
import MovieWidget from '../components/MovieWidget';
import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { productsActions } from '../../store/productsStore';
import agent from '../../api/agent';
import { ProductsData } from '../models/Products';

export default function Products() {
  const dispatch = useDispatch();
  const products: ProductsData[] = useSelector((state: any) => state.products.products);
  const sortedProducts = Array.from(products).sort((a, b) => parseInt(a.price) - parseInt(b.price));
  const finalProducts: ProductsData[] = [];
  sortedProducts.map(product => {
    finalProducts.push({ ...product, price: '$ ' + product.price });
  });

  React.useEffect(() => {
    const fetchProducts = async () => {
      const response = await agent.products.list();
      dispatch(productsActions.getProducts(response));
    };
    fetchProducts();
  }, [dispatch]);

  if (finalProducts.length === 0) {
    return (
      <>
        <Header title="Products" />
        <ActivityIndicator size="large" color="#7b4bfd" />
      </>
    );
  }

  return (
    <>
      <Header title="Products" />
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={finalProducts}
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
