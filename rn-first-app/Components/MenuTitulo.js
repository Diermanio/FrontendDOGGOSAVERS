import React, {useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const Titulo = props => {
  const fetchFonts = () => {
    return Font.loadAsync({
      'Montserrat-Regular': require('../assets/fonts/Montserrat/Montserrat-Regular.ttf'),
      'Awesome': require('../assets/fonts/Awesome.ttf'),
    });
  };
  const [dataLoaded, setDataLoaded] = useState(false);
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)} />
    );
  }
  return (
    <View style={styles.banner}>
      {/* <View  >
          <Image style={styles.image}  resizeMode="contain" source={require('../assets/peth.png')}/>
        </View> */}
      <View>
        <Text style={styles.title}>Selecciona una opción</Text>
      </View>
      {/* <View style={styles.circle} > 
          <Image style={styles.image}   resizeMode="contain" source={require('../assets/profile.png')}/>
        </View> */}
    </View>
  );
}



const styles = StyleSheet.create({
  banner: {
    flexDirection: "row",
    justifyContent: 'space-evenly',
    backgroundColor: '#3700b3',
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 15,
    paddingTop: 10,
    paddingBottom: 10,

  },
  title: {
    // paddingTop:13,
    color: '#ffffff',
    fontFamily: 'Montserrat-Regular',
  },
  image: {
    width: 36,
    height: 36,
    margin: 5,
  },
  circle: {
    borderColor: 'black',
    borderRadius: 50,
    // padding:3,
    backgroundColor: 'white',
    // borderWidth:2,
  },
});

export default Titulo;