import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Picker, Modal, Button } from 'react-native';

import MenuOpcion from "./MenuOpcion";

const FotoMasccota = props =>{
    
    return (
        <View style={styles.fondo2}>
            <Image style={styles.image}  resizeMode="contain" source={require("../assets/perro.jpg")}/>
            <Text  style={styles.text}>Nombre</Text>
        </View>
  );};



const styles = StyleSheet.create({
    fondo2:{
        backgroundColor: 'red',
        justifyContent: "center",
        alignItems: 'center',
        margin: 30,
        borderRadius: 20,
      },
      image: {
        width: 300,
        height: 300,
      },
      text:{
          textAlign: "center",
          marginBottom: 60,
      }
});

export default FotoMasccota;