import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';

const Banner = props =>{

  const fetchFonts = () => {
    return Font.loadAsync({
    'Awesome': require('../assets/fonts/Awesome.ttf'),
    
    });
    };
  const[dataLoaded, setDataLoaded]= useState(false);
        if(!dataLoaded){
          return(
            <AppLoading
              startAsync={fetchFonts}
              onFinish={() => setDataLoaded(true)}/>
          );
        }

    return (
    <View style={styles.banner}>
        {/* <View  style={styles.circle}>
          <Image style={styles.image}  resizeMode="contain" source={props.ImagenIzq}/>
        </View> */}
        <View>
            <Text style={styles.title}>{props.titulo}</Text>
        </View>
        <TouchableHighlight onPress={props.per}>
        <View style={styles.circle} onPress={props.per}> 
          <Image  style={styles.image}   resizeMode="contain" source={props.ImagenDer}/>
        </View>
        </TouchableHighlight>
    </View> 
  );}



const styles = StyleSheet.create({
  banner: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop:20,
    paddingBottom:10,
    backgroundColor: '#6200ee',
  },
  title:{
    paddingTop:20,
    color: '#ffffff',
    alignContent:'flex-start',
    fontFamily: 'Awesome',
    fontSize: 30,
    marginLeft: 20,
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