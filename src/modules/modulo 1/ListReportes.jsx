import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Dimensions, TouchableOpacity, ScrollView } from "react-native";
import { NativeBaseProvider, Box, Text, Pressable, Heading, IconButton, Icon, HStack, Avatar, VStack, Spacer, Center, useToast } from "native-base";
import { SwipeListView } from "react-native-swipe-list-view";
import { MaterialIcons, Ionicons, Entypo } from "@expo/vector-icons";

import TemplateScreen from '../../Template/TemplateScreen'
import { deleteTroubleshootingById, getSearch, getTroubleShooting } from '../services/misServicios'
import { useNavigation } from '@react-navigation/native'
import { SCLAlert, SCLAlertButton } from 'react-native-scl-alert';


const ListReportes = () => {


    const [listData, setListData] = useState([]);
    const traerTroubles = () => {

        getTroubleShooting().then(rpta => {
            setListData(rpta.data.data)
            console.log(rpta.data.data[7].date)
        })
    }


    useEffect(() => {
        traerTroubles()
        traerBusqueda()
    }, [])

    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [search, setSearch] = useState('');
    let [service, setService] = React.useState("");

    const traerBusqueda = () => {

        getSearch(1, "LINER").then(rpta => {
            //getSearch( service, search).then(rpta => {
            setFilteredDataSource(rpta.data.data)

            // console.log("searrch" + rpta.data.data)
        })
    }
    const navigation = useNavigation();
    const toast = useToast();


    const [IdEliminar, setIdEliminar] = useState()
    //console.log(IdEliminar)
    const eliminarTroubleshooting = () => {

        deleteTroubleshootingById(IdEliminar).then((rpta) => {
            if (rpta.status === 200) {
                //Se comprueba que se eliminó correctamente
                traerTroubles() //Se llama otra vez para setear la variable de estado y recargar la página automáticamente al borrar un usuario

            }
        })
    }


    //SWIPELIST

    const closeRow = (rowMap, rowKey) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    };

    const onRowDidOpen = rowKey => {
        // console.log("This row opened", rowKey);
    };

    const [show, setShow] = useState(false)
    const renderItem = ({
        item,
        index
    }) =>
        <Box>
            <Pressable onPress={() => toast.show({
                description: "Deslice para más acciones"
            })} _dark={{
                bg: "coolGray.800"
            }} _light={{
                bg: "white"
            }}>
                <Box pl="4" pr="5" py="2" >
                    <HStack alignItems="center" space={3}>
                        <Avatar size="48px" source={{
                            uri: item.equipment?.cover
                        }} />
                        <VStack width="85%">
                            <Text color="coolGray.800" _dark={{
                                color: "warmGray.50"
                            }} bold>
                                {(item.event).slice(0, 25) + " ..."}
                            </Text>
                            <Text color="coolGray.600" _dark={{
                                color: "warmGray.200"
                            }}>
                                {item.supervisor}
                            </Text>
                        </VStack>
                        <Spacer />
                        <Text fontSize="xs" color="coolGray.800" _dark={{
                            color: "warmGray.50"
                        }} alignSelf="flex-start">
                            {item.timeStamp}
                        </Text>
                    </HStack>
                </Box>
            </Pressable>
        </Box>

    const renderHiddenItem = (data, rowMap) => <HStack flex="1" pl="2">
        <Pressable w="70" ml="auto" bg="coolGray.200"
            justifyContent="center"
            onPress={() =>
                navigation.navigate('Detalle',
                    {
                        id: data.item.id
                        // ,traerTroubles
                    })
            }
            _pressed={{
                opacity: 0.5
            }}>
            <VStack alignItems="center" space={2}>
                <Icon as={<Entypo name="eye" />} size="xs" color="coolGray.800" />
                <Text fontSize="xs" fontWeight="medium" color="coolGray.800">
                    More
                </Text>
            </VStack>
        </Pressable>
        <Pressable w="70" bg="red.500"
            justifyContent="center"
            onPress={() => {
                setIdEliminar(data.item.id)
                setShow(true)
            }}
            _pressed={{
                opacity: 0.5
            }}>
            <VStack alignItems="center" space={2}>
                <Icon as={<MaterialIcons name="delete" />} color="white" size="xs" />
                <Text color="white" fontSize="xs" fontWeight="medium">
                    Delete
                </Text>
            </VStack>
        </Pressable>
    </HStack>;


    return (

        <>
            <TemplateScreen />
            <View style={styles.container}>
                {/* <Text>{filteredDataSource[0]?.event}</Text> */}


                <SwipeListView
                    data={listData}
                    renderItem={renderItem}
                    renderHiddenItem={renderHiddenItem}
                    rightOpenValue={-130} previewRowKey={"0"}
                    previewOpenValue={-40}
                    previewOpenDelay={3000}
                    onRowDidOpen={onRowDidOpen} />


            </View>
            <SCLAlert
                show={show}
                onRequestClose={() => setShow(false)}
                theme="danger"
                title="Aviso"
                subtitle="Está seguro que desea eliminar este reporte?"
                headerIconComponent={<Ionicons name="trash-outline" size={32} color="white" />}
            >
                <SCLAlertButton theme="info" onPress={() => {
                    setShow(false)
                    eliminarTroubleshooting()
                }}>Aceptar</SCLAlertButton>
                <SCLAlertButton theme="info" onPress={() => {
                    console.log('Ingresé')
                    setShow(false);
                }}>Cancelar</SCLAlertButton>

            </SCLAlert>
        </>
    )
}


export default ListReportes

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
    },
})
