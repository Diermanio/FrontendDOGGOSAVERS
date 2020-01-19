import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Menu from "./Menu";
import PerrosPE from "./PerrosPE";

const AppNavigator = createStackNavigator(
    {
        Home: { screen: Menu},
        PerrosP_E: { screen: PerrosPE},
    },
    {
        initialRouteName: 'Home',
    }
);

export default createAppContainer(AppNavigator);