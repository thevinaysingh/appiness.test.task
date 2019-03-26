
import { StackNavigator } from 'react-navigation';
import Splash from '../screens/Splash';
import { createKeyScreen, screens } from './screens-name';

const RootNavigator = StackNavigator({
  Splash: {
    screen: Splash,
    key: createKeyScreen(screens.SPLASH),
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
