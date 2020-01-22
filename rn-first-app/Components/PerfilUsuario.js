import * as React from 'react';
import { StyleSheet, Button, View, Text, Image, ScrollView } from 'react-native';
import BannerPerfil from "./BannerPerfil";

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
                <BannerPerfil titulo="Perfil" ImagenIzq={require('../assets/peth.png')} />
                <View>
                    <Image style={styles.image} resizeMode="contain" source={require('../assets/user.jpg')} />
                </View>
                <View>
                    <Text style={styles.texto}> Brendan Moore </Text>
                </View>
                <View style={styles.container}>
                    <Image style={styles.imageContainer} resizeMode="contain" source={require('../assets/socialF.png')} ></Image>
                    <Text> Brendan Moore Ferder</Text>
                </View>
                <View style={styles.container}>
                    <Image style={styles.imageContainer} resizeMode="contain" source={require('../assets/socialT.png')}></Image>
                    <Text> @brendadn_moore</Text>
                </View>
                <View style={styles.container}>
                    <Image style={styles.imageContainer} resizeMode="contain" source={require('../assets/socialI.png')}></Image>
                    <Text> @brendanfor</Text>
                </View>
                <Button title="Poner mascota en adopción" onPress={registrar}/>
                <Button title="Lista de mascotas en adopción " onPress={mascotasus}/>
                <Button title="Cerrar Sesion" onPress={logOut}/>
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
});
export default PerfilUsuario;  