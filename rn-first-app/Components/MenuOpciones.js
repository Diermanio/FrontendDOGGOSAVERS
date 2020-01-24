import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import MenuOpcion from "./MenuOpcion";

const MenuOpciones = props =>{
    return (
        <View >
           <View style={[styles.fila, styles.fila1]}>
            <MenuOpcion ppe={props.game} fun={1} Texto="Juega " Imagen={require("../assets/tennis.jpg")} />
            <MenuOpcion ppe={props.adop} fun={2} Texto="Adopta " Imagen={require("../assets/adopt.png")} />
           </View>
           <View style={[styles.fila, styles.fila2]} >
            <MenuOpcion  ppe={props.rep} fun={3} Texto="Reporta " Imagen={require("../assets/megaphone.jpg")} />
            <MenuOpcion ppe={props.ppe} fun={4} Texto="Explora " Imagen={require("../assets/lupa.png")} />
           </View>
           
        </View>
  );}


// 
const styles = StyleSheet.create({
    fondo:{
        backgroundColor: '#ffffff'
      },
      fila:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'stretch',
        
        marginRight:5,
        marginLeft:5,
        borderRadius:10,
      },
      fila1:{
        marginBottom: 5,
        backgroundColor: '#0336ff',
      },
      fila2:{
        marginTop:5,
        backgroundColor: '#03dac6',
      }
});

export default MenuOpciones;