import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Banner from "./Banner";
import MenuOpciones from "./MenuOpciones";
import MenuTitulo from "./MenuTitulo";



  class Menu extends React.Component {

    static navigationOptions = { headerShown: false }

    render() {
      return (
        <View style={styles.container}>
          <Banner ImagenIzq={require('../assets/peth.png')} ImagenDer={require('../assets/dogwalk.png')}/>
        
          <View >
            <Image  style={styles.image} resizeMode="contain" source={require('../assets/peth.png')}/>
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

export default Menu;