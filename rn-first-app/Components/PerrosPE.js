import React from 'react';
import { StyleSheet, Text, View, Image, Picker } from 'react-native';

import Banner from "./Banner";


  class PerrosEP extends React.Component {

    static navigationOptions = { headerShown: false };
    state = {language: ''}
    
    render() {
      return (
        <View>
            <Banner ImagenIzq={require('../assets/peth.png')} ImagenDer={require('../assets/dogwalk.png')} />
            <View style={styles.pref}>
                <Text>Preferencias</Text>
                <Text>-</Text>
            </View>
            <Picker
                selectedValue={this.state.language}
                style={{height: 50, width: 400}}
                onValueChange={(itemValue, itemIndex) =>
                    this.setState({language: itemValue})
                }>
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
            </Picker>
        </View>
      );
    }
  }


  const styles = StyleSheet.create({
    pref:{
        flexDirection: "row",
        justifyContent: "space-evenly"
    }
    
  });

export default PerrosEP;