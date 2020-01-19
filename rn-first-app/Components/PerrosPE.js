import React from 'react';
import { StyleSheet, Text, View, Image, Picker } from 'react-native';

import Banner from "./Banner";
import Pref from "./Preferencias";
import Lista from "./ListaMascotas";
  class PerrosEP extends React.Component {

    static navigationOptions = { headerShown: false };
    
    
    render() {

      return (
        <View style={styles.parent}>
            <Banner ImagenIzq={require('../assets/peth.png')} ImagenDer={require('../assets/dogwalk.png')} />
            <Pref />
            <Lista />
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