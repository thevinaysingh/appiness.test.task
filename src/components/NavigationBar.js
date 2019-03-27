import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { DefaultLabel } from './AppStyledComponents';
import { Colors } from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.appGreyColor,
    flexDirection: 'row',
    height: 60,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: Colors.appBlackColor,
    elevation: 10,
  },
  sideContainer: {
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  titleText: {
    color: Colors.appBlackColor,
    fontSize: 20,
    textAlign: 'center',
  },
  middleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

const NavigationBar = ({
  leftLabel,
  title,
  showBackButton,
  backButtonAction,
  showRightButton,
  rightButtonAction,
  rightLabel,
}) => (
  <View style={styles.container}>
    <View style={styles.sideContainer}>
      {showBackButton ? (
        <TouchableOpacity onPress={() => backButtonAction()}>
          <DefaultLabel>{leftLabel}</DefaultLabel>
        </TouchableOpacity>
      ) : null }
    </View>
    <View style={styles.middleContainer}>
      <Text style={styles.titleText}>{ title }</Text>
    </View>
    <View style={styles.sideContainer}>
      { showRightButton ? (
        <TouchableOpacity onPress={() => rightButtonAction()}>
          <DefaultLabel>{rightLabel}</DefaultLabel>
        </TouchableOpacity>
      ) : null }
    </View>
  </View>
);

NavigationBar.propTypes = {
  backButtonAction: PropTypes.func,
  leftLabel: PropTypes.string,
  rightButtonAction: PropTypes.func,
  rightLabel: PropTypes.string,
  showBackButton: PropTypes.bool,
  showRightButton: PropTypes.bool,
  title: PropTypes.string,
};

NavigationBar.defaultProps = {
  backButtonAction: () => {},
  leftLabel: 'Back',
  rightButtonAction: () => {},
  rightLabel: '',
  showBackButton: false,
  showRightButton: false,
  title: '',
};
export default NavigationBar;
