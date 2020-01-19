import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Navigator from "./Components/Navigator"
import Menu from "./Components/Menu";
export default function App() {
  return (
    <Navigator />
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
