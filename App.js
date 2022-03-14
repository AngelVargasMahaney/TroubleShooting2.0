import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import { AuthProvider } from './src/modules/context/authState';
import LoginScreen from './src/modules/modulo 1/LoginScreen';
import TemplateScreen from './src/Template/TemplateScreen';
const Stack = createNativeStackNavigator();
function MyStack() {
  return (

    <Stack.Navigator screenOptions={{
      headerShown: false,
    }
    }>
      <Stack.Screen name="Login"
        component={LoginScreen}
      />
      <Stack.Screen name="Home"
        component={TemplateScreen} />




    </Stack.Navigator>
    //Psuehando
  )
}


export default function App() {
  return (
    <AuthProvider>
      <NativeBaseProvider>
        <NavigationContainer>
          <MyStack />
        </NavigationContainer>
      </NativeBaseProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
