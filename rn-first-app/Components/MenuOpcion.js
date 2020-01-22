import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

const MenuOpcion = props =>{

  const ver=()=>{
    if(props.fun==3){
        if(global.datos.length==0){
            console.log("logeate men please")
        }else{
          
          props.ppe();
          
        }
    }else{
      
        props.ppe();
    }
  }

    return (
      <TouchableHighlight onPress={ver}>
        <View onPress={props.ppe} style={styles.fondo2} > 
            <Image style={styles.image}  resizeMode="contain" source={props.Imagen}/>
            <Text style={styles.text}>{props.Texto}</Text>
        </View> 
        </TouchableHighlight>
  );}



const styles = StyleSheet.create({
    fondo2:{
        backgroundColor: 'red',
        justifyContent: "center",
        alignItems: 'center',
        width: 125,
        height: 125,
        margin: 30,
        borderRadius: 20,
      },
      image: {
        width: 40,
        height: 40,
      },
      text:{
          textAlign: "center",
      }
});

export default MenuOpcion;