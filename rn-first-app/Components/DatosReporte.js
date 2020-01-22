import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Picker, TextInput, Button, ShadowPropTypesIOS } from 'react-native';

import MenuOpcion from "./MenuOpcion";

const DatosReporte = props =>{
    const [currentPE, setCurrentPe] = useState("PE");
    const [currentDetalle, setCurrentDetalle] = useState("");
    const [currentDireccion, setCurrentDireccion] = useState("");
    const [currentImage, setCurrentImage] = useState("../assets/default.png");
    const [mas, setMas] = useState(3);
    const list=[];
    list[0]=props.raza;
    const url= "http://10.0.2.2:8000/mascotas/mascotas/?tipo=ID&tipo_mascota="+props.tipo+"&nombre="+props.nombre+"&sexo="+props.sexo+"&altura="+props.altura+"&peso="+props.peso+"&edad="+props.edad+"&detalles="+props.detalle

    const f1= async () => await fetch('http://10.0.2.2:8000/mascotas/mascotas/', {
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

    const f2= async () => await fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
              return responseJson;
            })
            .then( masco  => {
              console.log("la id");
              console.log(masco[0].id);
              return masco[0].id;
            })
            .catch( error => {
              console.error(error);
            })

    const f3= async (id) => await  fetch('http://10.0.2.2:8000/mascotas/mascota_perdida_encontrada/', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id_mascota: id,
              id_user: 1,
              estado_mascota:currentPE,
              sector_encuentro_perdida: currentDireccion,
              detalle:currentDetalle,
              
            }),
          }).catch( error => {
              console.log(error);
            }); 


    const func= async() =>{ 
      
         await f1();
    
         /*fetch('http://10.0.2.2:8000/mascotas/mascotasadopcion/', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id_mascota: 1,
            id_user: 1,
            puntaje_juego:"23"
          }),
        }).catch( error => {
            console.log(error);
          });*/

         const id=await f2();
      
         
         await f3(id);
         props.gback();

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