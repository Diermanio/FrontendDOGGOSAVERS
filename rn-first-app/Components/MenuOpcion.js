import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';


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
  
  const fetchFonts = () => {
    return Font.loadAsync({
    'Montserrat-Regular': require('../assets/fonts/Montserrat/Montserrat-Regular.ttf'),
    
    });
    };
  const[dataLoaded, setDataLoaded]= useState(false);
        if(!dataLoaded){
          return(
            <AppLoading
              startAsync={fetchFonts}
              onFinish={() => setDataLoaded(true)}/>
          );
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
        backgroundColor: '#ffffff',
        justifyContent: "center",
        alignItems: 'center',
        width: 125,
        height: 125,
        margin: 30,
        borderRadius: 20,
        borderStyle: "dashed",
        borderColor: "#ffde03",
      },
      image: {
        width: 40,
        height: 40,
      },
      text:{
          textAlign: "center",
          fontFamily: "Montserrat-Regular",
      }
});

export default MenuOpcion;