import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Picker, Modal, Button,ScrollView, TouchableHighlight } from 'react-native';



const CartaMascota = props =>{
    
    const [mas, setMas] = useState([]);
    const url = "http://10.0.2.2:8000/usuarios/usuario/?tipo="+ props.tipo+"&mascota=" + props.dueño

    const r= {1:{raza:"French"},2:{raza:"Pug"}}
    const s= {"M":{sexo:"Macho"},"H":{sexo:"Hembra"}}
    
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

    const datosUs= ()=> props.nav.navigate('PUM',{
            username:mas[0].username,
            persona:mas[0].persona,
          });
           

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
                    <Text style={styles.caja}>{r[props.raza[0]].raza}</Text>
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
                    <Text>Sexo</Text>
                     <Text style={styles.caja}>{s[props.sexo].sexo}</Text>
                </View>
            </View>
            <View style={styles.fila}>
               <View style={styles.bloque}>
                    <Text>Dueño</Text>
                    {mas.map(user=>(<TouchableHighlight onPress={datosUs}><Text Key={user.id} style={styles.caja}>{user.username}</Text></TouchableHighlight>) )}
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