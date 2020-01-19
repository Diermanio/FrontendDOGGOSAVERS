import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Banner from "./Components/Banner";
import MenuOpciones from "./Components/MenuOpciones";
import MenuTitulo from "./Components/MenuTitulo";

export default function App() {
  return (
    <View style={styles.container}>
      <Banner />
    
      <View >
        <Image style={styles.image} resizeMode="contain" source={require('./assets/peth.png')}/>
      </View>

      <View >
        <View >
          <MenuTitulo />
        </View>
        <View >
          <MenuOpciones />
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'space-around',
  },
  image:{
    height: 175,
    width:400,
  }
  
});
