import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Picker, Modal, Button,ScrollView } from 'react-native';

import Foto from "./FotoMasota";
import { getMascotasPE } from "../Fetchs/MascotasPerdidas";



const ListaMascotas = props =>{
    const [mascotas, setMascotas] = useState([{"id":1,"nombre":"jaja","img":"../assets/perro.jpg"},{"id":2,"nombre":"jeje","img":"../assets/perro.jpg"},{"id":3,"nombre":"juju","img":"../assets/perro.jpg"}]);
    const [mas, setMas] = useState([]);

    useEffect(()=>{
            fetch("http://10.0.2.2:8000/mascotas/mascotas/")
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
        
    console.log(mas);
    return (
        <ScrollView style={styles.contenedor}>
            {mas.map(mascota=> <Foto key={mascota.peso} nombre={mascota.nombre} image={mascota.imagen} nexts={props.nexts}  raza={mascota.razas} peso={mascota.peso} 
            altura={mascota.altura} edad={mascota.edad_aproximada} detalle={mascota.detalles} nav={props.nav}/>)}
        </ScrollView>
        
  );};



const styles = StyleSheet.create({
    
});

export default ListaMascotas;