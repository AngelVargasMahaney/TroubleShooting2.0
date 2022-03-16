import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import TemplateScreen from '../../Template/TemplateScreen'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { FormControl, Input, VStack, Button, Pressable, Icon, Image, TextArea, FlatList, HStack, ScrollView } from 'native-base';
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
                    <ProgressSteps marginBottom={32} borderWidth={3} completedProgressBarColor={'#ED8512'} progressBarColor={'#062D73'} activeStepIconBorderColor={'#062D73'} completedStepIconColor={'#ED8512'}>
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

                        <ProgressStep nextBtnText='Siguiente' previousBtnText='Anterior' nextBtnTextStyle={{ color: '#FFFFFF', margin: 5 }} nextBtnStyle={{ backgroundColor: '#01286B', borderRadius: 7, marginRight: -30 }} previousBtnTextStyle={{ color: '#FFFFFF', margin: 5 }} previousBtnStyle={{ backgroundColor: '#01286B', borderRadius: 7, marginLeft: -30 }}>
                            <View style={[{ alignItems: 'center', marginBottom: 35 }, styles.shadows]}>
                                <View style={{ borderBottomWidth: 1, borderColor: '#ED8512', width: '100%' }}>
                                    <Text style={{ textAlign: 'center', color: '#01286B' }}>EQUIPO Y TIEMPO DE PARADA</Text>
                                </View>
                                <VStack width="100%" mx="3" maxW="300px" my="4">
                                    <FormControl>
                                        <FormControl.Label _text={{
                                            bold: true
                                        }}>Equipo Afectado</FormControl.Label>
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
                                        }}>Tiempo de Parada</FormControl.Label>
                                        <Input placeholder="John" onChangeText={value => setData({
                                            ...formData,
                                            name: value
                                        })} />

                                        <FormControl.Label _text={{
                                            bold: true
                                        }}>Detalle de parada</FormControl.Label>
                                        <TextArea h={20} placeholder="Text Area Placeholder" w="100%" maxW="300" />


                                    </FormControl>
                                </VStack>


                            </View>
                        </ProgressStep>
                        <ProgressStep nextBtnText='Siguiente' previousBtnText='Anterior' nextBtnTextStyle={{ color: '#FFFFFF', margin: 5 }} nextBtnStyle={{ backgroundColor: '#01286B', borderRadius: 7, marginRight: -30 }} previousBtnTextStyle={{ color: '#FFFFFF', margin: 5 }} previousBtnStyle={{ backgroundColor: '#01286B', borderRadius: 7, marginLeft: -30 }}> 
                            <View style={[{ alignItems: 'center', marginBottom: 35 }, styles.shadows]}>
                                <View style={{ borderBottomWidth: 1, borderColor: '#ED8512', width: '100%' }}>
                                    <Text style={{ textAlign: 'center', color: '#01286B' }}>EVENTO Y CAUSAS ASOCIADAS</Text>
                                </View>
                                <VStack width="100%" mx="3" maxW="300px" my="4">
                                    <FormControl>
                                        <FormControl.Label _text={{
                                            bold: true
                                        }}>Evento Ocurrido</FormControl.Label>
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
                                        }}>Descripción del Evento</FormControl.Label>
                                        <TextArea h={20} placeholder="Text Area Placeholder" w="100%" maxW="300" />
                                        <FormControl.Label _text={{
                                            bold: true
                                        }}>Causas</FormControl.Label>
                                        <Input placeholder="John" onChangeText={value => setData({
                                            ...formData,
                                            name: value
                                        })} />
                                    </FormControl>
                                </VStack>
                            </View>
                        </ProgressStep>
                        <ProgressStep nextBtnText='Siguiente' previousBtnText='Anterior' nextBtnTextStyle={{ color: '#FFFFFF', margin: 5 }} nextBtnStyle={{ backgroundColor: '#01286B', borderRadius: 7, marginRight: -30 }} previousBtnTextStyle={{ color: '#FFFFFF', margin: 5 }} previousBtnStyle={{ backgroundColor: '#01286B', borderRadius: 7, marginLeft: -30 }}>
                            <View style={[{ alignItems: 'center', marginBottom: 35 }, styles.shadows]}>
                                <View style={{ borderBottomWidth: 1, borderColor: '#ED8512', width: '100%' }}>
                                    <Text style={{ textAlign: 'center', color: '#01286B' }}>ACCIONES TOMADAS</Text>
                                </View>
                                <VStack width="100%" mx="3" maxW="300px" my="4">
                                    <FormControl>
                                        <FormControl.Label _text={{
                                            bold: true
                                        }}>Acciones realizadas</FormControl.Label>
                                        <TextArea h={20} placeholder="Text Area Placeholder" w="100%" maxW="300" />

                                        <FormControl.ErrorMessage _text={{
                                            fontSize: 'xs'
                                        }}>
                                            Error Name
                                        </FormControl.ErrorMessage>
                                        <View style={{ borderBottomWidth: 1, borderColor: '#ED8512', width: '100%', marginVertical: 10 }}>
                                            <Text style={{ textAlign: 'center', color: '#01286B' }}>RESULTADOS OBTENIDOS</Text>
                                        </View>
                                        <FormControl.Label _text={{
                                            bold: true
                                        }}>Resultados</FormControl.Label>
                                        <TextArea h={20} placeholder="Text Area Placeholder" w="100%" maxW="300" />
                                    </FormControl>
                                </VStack>
                            </View>
                        </ProgressStep>
                        <ProgressStep finishBtnText="Enviar" nextBtnText='Siguiente' previousBtnText='Anterior' nextBtnTextStyle={{ color: '#FFFFFF', margin: 5 }} nextBtnStyle={{ backgroundColor: '#01286B', borderRadius: 7, marginRight: -30 }} previousBtnTextStyle={{ color: '#FFFFFF', margin: 5 }} previousBtnStyle={{ backgroundColor: '#01286B', borderRadius: 7, marginLeft: -30 }}>
                            <View style={[{ marginBottom: 35 }, styles.shadows]}>
                                <View style={{ borderBottomWidth: 1, borderColor: '#ED8512', width: '100%', marginBottom: 20 }}>
                                    <Text style={{ textAlign: 'center', color: '#01286B' }}>REGISTRO DE INCIDENTES</Text>
                                </View>
                                <ScrollView horizontal>
                                    <FormControl style={{ flexDirection: 'row', margin:10 }}>
                                        <View style={{ marginRight:20}}>
                                            <FormControl.Label _text={{
                                                bold: true
                                            }}>Evidencia N° 1</FormControl.Label>

                                            <View style={{
                                                shadowColor: "#000",
                                                shadowOffset: {
                                                    width: 0,
                                                    height: 3,
                                                },
                                                shadowOpacity: 0.2,
                                                shadowRadius: 4.65,
                                                elevation: 6,
                                                width: 200,
                                                height: 200,
                                                backgroundColor: 'rgba(255,255,255,0.5)',
                                                borderRadius: 7,
                                                flex: 1,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Pressable style={{ marginRight: 10 }}>
                                                        <Icon as={Ionicons} size={45} name="image-outline" />
                                                    </Pressable>
                                                    <Pressable style={{ marginLeft: 10 }}>
                                                        <Icon as={Ionicons} size={45} name="camera-outline" />
                                                    </Pressable>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{ marginLeft: 20 }}>
                                            <FormControl.Label _text={{
                                                bold: true
                                            }}>Evidencia N° 2</FormControl.Label>
                                            <View style={{
                                                shadowColor: "#000",
                                                shadowOffset: {
                                                    width: 0,
                                                    height: 3,
                                                },
                                                shadowOpacity: 0.2,
                                                shadowRadius: 4.65,
                                                elevation: 6,
                                                width: 200,
                                                height: 200,
                                                backgroundColor: 'rgba(255,255,255,0.5)',
                                                borderRadius: 7,
                                                flex: 1,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Pressable style={{ marginRight: 10 }}>
                                                        <Icon as={Ionicons} size={45} name="image-outline" />
                                                    </Pressable>
                                                    <Pressable style={{ marginLeft: 10 }}>
                                                        <Icon as={Ionicons} size={45} name="camera-outline" />
                                                    </Pressable>
                                                </View>
                                            </View>
                                        </View>

                                    </FormControl>
                                </ScrollView>
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


})