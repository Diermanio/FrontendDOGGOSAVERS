import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Banner = props =>{
    return (
    <View style={styles.banner}>
        <View  style={styles.circle}>
          <Image style={styles.image}  resizeMode="contain" source={props.ImagenIzq}/>
        </View>
        <View style={styles.title}>
            <Text >{props.titulo}</Text>
        </View>
    </View> 
  );}



const styles = StyleSheet.create({
  banner: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop:20,
    paddingBottom:10,
    backgroundColor: 'red',
  },
  title:{
    paddingTop:20,
  },
  image: {
    width: 40,
    height: 40,
    margin:1,
  },
  circle:{
    borderColor: 'black',
    borderRadius: 50,
    padding:3,
    backgroundColor: 'white',
    borderWidth:2,
  }
});

export default Banner;