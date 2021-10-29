import React from 'react';

import {storiesOf} from '@storybook/react-native';
import MovieWidget from './MovieWidget';

const args = {
  title: 'The start of New era',
  image: 'https://m.media-amazon.com/images/I/A1wnJQFI82L._AC_SY879_.jpg',
  price: '₹ 130',
};

const withoutTitleArgs = {
  title: '',
  image: 'https://m.media-amazon.com/images/I/A1wnJQFI82L._AC_SY879_.jpg',
  price: '₹ 130',
};

storiesOf('Movie Widget', module)
  .add('default', () => <MovieWidget item={args} />)
  .add('without title', () => <MovieWidget item={withoutTitleArgs} />);

// storiesOf('Movie Widget', module).add('default', () => (
//     <MovieWidget item={withoutImageArgs} />
//   ));
