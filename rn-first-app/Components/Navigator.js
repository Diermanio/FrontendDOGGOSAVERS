import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Menu from "./Menu";


const AppNavigator = createStackNavigator(
    {
        LALA: Menu
    },
    {
        initialRouteName: 'LALA',
    }
);

export default createAppContainer(AppNavigator);