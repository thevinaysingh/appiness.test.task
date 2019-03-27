import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import { DefaultLabel } from '../../components/AppStyledComponents';
import { locales } from '../../utils/locales';
import * as Storage from '../../utils/storage';
import { CONSTANTS } from '../../utils/constants';
import { screens } from '../../navigator/screens-name';

/**
  * @desc this class will list the employees
  * @author Vinay Singh vinaysinghsatna01@gmail.com
  * @required navigation
*/

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(this.props.navigation);
  }

  onPressLogout = () => {
    if (Storage.deleteItem(CONSTANTS.KEYS.ACCESS_TOKEN)) {
      this.goToLogin();
    }
  }

  goToLogin() {
    const resetAction = StackActions.reset({
      index: 0,
      key: null,
      actions: [
        NavigationActions.navigate({ routeName: screens.LOGIN }),
      ],
    });
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    return (
      <DashboardContainer>
        <TouchableOpacity
          onPress={this.onPressLogout}
        >
          <DefaultLabel>{locales.DASHBOARD.logout}</DefaultLabel>
        </TouchableOpacity>
      </DashboardContainer>
    );
  }
}

const DashboardContainer = styled.View`
    align-items: center;
    flex: 1;
    display: flex;
    justify-content: center;
`;

Dashboard.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Dashboard;
