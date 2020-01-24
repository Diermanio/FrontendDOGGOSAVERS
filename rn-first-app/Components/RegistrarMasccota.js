import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, Picker } from 'react-native';

import Banner from "./Banner";
import Datos from "./DatosMascota";

  class RegistrarMascota extends React.Component {

    static navigationOptions = { headerShown: false, title: 'Welcome', }
    
    render() {
      const { params } = this.props.navigation.state;
      console.log(params.key)
        const back=() => this.props.navigation;
      return (
        <View style={styles.parent}>
          <Banner titulo="Registrar Mascota" ImagenIzq={require('../assets/peth.png')} ImagenDer={require('../assets/profile.png')}/>
          <Datos gback={this.props.navigation} rkey={params.key} tipoP={params.tipoP}/>
          
    
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