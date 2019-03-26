import React, { Component } from 'react';
import styled from 'styled-components';
import { locales } from '../../utils/locales';
import { DefaultLabel } from '../../components/AppStyledComponents';

/**
  * @desc this class will display the text only
  * @author Vinay Singh vinaysinghsatna01@gmail.com
  * @required null
*/

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
    color: black;
`;

export default Splash;
