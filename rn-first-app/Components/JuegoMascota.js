import React from 'react';
import { StyleSheet, Image,Text, View, Picker, Button, Modal, TouchableHighlight,ScrollView } from 'react-native';
import PerrosPE from "./PerrosPE";
import Banner from "./Banner";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Transitioning } from 'react-native-reanimated';
import Foto from "./FotoMasota";

class JuegaMascota extends React.Component {
    static navigationOptions = { headerShown: false, title: 'Welcome', }

    constructor(props) {
        super(props);
        this.state = {
            puntaje: 0,
            pregunta: 0,
            fin: false
            }
    }

    async siguientePregunta(pr,pun){
       await this.setState({puntaje: this.state.puntaje+ pr[this.state.pregunta][pun]})
        console.log(this.state.puntaje)
        console.log(pr[this.state.pregunta][pun])
        var size = pr.length
         this.componentDidUpdate
        if(this.state.pregunta < size-1){
             await this.setState({
             pregunta: this.state.pregunta + 1,
            })
        }
        else if(this.state.pregunta == size-1){
            this.setState({fin:true})
        }
    }
    
    render() {
        const { params } = this.props.navigation.state;
        const nav= this.props.navigation;
        const preguntas = [
            {
                pregunta:"¿Qué tanto te gusta salir de casa?",
                opcion1:"Frecuentemente",
                puntaje1: 5,
                opcion2:"Pocas veces",
                puntaje2: 3
            },
            {
                pregunta:"¿Comes mucho o poco?",
                opcion1:"Mucho",
                puntaje1: 5,
                opcion2:"Poco",
                puntaje2: 3
            },
            {
                pregunta:"¿En tus dias libres, prefieres salir o descansar en casa?",
                opcion1:"Descanso en casa",
                puntaje1: 5,
                opcion2:"Salgo a pasear",
                puntaje1: 3
            }
        ]
        return (
            
            <ScrollView style={styles.container }>
                <Banner titulo="Tu compañero ideal es..." ImagenIzq={require('../assets/peth.png')} ImagenDer={require('../assets/dogwalk.png')} />
                
                {/* <Text>El perro que necesitas es un: {this.state.pickerSelection}</Text> */}

                <Modal   visible={!this.state.fin} transparent={true}>
                    <Banner titulo="Comencemos con la trivia" ImagenIzq={require('../assets/peth.png')} ImagenDer={require('../assets/dogwalk.png')} />
                        <View style={styles.quiz_container}>
                            <View >
                                <Text  style={styles.texto}>{preguntas[this.state.pregunta]["pregunta"]}</Text> 
                            </View>
                            <View style={styles.respuestas}>
                                {<Button style={styles.botones} onPress={() =>  this.siguientePregunta(preguntas,"puntaje1")}  title={preguntas[this.state.pregunta]["opcion1"]}/>}
                            </View> 
                            <View style={styles.respuestas}>
                                { <Button  style={styles.botones} onPress={() => this.siguientePregunta(preguntas,"puntaje2")} title={preguntas[this.state.pregunta]["opcion2"]}/>}
                            </View>
                        </View>
                 </Modal>
                 <View>
                    <Image  style={styles.image} resizeMode="contain" source={require("../assets/perro.jpg")}/>
                    <Text style={{textAlign:"center"}}>Juancho</Text>
                </View>
            </ScrollView>
    );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    quiz_container: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      flex: 1
    },
    respuestas: {
        marginTop:20,
        backgroundColor: '#f2f',

    },
    texto: {
        fontSize:20,
        textAlign:"center"
    },
});

export default JuegaMascota;