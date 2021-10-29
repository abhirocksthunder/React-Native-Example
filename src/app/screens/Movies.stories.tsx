import React from 'react';
import {storiesOf} from '@storybook/react-native';
import Provider from '../../provider';
import Movies from './Movies';

storiesOf('Movies', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('default', () => <Movies />);
