import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import TemplateScreen from '../../Template/TemplateScreen'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { FormControl, Input, VStack, Button, Pressable, Icon, Image } from 'native-base';
import TemplateScreenNoHeader from '../../Template/TemplateScreenNoHeader';
import { Ionicons } from '@expo/vector-icons';

const AddReporte = () => {
    const [formData, setData] = useState({});
    const [botonH, setBotonH] = useState(false);
    return (
        <>

            {
                botonH ? <TemplateScreen setBotonH={setBotonH} /> : <TemplateScreenNoHeader setBotonH={setBotonH} />
            }

            <View style={[styles.container, botonH ? { marginTop: 130 } : { marginTop: 90 }]}>
                <View style={{ marginTop: -55 }}>
                    <ProgressSteps marginBottom={32} borderWidth={3} >
                        <ProgressStep nextBtnText='Siguiente' nextBtnTextStyle={{ color: '#FFFFFF', margin: 5 }} nextBtnStyle={{ backgroundColor: '#01286B', borderRadius: 7 }}>
                            <View style={[{ alignItems: 'center', marginBottom: 35 }, styles.shadows]}>
                                <View style={{ borderBottomWidth: 1, borderColor: '#ED8512', width: '100%' }}>
                                    <Text style={{ textAlign: 'center', color: '#01286B' }}>REGISTRO DE INCIDENTES</Text>
                                </View>
                                <VStack width="100%" mx="3" maxW="300px" my="4">
                                    <FormControl>
                                        <FormControl.Label _text={{
                                            bold: true
                                        }}>Fecha y Hora</FormControl.Label>
                                        <Input placeholder="John" onChangeText={value => setData({
                                            ...formData,
                                            name: value
                                        })} />

                                        <FormControl.ErrorMessage _text={{
                                            fontSize: 'xs'
                                        }}>
                                            Error Name
                                        </FormControl.ErrorMessage>


                                        <FormControl.Label _text={{
                                            bold: true
                                        }}>Superintendente</FormControl.Label>
                                        <Input placeholder="John" onChangeText={value => setData({
                                            ...formData,
                                            name: value
                                        })} />

                                        <FormControl.Label _text={{
                                            bold: true
                                        }}>Supervisor</FormControl.Label>
                                        <Input placeholder="John" onChangeText={value => setData({
                                            ...formData,
                                            name: value
                                        })} />
                                        <FormControl.Label _text={{
                                            bold: true
                                        }}>Operarios</FormControl.Label>
                                        <Input placeholder="John" onChangeText={value => setData({
                                            ...formData,
                                            name: value
                                        })} />
                                    </FormControl>
                                </VStack>


                            </View>
                        </ProgressStep>

                        <ProgressStep nextBtnText='Siguiente' previousBtnText='Anterior' nextBtnTextStyle={{ color: '#FFFFFF', margin: 5 }} nextBtnStyle={{ backgroundColor: '#01286B', borderRadius: 7, marginRight:-30 }} previousBtnTextStyle={{ color: '#FFFFFF', margin: 5 }} previousBtnStyle={{ backgroundColor: '#01286B', borderRadius: 7, marginLeft:-30}}>
                            <View style={[{ alignItems: 'center', marginBottom: 35 }, styles.shadows]}>
                                <View style={{ borderBottomWidth: 1, borderColor: '#ED8512', width: '100%' }}>
                                    <Text style={{ textAlign: 'center', color: '#01286B' }}>REGISTRO DE INCIDENTES</Text>
                                </View>
                                <VStack width="100%" mx="3" maxW="300px" my="4">
                                    <FormControl>
                                        <FormControl.Label _text={{
                                            bold: true
                                        }}>Fecha y Hora</FormControl.Label>
                                        <Input placeholder="John" onChangeText={value => setData({
                                            ...formData,
                                            name: value
                                        })} />

                                        <FormControl.ErrorMessage _text={{
                                            fontSize: 'xs'
                                        }}>
                                            Error Name
                                        </FormControl.ErrorMessage>


                                        <FormControl.Label _text={{
                                            bold: true
                                        }}>Superintendente</FormControl.Label>
                                        <Input placeholder="John" onChangeText={value => setData({
                                            ...formData,
                                            name: value
                                        })} />

                                        <FormControl.Label _text={{
                                            bold: true
                                        }}>Supervisor</FormControl.Label>
                                        <Input placeholder="John" onChangeText={value => setData({
                                            ...formData,
                                            name: value
                                        })} />
                                        <FormControl.Label _text={{
                                            bold: true
                                        }}>Operarios</FormControl.Label>
                                        <Input placeholder="John" onChangeText={value => setData({
                                            ...formData,
                                            name: value
                                        })} />
                                    </FormControl>
                                </VStack>


                            </View>
                        </ProgressStep>

                        <ProgressStep nextBtnText='Siguiente' nextBtnTextStyle={{ color: '#FFFFFF', margin: 5 }} nextBtnStyle={{ backgroundColor: '#01286B', borderRadius: 7 }}>
                            <View style={[{ alignItems: 'center', marginBottom: 35 }, styles.shadows]}>
                                <View style={{ borderBottomWidth: 1, borderColor: '#ED8512', width: '100%' }}>
                                    <Text style={{ textAlign: 'center', color: '#01286B' }}>REGISTRO DE INCIDENTES</Text>
                                </View>
                                <VStack width="100%" mx="3" maxW="300px" my="4">
                                    <FormControl>
                                        <FormControl.Label _text={{
                                            bold: true
                                        }}>Fecha y Hora</FormControl.Label>
                                        <Input placeholder="John" onChangeText={value => setData({
                                            ...formData,
                                            name: value
                                        })} />

                                        <FormControl.ErrorMessage _text={{
                                            fontSize: 'xs'
                                        }}>
                                            Error Name
                                        </FormControl.ErrorMessage>


                                        <FormControl.Label _text={{
                                            bold: true
                                        }}>Superintendente</FormControl.Label>
                                        <Input placeholder="John" onChangeText={value => setData({
                                            ...formData,
                                            name: value
                                        })} />

                                        <FormControl.Label _text={{
                                            bold: true
                                        }}>Supervisor</FormControl.Label>
                                        <Input placeholder="John" onChangeText={value => setData({
                                            ...formData,
                                            name: value
                                        })} />
                                        <FormControl.Label _text={{
                                            bold: true
                                        }}>Operarios</FormControl.Label>
                                        <Input placeholder="John" onChangeText={value => setData({
                                            ...formData,
                                            name: value
                                        })} />
                                    </FormControl>
                                </VStack>


                            </View>
                        </ProgressStep>


                    </ProgressSteps>

                </View>

            </View>
            {/* {
                botonH ? (<View style={styles.containerFooter}>
                    <Image
                        source={require('../../../assets/backgrounds/Colors.png')} alt="Alternate Text" size="xl" />
    
                </View>) : null
            } */}

        </>
    )
}

export default AddReporte

const styles = StyleSheet.create({
    containerFooter: {

        flex: 1,
        zIndex: -1,
        flexDirection: "column-reverse",
        alignItems: "flex-start",
    },
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
        shadowOpacity: 0.2,
        shadowRadius: 3.84,

        elevation: 5,
    },

})