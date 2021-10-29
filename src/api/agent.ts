/* eslint-disable prettier/prettier */
import axios, {AxiosResponse} from 'axios';
import {Products} from '../app/models/Products';
import * as moviesData from '../app/mocks/movies.json';

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
};

const products = {
  list: () => requests.get<Products[]>('https://fakestoreapi.com/products'),
};

const movies = {
  list: () => moviesData as any,
};

const agent = {
  products,
  movies,
};

export default agent;
