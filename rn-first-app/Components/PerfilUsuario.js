import * as React from 'react';
import { StyleSheet, Button, View, Text, Image } from 'react-native';
import BannerPerfil from "./BannerPerfil";

class PerfilUsuario extends React.Component {
    static navigationOptions = { headerShown: false };

    render() {
        //const infom = () => this.props.navigation.navigate('InfoM');

        return (
            <View style={styles.parent}>
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
            </View>
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