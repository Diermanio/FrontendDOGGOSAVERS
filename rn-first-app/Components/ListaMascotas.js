import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Picker, Modal, Button,ScrollView } from 'react-native';

import Foto from "./FotoMasota";
import { getMascotasPE } from "../Fetchs/MascotasPerdidas";



const ListaMascotas = props =>{
    
    const [mas, setMas] = useState([]);
   const url = "http://10.0.2.2:8000/mascotas/mascotas/" + props.arg
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
        
    
    return (
        <ScrollView style={styles.contenedor}>
            {mas.map(mascota=> <Foto key={mascota.id} nombre={mascota.nombre} image={mascota.imagen} nexts={props.nexts}  raza={mascota.razas} peso={mascota.peso} 
            altura={mascota.altura} edad={mascota.edad_aproximada} detalle={mascota.detalles} id={mascota.id} nav={props.nav}/>)}
        </ScrollView>
        
  );};



const styles = StyleSheet.create({
    
});

export default ListaMascotas;