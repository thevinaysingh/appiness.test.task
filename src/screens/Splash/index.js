import React, { Component } from 'react';
import styled from 'styled-components';
import { StackActions, NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';
import { locales } from '../../utils/locales';
import { DefaultLabel } from '../../components/AppStyledComponents';
import { screens } from '../../navigator/screens-name';
import * as Storage from '../../utils/storage';
import { CONSTANTS } from '../../utils/constants';

/**
  * @desc this class will display the text only
  * @author Vinay Singh vinaysinghsatna01@gmail.com
  * @required navigation
*/

const SPLASH_TIME_OUT = 2000;

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    Storage.getItemWithKey(CONSTANTS.KEYS.ACCESS_TOKEN, (response) => {
      if (response) {
        this.goToScreen(screens.DASHBOARD);
      } else {
        this.goToScreen(screens.LOGIN);
      }
    });
  }

  goToScreen(screenToRedirect) {
    setTimeout(() => {
      const resetAction = StackActions.reset({
        index: 0,
        key: null,
        actions: [
          NavigationActions.navigate({ routeName: screenToRedirect }),
        ],
      });
      this.props.navigation.dispatch(resetAction);
    }, SPLASH_TIME_OUT);
  }

  render() {
    return (
      <SplashContainer>
        <DefaultLabel>{locales.SPLASH.label}</DefaultLabel>
      </SplashContainer>
    );
  }
}

const SplashContainer = styled.View`
    align-items: center;
    flex: 1;
    display: flex;
    justify-content: center;
`;

Splash.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Splash;
