import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import Routes from '../../utils/Routes';
import BottomTabs from '../tab-navigation/TabNavigation';
import { AddCarScreen, CarDetailScreen } from '../../screens';

const Stack = createStackNavigator();
const RootStack = () => {
  const screenOption: StackNavigationOptions = {
    headerShown: false,
  };

  return (
    <Stack.Navigator screenOptions={screenOption} initialRouteName={Routes.tab}>
      <Stack.Screen name={Routes.tab} component={BottomTabs} />
      <Stack.Screen name={Routes.addCar} component={AddCarScreen} />
      <Stack.Screen name={Routes.carDetail} component={CarDetailScreen} />
    </Stack.Navigator>
  );
};

export default React.memo(RootStack);
