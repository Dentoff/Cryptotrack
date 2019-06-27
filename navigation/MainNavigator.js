import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import MainScreen from '../screens/MainScreen/MainScreen';

const navStack = createStackNavigator({
    Home: MainScreen,
});

navStack.navigationOptions = {
    tabBarLabel: 'Home',
    headerVisible: false,
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={
            Platform.OS === 'ios'
              ? `ios-information-circle${focused ? '' : '-outline'}`
              : 'md-information-circle'
          }
        />
    ),
};

const listStack = createStackNavigator({
    List: MainScreen,
});

listStack.navigationOptions = {
    tabBarLabel: 'List',
    headerVisible: false,
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={
            Platform.OS === 'ios'
              ? `ios-information-circle${focused ? '' : '-outline'}`
              : 'md-information-circle'
          }
        />
    ),
};

const settingsStack = createStackNavigator({
    Settings: MainScreen,
});

settingsStack.navigationOptions = {
    tabBarLabel: 'Settings',
    headerVisible: false,
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={
            Platform.OS === 'ios'
                ? `ios-information-circle${focused ? '' : '-outline'}`
                : 'md-information-circle'
            }
        />
    ),
};

export default createBottomTabNavigator({
    App: navStack,
    List: listStack,
    Settings: settingsStack,
});