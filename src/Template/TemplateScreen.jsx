import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { PixelRatio } from 'react-native';
import { Icon, Image } from 'native-base';

const TemplateScreen = () => {


    const [menuVisible, setMenuVisible] = React.useState(false);
    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    // const renderMenuAction = () => (
    //     <TopNavigationAction style={{ marginTop: 41 }} icon={MenuIcon} onPress={toggleMenu} />
    // );


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
                        source={require('../../assets/logos/Logo_Antapaccay.png')} alt="Alternate Text" size="sm" resizeMode="cover" />
                    <Icon as={Ionicons} style={styles.icon} name="ellipsis-vertical" />
                </View>
            </View>
            <View style={styles.containerFooter}>
                <Image
                    source={require('../../assets/backgrounds/Colors.png')} alt="Alternate Text" size="xl"  />

            </View>
        </>


    )
}

export default TemplateScreen
const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    containerLogo: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 20
    },
    titleContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    icon: {
        marginTop: 40,
    },
    logo: {
        marginTop: 40,
        width: 89,
        height: 50,
    },
    Title: {
        color: "rgba(1,40,107,1)",
        // fontFamily: "roboto-700",
        fontSize: 20,
        marginLeft: 20,
        marginTop: 40
    },
    containerFooter: {

        flex: 1,
        flexDirection: "column-reverse",
        alignItems: "flex-start",
    }
});