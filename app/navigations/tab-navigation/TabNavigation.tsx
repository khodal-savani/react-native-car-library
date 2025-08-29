import React from 'react';
import { ImageSourcePropType } from 'react-native';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import { Icons } from '../../assets';
import Routes from '../../utils/Routes';
import { CarLibraryScreen, HomeScreen } from '../../screens';
import { styles } from './TabNavigationStyle';
import { CustomTabIcon } from '../../components';

const TabNav = createBottomTabNavigator();

const getTabBarOptions = (
  icon: ImageSourcePropType,
  label: string,
): BottomTabNavigationOptions => {
  const tabBarOptions: BottomTabNavigationOptions = {
    tabBarIcon: ({ focused }) => (
      <CustomTabIcon focused={focused} label={label} icon={icon} />
    ),
  };
  return tabBarOptions;
};

const TabNavigation = () => {
  const screenOptions: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarStyle: styles.tabBarBackgroundStyle,
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
  };
  return (
    <TabNav.Navigator screenOptions={screenOptions}>
      <TabNav.Screen
        name={Routes.home}
        component={HomeScreen}
        options={getTabBarOptions(Icons.homeIcon, Routes.home)}
      />
      <TabNav.Screen
        name={Routes.carLibrary}
        component={CarLibraryScreen}
        options={getTabBarOptions(Icons.carLibrary, Routes.carLibrary)}
      />
      <TabNav.Screen
        name={Routes.service}
        component={HomeScreen}
        options={getTabBarOptions(Icons.service, Routes.service)}
      />
      <TabNav.Screen
        name={Routes.profile}
        component={HomeScreen}
        options={getTabBarOptions(Icons.profile, Routes.profile)}
      />
    </TabNav.Navigator>
  );
};
export default TabNavigation;
