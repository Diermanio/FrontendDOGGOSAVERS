import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Picker, Modal, Button, TouchableHighlight } from 'react-native';

import MenuOpcion from "./MenuOpcion";
import {macota} from "../Global/global";


const FotoMasccota = props =>{


    const func2=()=>props.nav.navigate('InfoMus',{
      nombre:props.nombre,
      raza:props.raza,
      peso:props.peso,
      altura:props.altura,
      edad:props.edad,
      dueño:props.id,
      detalle:props.detalle,
      tipob: props.tipob,
      id:props.id,
      sexo:props.sexo,
    });

    const func1=()=> props.nav.navigate('InfoM',{
      nombre:props.nombre,
      raza:props.raza,
      peso:props.peso,
      altura:props.altura,
      edad:props.edad,
      dueño:props.id,
      detalle:props.detalle,
      tipob: props.tipob,
      sexo:props.sexo,
      perdida:props.perdida,
    });

 

    const func3 =()=> props.nav.navigate('INFOMREP',{
      nombre:props.nombre,
      raza:props.raza,
      peso:props.peso,
      altura:props.altura,
      edad:props.edad,
      dueño:props.id,
      detalle:props.detalle,
      tipob: props.tipob,
      sexo:props.sexo,
      id:props.id,
      perdida:props.perdida,
    });

    const ver=() =>{
      if(props.num==1){
        console.log("no manqueaste vida")
        func2();
      }else if(props.num==3){
        console.log("si entro reportes")
        func3();
      }else{
        console.log("numn")
        console.log(props.num)
        func1();
      }
    }

    return (
      <TouchableHighlight onPress={ver}>
        <View style={styles.fondo2}>
            <Image style={styles.image}  resizeMode="contain" source={require("../assets/perro.jpg")}/>
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