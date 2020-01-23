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
    marginRight:10,
    marginLeft: 10,
    borderRadius: 20,
    marginTop: 5,
    marginBottom: 5,

  },
  title:{
    paddingTop:13,
  },
  image: {
    width: 36,
    height: 36,
    margin:5,
  }
});

export default Titulo;