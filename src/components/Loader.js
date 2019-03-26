import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width,
    height,
    backgroundColor: '#00000060',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 20,
    position: 'absolute',
  },
  activityContainer: {
  },
});

const LoaderSize = 'large';

const Loader = props => (
  <View style={ styles.container }>
    <ActivityIndicator
      animating={ props.isAnimating }
      style={ styles.activityContainer }
      size={ LoaderSize }
      color={ props.color }
    />
  </View>
);

Loader.propTypes = {
  color: PropTypes.string,
  isAnimating: PropTypes.bool,
};

Loader.defaultProps = {
  isAnimating: false,
  color: 'white',
};

export default Loader;
