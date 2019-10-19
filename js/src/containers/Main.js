import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './HomeScreen';

const MainNavigator = createStackNavigator(
  {
    Home: HomeScreen
  }
);

export default createAppContainer(MainNavigator);
