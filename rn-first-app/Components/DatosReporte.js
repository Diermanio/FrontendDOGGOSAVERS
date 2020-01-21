import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Picker, TextInput, Button, ShadowPropTypesIOS } from 'react-native';

import MenuOpcion from "./MenuOpcion";

const DatosReporte = props =>{
    const [currentPE, setCurrentPe] = useState("");
    const [currentDetalle, setCurrentDetalle] = useState("");
    const [currentDireccion, setCurrentDireccion] = useState("");
    const [currentImage, setCurrentImage] = useState("../assets/default.png");
    const [mas, setMas] = useState([]);
    const list=[];
    list[0]=props.raza;
    console.log(list);
    const func= () =>{ 
      

      fetch('http://10.0.2.2:8000/mascotas/mascotas/', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            tipo_mascota: props.tipo,
            nombre: props.nombre,
            sexo: props.sexo,
            altura: props.altura,
            peso: props.peso,
            edad_aproximada: props.edad,
            imagen: "http://asdad.jpg",
            detalles: props.detalle,
            razas: list,
            
          }),
        }).catch( error => {
            console.error(error);
          }); 
/*

        fetch('http://10.0.2.2:8000/mascotas/mascota_perdida_encontrada/', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id_macota: "1",
            id_user: "1",
            estado_mascota:"EN",
            sector_encuentro_perdida: "SAMANES",
            detalle:"JEJE",
            
          }),
        }).catch( error => {
            console.log(error);
          }); */


    };

    return (
        <View style={styles.parent}>
            <View style={styles.fila}>
                <Text>Mascota</Text>
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