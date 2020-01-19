import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Titulo = props =>{
    return (
    <View style={styles.banner}>
        <View  >
          <Image style={styles.image}  resizeMode="contain" source={require('../assets/peth.png')}/>
        </View>
        <View>
          <Text style={styles.title}>Selecciona una opción</Text>
        </View>
        <View > 
          <Image style={styles.image}   resizeMode="contain" source={require('../assets/dogwalk.png')}/>
        </View>
    </View> 
  );}



const styles = StyleSheet.create({
  banner: {
    flexDirection: "row",
    justifyContent: 'space-evenly',
    backgroundColor: 'red',
  },
  title:{
    paddingTop:13,
  },
  image: {
    width: 40,
    height: 40,
    margin:5,
  }
});

export default Titulo;