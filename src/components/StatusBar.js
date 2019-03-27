import React from 'react';
import { StatusBar } from 'react-native';

const CommonStatusBar = props => (
  <StatusBar
    {...props}
    backgroundColor="black"
    barStyle="dark-content"
  />
);
export default CommonStatusBar;
