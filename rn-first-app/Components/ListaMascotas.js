import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Picker, Modal, Button,ScrollView } from 'react-native';

import Foto from "./FotoMasota";
const ListaMascotas = props =>{
    
    return (
        <ScrollView style={styles.contenedor}>
            <Foto />
            <Foto />

        </ScrollView>
        
        
  );};



const styles = StyleSheet.create({
    
});

export default ListaMascotas;