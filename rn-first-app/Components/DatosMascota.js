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
    const lop=props.key;
    const list=[];
    list[0]=currentRaza;

    const url= "http://10.0.2.2:8000/mascotas/mascotas/?tipo=ID&tipo_mascota="+currentTipo+"&nombre="+currentNombre+"&sexo="+currentSexo+"&altura="+currentAltura+"&peso="+currentPeso+"&edad="+currentEdad+"&detalles="+ currentDetalle
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
        key: props.rkey,
      });};



    const fadop1= async () => await fetch('http://10.0.2.2:8000/mascotas/mascotas/', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            tipo_mascota: currentTipo,
            nombre: currentNombre,
            sexo: currentSexo,
            altura: currentAltura,
            peso: currentPeso,
            edad_aproximada: currentEdad,
            imagen: "http://asdad.jpg",
            detalles: currentDetalle,
            razas: list,
            
          }),
        }).catch( error => {
            console.error(error);
          }); 

    const fadop2= async () => await fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
              return responseJson;
            })
            .then( masco  => {
              console.log("la id");
              console.log(masco[0].id);
              return masco[0].id;
            })
            .catch( error => {
              console.error(error);
            })

    const fadop3 = async (id) => await  fetch('http://10.0.2.2:8000/mascotas/mascotasadopcion/', {
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    id_mascota: id,
                    id_user: global.datos[0].id,
                    puntaje_juego:"23"
                  }),
                }).catch( error => {
                    console.log(error);
                  }); 

     const func3= async () =>{
              await fadop1();
              const id=await fadop2();
              await fadop3(id);
              props.gback.popToTop();
                console.log("Proceso de adopcion")
            }  
        
      const ver=()=>{
        
              if(props.tipoP=="Reportar"){
                  func2();
              }else{
                func3();
              }
        
            };

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
            
            <Button title="Aceptar" onPress={ ver}/>
  
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