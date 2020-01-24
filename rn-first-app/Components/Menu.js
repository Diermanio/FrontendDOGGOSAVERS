import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Banner from "./Banner";
import MenuOpciones from "./MenuOpciones";
import MenuTitulo from "./MenuTitulo";
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';



  class Menu extends React.Component {

    static navigationOptions = { headerShown: false, title: 'Welcome', }
    
    render() {
      const macotasp_e = () => this.props.navigation.navigate('PerrosP_E');
      const adoptar = () => this.props.navigation.navigate('Adop');
      const reportar = () => this.props.navigation.navigate('Reg',{
        key:this.props.navigation.state.key,
        tipoP: "Reportar",
      });
      const perfil=() => this.props.navigation.navigate('Perfil');
      const mascotagame=() => this.props.navigation.navigate('Game');

      const log=() =>{

        if(global.datos.length!=0){
          this.props.navigation.navigate('Perfil');
        }else{
          this.props.navigation.navigate('LogIn');
        }

      }
      const fetchFonts = () => {
        return Font.loadAsync({
        'Montserrat-Regular': require('../assets/fonts/Montserrat/Montserrat-Regular.ttf'),
        
        });
        };

      
        // const[dataLoaded, setDataLoaded]= useState(false);
        // if(!dataLoaded){
        //   return(
        //     <AppLoading
        //       startAsync={fetchFonts}
        //       onFinish={() => setDataLoaded(true)}/>
        //   );
        // }

        

      return (
        <View style={styles.container}>
          <Banner titulo="Doggo Savers" ImagenDer={require('../assets/profile.png')} per={log} />
          {/* ImagenIzq={require('../assets/peth.png')}  */}
          <View  >
            <Image  style={styles.image} resizeMode="contain" source={require('../assets/peth.png')}/>
          </View>
    
          <View >
            <View >
              <MenuTitulo />
            </View>
            <View >
              <MenuOpciones ppe={macotasp_e} adop={adoptar} rep={reportar} game={mascotagame} />
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
    },
    text:{
      textAlign: "center",
      fontFamily: "Montserrat-Regular",
  }
  });

export default Menu;