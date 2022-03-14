import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Icon, Image, Menu, Pressable, HamburgerIcon, Box } from 'native-base';

const TemplateScreen = () => {

    const [Estado, setEstado] = useState(false);
    const showAlert = () => {
        setEstado(true);
    };
    const hideAlert = () => {
        setEstado(false);
    };
    return (
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
                        <Menu.Item>Cerrar Sesión</Menu.Item>

                    </Menu>

                </View>

            </View>


            <View style={styles.containerFooter}>
                <Image
                    source={require('../../assets/backgrounds/Colors.png')} alt="Alternate Text" size="xl" />

            </View>

        </>


    )
}

export default TemplateScreen
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
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
    },
    containerFooter: {

        flex: 1,
        flexDirection: "column-reverse",
        alignItems: "flex-start",
    }
});