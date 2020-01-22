import React, { useState, useEffect }  from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, TextInput, Button} from 'react-native';



const Banner = props =>{

    

    const [currentUser, setCurrentUser] = useState("");
    const [currentPass, setCurrentPass] = useState("");

    

    const f2= async () => await fetch("http://10.0.2.2:8000/usuarios/usuario/?tipo=LOG&user="+ currentUser+"&pass="+ currentPass+"")
            .then((response) => response.json())
            .then((responseJson) => {
              return responseJson;
            })
            .then( masco  => {
              
              return masco[0];
            })
            .catch( error => {
              console.error(error);
            })

    const ver= async ()=>{
        const res= await f2();
        console.log(res);
        global.datos[0]=res;
        console.log("yaaa")
        console.log(global.datos);
        props.gback();
    }

    return (
        <View style={styles.container}>
          <Text>LOG IN</Text>
          <Text>Usuario:</Text>
          <TextInput onChangeText={(nombre) => setCurrentUser(nombre)} />
          <Text>Contraseña:</Text>          
          <TextInput onChangeText={(nombre) => setCurrentPass(nombre)} />
          <Button title="Ingresar" onPress={ver}/>
        </View>
  );}



const styles = StyleSheet.create({
  banner: {
    flexDirection: "row",
    justifyContent: 'space-evenly',
    paddingTop:20,
    paddingBottom:10,
    backgroundColor: 'red',
  },
  title:{
    paddingTop:20,
  },
  image: {
    width: 40,
    height: 40,
    margin:3,
  },
  circle:{
    borderColor: 'black',
    borderRadius: 50,
    padding:3,
    backgroundColor: 'white',
    borderWidth:2,
  }
});

export default Banner;