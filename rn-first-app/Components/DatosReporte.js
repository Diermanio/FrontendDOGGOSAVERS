import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Picker, TextInput, Button } from 'react-native';

import MenuOpcion from "./MenuOpcion";

const DatosReporte = props =>{
    const [currentPE, setCurrentPe] = useState("");
    const [currentImage, setCurrentImage] = useState("../assets/default.png");
    
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
                        <Picker.Item label="Perdida" value="Perdida" />
                        <Picker.Item label="Encontrada" value="Encontrada" />
            </Picker>
            <Text>Detalle</Text>
            <TextInput />
            <View style={styles.fila}> 
                <Text>Dirección</Text>
                <Button title="+"/>
            </View>
            <TextInput />
            <Button title="Aceptar" onPress={props.gback}/>
  
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