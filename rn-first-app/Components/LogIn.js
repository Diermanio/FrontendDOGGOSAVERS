import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

import Log from "./DatosLogIn";

  class LogIn extends React.Component {

    static navigationOptions = { headerShown: false, title: 'Welcome', }
    
    render() {
        const back=() => this.props.navigation.popToTop();

      return (
        <Log gback={back}/>
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

export default LogIn;