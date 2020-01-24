import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Picker, Modal, Button,ScrollView } from 'react-native';



const CartaMasURep = props =>{
    
    const [mas, setMas] = useState([]);
    const [masADOP, setMasADOP] = useState([]);
    const [masNOADOP, setMasNOADOP] = useState([]);
    const [cont, setCont] = useState(0);
   
    const r= {1:{raza:"French"},2:{raza:"Pug"}}
    const s= {"M":{sexo:"Macho"},"H":{sexo:"Hembra"}}


    const update = () =>{fetch('http://10.0.2.2:8000/mascotas/mascota_perdida_encontrada/' + mas[0].id+"/", {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id_user:mas[0].id_user,
          id_mascota:mas[0].id_mascota,
          sector_encuentro_perdida:mas[0].sector_encuentro_perdida,
          detalle:mas[0].detalle,
          estado_mascota: "CO",
          
        }),
      }).catch( error => {
          console.error(error);
        }); props.nav.popToTop(); };

   const f2= async () => await fetch("http://10.0.2.2:8000/mascotas/mascota_perdida_encontrada/?tipo=IDM&idMascota="+props.idM)
            .then((response) => response.json())
            .then((responseJson) => {
              return responseJson;
            })
            .then( masco  => {
              return masco;
            })
            .catch( error => {
              console.error(error);
            })

    const ver = async()=>{
      
       const masco= await f2();
       setMas(masco)
       console.log("yeah baby")
       console.log(masco)
       if(masco[0].estado_mascota!="CO"){
         console.log("la mascota no esta completada")
         setMasNOADOP([1])
         
       }else{
          console.log("la mascota esta reportada")
          setMasADOP([1])
       }
       
    };
    if(cont==0){
        ver();
        setCont(1);
    }
    return (
        <View>
        <View style={styles.bloque2}>
                <Text>Historia</Text>
                <View>
                    <Text style={styles.caja}>{props.detalle}</Text>
                </View>
            </View>
            <View style={styles.fila}>
                <View style={styles.bloque}>
                    <Text>Raza</Text>
                    <Text style={styles.caja}>{r[props.raza[0]].raza}</Text>
                </View>
                <View style={styles.bloque}>
                    <Text>Peso</Text>
                    <Text style={styles.caja}>{props.peso}</Text>
                </View>
            </View>
            <View style={styles.fila}>
                <View style={styles.bloque}>
                    <Text>Altura</Text>
                    <Text style={styles.caja}>{props.altura}</Text>
                </View>
                <View style={styles.bloque}>
                    <Text>Edad</Text>
                    <Text style={styles.caja}>{props.edad}</Text>
                </View >
            </View>
            <View style={styles.fila}>
               <View style={styles.bloque}>
                    <Text>Sexo</Text>
                     <Text style={styles.caja}>{s[props.sexo].sexo}</Text>
                </View>
            </View>
            {masNOADOP.map(masc => (
                  <View style={styles.fila}>
                  <View style={styles.bloque}>
                       <Text>Sector</Text>
                       <Text style={styles.caja}> {mas[0].sector_encuentro_perdida}</Text>
                   </View>
                   <View style={styles.bloque}>
                       <Text style={{textAlign:"center"}}>Informacion Adicional</Text>
                       <Text style={styles.caja}> {mas[0].detalle}</Text>
                   </View>
               </View>)
             )}
             {masADOP.map(masc => 
                   (<View style={styles.fila}>
                   <View style={styles.bloque}>
                        <Text>Sector</Text>
                        <Text style={styles.caja}> {mas[0].sector_encuentro_perdida}</Text>
                    </View>
                    <View style={styles.bloque}>
                        <Text style={{textAlign:"center"}}>Informacion Adicional</Text>
                        <Text style={styles.caja}> {mas[0].detalle}</Text>
                    </View>
                </View>)
             )}
            <View style={styles.fila}>
               <View style={styles.bloque}>
                    <Text>Dueño</Text>
                     <Text style={styles.caja}>{global.datos[0].username}</Text>
                </View>
            </View>
            <View style={styles.fila}>
             {masNOADOP.map(masc => <View style={styles.bloque}>
                   <Button title="Reportar como devuelta a su dueño" onPress={update} />
             </View>)}
             {masADOP.map(masc => <View style={styles.bloque}>
                   <Text>La mascota ya fue devuelta a su dueño</Text>
             </View>)}
            </View>
            
            </View>
  );};



const styles = StyleSheet.create({
    parent:{
        flex:1,
    },
    image: {
        width: 200,
        height: 200,
        margin:5,
      },fila:{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: 'stretch',
        backgroundColor: 'blue'
      },bloque:{
        justifyContent: "space-evenly",
        alignItems: "center",
        width: 100,
        height: 100,
      },bloque2:{
        justifyContent: "space-evenly",
        alignItems:"center",
        width: 150,
        height: 150,
        marginLeft: 130,
      },caja:{
        borderColor: 'black',
        borderRadius: 50,
        padding:10,
        backgroundColor: 'white',
        borderWidth:2,
      },bloque3:{
        justifyContent: "space-evenly",
        alignItems:"center",
      }
    
});

export default CartaMasURep;