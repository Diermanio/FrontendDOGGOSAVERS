import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Picker, Modal, Button, TouchableHighlight } from 'react-native';

import MenuOpcion from "./MenuOpcion";

const FotoMasccota = props =>{
    
    return (
      <TouchableHighlight onPress={props.nexts}>
        <View style={styles.fondo2}>
            <Image style={styles.image}  resizeMode="contain" source={props.image}/>
            <Text  style={styles.text}>{props.nombre}</Text>
        </View>
        </TouchableHighlight>
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