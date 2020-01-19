import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Banner from "./Banner";
import MenuOpciones from "./MenuOpciones";
import MenuTitulo from "./MenuTitulo";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


  class Menu extends React.Component {

    static navigationOptions = { headerShown: false, title: 'Welcome', }

    render() {
      const macotasp_e = () => this.props.navigation.navigate('PerrosP_E');
      const adoptar = () => this.props.navigation.navigate('Adop');
      const reportar = () => this.props.navigation.navigate('Rep');
      return (
        <View style={styles.container}>
          <Banner titulo="Bienvenido a DOGGOSAVERS" ImagenIzq={require('../assets/peth.png')} ImagenDer={require('../assets/dogwalk.png')}/>
        
          <View  >
            <Image  style={styles.image} resizeMode="contain" source={require('../assets/peth.png')}/>
          </View>
    
          <View >
            <View >
              <MenuTitulo />
            </View>
            <View >
              <MenuOpciones ppe={macotasp_e} adop={adoptar} rep={reportar} />
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