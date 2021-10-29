import React from 'react';
import {storiesOf} from '@storybook/react-native';
import Provider from '../../provider';
import Products from './Products';

storiesOf('Products', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('default', () => <Products />);
