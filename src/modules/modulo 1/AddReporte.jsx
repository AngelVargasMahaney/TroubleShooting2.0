import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TemplateScreen from '../../Template/TemplateScreen'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { FormControl, Input, VStack } from 'native-base';

const AddReporte = () => {
    return (
        <>
            <TemplateScreen />
            <View style={styles.container}>
                <View style={{ marginTop: -55 }}>
                    <ProgressSteps>
                        <ProgressStep  >
                            <View style={{ alignItems: 'center' }}>
                                <View style={{ borderBottomWidth: 1, borderColor: '#ED8512', width: '100%' }}>
                                    <Text style={{ textAlign: 'center', color: '#01286B' }}>REGISTRO DE INCIDENTES</Text>
                                </View>
                                <VStack width="90%" mx="3" maxW="300px" my="4">
                                    <FormControl isRequired>
                                        <FormControl.Label _text={{
                                            bold: true
                                        }}>Name</FormControl.Label>
                                        <Input placeholder="John" onChangeText={value => setData({
                                            ...formData,
                                            name: value
                                        })} />
                                        <FormControl.HelperText _text={{
                                            fontSize: 'xs'
                                        }}>
                                            Name should contain atleast 3 character.
                                        </FormControl.HelperText>
                                        <FormControl.ErrorMessage _text={{
                                            fontSize: 'xs'
                                        }}>
                                            Error Name
                                        </FormControl.ErrorMessage>
                                    </FormControl>
                                </VStack>
                            </View>
                        </ProgressStep>
                        <ProgressStep>
                            <View style={{ alignItems: 'center' }}>
                                <Text>This is the content within step 2!</Text>
                            </View>
                        </ProgressStep>
                        <ProgressStep>
                            <View style={{ alignItems: 'center' }}>
                                <Text>This is the content within step 2!</Text>
                            </View>
                        </ProgressStep>
                        <ProgressStep>
                            <View style={{ alignItems: 'center' }}>
                                <Text>This is the content within step 2!</Text>
                            </View>
                        </ProgressStep>
                        <ProgressStep>
                            <View style={{ alignItems: 'center' }}>
                                <Text>This is the content within step 2!</Text>
                            </View>
                        </ProgressStep>

                    </ProgressSteps>
                </View>
            </View>
        </>
    )
}

export default AddReporte

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        marginTop: 130,
        marginHorizontal: 20,

    },
})