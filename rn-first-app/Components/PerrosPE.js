import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Picker } from 'react-native';

import Banner from "./Banner";
import Pref from "./Preferencias";
import Lista from "./ListaPE";
import {macota} from "../Global/global";
  class PerrosEP extends React.Component {

    static navigationOptions = { headerShown: false };
    
    
    render() {
      
      const infom = () => this.props.navigation.navigate('InfoM');
      return (
        <View style={styles.parent}>
            <Banner titulo="Mascotas Perdidas/Encontradas" ImagenIzq={require('../assets/peth.png')} ImagenDer={require('../assets/profile.png')} />
            <Lista nexts={infom} nav={this.props.navigation} arg="?tipo=P/E" />
        </View>
      );
    }
  }


  const styles = StyleSheet.create({
    parent:{
        flex:1,
    }
    
  });

export default PerrosEP;