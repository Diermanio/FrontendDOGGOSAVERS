import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Picker, Modal, Button } from 'react-native';

import MenuOpcion from "./MenuOpcion";

const PrefAdop = props =>{
    const [currentAnimal, setCurrentAnimal] = useState("");
    const [currentRaza, setCurrentRaza] = useState("");
    const [currentEdad, setCurrentEdad] = useState("");
    const [currentPE, setCurrentPe] = useState("");

    const [isAddMode, setAddMode] = useState(false);

    return (
        <View>
            <View style={styles.pref}>
                <Button title="Preferencias" onPress={()=> setAddMode(true)} />
            </View>
            <View>
            <Modal visible={isAddMode} animationType= "slide">
                <Text>Animal</Text>
                <Picker
                    selectedValue={currentAnimal}
                    style={{height: 50, width: 400}}
                    onValueChange={(itemValue, itemIndex) =>
                        setCurrentAnimal(itemValue)
                    }>
                    <Picker.Item label="Perro" value="Perro" />
                    <Picker.Item label="Gato" value="Gato" />
                </Picker>
                <Text>Raza</Text>
                <Picker
                    selectedValue={currentRaza}
                    style={{height: 50, width: 400}}
                    onValueChange={(itemValue, itemIndex) =>
                        setCurrentRaza(itemValue)
                    }>
                    <Picker.Item label="Chihuahua" value="Chihuahua" />
                    <Picker.Item label="French" value="French" />
                </Picker>
                <Text>Edad</Text>
                <Picker
                    selectedValue={currentEdad}
                    style={{height: 50, width: 400}}
                    onValueChange={(itemValue, itemIndex) =>
                        setCurrentEdad(itemValue)
                    }>
                    <Picker.Item label="Joven" value="Joven" />
                    <Picker.Item label="Adulto" value="Adulto" />
                </Picker>
                <Button title="Aceptar" onPress={()=> setAddMode(false)} />
                </Modal>
                </View>
        </View>
  );};



const styles = StyleSheet.create({
    pref:{
    }
});

export default PrefAdop;