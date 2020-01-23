import React, { useState, useEffect }  from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, TextInput, Button, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Keyboard} from 'react-native';



const Banner = props =>{

    

    const [currentUser, setCurrentUser] = useState("");
    const [currentPass, setCurrentPass] = useState("");

        

    const f2= async () => await fetch("http://10.0.2.2:8000/usuarios/usuario/?tipo=LOG&user="+ currentUser+"&pass="+ currentPass+"")
            .then((response) => response.json())
            .then((responseJson) => {
              return responseJson;
            })
            .then( masco  => {
              
              return masco[0];
            })
            .catch( error => {
              console.error(error);
            })

    const ver= async ()=>{
        const res= await f2();
        console.log(res);
        if(res!=null){
          global.datos[0]=res;
        }
        console.log("yaaa")
        console.log(global.datos);
        
        props.gback();
    }

    return (
        // <View style={styles.container}>
        //   <Text>LOG IN</Text>
        //   <Text>Usuario:</Text>
        //   <TextInput onChangeText={(nombre) => setCurrentUser(nombre)} />
        //   <Text>Contraseña:</Text>          
        //   <TextInput onChangeText={(nombre) => setCurrentPass(nombre)} />
        //   <Button title="Ingresar" onPress={ver}/>
        // </View>
        <KeyboardAvoidingView style={styles.containerView} behavior="padding">

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
          <Text style={styles.logoText}>Instamobile</Text>
            <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} onChangeText={(nombre) => setCurrentUser(nombre)} />
            <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} onChangeText={(nombre) => setCurrentPass(nombre)} secureTextEntry={true}/>
            <Button
              buttonStyle={styles.loginButton}
              onPress={ver}
              title="Login" 
            />
            {/* <Button
              buttonStyle={styles.fbLoginButton}
              onPress={() => this.onFbLoginPress()}
              title="Login with Facebook"
              color="#3897f1"
            /> */}
          </View>
        </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

  );}



const styles = StyleSheet.create({
  containerView: {
    flex: 1,
  },
  loginScreenContainer: {
    flex: 1,
  },
  logoText: {
    fontSize: 40,
    fontWeight: "800",
    marginTop: 150,
    marginBottom: 30,
    textAlign: 'center',
  },
  loginFormView: {
    flex: 1
  },
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
  
  },
  loginButton: {
    backgroundColor: '#3897f1',
    borderRadius: 5,
    height: 45,
    marginTop: 10,
  },
  fbLoginButton: {
    height: 45,
    marginTop: 10,
    backgroundColor: 'transparent',
  },
  banner: {
    flexDirection: "row",
    justifyContent: 'space-evenly',
    paddingTop:20,
    paddingBottom:10,
    backgroundColor: 'red',
  },
  title:{
    paddingTop:20,
  },
  image: {
    width: 40,
    height: 40,
    margin:3,
  },
  circle:{
    borderColor: 'black',
    borderRadius: 50,
    padding:3,
    backgroundColor: 'white',
    borderWidth:2,
  }
});

export default Banner;