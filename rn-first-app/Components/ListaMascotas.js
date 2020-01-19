import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Picker, Modal, Button,ScrollView } from 'react-native';

import Foto from "./FotoMasota";
const ListaMascotas = props =>{
    const [mascotas, setMascotas] = useState([{"id":1,"nombre":"jaja","img":"../assets/perro.jpg"},{"id":2,"nombre":"jeje","img":"../assets/perro.jpg"},{"id":3,"nombre":"juju","img":"../assets/perro.jpg"}]);
    
    return (
        <ScrollView style={styles.contenedor}>
            {mascotas.map(mascota=> <Foto key={mascota.id} nombre={mascota.nombre} image={mascota.img}/>)}
        </ScrollView>
        
  );};



const styles = StyleSheet.create({
    
});

export default ListaMascotas;