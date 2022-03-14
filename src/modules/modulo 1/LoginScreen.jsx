import { StyleSheet, Text, View, useWindowDimensions, ImageBackground, Dimensions, ScrollView, Image, KeyboardAvoidingView, StatusBar } from 'react-native';
import React, { useState } from 'react';
import { Box, Button, FormControl, Icon, Input, NativeBaseProvider, Stack, WarningOutlineIcon } from 'native-base';
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { postLogin } from '../services/loginService';
import { useAuth } from '../context/authState';
import Asyncstorage from "@react-native-async-storage/async-storage"
import AwesomeAlert from 'react-native-awesome-alerts';
import { useNavigation } from '@react-navigation/native';


const image = require('../../assets/backgrounds/Pantalla_login.png')
const logo_blanco = require('../../assets/logos/Logo_blanco.png')

const LoginScreen = () => {

    const [formularioDatos, setFormularioDatos] = useState({
        email: '',
        password: '',
    })
    const [Estado, setEstado] = useState(false);
    const showAlert = () => {
        setEstado(true);
    };
    const hideAlert = () => {
        setEstado(false);
    };

    const { token, setToken } = useAuth()
    const navigation = useNavigation();

    const doLogin = () => {
        postLogin(formularioDatos).then((response) => {
            setToken(response.data.token)
            Asyncstorage.setItem('token', response.data.token).then((response) => {

                showAlert()

            })
        }, err => {
            console.warn(err)
            alert("Usuario no encontrado")
        })
    }


    //loader
    const [visible, setVisible] = useState(false);



    return (

        <ScrollView style={{ flex: 1, backgroundColor: '#02286B' }}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="rgba(200, 200, 200, 0.29)" animated={true} />


            <ImageBackground source={image} style={styles.image}>

                <View style={styles.portadaView}>
                    <Text style={styles.portadaViewText}>
                        RUT-OP
                    </Text>
                    <Text style={styles.portadaViewTextSmall}>
                        Registro de Rutinas Operacionales
                    </Text>
                    <Image source={logo_blanco} style={styles.logo_blanco} />
                </View>

            </ImageBackground>

            {/* Aqui sigue el cuerpo de bienvenida */}
            <View style={styles.bodyContainer}>

                <View style={{ padding: 40 }}>
                    <Text style={{ color: "white", fontSize: 34, fontFamily: 'Roboto', lineHeight: 28.13, paddingTop: 5 }}>
                        Bienvenido
                    </Text>

                    <Text style={{ color: 'white', fontFamily: 'Roboto', fontSize: 14, lineHeight: 16.41 }}>
                        Iniciar Sesión para Continuar
                    </Text>
                    <>
                        <View style={{ marginTop: 50 }}>
                            <FormControl>
                                <Stack space={5}>
                                    <Stack backgroundColor={"#023285"} style={styles.cajasTexto}>
                                        <FormControl.Label _text={{ color: '#669EFF', fontSize: 14 }}>USUARIO</FormControl.Label>
                                        <Input onChangeText={value => setFormularioDatos({ ...formularioDatos, email: value })} fontSize={16} color={'white'} variant="underlined" InputLeftElement={<Icon as={<FontAwesomeIcon name="user" style={styles.iconUser} />} size={2} />} p={2} placeholder="usuarioantapaccay1" />
                                    </Stack>
                                    <Stack backgroundColor={"#023285"} style={styles.cajasTexto}>
                                        <FormControl.Label _text={{ color: '#669EFF', fontSize: 14 }}>CONTRASEÑA</FormControl.Label>
                                        <Input onChangeText={value => setFormularioDatos({ ...formularioDatos, password: value })} fontSize={16} color={'white'} variant="underlined" InputLeftElement={<Icon as={<FontAwesomeIcon name="lock" style={styles.iconUser} />} size={2} />} p={2} placeholder="*******" secureTextEntry={true} />
                                    </Stack>
                                    <Button onPress={() => doLogin()} backgroundColor={'white'} _text={{ color: '#01286B' }}>INGRESAR</Button>
                                </Stack>
                            </FormControl>
                        </View>
                    </>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end', marginRight: 30, marginBottom: 20 }}>
                    <Text style={{ color: "white", textAlign: 'center', fontSize: 11, fontFamily: 'Roboto', lineHeight: 12.89 }}>
                        Versión 1.0
                    </Text>
                </View>
            </View>
            <AwesomeAlert
                show={Estado}
                showProgress={false}
                title="Bienvenido"
                titleStyle={{ fontSize: 22, marginBottom: 10 }}
                messageStyle={{ fontSize: 18, marginBottom: 10 }}
                message="Inicio de Sesión Exitoso"
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showCancelButton={false}
                showConfirmButton={true}
                cancelText="No"
                confirmText="Continuar"
                cancelButtonStyle={{ width: 100, alignItems: 'center', marginTop: 10 }}
                confirmButtonStyle={{ width: 100, alignItems: 'center' }}
                confirmButtonColor="#AEDEF4"
                cancelButtonColor="#DD6B55"
                onConfirmPressed={() => {
                    console.log('Ingresé')
                    navigation.navigate('Home')
                    hideAlert();
                }}
            />
           
        </ScrollView>


    );
};

export default LoginScreen;

const styles = StyleSheet.create({

    lottie: {
        width: 100,
        height: 100,
    },
    cajasTexto: {
        padding: 10
    },
    inputLogin: {
        color: 'red',
    },
    labelsStyle: {
        color: '#669EFF'
    },
    iconUser: {
        color: "white",
        fontSize: 15,
        height: 15,
        width: 19,
        marginLeft: 10
    },
    container: {
        flex: 1,
        backgroundColor: '#01286B'

    },
    portadaView: {
        flex: 1,

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(1, 40, 107, 0.5)',


    },
    logo_blanco: {
        width: 147.61,
        height: 81.78,
        marginTop: 70
    },
    portadaViewText: {
        color: 'white',
        fontSize: 64,
        textAlign: 'center',
    },
    portadaViewTextSmall: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
    image: {
        height: Dimensions.get('window').height / 1.7,
    },
    bodyContainer: {
        flex: 0.5,
        backgroundColor: '#01286B',
    }
});
