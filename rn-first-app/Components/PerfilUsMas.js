import * as React from 'react';
import { StyleSheet, Button, View, Text, Image, ScrollView } from 'react-native';
import BannerPerfil from "./BannerPerfil";
import Datos from "./DatosPerfil";
import DatosPerfil from './DatosPerfil';

class PerfilUsMas extends React.Component {
    static navigationOptions = { headerShown: false };

    render() {
        //const infom = () => this.props.navigation.navigate('InfoM');
        const { params } = this.props.navigation.state;
        console.log("persona");
        console.log(params.persona);
        return (
            <ScrollView style={styles.parent}>
                <BannerPerfil titulo={params.username} ImagenIzq={require('../assets/peth.png')} />
                <DatosPerfil id={params.persona}/>
                
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
export default PerfilUsMas;  