import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Picker, Modal, Button,ScrollView } from 'react-native';



const CartaMascota = props =>{
    
    const [mas, setMas] = useState([]);
    const url = "http://10.0.2.2:8000/usuarios/usuario/?mascota=" + props.dueño
     useEffect(()=>{
             fetch(url)
             .then((response) => response.json())
             .then((responseJson) => {
               return responseJson;
             })
             .then( masco  => {
               setMas(masco);
             })
             .catch( error => {
               console.error(error);
             });
 
           } , []);
    console.log(mas);
    return (
        <View>
        <View style={styles.bloque2}>
                <Text>Historia</Text>
                <View>
                    <Text style={styles.caja}>{props.detalle}</Text>
                </View>
            </View>
            <View style={styles.fila}>
                <View style={styles.bloque}>
                    <Text>Raza</Text>
                    <Text style={styles.caja}>{props.raza}</Text>
                </View>
                <View style={styles.bloque}>
                    <Text>Peso</Text>
                    <Text style={styles.caja}>{props.peso}</Text>
                </View>
            </View>
            <View style={styles.fila}>
                <View style={styles.bloque}>
                    <Text>Altura</Text>
                    <Text style={styles.caja}>{props.altura}</Text>
                </View>
                <View style={styles.bloque}>
                    <Text>Edad</Text>
                    <Text style={styles.caja}>{props.edad}</Text>
                </View >
            </View>
            <View style={styles.fila}>
               <View style={styles.bloque}>
                    <Text>Dueño</Text>
                    {mas.map(user=> <Text Key={user.id} style={styles.caja}>{user.username}</Text>)}
                </View>
            </View>
            </View>
  );};



const styles = StyleSheet.create({
    parent:{
        flex:1,
    },
    image: {
        width: 200,
        height: 200,
        margin:5,
      },fila:{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: 'stretch',
        backgroundColor: 'blue'
      },bloque:{
        justifyContent: "space-evenly",
        alignItems: "center",
        width: 100,
        height: 100,
      },bloque2:{
        justifyContent: "space-evenly",
        alignItems:"center",
        width: 150,
        height: 150,
        marginLeft: 130,
      },caja:{
        borderColor: 'black',
        borderRadius: 50,
        padding:10,
        backgroundColor: 'white',
        borderWidth:2,
      },bloque3:{
        justifyContent: "space-evenly",
        alignItems:"center",
      }
    
});

export default CartaMascota;