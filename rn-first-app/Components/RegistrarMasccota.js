import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, Picker } from 'react-native';

import Banner from "./Banner";
import Datos from "./DatosMascota";

  class RegistrarMascota extends React.Component {

    static navigationOptions = { headerShown: false, title: 'Welcome', }
    
    render() {
        const back=() => this.props.navigation.goBack();
      return (
        <View style={styles.parent}>
          <Banner titulo="Registrar Mascota" ImagenIzq={require('../assets/peth.png')} ImagenDer={require('../assets/dogwalk.png')}/>
          <Datos gback={back} />
          
    
        </View>
      );
    }
  }


  const styles = StyleSheet.create({
    parent:{
        flex:1,
    }
    
  });

export default RegistrarMascota;