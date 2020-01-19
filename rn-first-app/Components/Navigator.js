import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Menu from "./Menu";
import PerrosPE from "./PerrosPE";

const AppNavigator = createStackNavigator(
    {
        Home: Menu,
        PerrosP_E: PerrosPE,
    },
    {
        initialRouteName: 'PerrosP_E',
    }
);

export default createAppContainer(AppNavigator);