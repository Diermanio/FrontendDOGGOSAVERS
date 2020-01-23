import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Picker, ScrollView } from 'react-native';


import Banner from "./Banner";
import Datos from "./InfoAdoptada";

  class MascotaAdoptada extends React.Component {

    static navigationOptions = { headerShown: false };
    
    
    render() {
      const { params } = this.props.navigation.state;
      const nav= this.props.navigation;

      return (
        <ScrollView style={styles.parent}>
            <Banner titulo={"Mascota Adoptada"} ImagenIzq={require('../assets/peth.png')} ImagenDer={require('../assets/dogwalk.png')} />
            <Datos  idMascota={params.idMascota} nav={nav}/>
        </ScrollView>
      );
    }
  }


  const styles = StyleSheet.create({
    parent:{
        flex:1,
    },
    image: {
        width: 200,
        height: 200,
        margin:5,
      },fila:{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: 'stretch',
        backgroundColor: 'blue'
      },bloque:{
        justifyContent: "space-evenly",
        alignItems: "center",
        width: 100,
        height: 100,
      },bloque2:{
        justifyContent: "space-evenly",
        alignItems:"center",
        width: 150,
        height: 150,
        marginLeft: 130,
      },caja:{
        borderColor: 'black',
        borderRadius: 50,
        padding:10,
        backgroundColor: 'white',
        borderWidth:2,
      },bloque3:{
        justifyContent: "space-evenly",
        alignItems:"center",
      }
    
  });

export default MascotaAdoptada;