import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TemplateScreen from '../../Template/TemplateScreen'
import { Box, Divider, HStack, Image, InfoIcon, Pressable, VStack } from 'native-base'
import { useNavigation } from '@react-navigation/native'

const Screen1 = () => {
    const navigation = useNavigation();

    return (
        <>
            <TemplateScreen />
            <View style={styles.container}>
                <Text>Elija alguna de estas opciones</Text>

                <Box bg="rgba(255,255,255,0.7)" borderRadius="5" rounded="md"
                    style={[{ marginTop: 30 }, styles.shadows]}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 3, borderRightWidth: 1, borderColor: '#DADADA' }}>
                            <Pressable onPress={() => { navigation.navigate('Add') }}>
                                <Image source={
                                    require('../../../assets/icons/add.png')
                                } alt="Añadir un Reporte" height="70" width="70" style={{ marginVertical: 15, marginHorizontal: 3 }} />
                            </Pressable>
                        </View>
                        <View style={{ marginVertical: 10, marginHorizontal: 5, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ maxWidth: 170, textAlign: 'justify', marginHorizontal: 15 }}>Si desea generar un reporte, presione la imagen de la izquierda.</Text>
                        </View>

                    </View>
                </Box>
                <Box bg="rgba(255,255,255,0.7)" borderRadius="5" rounded="md"
                    style={[{ marginTop: 30 }, styles.shadows]}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 3, borderRightWidth: 1, borderColor: '#DADADA' }}>
                            <Pressable onPress={() => { navigation.navigate('List') }}>
                                <Image source={
                                    require('../../../assets/icons/list.png')
                                } alt="Añadir un Reporte" height="70" width="70" style={{ marginVertical: 5, marginHorizontal: 3 }} />
                            </Pressable>
                        </View>
                        <View style={{ marginVertical: 10, marginHorizontal: 5, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ maxWidth: 170, textAlign: 'justify', marginHorizontal: 15 }}>Si desea obtener la lista de reportes generados, presione la imagen de la izquierda.</Text>
                        </View>

                    </View>
                </Box>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end', marginTop: 50, marginRight:10 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ textAlign: 'center', fontSize: 14, justifyContent: 'center', alignItems: 'center', marginRight: 7 }}>
                            ¿Necesitas ayuda?
                        </Text>
                        <Pressable onPress={() => { console.log('INFO BUTTON') }}>
                            <InfoIcon size="5" color="#01286B" />
                        </Pressable>
                    </View>
                </View>
            </View>

        </>

    )
}

export default Screen1

const styles = StyleSheet.create({

    container: {
        position: 'absolute',
        marginTop: 130,
        marginHorizontal: 20,

    },
    shadows: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
})