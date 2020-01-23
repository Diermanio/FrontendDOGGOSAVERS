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
        
        <View>
            <View>
                    <Image style={styles.image} resizeMode="contain" source={require('../assets/user.jpg')} />
                </View>
                <View>
                <Text style={styles.texto}> {mas.nombre + " " +mas.apellidos} </Text>
                </View>
                <View style={styles.container}>
                    <Image style={styles.imageContainer} resizeMode="contain" source={require('../assets/socialF.png')} ></Image>
                    <Text> Brendan Moore Ferder</Text>
                </View>
                <View style={styles.container}>
                    <Image style={styles.imageContainer} resizeMode="contain" source={require('../assets/socialT.png')}></Image>
                    <Text> @brendadn_moore</Text>
                </View>
                <View style={styles.container}>
                    <Image style={styles.imageContainer} resizeMode="contain" source={require('../assets/socialI.png')}></Image>
                    <Text> @brendanfor</Text>
                </View>
            
        </View>
  );};



const styles = StyleSheet.create({
    parent: {
        flex: 1,
    },
    image: {
        width: 300,
        height: 200,
        margin: 1,
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
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'space-around',
    },
    
});

export default DatosPerfil;