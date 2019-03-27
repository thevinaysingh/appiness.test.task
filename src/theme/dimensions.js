import { Dimensions } from 'react-native';

export const getViewportHeight = () => Dimensions.get('window').height;

export const getViewportWidth = () => Dimensions.get('window').width;
