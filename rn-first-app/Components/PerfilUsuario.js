import * as React from 'react';
import { StyleSheet, Button, View, Text, Image, ScrollView } from 'react-native';
import BannerPerfil from "./BannerPerfil";
import Datos from "./DatosPerfil";
class PerfilUsuario extends React.Component {
    static navigationOptions = { headerShown: false };

    

    render() {
        //const infom = () => this.props.navigation.navigate('InfoM');
        const registrar = () => this.props.navigation.navigate('Reg',{
            key:this.props.navigation.state.key,
            tipoP: "Adopcion"
          });
        const logOut=() =>{
            global.datos.pop();
            this.props.navigation.popToTop();
        }

        const mascotasus = () => this.props.navigation.navigate('MUs');

      
        return (
            <ScrollView style={styles.parent}>
                <BannerPerfil titulo={global.datos[0].username} ImagenIzq={require('../assets/peth.png')} />
                <Datos id={global.datos[0].persona}/>
                <View >
                    <Button style={styles.botones} title="Poner mascota en adopción" onPress={registrar}/>
                    <Button style={styles.botones} title="Lista de mascotas en adopción " onPress={mascotasus}/>
                    <Button style={styles.botones} title="Cerrar Sesion" onPress={logOut}/>
                </View>
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    parent: {
        flex: 1,
    },
    image: {
        width: 300,
        height: 200,
        margin: 1,
    },
    imageContainer: {
        width: 40,
        height: 40,
        margin: 1,
    },
    circle: {
        borderColor: 'black',
        borderRadius: 50,
        padding: 3,
        backgroundColor: 'white',
        borderWidth: 2,
    },
    container: {
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'space-around',
    },
    botones:{
        marginTop:10,
    }
});
export default PerfilUsuario;  