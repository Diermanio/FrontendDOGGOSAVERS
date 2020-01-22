import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, Picker } from 'react-native';

import Banner from "./Banner";
import Datos from "./DatosReporte";
  class ReportarMascota extends React.Component {

    static navigationOptions = { headerShown: false, title: 'Welcome', }
    
    

    render() {
       const { params } = this.props.navigation.state;
      console.log(params.key)
        const back=() => this.props.navigation.popToTop();
      return (
        <View style={styles.parent}>
          <Banner titulo="Reportar Mascota" ImagenIzq={require('../assets/peth.png')} ImagenDer={require('../assets/dogwalk.png')}/>
          <Datos gback={back} tipo={params.tipo_mascota} nombre={params.nombre} sexo={params.sexo} altura={params.altura}
           peso={params.peso}  edad={params.edad_aproximada} imagen={params.imagen} detalle={params.detalles} raza={params.razas} rkey={params.key} />
          
    
        </View>
      );
    }
  }


  const styles = StyleSheet.create({
    parent:{
        flex:1,
    }
    
  });

export default ReportarMascota;