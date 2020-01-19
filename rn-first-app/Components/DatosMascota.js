import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Picker, TextInput, Button, ScrollView } from 'react-native';

import MenuOpcion from "./MenuOpcion";

const DatosMascota = props =>{
    const [currentTipo, setCurrentTipo] = useState("");
    const [currentSexo, setCurrentSexo] = useState("");
    const [currentRaza, setCurrentRaza] = useState("");
    const [currentImage, setCurrentImage] = useState("../assets/default.png");
    return (
        <ScrollView style={styles.parent}>
            <View style={styles.fila}>
                <Text>Foto</Text>
                <Button title="+"/>
            </View>
            <Image style={styles.imag}  resizeMode="contain" source={require("../assets/default.png")}/>
            <Text>Nombre</Text>
            <TextInput />
            <Text>Tipo</Text>
            <Picker
                        selectedValue={currentTipo}
                        style={{height: 50, width: 400}}
                        onValueChange={(itemValue, itemIndex) =>
                            setCurrentTipo(itemValue)
                        }>
                        <Picker.Item label="Gato" value="Gato" />
                        <Picker.Item label="Perro" value="Perro" />
            </Picker>
            <Text>Sexo</Text>
            <Picker
                        selectedValue={currentSexo}
                        style={{height: 50, width: 400}}
                        onValueChange={(itemValue, itemIndex) =>
                            setCurrentSexo(itemValue)
                        }>
                        <Picker.Item label="Macho" value="Macho" />
                        <Picker.Item label="Hembra" value="Hembra" />
            </Picker>
            <Text>Raza</Text>
            <Picker
                        selectedValue={currentRaza}
                        style={{height: 50, width: 400}}
                        onValueChange={(itemValue, itemIndex) =>
                            setCurrentRaza(itemValue)
                        }>
                        <Picker.Item label="French" value="French" />
                        <Picker.Item label="Chihuahua" value="Chihuahua" />
            </Picker>
            <Text>Altura</Text>
            <TextInput />
            <Text>Peso</Text>
            <TextInput />
            <Text>Edad</Text>
            <TextInput />
            <Text>Detalles</Text>
            <TextInput />
            
            <Button title="Aceptar" onPress={props.gback}/>
  
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