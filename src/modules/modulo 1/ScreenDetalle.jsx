import { StyleSheet, Text, View, useWindowDimensions, Image, ScrollView, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import TemplateScreen from '../../Template/TemplateScreen'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { FormControl, Input, VStack, Pressable, TextArea, FlatList, HStack, Skeleton, InputGroup, InputRightAddon, useToast } from 'native-base';
import TemplateScreenNoHeader from '../../Template/TemplateScreenNoHeader';
import { Ionicons } from '@expo/vector-icons';
import { getEquimentById, getTroubleShootingById, putTroubleshootingUpdate } from '../services/misServicios';
import SearchableDropDown from 'react-native-searchable-dropdown';
import { Card, Modal, Button } from '@ui-kitten/components';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';
import ImageView from 'react-native-image-view';
import { useNavigation } from '@react-navigation/native';

//import { FAB, Portal, Provider } from 'react-native-paper';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { SCLAlert, SCLAlertButton } from 'react-native-scl-alert';


const ScreenDetalle = (props) => {

  const [estadoEdicion, setEstadoEdicion] = useState(true)

  // FAB
  const [state, setState] = React.useState({ open: false });
  const onStateChange = ({ open }) => setState({ open });
  const { open } = state;
  const [skeletonLoader, setSkeletonLoader] = useState(false)

  const toast = useToast();
  useEffect(() => {
    setTimeout(() => {
      setSkeletonLoader(true);
    }, 2800);
  })


  //OBTERNER DATA POR ID
  const [formData, setData] = useState();
  const getDataByID = () => {

    const idUrl = props.route.params.id;
    getTroubleShootingById(idUrl).then(rpta => {

      setData(rpta.data.data)
      buscarEquipoId(rpta.data.data.equipment_id)
    })
  }



  console.log('mi data')
  console.log(formData)
  //GUARDAR CAMBIOS
  const handleSubmit = () => {

    putTroubleshootingUpdate(formData, props.route.params.id).then((rpta) => {

      if (rpta.status === 200) {

        navigation.replace('List')
        toast.show({
          title: "Registro Exitoso",
          status: "success",
          placement: "top",
          description: "Se guardaron los cambios correctamente"
        })
      } else {
        toast.show({
          title: "Error",
          status: "error",
          description: "Ocurrió un error intente nuevamente"
        })

      }
    }).catch(err => {
      console.log("ERROR EN EL SERVICIO CREARDATA")
      console.warn(err)
    })
  }

  const [cargando, setCargando] = useState(false)

  const [botonH, setBotonH] = useState(false);
  // title
  var titleEvent = formData?.event
  //Fecha
  var fechaDetalle = new Date(formData?.date)

  const fecha = fechaDetalle.getDate() + '/' + (fechaDetalle.getMonth() + 1) + '/' + fechaDetalle.getFullYear()
  const hora = fechaDetalle.getHours() + ':' + fechaDetalle.getMinutes()


  const [visible, setVisible] = useState(false);


  //Alerta
  const [show, setShow] = useState(false)
  //Servicio Alerta
  const handleOpen = () => {
    setShow(true)
  }
  const handleClose = () => {
    setShow(false)
  }

  //EQUIPO POR ID
  const [miEquipo, setMiEquipo] = useState('')
  const buscarEquipoId = (id) => {
    getEquimentById(id).then((rpta) => {
      if (rpta.status === 200) {

        setMiEquipo(rpta.data.data.name)

      }

    })
  }
  const handleChangeText = (nombre, value) => {
    setData({ ...formData, [nombre]: value })
  };
  useEffect(() => {
    getDataByID()

  }, [])

  useEffect(() => {
  })

  const navigation = useNavigation()
  return (

    <>

      {
        botonH ? <TemplateScreen setBotonH={setBotonH} /> : <TemplateScreenNoHeader setBotonH={setBotonH} />
      }


      <View style={[styles.container]}>

        <ScrollView style={{ marginBottom: 75 }} >
          <View style={[{ alignItems: 'center', marginBottom: 35 }, styles.shadows]}>
            <View style={{ borderBottomWidth: 1, borderColor: '#ED8512', width: '100%' }}>
              <Skeleton.Text px="4" lines={2} alignItems="center" isLoaded={skeletonLoader}>
                <Text style={{ textAlign: 'center', color: '#01286B', fontSize: 18 }}>{titleEvent?.toUpperCase()}</Text>
              </Skeleton.Text>
            </View>


            <VStack width="100%" mx="3" maxW="300px" my="4">
              <FormControl>
                <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                  <View style={{ width: '55%', marginRight: 5 }}><FormControl.Label _text={{
                    bold: true
                  }}>Fecha </FormControl.Label>

                    <Skeleton.Text px="4" lines={2}  isLoaded={skeletonLoader}>
                      <Text style={{ backgroundColor: 'rgba(229, 227, 227, 0.9)', textAlign: 'center', borderRadius: 5, padding: 10 }}>{fecha}</Text>
                    </Skeleton.Text>

                  </View>
                  <View style={{ width: '40%', marginLeft: 5 }}><FormControl.Label _text={{
                    bold: true
                  }}>Hora </FormControl.Label>
                    <Skeleton.Text px="4" lines={2} isLoaded={skeletonLoader}>
                      <Text style={{ backgroundColor: 'rgba(229, 227, 227, 0.9)', textAlign: 'center', borderRadius: 5, padding: 10 }}>{hora}</Text>
                    </Skeleton.Text>
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
                <Skeleton.Text px="4" lines={2} isLoaded={skeletonLoader}>
                  <Input defaultValue={formData?.superintendent} placeholder="John"
                    isDisabled={estadoEdicion}
                    onChangeText={(value) => handleChangeText('superintendent', value)} />
                </Skeleton.Text>

                <FormControl.Label _text={{
                  bold: true
                }}>Supervisor</FormControl.Label>
                <Skeleton.Text px="4" lines={2} isLoaded={skeletonLoader}>
                  <Input defaultValue={formData?.supervisor} placeholder="John"
                    isDisabled={estadoEdicion}
                    onChangeText={(value) => handleChangeText('supervisor', value)} />
                </Skeleton.Text>
                <FormControl.Label _text={{
                  bold: true
                }}>Operarios</FormControl.Label>
                <Skeleton.Text px="4" isLoaded={skeletonLoader}>

                  <Input defaultValue={formData?.operators} placeholder="John"
                    isDisabled={estadoEdicion}
                    onChangeText={(value) => handleChangeText('operators', value)} />
                </Skeleton.Text>

                <FormControl.Label _text={{
                  bold: true
                }}>Equipo Afectado</FormControl.Label>
                <Skeleton.Text px="4" lines={2} isLoaded={skeletonLoader}>

                  <Input defaultValue={miEquipo} placeholder="John"
                    // isDisabled={estadoEdicion}
                    isDisabled={true}
                  //Aqui falta un modal para cambiar de equipo.
                  />
                </Skeleton.Text>

                <FormControl.ErrorMessage _text={{
                  fontSize: 'xs'
                }}>
                  Error Name
                </FormControl.ErrorMessage>


                <FormControl.Label _text={{
                  bold: true
                }}>Tiempo de Parada</FormControl.Label>
                 <Skeleton.Text px="4" lines={2} w="40"isLoaded={skeletonLoader}>

                  <InputGroup w={{
                    base: "70%",
                    md: "285"
                  }}>
                    <Input w={{
                      base: "50%",
                    }}
                      defaultValue={formData?.downtime + ""}
                      keyboardType='numeric'
                      placeholder="0.5"
                      isDisabled={estadoEdicion}
                      onChangeText={(value) => handleChangeText('downtime', value)} />

                    <InputRightAddon children={"hrs"} />
                  </InputGroup>


                </Skeleton.Text>

                <FormControl.Label _text={{
                  bold: true
                }}>Detalle de parada</FormControl.Label>
                <Skeleton.Text px="4"  isLoaded={skeletonLoader}>

                  <TextArea defaultValue={formData?.details} h={20}
                    onChangeText={(value) => handleChangeText('details', value)}
                    isDisabled={estadoEdicion}
                    placeholder="Text Area Placeholder" w="100%" maxW="300" />
                </Skeleton.Text>

                <FormControl.Label _text={{
                  bold: true
                }}>Evento Ocurrido</FormControl.Label>
                <Skeleton.Text px="4" isLoaded={skeletonLoader}>

                  <Input defaultValue={formData?.event} placeholder="John"
                    isDisabled={estadoEdicion}
                    onChangeText={(value) => handleChangeText('event', value)} />
                </Skeleton.Text>
                <FormControl.ErrorMessage _text={{
                  fontSize: 'xs'
                }}>
                  Error Name
                </FormControl.ErrorMessage>
                <FormControl.Label _text={{
                  bold: true
                }}>Descripción del Evento</FormControl.Label>
                <Skeleton.Text px="4" isLoaded={skeletonLoader}>
                  <TextArea defaultValue={formData?.description + ""} h={20}
                    isDisabled={estadoEdicion}
                    placeholder="Text Area Placeholder" w="100%" maxW="300"
                    onChangeText={(value) => handleChangeText('description', value)}
                  />
                </Skeleton.Text>
                <FormControl.Label _text={{
                  bold: true
                }}>Causas</FormControl.Label>
                <Skeleton.Text px="4" isLoaded={skeletonLoader}>

                  <TextArea defaultValue={formData?.attributed_cause} placeholder="John"
                    isDisabled={estadoEdicion}
                    onChangeText={(value) => handleChangeText('attributed_cause', value)} />
                </Skeleton.Text>

                <FormControl.Label _text={{
                  bold: true
                }}>Acciones realizadas</FormControl.Label>
                <Skeleton.Text px="4" isLoaded={skeletonLoader}>

                  <TextArea defaultValue={formData?.take_actions}
                    onChangeText={(value) => handleChangeText('take_actions', value)}
                    h={20} isDisabled={estadoEdicion} placeholder="Text Area Placeholder"
                    multiline={true}
                    w="100%" maxW="300" />
                </Skeleton.Text>

                <FormControl.ErrorMessage _text={{
                  fontSize: 'xs'
                }}>
                  Error Name
                </FormControl.ErrorMessage>

                <FormControl.Label _text={{
                  bold: true
                }}>Resultados</FormControl.Label>
                <Skeleton.Text px="4" isLoaded={skeletonLoader}>

                  <TextArea defaultValue={formData?.results} h={20}
                    onChangeText={(value) => handleChangeText('results', value)}
                    isDisabled={estadoEdicion}
                    placeholder="Text Area Placeholder" w="100%" maxW="300" />
                </Skeleton.Text>


                {/* imagenes para editar */}
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
                          <Skeleton h="100%" isLoaded={skeletonLoader}>
                            <Image
                              source={{ uri: formData?.attachments[0].url }}
                              style={styles.image} />
                          </Skeleton>
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
                          <Skeleton h="100%" isLoaded={skeletonLoader}>
                            <Image
                              source={{ uri: formData?.attachments[1].url }}
                              style={styles.image} />
                          </Skeleton>
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

        {
          estadoEdicion ? <ActionButton.Item buttonColor='#3498db' title="Editar Registro"
            onPress={() => {
              setEstadoEdicion(false);
              toast.show({
                status: "info",
                title: "Modo Edición"
              })
            }} _dark={{
              bg: "coolGray.800"
            }} _light={{
              bg: "white"
            }}>
            <Icon name="md-pencil" style={styles.actionButtonIcon} />
          </ActionButton.Item> :
            <ActionButton.Item buttonColor='#3498db' title="Editando" onPress={() => toast.show({
              status: "warning", title: "Ya estas en modo Edición"
            })} _dark={{
              bg: "coolGray.800"
            }} _light={{
              bg: "white"
            }}>
              <Icon name="md-pencil" style={styles.actionButtonIcon} />
            </ActionButton.Item>
        }

        {
          estadoEdicion ?
            <ActionButton.Item buttonColor='#1abc9c' title="Elige editar primero" onPress={() => toast.show({
              status: "warning", title: "Primero entra en el modo Edición"
            })} _dark={{
              bg: "coolGray.800"
            }} _light={{
              bg: "white"
            }}>
              <Icon name="md-save" style={styles.actionButtonIcon} />
            </ActionButton.Item> :
            <ActionButton.Item buttonColor='#1abc9c' title="Guardar Cambios" onPress={() => { handleSubmit() }}>
              <Icon name="md-save" style={styles.actionButtonIcon} />
            </ActionButton.Item>
        }


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

      <SCLAlert
        show={show}
        onRequestClose={() => { handleClose() }}
        theme="success"
        title="Aviso"
        subtitle="Reporte generado con éxito"
        headerIconComponent={<Ionicons name="ios-thumbs-up" size={32} color="white" />}
      >
        <SCLAlertButton theme="info" onPress={() => {

          setShow(false);
          navigation.navigate('Home')

        }}>Continuar</SCLAlertButton>
      </SCLAlert>

    </>
  )
}

export default ScreenDetalle

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