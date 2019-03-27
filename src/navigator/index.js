
import { StackNavigator } from 'react-navigation';
import Splash from '../screens/Splash';
import Login from '../screens/Login';
import { createKeyScreen, screens } from './screens-name';
import Dashboard from '../screens/Dashboard';

const RootNavigator = StackNavigator({
  Splash: {
    screen: Splash,
    key: createKeyScreen(screens.SPLASH),
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    },
  },
  Login: {
    screen: Login,
    key: createKeyScreen(screens.LOGIN),
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    },
  },
  Dashboard: {
    screen: Dashboard,
    key: createKeyScreen(screens.DASHBOARD),
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    },
  },
}, {
  initialRouteName: screens.INITIAL_SCREEN,
  headerMode: 'none',
});

export default RootNavigator;
