import React from 'react';
import { StyleSheet, Text, View, Image, Picker } from 'react-native';

import Banner from "./Banner";
import Pref from "./PrefAdop";
import Lista from "./ListaMascotas";

  class AdoptarMascota extends React.Component {

    static navigationOptions = { headerShown: false };
    
    
    render() {
      const infom = () => this.props.navigation.navigate('InfoM');
      return (
        <View style={styles.parent}>
            <Banner titulo="Adoptar Macota" ImagenIzq={require('../assets/peth.png')} ImagenDer={require('../assets/dogwalk.png')} />
            <Pref />
            <Lista nexts={infom} />
        </View>
      );
    }
  }


  const styles = StyleSheet.create({
    parent:{
        flex:1,
    }
    
  });

export default AdoptarMascota;