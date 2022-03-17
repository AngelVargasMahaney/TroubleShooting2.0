import { StyleSheet, Text, View, useWindowDimensions, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import TemplateScreen from '../../Template/TemplateScreen'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { FormControl, Input, VStack, Pressable, Icon, TextArea, FlatList, HStack, ScrollView } from 'native-base';
import TemplateScreenNoHeader from '../../Template/TemplateScreenNoHeader';
import { Ionicons } from '@expo/vector-icons';
import { getEquiment, getSuperIntendent } from '../services/misServicios';
import SearchableDropDown from 'react-native-searchable-dropdown';
import { Card, Modal, Button } from '@ui-kitten/components';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';
import ImageView from 'react-native-image-view';

const AddReporte = () => {


    const [formData, setData] = useState({});
    const [miObjeto, setMiObjeto] = useState({
        event: '',
        date: '',
        description: '',
        attributed_cause: '',
        superintendent: '',
        supervisor: '',
        operators: '',
        downtime: '',
        details: '',
        take_actions: '',
        results: '',
        equipment_id: '',
        attachments: '',
        foto1: []
    })
    const [botonH, setBotonH] = useState(false);
    const [superIntendente, setSuperIntendente] = useState([])
    const [inputSuperIntendente, setInputSuperIntendente] = useState('')
    const [miValorModalSuperIntendente, setMiValorModalSuperIntendente] = useState('')
    const traerSuperIntendente = () => {
        getSuperIntendent(1).then((rpta) => {
            setSuperIntendente(rpta.data.data)
        })
    }
    useEffect(() => {
        traerSuperIntendente()
    }, [])
    const [equipos, setEquipos] = useState([])

    const traerEquipos = () => {

        getEquiment().then(rpta => {
            setEquipos(rpta.data.data)
        })
    }

    useEffect(() => {
        traerEquipos()
    }, [])


    const miArraySuperIntendentes = superIntendente.map(function (value) {
        return { name: value }
    })
    const [modalBuscarSuperIntendente, setModalBuscarSuperIntendente] = useState(false);
    const [modalBuscarEquipos, setModalBuscarEquipos] = useState(false)
    const [inputEquipos, setInputEquipos] = useState('')
    const [miValorModalEquipos, setMiValorModalEquipos] = useState('')

    // DATEPICKER CONSTANTES
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };
    //////////////////////////////////

    const [pickedImagePath, setPickedImagePath] = useState(miObjeto.foto1[0]?.base64);
    const [dataFoto, setDataFoto] = useState(

        {
            model_type: 2,
            attachmentable_type: "App\\Models\\equipos\\Troubleshooting",
            attachmentable_id: 1,
            base64: ""
        }

    )

    const showImagePicker = async () => {
        // Apreguntar por los permisos
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Te has negado a permitir que esta aplicación acceda a tus fotos!");
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: false,
            base64: true,
        });
        if (!result.cancelled) {
            setPickedImagePath(result.uri);

            const source = { uri: 'data:image/jpeg;base64,' + result.base64 };
            // console.warn(source.uri);
            dataFoto.base64 = source.uri
            miObjeto.foto1[0] = dataFoto
        }
    }
    const [isImageViewVisible, setisImageViewVisible] = useState(false);
    const images = [
        {
          source: {
            uri: pickedImagePath,
          },
          title: 'Paris',
          width: 806,
          height: 720,
        },
      ];
    return (
        <>

            {
                botonH ? <TemplateScreen setBotonH={setBotonH} /> : <TemplateScreenNoHeader setBotonH={setBotonH} />
            }

            <View style={[styles.container, botonH ? { marginTop: 130 } : { marginTop: 90 }]}>
                <View style={{ marginTop: -55 }}>
                    <ProgressSteps marginBottom={32} borderWidth={3} completedProgressBarColor={'#ED8512'} progressBarColor={'#062D73'} activeStepIconBorderColor={'#062D73'} completedStepIconColor={'#ED8512'}>
                        <ProgressStep scrollable={false} nextBtnText='Siguiente' nextBtnTextStyle={{ color: '#FFFFFF', margin: 5 }} nextBtnStyle={{ backgroundColor: '#01286B', borderRadius: 7 }}>
                            <View style={[{ alignItems: 'center', marginBottom: 35 }, styles.shadows]}>
                                <View style={{ borderBottomWidth: 1, borderColor: '#ED8512', width: '100%' }}>
                                    <Text style={{ textAlign: 'center', color: '#01286B' }}>REGISTRO DE INCIDENTES</Text>
                                </View>
                                <VStack width="100%" mx="3" maxW="300px" my="4">
                                    <FormControl>
                                        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                                            <View style={{ width: '55%', marginRight: 5 }}><FormControl.Label _text={{
                                                bold: true
                                            }}>Fecha <Pressable onPress={showDatepicker}><Icon as={Ionicons} size={6} name='calendar-outline' /></Pressable></FormControl.Label>
                                                {show && (
                                                    <DateTimePicker
                                                        testID="dateTimePicker"
                                                        value={date}
                                                        mode={mode}
                                                        is24Hour={true}
                                                        onChange={onChange}
                                                    />
                                                )}
                                                <Text style={{ backgroundColor: 'rgba(229, 227, 227, 0.9)', textAlign: 'center', borderRadius: 5, padding: 10 }}>{date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()}</Text>
                                            </View>
                                            <View style={{ width: '40%', marginLeft: 5 }}><FormControl.Label _text={{
                                                bold: true
                                            }}>Hora <Pressable onPress={showTimepicker}><Icon as={Ionicons} size={6} name='time-outline' /></Pressable></FormControl.Label>
                                                <Text style={{ backgroundColor: 'rgba(229, 227, 227, 0.9)', textAlign: 'center', borderRadius: 5, padding: 10 }}>{date.getHours() + ':' + date.getMinutes()}</Text>
                                            </View>


                                        </View>


                                        <FormControl.ErrorMessage _text={{
                                            fontSize: 'xs'
                                        }}>
                                            Error Name
                                        </FormControl.ErrorMessage>


                                        <FormControl.Label _text={{
                                            bold: true
                                        }}>Superintendente <Pressable onPress={() => setModalBuscarSuperIntendente(true)}><Icon as={Ionicons} size={6} name="search-circle-sharp" /></Pressable> </FormControl.Label>

                                        <Input defaultValue={miValorModalSuperIntendente} placeholder="John" onChangeText={value => setData({
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
                                        }}>Equipo Afectado <Pressable onPress={() => setModalBuscarEquipos(true)}><Icon as={Ionicons} size={6} name="search-circle-sharp" /></Pressable></FormControl.Label>
                                        <Input defaultValue={miValorModalEquipos} placeholder="John" onChangeText={value => setData({
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
                                    <FormControl style={{ flexDirection: 'row', margin: 10 }}>

                                        <View style={{ marginRight: 20 }}>

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
                                                {
                                                    pickedImagePath !== '' && <Image
                                                        source={{ uri: pickedImagePath }}
                                                        style={styles.image}
                                                    />
                                                }
                                                <View style={{ flexDirection: 'row',backgroundColor:'rgba(255,255,255,0.5)'}}>
                                                    <Pressable onPress={showImagePicker} style={{ marginRight: 10 }}>
                                                        <Icon as={Ionicons} size={35} name="image-outline" />
                                                    </Pressable>
                                                    <Pressable style={{ marginLeft: 10 }}>
                                                        <Icon as={Ionicons} size={35} name="camera-outline" />
                                                    </Pressable>
                                                    <Pressable onPress={()=>setisImageViewVisible(true)} style={{ marginLeft: 10 }}>
                                                        <Icon as={Ionicons} size={35} name="scan" />
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
                                                <ImageView
                                                    isSwipeCloseEnabled={true}
                                                    onClose={() => setisImageViewVisible(false)}
                                                    images={images}
                                                    imageIndex={0}
                                                    isPinchZoomEnabled={true}
                                                    isVisible={isImageViewVisible}
                                                    
                                                />
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
            {/* Modal SUPERINTENDENTES */}
            <Modal
                visible={modalBuscarSuperIntendente}
                backdropStyle={styles.backdrop}
                onBackdropPress={() => setModalBuscarSuperIntendente(false)}>
                <Card disabled={true} style={{ width: (useWindowDimensions().width) - 50 }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20, paddingBottom: 7, borderBottomWidth: 1 }}>
                        <Text style={{ textAlign: 'left' }}>Búsqueda Rápida</Text>
                        <Pressable style={{ backgroundColor: '#FC441C', borderRadius: 5, padding: 3 }} onPress={() => setModalBuscarSuperIntendente(false)}>
                            <Icon as={Ionicons} size={5} name="close-outline" style={{ color: 'white' }} />
                        </Pressable>
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                        <SearchableDropDown

                            onTextChange={(text) => console.log("")}
                            //On text change listner on the searchable input
                            onItemSelect={(item) => setInputSuperIntendente(item)}
                            //onItemSelect called after the selection from the dropdown
                            containerStyle={{ padding: 5, width: 200 }}
                            //suggestion container style
                            textInputStyle={{
                                //inserted text style
                                padding: 5,

                                borderWidth: 1,
                                borderColor: '#ccc',
                                backgroundColor: '#FAF7F6',
                            }}
                            itemStyle={{
                                //single dropdown item style
                                padding: 10,

                                marginTop: 2,
                                backgroundColor: '#FAF9F8',
                                borderColor: '#bbb',
                                borderWidth: 1,
                            }}
                            itemTextStyle={{
                                //text style of a single dropdown item
                                color: '#222',
                            }}
                            itemsContainerStyle={{
                                //items container style you can pass maxHeight
                                //to restrict the items dropdown hieght
                                maxHeight: '90%',
                            }}
                            items={miArraySuperIntendentes}
                            //mapping of item array
                            defaultIndex={0}
                            //default selected item index
                            placeholder="Búsqueda"
                            //place holder for the search input
                            resetValue={false}
                            //reset textInput Value with true and false state
                            underlineColorAndroid="transparent"
                        //To remove the underline from the android input
                        />


                    </View>
                    <View style={{ marginTop: 20, marginBottom: 10 }}>
                        <Text style={{ textAlign: 'left', borderTopWidth: 1, paddingTop: 5, fontWeight: 'bold' }}>Nombre de Superintendente</Text>
                        <Text style={{ textAlign: 'left', marginLeft: 5, marginTop: 5 }}>{inputSuperIntendente?.name}</Text>
                    </View>
                    <Button style={{ backgroundColor: '#062D73', borderRadius: 5 }}
                        onPress={() => {
                            setModalBuscarSuperIntendente(false)
                            setMiValorModalSuperIntendente(inputSuperIntendente?.name)
                        }}
                        accessoryRight={<Icon as={Ionicons} size={5} name='search' color={'white'} />}>
                        Registrar campo
                    </Button>
                </Card>
            </Modal>
            {/* Modal EQUIPOS */}
            <Modal
                visible={modalBuscarEquipos}
                backdropStyle={styles.backdrop}
                onBackdropPress={() => setModalBuscarEquipos(false)}>
                <Card disabled={true} style={{ width: (useWindowDimensions().width) - 50 }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20, paddingBottom: 7, borderBottomWidth: 1 }}>
                        <Text style={{ textAlign: 'left' }}>Búsqueda Rápida</Text>
                        <Pressable style={{ backgroundColor: '#FC441C', borderRadius: 5, padding: 3 }} onPress={() => setModalBuscarEquipos(false)}>
                            <Icon as={Ionicons} size={5} name="close-outline" style={{ color: 'white' }} />
                        </Pressable>
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                        <SearchableDropDown

                            onTextChange={(text) => console.log("")}
                            //On text change listner on the searchable input
                            onItemSelect={(item) => setInputEquipos(item)}
                            //onItemSelect called after the selection from the dropdown
                            containerStyle={{ padding: 5, width: 200 }}
                            //suggestion container style
                            textInputStyle={{
                                //inserted text style
                                padding: 5,

                                borderWidth: 1,
                                borderColor: '#ccc',
                                backgroundColor: '#FAF7F6',
                            }}
                            itemStyle={{
                                //single dropdown item style
                                padding: 10,

                                marginTop: 2,
                                backgroundColor: '#FAF9F8',
                                borderColor: '#bbb',
                                borderWidth: 1,
                            }}
                            itemTextStyle={{
                                //text style of a single dropdown item
                                color: '#222',
                            }}
                            itemsContainerStyle={{
                                //items container style you can pass maxHeight
                                //to restrict the items dropdown hieght
                                maxHeight: '50%',

                            }}
                            items={equipos}
                            //mapping of item array
                            defaultIndex={0}
                            //default selected item index
                            placeholder="Búsqueda"
                            //place holder for the search input
                            resetValue={false}
                            //reset textInput Value with true and false state
                            underlineColorAndroid="transparent"
                        //To remove the underline from the android input
                        />


                    </View>
                    <View style={{ marginTop: 20, marginBottom: 10 }}>
                        <Text style={{ textAlign: 'left', borderTopWidth: 1, paddingTop: 5, fontWeight: 'bold' }}>Nombre de Equipo</Text>
                        <Text style={{ textAlign: 'left', marginLeft: 5, marginTop: 5 }}>{inputEquipos?.name}</Text>
                    </View>
                    <Button style={{ backgroundColor: '#062D73', borderRadius: 5 }}
                        onPress={() => {
                            setModalBuscarEquipos(false)
                            setMiValorModalEquipos(inputEquipos?.name)
                        }}
                        accessoryRight={<Icon as={Ionicons} size={5} name='search' color={'white'} />}>
                        Registrar campo
                    </Button>
                </Card>
            </Modal>
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
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    image: {
        width: '95%',
        height: '97%',
        resizeMode: 'cover',
        position: 'absolute'
    }

})