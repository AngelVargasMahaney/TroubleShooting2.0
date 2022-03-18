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


const ScreenResumen = () => {

  const [estadoEdicion, setEstadoEdicion] = useState(true)

  // FAB
  const [state, setState] = React.useState({ open: false });
  const onStateChange = ({ open }) => setState({ open });
  const { open } = state;



  const [formData, setData] = useState({});
  const [botonH, setBotonH] = useState(false);
  return (

    <>

      <TemplateScreen />


      <View style={[styles.container]}>

        <ScrollView >
          <View style={[{ alignItems: 'center', marginBottom: 35 }, styles.shadows]}>
            <View style={{ borderBottomWidth: 1, borderColor: '#ED8512', width: '100%' }}>
              <Text style={{ textAlign: 'center', color: '#01286B' }}>RESUMEN DE ""</Text>
            </View>
            <VStack width="100%" mx="3" maxW="300px" my="4">
              <FormControl>
                <FormControl.Label _text={{
                  bold: true
                }}>Fecha y Hora</FormControl.Label>
                <Input placeholder="Fecha y Hora"
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
                }}>Superintendente</FormControl.Label>
                <Input placeholder="John"
                  isDisabled={estadoEdicion}
                  onChangeText={value => setData({
                    ...formData,
                    name: value
                  })} />

                <FormControl.Label _text={{
                  bold: true
                }}>Supervisor</FormControl.Label>
                <Input placeholder="John"
                  isDisabled={estadoEdicion} onChangeText={value => setData({
                    ...formData,
                    name: value
                  })} />
                <FormControl.Label _text={{
                  bold: true
                }}>Operarios</FormControl.Label>
                <Input placeholder="John"
                  isDisabled={estadoEdicion}
                  onChangeText={value => setData({
                    ...formData,
                    name: value
                  })} />

                <FormControl.Label _text={{
                  bold: true
                }}>Equipo Afectado</FormControl.Label>
                <Input placeholder="John"
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
                <Input placeholder="John"
                  isDisabled={estadoEdicion}
                  onChangeText={value => setData({
                    ...formData,
                    name: value
                  })} />

                <FormControl.Label _text={{
                  bold: true
                }}>Detalle de parada</FormControl.Label>
                <TextArea h={20} isDisabled={estadoEdicion}
                  placeholder="Text Area Placeholder" w="100%" maxW="300" />

                <FormControl.Label _text={{
                  bold: true
                }}>Evento Ocurrido</FormControl.Label>
                <Input placeholder="John"
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
                <TextArea h={20} isDisabled={estadoEdicion} placeholder="Text Area Placeholder" w="100%" maxW="300" />
                <FormControl.Label _text={{
                  bold: true
                }}>Causas</FormControl.Label>
                <Input placeholder="John"
                  isDisabled={estadoEdicion}
                  onChangeText={value => setData({
                    ...formData,
                    name: value
                  })} />

                <FormControl.Label _text={{
                  bold: true
                }}>Acciones realizadas</FormControl.Label>
                <TextArea h={20} isDisabled={estadoEdicion} placeholder="Text Area Placeholder" w="100%" maxW="300" />

                <FormControl.ErrorMessage _text={{
                  fontSize: 'xs'
                }}>
                  Error Name
                </FormControl.ErrorMessage>

                <FormControl.Label _text={{
                  bold: true
                }}>Resultados</FormControl.Label>
                <TextArea h={20} isDisabled={estadoEdicion} placeholder="Text Area Placeholder" w="100%" maxW="300" />

                <ScrollView horizontal>
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
                </ScrollView>

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
      <View style={{ zIndex: -1 }}><TemplateScreenNoHeader /></View>



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
    marginTop: 130,
    marginBottom: 20,
    marginHorizontal: 20,



  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },

})