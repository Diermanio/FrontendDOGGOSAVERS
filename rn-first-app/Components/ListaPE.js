import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Picker, Modal, Button,ScrollView } from 'react-native';

import Foto from "./FotoMasota";
import { getMascotasPE } from "../Fetchs/MascotasPerdidas";



const ListaPE = props =>{
  const [currentAnimal, setCurrentAnimal] = useState("");
  const [currentRaza, setCurrentRaza] = useState("");
  const [currentEdad, setCurrentEdad] = useState("");
  const [currentPE, setCurrentPe] = useState("&estado=PE");

  const [isAddMode, setAddMode] = useState(false);
    const [mas, setMas] = useState([]);
   const url = "http://10.0.2.2:8000/mascotas/mascotas/" + props.arg + currentPE
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


    const func = ()=>{
      const url2 = "http://10.0.2.2:8000/mascotas/mascotas/" + props.arg+ currentAnimal + currentEdad + currentRaza + currentPE
      fetch(url2)
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

           


      setAddMode(false);
    }

    return (
      <View style={styles.parent}>
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
              <Picker.Item label="Ninguna" value={"&tipo_mascota=N"} />
              <Picker.Item label="Perro" value={"&tipo_mascota=PE"} />
              <Picker.Item label="Gato" value={"&tipo_mascota=GA"} />
          </Picker>
          <Text>Raza</Text>
          <Picker
              selectedValue={currentRaza}
              style={{height: 50, width: 400}}
              onValueChange={(itemValue, itemIndex) =>
                  setCurrentRaza(itemValue)
              }>
                <Picker.Item label="Ninguna" value={"&raza=N"} />
              <Picker.Item label="French" value={"&raza=1"} />
              <Picker.Item label="Pug" value={"&raza=2"} />
          </Picker>
          <Text>Edad</Text>
          <Picker
              selectedValue={currentEdad}
              style={{height: 50, width: 400}}
              onValueChange={(itemValue, itemIndex) =>
                  setCurrentEdad(itemValue)
              }>
                <Picker.Item label="Ninguna" value={"&edad=N"} />
              <Picker.Item label="Joven" value={"&edad=JOVEN"} />
              <Picker.Item label="Adulto" value={"&edad=ADULTO"} />
          </Picker>
          <Text>Estado</Text>
          
                <Picker
                    selectedValue={currentPE}
                    style={{height: 50, width: 400}}
                    onValueChange={(itemValue, itemIndex) =>
                        setCurrentPe(itemValue)
                    }>
                    <Picker.Item label="Perdida" value={"&estado=PE"} />
                    <Picker.Item label="Encontrada" value={"&estado=EN"} />
            </Picker>
          <Button title="Aceptar" onPress={func} />
          </Modal>
          </View>
  </View>
        <ScrollView style={styles.contenedor}>
            {mas.map(mascota=> <Foto perdida={true} key={mascota.id} nombre={mascota.nombre} sexo={mascota.sexo} image={mascota.imagen} nexts={props.nexts}  raza={mascota.razas} peso={mascota.peso} 
            altura={mascota.altura} edad={mascota.edad_aproximada} detalle={mascota.detalles} id={mascota.id} nav={props.nav} tipob="P/E" num={2}/>)}
        </ScrollView>
        </View>
  );};



const styles = StyleSheet.create({
  parent:{
    flex:1,
  }
});

export default ListaPE;