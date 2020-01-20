import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Picker, TextInput, Button } from 'react-native';

import MenuOpcion from "./MenuOpcion";

const DatosReporte = props =>{
    const [currentPE, setCurrentPe] = useState("");
    const [currentDetalle, setCurrentDetalle] = useState("");
    const [currentDireccion, setCurrentDireccion] = useState("");
    const [currentImage, setCurrentImage] = useState("../assets/default.png");
    
    const func= () =>{ 
        fetch('http://10.0.2.2:8000/mascotas/mascota_perdida_encontrada/', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id_mascota:2,
            id_user:1,
            estado_mascota: currentPE,
            sector_encuentro_perdida: currentDireccion,
            detalle:currentDetalle,
          }),
        }).catch( error => {
            console.error(error);
          });props.gback();
    };

    return (
        <View style={styles.parent}>
            <View style={styles.fila}>
                <Text>Mascota</Text>
                <Button title="+" onPress={props.regis}/>
            </View>
            <Image style={styles.imag}  resizeMode="contain" source={require("../assets/default.png")}/>
            <Text>Estado</Text>
            <Picker
                        selectedValue={currentPE}
                        style={{height: 50, width: 400}}
                        onValueChange={(itemValue, itemIndex) =>
                            setCurrentPe(itemValue)
                        }>
                        <Picker.Item label="Perdida" value="PE" />
                        <Picker.Item label="Encontrada" value="EN" />
            </Picker>
            <Text>Detalle</Text>
            <TextInput onChangeText={(nombre) => setCurrentDetalle(nombre)} />
            <View style={styles.fila}> 
                <Text>Dirección</Text>
                <Button title="+"/>
            </View>
            <TextInput onChangeText={(nombre) => setCurrentDireccion(nombre)} />
            <Button title="Aceptar" onPress={func}/>
  
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

export default DatosReporte;