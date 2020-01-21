import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, Picker } from 'react-native';

import Banner from "./Banner";
import Datos from "./DatosReporte";
  class ReportarMascota extends React.Component {

    static navigationOptions = { headerShown: false, title: 'Welcome', }
    
    

    render() {
       const { params } = this.props.navigation.state;

        const back=() => this.props.navigation.goBack();
      return (
        <View style={styles.parent}>
          <Banner titulo="Reportar Mascota" ImagenIzq={require('../assets/peth.png')} ImagenDer={require('../assets/dogwalk.png')}/>
          <Datos gback={back} tipo={params.tipo_mascota} nombre={params.nombre} sexo={params.sexo} altura={params.altura}
           peso={params.peso}  edad={params.edad_aproximada} imagen={params.imagen} detalle={params.detalles} raza={params.razas} />
          
    
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