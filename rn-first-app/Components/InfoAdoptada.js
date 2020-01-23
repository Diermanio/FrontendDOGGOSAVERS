import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Picker, TextInput, Button, ShadowPropTypesIOS } from 'react-native';
import DatePicker from 'react-native-datepicker';
import MenuOpcion from "./MenuOpcion";
import DateTimePicker from '@react-native-community/datetimepicker';
const InfoAdoptada = props =>{
    const [currentUs, setCurrentUs] = useState(0);
    const [currentDate, setCurrentDate] = useState("");
    const [currentDetalle, setCurrentDetalle] = useState("");
    const [currentDireccion, setCurrentDireccion] = useState("");
    const [currentImage, setCurrentImage] = useState("../assets/default.png");


    const [currentluS, setCurrentLUs] = useState([]);


    useEffect(()=>{
        fetch("http://10.0.2.2:8000/usuarios/usuario/?tipo=ADOPTADA&id="+global.datos[0].id)
        .then((response) => response.json())
        .then((responseJson) => {
          return responseJson;
        })
        .then( masco  => {
          setCurrentLUs(masco);
        })
        .catch( error => {
          console.error(error);
        });

      } , []);

      const f3= async (id) => await  fetch('http://10.0.2.2:8000/mascotas/mascota_adoptada/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id_mascota: props.idMascota,
          id_user: currentUs,
          fecha:currentDate,
          detalle:currentDetalle,
          
        }),
      }).catch( error => {
          console.log(error);
        }); 

        const func=()=>{
          f3();
          props.nav.popToTop();
        }
        
    return (
        <View style={styles.parent}>
            <Text>Usario que adopto</Text>
            <Picker
                        selectedValue={currentUs}
                        style={{height: 50, width: 400}}
                        onValueChange={(itemValue, itemIndex) =>
                            setCurrentUs(itemValue)
                        }>
                        {currentluS.map(us => <Picker.Item Key={us.id} label={us.username} value={us.id} />)}
                        
            </Picker>
            <DatePicker
                  style={{width: 200}}
                  date={currentDate}
                  mode="date"
                  placeholder="select date"
                  format="YYYY-MM-DD"
                  minDate="2020-05-01"
                  maxDate="2025-06-01"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                    dateIcon: {
                      position: 'absolute',
                      left: 0,
                      top: 4,
                      marginLeft: 0
                    },
                    dateInput: {
                      marginLeft: 36
                    }
                    // ... You can check the source to find the other keys.
                  }}
                  onDateChange={(date) => {setCurrentDate(date)}}
                />


            <Text>Detalles</Text>
            <TextInput onChangeText={(nombre) => setCurrentDetalle(nombre)} />
            <Button title="Aceptar" onPress={func}/>
      </View>
  );}



const styles = StyleSheet.create({
    fila:{
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    image: {
      width: 40,
      height: 40,
    }
});

export default InfoAdoptada;