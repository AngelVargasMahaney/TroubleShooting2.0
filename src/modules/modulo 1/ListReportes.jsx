import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TemplateScreen from '../../Template/TemplateScreen'

const ListReportes = () => {
    return (
        <>
            <TemplateScreen />
            <View style={styles.container}>
                <Text>sS</Text>
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
