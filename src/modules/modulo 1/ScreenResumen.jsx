import { StyleSheet, Text, View, useWindowDimensions, Image, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import TemplateScreen from '../../Template/TemplateScreen'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { FormControl, Input, VStack, Pressable, TextArea, FlatList, HStack } from 'native-base';
import TemplateScreenNoHeader from '../../Template/TemplateScreenNoHeader';
import { Ionicons } from '@expo/vector-icons';
import { getEquiment, getSuperIntendent } from '../services/misServicios';
import SearchableDropDown from 'react-native-searchable-dropdown';
import { Card, Modal, Button } from '@ui-kitten/components';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';
import ImageView from 'react-native-image-view';

//import { FAB, Portal, Provider } from 'react-native-paper';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';


const ScreenResumen = (props) => {
  console.log("Soy el props del Screen Resumen")
  console.log(props)
  const [estadoEdicion, setEstadoEdicion] = useState(true)

  // FAB
  const [state, setState] = React.useState({ open: false });
  const onStateChange = ({ open }) => setState({ open });
  const { open } = state;




  const [formData, setData] = useState({
    ...props.route.params.miObjeto
  });

  console.log("Soy la data del formulario del Screen Resumen:")
  console.log(formData)

  const [botonH, setBotonH] = useState(false);
  const fecha = (formData.date).getDate() + '/' + ((formData.date).getMonth() + 1) + '/' + (formData.date).getFullYear()
  const hora = (formData.date).getHours() + ':' + (formData.date).getMinutes()
  return (

    <>

      {
        botonH ? <TemplateScreen setBotonH={setBotonH} /> : <TemplateScreenNoHeader setBotonH={setBotonH} />
      }


      <View style={[styles.container]}>

        <ScrollView style={{ marginBottom: 75 }} >
          <View style={[{ alignItems: 'center', marginBottom: 35 }, styles.shadows]}>
            <View style={{ borderBottomWidth: 1, borderColor: '#ED8512', width: '100%' }}>
              <Text style={{ textAlign: 'center', color: '#01286B' }}>RESUMEN DE REPORTE REGISTRADO</Text>
            </View>
            <VStack width="100%" mx="3" maxW="300px" my="4">
              <FormControl>
                <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                  <View style={{ width: '55%', marginRight: 5 }}><FormControl.Label _text={{
                    bold: true
                  }}>Fecha </FormControl.Label>

                    <Text style={{ backgroundColor: 'rgba(229, 227, 227, 0.9)', textAlign: 'center', borderRadius: 5, padding: 10 }}>{fecha}</Text>

                  </View>
                  <View style={{ width: '40%', marginLeft: 5 }}><FormControl.Label _text={{
                    bold: true
                  }}>Hora </FormControl.Label>
                    <Text style={{ backgroundColor: 'rgba(229, 227, 227, 0.9)', textAlign: 'center', borderRadius: 5, padding: 10 }}>{hora}</Text>
                  </View>


                </View>


                <FormControl.ErrorMessage _text={{
                  fontSize: 'xs'
                }}>
                  Error Name
                </FormControl.ErrorMessage>


                <FormControl.Label _text={{
                  bold: true
                }}>Superintendente</FormControl.Label>
                <Input defaultValue={formData.superintendent} placeholder="John"
                  isDisabled={estadoEdicion}
                  onChangeText={value => setData({
                    ...formData,
                    name: value
                  })} />

                <FormControl.Label _text={{
                  bold: true
                }}>Supervisor</FormControl.Label>
                <Input defaultValue={formData.supervisor} placeholder="John"
                  isDisabled={estadoEdicion} onChangeText={value => setData({
                    ...formData,
                    name: value
                  })} />
                <FormControl.Label _text={{
                  bold: true
                }}>Operarios</FormControl.Label>
                <Input defaultValue={formData.operators} placeholder="John"
                  isDisabled={estadoEdicion}
                  onChangeText={value => setData({
                    ...formData,
                    name: value
                  })} />

                <FormControl.Label _text={{
                  bold: true
                }}>Equipo Afectado</FormControl.Label>
                <Input defaultValue={formData.equipment_id} placeholder="John"
                  isDisabled={estadoEdicion}
                  onChangeText={value => setData({
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
                <Input defaultValue={formData.downtime} placeholder="John"
                  isDisabled={estadoEdicion}
                  onChangeText={value => setData({
                    ...formData,
                    name: value
                  })} />

                <FormControl.Label _text={{
                  bold: true
                }}>Detalle de parada</FormControl.Label>
                <TextArea defaultValue={formData.details} h={20} isDisabled={estadoEdicion}
                  placeholder="Text Area Placeholder" w="100%" maxW="300" />

                <FormControl.Label _text={{
                  bold: true
                }}>Evento Ocurrido</FormControl.Label>
                <Input defaultValue={formData.event} placeholder="John"
                  isDisabled={estadoEdicion}
                  Text={value => setData({
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
                <TextArea defaultValue={formData.description} h={20} isDisabled={estadoEdicion} placeholder="Text Area Placeholder" w="100%" maxW="300" />
                <FormControl.Label _text={{
                  bold: true
                }}>Causas</FormControl.Label>
                <Input defaultValue={formData.attributed_cause} placeholder="John"
                  isDisabled={estadoEdicion}
                  onChangeText={value => setData({
                    ...formData,
                    name: value
                  })} />

                <FormControl.Label _text={{
                  bold: true
                }}>Acciones realizadas</FormControl.Label>
                <TextArea defaultValue={formData.take_actions} h={20} isDisabled={estadoEdicion} placeholder="Text Area Placeholder" w="100%" maxW="300" />

                <FormControl.ErrorMessage _text={{
                  fontSize: 'xs'
                }}>
                  Error Name
                </FormControl.ErrorMessage>

                <FormControl.Label _text={{
                  bold: true
                }}>Resultados</FormControl.Label>
                <TextArea defaultValue={formData.results} h={20} isDisabled={estadoEdicion} placeholder="Text Area Placeholder" w="100%" maxW="300" />

                <View style={[{ marginBottom: 35 }, styles.shadows]}>
                  <ScrollView horizontal>
                    <View style={{ flexDirection: 'row', margin: 10 }}>
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

                          <Image
                            source={{ uri: formData.foto1[0]?.base64 }}
                            style={styles.image} />
                          {/* <View style={{ flexDirection: 'row' }}>
                        <Pressable style={{ marginRight: 10 }}>
                          <Icon as={Ionicons} size={45} name="image-outline" />
                        </Pressable>
                        <Pressable style={{ marginLeft: 10 }}>
                          <Icon as={Ionicons} size={45} name="camera-outline" />
                        </Pressable>
                      </View> */}
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
                           <Image
                            source={{ uri: formData.foto1[1]?.base64 }}
                            style={styles.image} />
                          {/* <View style={{ flexDirection: 'row' }}>
                        <Pressable style={{ marginRight: 10 }}>
                          <Icon as={Ionicons} size={45} name="image-outline" />
                        </Pressable>
                        <Pressable style={{ marginLeft: 10 }}>
                          <Icon as={Ionicons} size={45} name="camera-outline" />
                        </Pressable>
                      </View> */}
                        </View>
                      </View>
                    </View>
                  </ScrollView>
                </View>
              </FormControl>
            </VStack>


          </View>

        </ScrollView>

      </View>
      <ActionButton buttonColor="#01286B">
        <ActionButton.Item buttonColor='#f78b8b' title="Cancelar" onPress={() => console.log("notes tapped!")}>
          <Icon name="md-close" style={styles.actionButtonIcon} />
        </ActionButton.Item>

        <ActionButton.Item buttonColor='#3498db' title="Volver a Edición" onPress={() => { }}>
          <Icon name="md-pencil" style={styles.actionButtonIcon} />
        </ActionButton.Item>

        <ActionButton.Item buttonColor='#1abc9c' title="Guardar" onPress={() => { }}>
          <Icon name="md-save" style={styles.actionButtonIcon} />
        </ActionButton.Item>

      </ActionButton>

      <View style={styles.containerFooter}>
        <View style={{ width: 120, height: 120 }}>
          <Image
            source={require('../../../assets/backgrounds/Colors.png')} style={{
              height: '100%',
              width: '100%',
              resizeMode: 'cover',

            }} />
        </View>
      </View>


      {/* <Provider>
        <Portal >
          <FAB.Group
            open={open}
            color="white"
      
            icon={open ? 'nut' : 'plus'}
            actions={[
              {
                icon: 'cancel',
                label: 'Cancelar Registro',
                onPress: () => console.log('Pressed star'),
              },
              {
                icon: 'pencil',
                label: 'Volver a Edición',
                onPress: () => console.log('Pressed email'),
              },
              {
                icon: 'content-save',
                label: 'Guardar',
                onPress: () => console.log('Pressed notifications'),
                small: false,
              },
            ]}
            onStateChange={onStateChange}
            onPress={() => {
              if (open) {
                // do something if the speed dial is open
              }
            }}
          />
        </Portal>
      </Provider> */}
      {/* {
        botonH ? (<View style={styles.containerFooter}>
            <Image
                source={require('../../../assets/backgrounds/Colors.png')} alt="Alternate Text" size="xl" />

        </View>) : null
    } */}

    </>
  )
}

export default ScreenResumen

const styles = StyleSheet.create({
  containerFooter: {

    flex: 1,
    zIndex: -1,
    flexDirection: "column-reverse",
    alignItems: "flex-start",
  },
  container: {

    marginBottom: 20,
    marginHorizontal: 20,



  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  containerFooter: {

    position: 'absolute',
    zIndex: -1,
    width: 150,
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',

  },
  image: {
    width: '95%',
    height: '97%',
    resizeMode: 'cover',
    position: 'absolute'
  },
})