import {
  StyleSheet,
  Text,
  TextInput as RNTextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';
import LoginUI from './LoginUI';
import Register from './Register';
import RegisterFomik from './RegisterFomik';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default class LoginScreens extends Component {
  render() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginScreen" component={LoginUI} />
        <Stack.Screen name="RegisterScreen" component={Register} />
      </Stack.Navigator>
    );
  }
}
