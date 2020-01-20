import React from 'react';
import { StyleSheet, Text, View, Picker, Button, Modal, TouchableHighlight } from 'react-native';
import Banner from "./Banner";

class JuegaMascota extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pickerSelection: 'Default value!',
            pickerDisplayed: false
        }
    }

    setPickerValue(newValue) {
        this.setState({
            pickerSelection: newValue
        })

        this.togglePicker();
    }

    togglePicker() {
        this.setState({
            pickerDisplayed: !this.state.pickerDisplayed
        })
    }

    render() {
        const pickerValues = [
            {
                title: 'Te gusta salir mucho',
                value: 'Husky'
            },
            {
                title: 'Sales muy poco de casa',
                value: 'Chihua'
            },
            {
                title: 'Es un promedio',
                value: 'Puddle'
            }
        ]

        return (
            
            <View style={styles.container}>
                <Banner titulo="Trivia" ImagenIzq={require('../assets/peth.png')} ImagenDer={require('../assets/dogwalk.png')} />
                <Text>El perro que necesitas es un: {this.state.pickerSelection}</Text>
                <Button onPress={() => this.togglePicker()} title={"¿Qué tanto te gusta salir de casa?"} />


                <Modal visible={this.state.pickerDisplayed} animationType={"slide"} transparent={true}>
                    <View style={{
                        margin: 20, padding: 20,
                        backgroundColor: '#efefef',
                        bottom: 20,
                        left: 20,
                        right: 20,
                        alignItems: 'center',
                        position: 'absolute'
                    }}>
                        <Text>Escoge una opcion :D</Text>
                        {pickerValues.map((value, index) => {
                            return <TouchableHighlight key={index} onPress={() => this.setPickerValue(value.value)} style={{ paddingTop: 4, paddingBottom: 4 }}>
                                <Text>{value.title}</Text>
                            </TouchableHighlight>
                        })}


                        <TouchableHighlight onPress={() => this.togglePicker()} style={{ paddingTop: 4, paddingBottom: 4 }}>
                            <Text style={{ color: '#999' }}>Cancel</Text>
                        </TouchableHighlight>
                    </View>
                </Modal>
            </View>
    );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});

export default JuegaMascota;