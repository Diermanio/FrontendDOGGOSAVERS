import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Picker, Modal, Button,ScrollView, TouchableHighlight } from 'react-native';



const DatosPerfil= props =>{
    
    const [mas, setMas] = useState([]);
    const url = "http://10.0.2.2:8000/usuarios/persona/"+props.id;

     useEffect( ()=>{
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

    return (
        
        <View >
               <View style={styles.contimage}>
                    <Image style={styles.image} resizeMode="contain" source={require('../assets/user.jpg')} />
                </View>
                <View style={styles.parent}>
                    <View style={styles.container}>
                    <Text style={styles.texto}> {mas.nombre + " " +mas.apellidos} </Text>
                    </View>
                    <View style={styles.container}>
                        <Image style={styles.imageContainer} resizeMode="contain" source={require('../assets/what.png')} ></Image>
                    <Text> {mas.numero_contacto}</Text>
                    </View>
                    <View style={styles.container}>
                        <Image style={styles.imageContainer} resizeMode="contain" source={require('../assets/mail.png')}></Image>
        <               Text> {mas.correo}</Text>
                    </View>
                </View>
                
            
        </View>
  );};



const styles = StyleSheet.create({
    parent: {
        flex: 1,
        justifyContent: "space-evenly",
        backgroundColor: '#fff',
    },
    image: {
        width: 300,
        height: 200,
        margin: 1,
    },
    contimage:{
        alignItems:"center"
    },
    imageContainer: {
        width: 40,
        height: 40,
        margin: 1,
    },
    circle: {
        borderColor: 'black',
        borderRadius: 50,
        padding: 3,
        backgroundColor: 'white',
        borderWidth: 2,
    },
    container: {
        flex:1,
        flexDirection: "row",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: "center",
        marginTop:20,
        marginBottom: 10,
    },
    
});

export default DatosPerfil;