import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Icon, Image, Menu, Pressable, HamburgerIcon, Box } from 'native-base';

const TemplateScreen = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 1250,
            }
        ).start();
    }, [fadeAnim])

    const [Estado, setEstado] = useState(false);
    const showAlert = () => {
        setEstado(true);
    };
    const hideAlert = () => {
        setEstado(false);
    };
    const cerrarSesion = async () => {
        try {
            await AsyncStorage.removeItem('token')
            navigation.navigate('Login')
        } catch (e) {
            // console.log(e)
        }

        // console.log('Done.')
    }
    return (
        <>
            <Animated.View                 // Special animatable View
                style={{
                    flex: 1,
                    flexDirection: "column",
                    alignItems: "flex-start",
                    opacity: fadeAnim,         // Bind opacity to animated value
                }}
            >
                <>
                    <View style={styles.container}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.Title}>TROUBLESHOOTING</Text>
                        </View>
                        <View style={styles.containerLogo}>
                            <Image style={styles.logo}
                                source={require('../../assets/logos/Logo_Antapaccay.png')}
                                alt="Alternate Text"
                                size="sm"
                                resizeMode="cover"
                            />

                            <Menu shadow={2} w="190" trigger={triggerProps => {
                                return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
                                    <Icon as={Ionicons} style={styles.icon} name="ellipsis-vertical" />
                                    {/* <HamburgerIcon /> */}
                                </Pressable>;
                            }}>
                                <Menu.Item style={{paddingLeft:40}} onPress={() => cerrarSesion()} >Cerrar Sesión <Icon size={7} style={{position: 'absolute', marginLeft:5, marginTop:4}} as={Ionicons} name="log-out-outline" /></Menu.Item>
                                <Menu.Item style={{paddingLeft:40}} onPress={() => props.setBotonH(false)}> Ocultar Header <Icon size={7} style={{position: 'absolute', marginLeft:5, marginTop:5}} as={Ionicons} name="eye-off-outline" /></Menu.Item>

                            </Menu>

                        </View>

                    </View>

                    <View style={styles.containerFooter}>
                        <Image
                            source={require('../../assets/backgrounds/Colors.png')} alt="Alternate Text" size="xl" />

                    </View>

                </>
            </Animated.View>


        </>


    )
}

export default TemplateScreen
const styles = StyleSheet.create({
    containerFooter: {

        flex: 1,
        flexDirection: "column-reverse",
        alignItems: "flex-start",
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    containerLogo: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    titleContainer: {
        alignItems: 'center',
    },
    icon: {
        marginTop: 30,
        fontSize: 20,
        color: 'rgba(1,40,107,1)'
    },
    logo: {
        marginTop: 20,
        width: 89,
        height: 50,
    },
    Title: {
        color: "rgba(1,40,107,1)",
        // fontFamily: "roboto-700",
        fontSize: 18,
        marginLeft: 20,
        marginTop: 30
    }
});