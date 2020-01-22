import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import MenuOpcion from "./MenuOpcion";

const MenuOpciones = props =>{
    return (
        <View style={styles.fondo}>
           <View style={styles.fila}>
            <MenuOpcion ppe={props.game} fun={1} Texto="Juega y descubre tu macota ideal" Imagen={require("../assets/peth.png")} />
            <MenuOpcion ppe={props.adop} fun={2} Texto="Adopta a un compañero" Imagen={require("../assets/peth.png")} />
           </View>
           <View style={styles.fila} >
            <MenuOpcion  ppe={props.rep} fun={3} Texto="Reporta mascotas perdidas o encontradas" Imagen={require("../assets/peth.png")} />
            <MenuOpcion ppe={props.ppe} fun={4} Texto="Explora mascotas perdidas y encontradas" Imagen={require("../assets/peth.png")} />
           </View>
        </View>
  );}



const styles = StyleSheet.create({
    fondo:{
        backgroundColor: 'blue'
      },
      fila:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'stretch',
        backgroundColor: 'blue'
      }
});

export default MenuOpciones;