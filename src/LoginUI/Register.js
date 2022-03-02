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

export default class Register extends Component {
  state = {
    email: '',
    password: '',
    name1: '',
    phone: '',
  };

  onChangeText = (value, key) => {
    this.setState({[key]: value});
    console.log(value);
  };
  render() {
    const {email, password, name1, phone} = this.state;
    return (
      <View style={styles.container}>
        <AntIcon name="left" size={30} style={{paddingLeft: 20}} />
        <View style={styles.header}>
          <AntIcon
            styles={styles.logo}
            name="lock"
            size={100}
            color="#6330c2"
          />
          <Text style={styles.headerText}>Register From</Text>
        </View>
        <View style={styles.loginFrom}>
          <TextInput
            title="Email"
            placeholder="email@gmail.com"
            value={email}
            onChangeText={value => this.onChangeText(value, 'email')}
          />

          <TextInput
            title="PassWord"
            placeholder="*******"
            secureTextEntry
            password
            value={password}
            onChangeText={value => this.onChangeText(value, 'password')}
          />
          <TextInput
            title="Name"
            placeholder=" Nguyen Van A"
            value={name1}
            onChangeText={value => this.onChangeText(value, 'name')}
          />
          <TextInput
            title="Phone"
            placeholder="091-xxx-xxx"
            value={phone}
            onChangeText={value => this.onChangeText(value, 'phone')}
          />

          <TouchableOpacity style={styles.bottomStyle}>
            <Text>Submit</Text>
          </TouchableOpacity>
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
    flex: 1,
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
});
