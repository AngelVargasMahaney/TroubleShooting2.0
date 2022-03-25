import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import TemplateScreen from '../../Template/TemplateScreen'
import { getSearch, getTroubleShooting } from '../services/misServicios'
import { useNavigation } from '@react-navigation/native'


const ListReportes = () => {

    const [Reportes, setReportes] = useState([])
    const navigation = useNavigation();

    const traerTroubles = () => {
       
        getTroubleShooting().then(rpta => {
            setReportes(rpta.data.data)
            console.log("TROUBLES"+rpta.data.data)
        })
    }


    useEffect(() => {
        traerTroubles()
        traerBusqueda ()
    }, [])

    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [search, setSearch] = useState('');
    let [service, setService] = React.useState("");

    const traerBusqueda = () => {
      
        getSearch( 1, "LINER").then(rpta => {
        //getSearch( service, search).then(rpta => {
            setFilteredDataSource(rpta.data.data)
           
            console.log("searrch"+rpta.data.data)
        })
    }



    return (
        
        <>
            <TemplateScreen />
            <View style={styles.container}>
                <Text>{filteredDataSource[0].event}</Text>
            </View>
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
})
