import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import { AuthProvider } from './src/modules/context/authState';
import LoginScreen from './src/modules/modulo 1/LoginScreen';

export default function App() {
  return (
    <AuthProvider>
      <NativeBaseProvider>
        <NavigationContainer>
          <LoginScreen />
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
