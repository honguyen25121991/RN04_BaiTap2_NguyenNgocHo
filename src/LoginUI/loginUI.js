import {
  StyleSheet,
  Text,
  TextInput as RNTextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';
import TextInput from './components/TextInput';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <AntIcon
            styles={styles.logo}
            name="lock"
            size={100}
            color="#6330c2"
          />
          <Text style={styles.headerText}>Welcome Shoes App</Text>
        </View>
        <View style={styles.loginFrom}>
          <TextInput title="Email" placeholder="email@gmail.com" />
          <TextInput
            title="PassWord"
            placeholder="*******"
            secureTextEntry
            password
          />
          <TouchableOpacity style={styles.bottomStyle}>
            <Text>Login</Text>
          </TouchableOpacity>
          <Text style={styles.textBotton}>Forgot Password</Text>
        </View>

        <View style={styles.footer}>
          <Text>
            Don't have an account
            <Text style={styles.footerBottomText}>Register !</Text>
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 100,
    // paddingVertical:20
  },
  headerText: {
    fontSize: 24,
    fontWeight: '600',
  },
  logo: {
    paddingTop: 100,
  },
  loginFrom: {
    flex: 3,
    // backgroundColor: '#bbb',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  bottomStyle: {
    height: 50,
    borderRadius: 8,
    backgroundColor: '#6330c2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBotton: {color: '#6330C2', alignSelf: 'center'},
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  footerText: {
    color: '#6330C2',
  },
  footerBottomText: {
    color: '#6330C2',
    fontWeight: '600',
  },
});
