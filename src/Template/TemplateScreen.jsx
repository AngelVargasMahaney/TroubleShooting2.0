import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Icon, Image, Menu, Pressable, HamburgerIcon, Box } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { Avatar, MenuItem, OverflowMenu, TopNavigation, TopNavigationAction } from '@ui-kitten/components';

const TemplateScreen = (props) => {
    console.log(props)
    const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 1250,
                useNativeDriver: true
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
    const MenuIcon = (props) => (
        <Icon as={Ionicons} size={5} name='ellipsis-vertical' />
    );


    const LogoutIcon = (props) => (
        <Icon as={Ionicons} size={5} name="log-out-outline" />
    );
    const OcultarIcon = (props) => (
        <Icon as={Ionicons} size={5} name="eye-outline" />
    );
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };
    const renderMenuAction = () => (
        <TopNavigationAction style={{ marginTop: 41 }} icon={MenuIcon} onPress={toggleMenu} />
    );
    const renderOverflowMenuAction = () => (
        <React.Fragment>
            <Avatar
                style={styles.logo}
                shape={"square"}
                size='giant'
                resizeMode="contain"
                source={require('../../assets/logos/Logo_color.png')} />
            <OverflowMenu
                anchor={renderMenuAction}
                visible={menuVisible}
                onBackdropPress={toggleMenu}
            >
                <MenuItem accessoryLeft={LogoutIcon} title='Logout' onPress={() => { showAlert(); }} />
                <MenuItem accessoryLeft={OcultarIcon} title='Ocultar Header' onPress={() => { props.setBotonH(false) }} />
            </OverflowMenu>

        </React.Fragment>
    );
    const renderTitle = (props) => (
        <View style={styles.titleContainer}>
            <Text style={styles.rutOp}>TROUBLESHOOTING</Text>
        </View>
    );

    return (
        <>
            <Animated.View                 // Special animatable View
                style={{
                    flex: 1,
                    flexDirection: "column",

                    opacity: fadeAnim,         // Bind opacity to animated value
                }}
            >
                <TopNavigation
                style={{backgroundColor:'#f0f2f0'}}
                    title={renderTitle}
                    accessoryRight={renderOverflowMenuAction}
                />
            </Animated.View>
            <View style={styles.containerFooter}>
                <Image
                    source={require('../../assets/backgrounds/Colors.png')} alt="Alternate Text" size="xl" />

            </View>

        </>


    )
}

export default TemplateScreen
const styles = StyleSheet.create({

    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        marginTop: 40,
        width: 89,
        height: 50,
    },
    rutOp: {
        color: "rgba(1,40,107,1)",
        // fontFamily: "roboto-700",
        fontSize: 15,
        marginLeft: 25,
        marginTop: 40
    },
});