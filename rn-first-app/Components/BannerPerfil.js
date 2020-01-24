import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Banner = props =>{
    return (
    <View style={styles.banner}>
        <View style={styles.title}>
            <Text style={styles.title}>{props.titulo}</Text>
        </View>
    </View> 
  );}



const styles = StyleSheet.create({
  banner: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop:20,
    paddingBottom:20,
    backgroundColor: '#6200ee',
  },
  title:{
    paddingTop:20,
    color: '#ffffff',
    alignContent:'flex-start',
    fontFamily: 'Awesome',
    fontSize: 30,
  },
  image: {
    width: 40,
    height: 40,
    margin:2,
    justifyContent:'flex-end',
    
  },
  circle:{
    borderColor: 'black',
    borderRadius: 50,
    padding:3,
    backgroundColor: 'white',
    borderWidth:2,
    marginTop: 4,
  },
    text:{
    textAlign: "center",
    fontFamily: "Awesome",
    
}
});

export default Banner;