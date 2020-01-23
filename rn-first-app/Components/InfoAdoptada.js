import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Picker, TextInput, Button, ShadowPropTypesIOS } from 'react-native';

import MenuOpcion from "./MenuOpcion";

const InfoAdoptada = props =>{
    const [currentUs, setCurrentUs] = useState(0);
    const [currentDetalle, setCurrentDetalle] = useState("");
    const [currentDireccion, setCurrentDireccion] = useState("");
    const [currentImage, setCurrentImage] = useState("../assets/default.png");


    const [currentluS, setCurrentLUs] = useState([]);

    useEffect(()=>{
        fetch("http://10.0.2.2:8000/usuarios/usuario/?tipo=ADOPTADA&id="+global.datos[0].id)
        .then((response) => response.json())
        .then((responseJson) => {
          return responseJson;
        })
        .then( masco  => {
          setCurrentLUs(masco);
        })
        .catch( error => {
          console.error(error);
        });

      } , []);

    return (
        <View style={styles.parent}>
            <Text>Usario que adopto</Text>
            <Picker
                        selectedValue={currentUs}
                        style={{height: 50, width: 400}}
                        onValueChange={(itemValue, itemIndex) =>
                            setCurrentUs(itemValue)
                        }>
                        {currentluS.map(us => <Picker.Item Key={us.id} label={us.username} value={us.id} />)}
                        
            </Picker>
            <Text>Detalles</Text>
            <TextInput onChangeText={(nombre) => setCurrentDetalle(nombre)} />
            <Button title="Aceptar" />
      </View>
  );}



const styles = StyleSheet.create({
    fila:{
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    image: {
      width: 40,
      height: 40,
    }
});

export default InfoAdoptada;