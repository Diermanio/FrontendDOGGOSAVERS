import * as React from 'react';
import { StyleSheet,Button, View, Text } from 'react-native';
import BannerPerfil from "./BannerPerfil";

class PerfilUsuario extends React.Component {
    static navigationOptions = { headerShown: false };
    render() {
        //const infom = () => this.props.navigation.navigate('InfoM');
        return (
          <View style={styles.parent}>
            <BannerPerfil titulo="Adoptar Macota" ImagenIzq={require('../assets/peth.png')}/>
            <View>
                <Image style={styles.image}  resizeMode="contain" source={require('../assets/user.jpg')}/>
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
        margin:1,
      },
    
    });
export default PerfilUsuario;  