import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Transactions from './screens/Transactions';
import Info from './screens/Info';

const AppNavigator = createStackNavigator({
  Transactions,
  Info,
});

export default createAppContainer(AppNavigator);
