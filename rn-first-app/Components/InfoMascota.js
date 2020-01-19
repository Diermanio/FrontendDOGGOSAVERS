import React from 'react';
import { StyleSheet, Text, View, Image, Picker, ScrollView } from 'react-native';

import Banner from "./Banner";

  class PerrosEP extends React.Component {

    static navigationOptions = { headerShown: false };
    
    
    render() {
        
      return (
        <ScrollView style={styles.parent}>
            <Banner titulo="Toby" ImagenIzq={require('../assets/peth.png')} ImagenDer={require('../assets/dogwalk.png')} />
            <View  style={styles.bloque3}>
                <Image  style={styles.image} resizeMode="contain" source={require("../assets/perro.jpg")}/>
            </View>
            <View style={styles.bloque2}>
                <Text>Historia</Text>
                <View>
                    <Text style={styles.caja}>Se murio :,v</Text>
                </View>
            </View>
            <View style={styles.fila}>
                <View style={styles.bloque}>
                    <Text>Raza</Text>
                    <Text style={styles.caja}>Husky</Text>
                </View>
                <View style={styles.bloque}>
                    <Text>Peso</Text>
                    <Text style={styles.caja}>24 Kg</Text>
                </View>
            </View>
            <View style={styles.fila}>
                <View style={styles.bloque}>
                    <Text>Altura</Text>
                    <Text style={styles.caja}>53 cm</Text>
                </View>
                <View style={styles.bloque}>
                    <Text>Edad</Text>
                    <Text style={styles.caja}>5 años</Text>
                </View >
            </View>
            <View style={styles.fila}>
               <View style={styles.bloque}>
                    <Text>Dueño</Text>
                    <Text style={styles.caja}>Carlos</Text>
                </View>
            </View>
        </ScrollView>
      );
    }
  }


  const styles = StyleSheet.create({
    parent:{
        flex:1,
    },
    image: {
        width: 200,
        height: 200,
        margin:5,
      },fila:{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: 'stretch',
        backgroundColor: 'blue'
      },bloque:{
        justifyContent: "space-evenly",
        alignItems: "center",
        width: 100,
        height: 100,
      },bloque2:{
        justifyContent: "space-evenly",
        alignItems:"center",
        width: 150,
        height: 150,
        marginLeft: 130,
      },caja:{
        borderColor: 'black',
        borderRadius: 50,
        padding:10,
        backgroundColor: 'white',
        borderWidth:2,
      },bloque3:{
        justifyContent: "space-evenly",
        alignItems:"center",
      }
    
  });

export default PerrosEP;