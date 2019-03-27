import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { TouchableOpacity, FlatList, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { ActionCreators } from '../../actions';
import { StackActions, NavigationActions } from 'react-navigation';
import { DefaultLabel } from '../../components/AppStyledComponents';
import { locales } from '../../utils/locales';
import * as Storage from '../../utils/storage';
import { CONSTANTS } from '../../utils/constants';
import { screens } from '../../navigator/screens-name';
import CommonStatusBar from '../../components/StatusBar';
import NavigationBar from '../../components/NavigationBar';
import { Colors } from '../../theme';

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
    this.props.getEmployees();
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

  renderItem(item) {
    return (
      <View style={styles.itemContainer}>
        <Text>{`${locales.DASHBOARD.name} : ${item.name}`}</Text>
        <Text>{`${locales.DASHBOARD.gender} : ${item.gender}`}</Text>
        <Text>{`${locales.DASHBOARD.age} : ${item.age}`}</Text>
        <Text>{`${locales.DASHBOARD.email} : ${item.email}`}</Text>
        <Text>{`${locales.DASHBOARD.phone} : ${item.phoneNo}`}</Text>
      </View>
    );
  }

  render() {
    const { users } = this.props;
    return (
      <DashboardContainer>
        <CommonStatusBar />
        <NavigationBar
          title={locales.DASHBOARD.title}
          showRightButton
          rightLabel={locales.DASHBOARD.logout}
          rightButtonAction={this.onPressLogout}
        />
        <FlatList
          style={{ flex: 1 }}
          data={users}
          renderItem={({ item }) => this.renderItem(item)}
          keyExtractor={item => `${item.id}`}
          scrollEnabled
        />
      </DashboardContainer>
    );
  }
}

const DashboardContainer = styled.View`
  padding-top: 20px;
  flex: 1;
  display: flex;
  background-color: white;
`;

const styles = {
  itemContainer: {
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: 'powderblue',
    borderRadius: 10,
    padding: 10,
  },
};

Dashboard.propTypes = {
  getEmployees: PropTypes.func,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  users: PropTypes.arrayOf(PropTypes.any),
};

Dashboard.defaultProps = {
  getEmployees: () => {},
  users: [],
};

const mapStateToProps = state => ({
  users: state.user.users,
});

const mapDispatchToProps = () => ActionCreators;

const DashboardScreen = connect(mapStateToProps, mapDispatchToProps)(Dashboard);

export default DashboardScreen;
