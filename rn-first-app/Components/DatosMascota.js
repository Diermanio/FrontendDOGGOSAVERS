import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Picker, TextInput, Button, ScrollView } from 'react-native';

import MenuOpcion from "./MenuOpcion";

const DatosMascota = props =>{
    const [currentTipo, setCurrentTipo] = useState("");
    const [currentSexo, setCurrentSexo] = useState("");
    const [currentRaza, setCurrentRaza] = useState("");
    const [currentImage, setCurrentImage] = useState("../assets/default.png");

    const [currentAltura, setCurrentAltura] = useState("");
    const [currentNombre, setCurrentNombre] = useState("");
    const [currentDetalle, setCurrentDetalle] = useState("");
    const [currentEdad, setCurrentEdad] = useState("");
    const [currentPeso, setCurrentPeso] = useState("");

    const[currentLRaza,setCurrentLRaza]= useState([]);

    useEffect(()=>{
        fetch("http://10.0.2.2:8000/mascotas/raza")
        .then((response) => response.json())
        .then((responseJson) => {
          return responseJson;
        })
        .then( masco  => {
          setCurrentLRaza(masco);
        })
        .catch( error => {
          console.error(error);
        });

      } , []);

    const func2= ()=>{props.gback.navigate('Rep',{
        tipo_mascota: currentTipo,
        nombre: currentNombre,
        sexo: currentSexo,
        altura: currentAltura,
        peso: currentPeso,
        edad_aproximada: currentEdad,
        imagen: "http://asdad.jpg",
        detalles: currentDetalle,
        razas: currentRaza,
      });};

    return (
        <ScrollView style={styles.parent}>
            <View style={styles.fila}>
                <Text>Foto</Text>
                <Button title="+"/>
            </View>
            <Image style={styles.imag}  resizeMode="contain" source={require("../assets/default.png")}/>
            <Text>Nombre</Text>
            <TextInput onChangeText={(nombre) => setCurrentNombre(nombre)}/>
            <Text>Tipo</Text>
            <Picker
                        selectedValue={currentTipo}
                        style={{height: 50, width: 400}}
                        onValueChange={(itemValue, itemIndex) =>
                            setCurrentTipo(itemValue)
                        }>
                        <Picker.Item label="Gato" value="GA" />
                        <Picker.Item label="Perro" value="PE" />
            </Picker>
            <Text>Sexo</Text>
            <Picker
                        selectedValue={currentSexo}
                        style={{height: 50, width: 400}}
                        onValueChange={(itemValue, itemIndex) =>
                            setCurrentSexo(itemValue)
                        }>
                        <Picker.Item label="Macho" value="M" />
                        <Picker.Item label="Hembra" value="H" />
            </Picker>
            <Text>Raza</Text>
            <Picker
                        selectedValue={currentRaza}
                        style={{height: 50, width: 400}}
                        onValueChange={(itemValue, itemIndex) =>
                            setCurrentRaza(itemValue)
                        }>
                        {currentLRaza.map(raz => <Picker.Item Key={raz.id} label={raz.raza} value={raz.id} />)}
                        
            </Picker>
            <Text>Altura</Text>
            <TextInput onChangeText={(nombre) => setCurrentAltura(nombre)} />
            <Text>Peso</Text>
            <TextInput onChangeText={(nombre) => setCurrentPeso(nombre)} />
            <Text>Edad</Text>
            <TextInput onChangeText={(nombre) => setCurrentEdad(nombre)} />
            <Text>Detalles</Text>
            <TextInput onChangeText={(nombre) => setCurrentDetalle(nombre)} />
            
            <Button title="Aceptar" onPress={ func2}/>
  
      </ScrollView>
  );}



const styles = StyleSheet.create({
    fila:{
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    parent:{
        flex:1,
    }
});

export default DatosMascota;