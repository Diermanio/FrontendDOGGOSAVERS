import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Menu from "./Menu";
import PerrosPE from "./PerrosPE";
import InfoMascota from "./InfoMascota";
import Adoptar from "./AdoptarMascota";
import Reportar from "./ReportarMascota";
import Registrar from "./RegistrarMasccota";
import Perfil from "./PerfilUsuario";

const AppNavigator = createStackNavigator(
    {
        Home: { screen: Menu},
        PerrosP_E: { screen: PerrosPE},
        InfoM: { screen: InfoMascota},
        Adop: { screen: Adoptar},
        Rep: { screen: Reportar},
        Reg: { screen: Registrar},
        Perfil: { screen: Perfil}
    },
    {
        initialRouteName: 'Home',
    }
);

export default createAppContainer(AppNavigator);