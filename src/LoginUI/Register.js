import {
  StyleSheet,
  Text,
  TextInput as RNTextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
  Alert,
} from 'react-native';
import React, {Component} from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';
import TextInput from './components/TextInput';
import axios from 'axios';
import {
  checkRequired,
  emailValidation,
  letterValidation,
  numberValidation,
  phoneValidator,
  rangeValidation,
} from './utils/validator';

export default class Register extends Component {
  state = {
    value: {
      email: '',
      password: '',
      name: '',
      phone: '',
    },
    error: {
      email: '',
      password: '',
      name: '',
      phone: '',
    },
  };

  onChangeText = (value, key) => {
    this.setState({
      value: {...this.state.value, [key]: value},
      error: {...this.state.error, [key]: ''},
    });

    this.validateData(key, value);
  };

  validateData = (key, value) => {
    if (value.trim()) {
      switch (key) {
        case 'email':
          this.setState({
            error: {...this.state.error, [key]: emailValidation(value)},
          });
          break;
        case 'password':
          this.setState({
            error: {
              ...this.state.error,
              [key]: rangeValidation({value, input: key, max: 8, min: 4}),
            },
          });
          break;

        case 'name':
          this.setState({
            error: {
              ...this.state.error,
              [key]: letterValidation({value, input: key}),
            },
          });
          break;

        case 'phone':
          this.setState({
            error: {
              ...this.state.error,
              [key]: numberValidation({value, input: key}),
            },
          });
          break;

        default:
          break;
      }
    }
  };
  onBlur = (value, key) => {
    const errorMsg = checkRequired(value);
    this.setState({error: {...this.state.error, [key]: errorMsg}});
    this.validateData(key, value);
  };
  checkRequiredAllInput = async () => {
    const {
      email: emailValue,
      name: nameValue,
      password: passwordValue,
      phone: phoneValue,
    } = this.state.value;
    const email = checkRequired(emailValue);
    const name = checkRequired(nameValue);
    const password = checkRequired(passwordValue);
    const phone = checkRequired(phoneValue);
    this.setState({error: {...this.state.error, email, password, name, phone}});
  };
  onSubmit = async () => {
    await this.checkRequiredAllInput();
    const {email, name, password, phone} = this.state.error;
    const isValidData = !email && !name && !password && !phone;

    if (isValidData) {
      console.log('Call API');
    }
    try {
      await axios({
        method: 'POST',
        url: 'http://svcy3.myclass.vn/api/Users/signup',
        data: {...this.state.value, gender: true},
      });
      console.log(result);
    } catch (err) {
      if (err.message.includes('400')) {
        Alert.alert('Email này đã được sử dụng');
      }
    }
  };

  render() {
    const {value, error} = this.state;
    console.log(this.state);
    return (
      <SafeAreaView style={styles.container}>
        <AntIcon
          name="left"
          size={35}
          style={styles.backBotton}
          onPress={this.props.navigate}
        />
        <View style={styles.header}>
          <AntIcon
            styles={styles.logo}
            name="lock"
            size={100}
            color="#6330c2"
          />
          <Text style={styles.headerText}>Register</Text>
        </View>
        <View style={styles.loginFrom}>
          <TextInput
            title="Email"
            placeholder="email@gmail.com"
            onChangeText={valueText => this.onChangeText(valueText, 'email')}
            value={value.email}
            errorMessage={error.email}
            onBlur={() => this.onBlur(value.email, 'email')}
          />

          <TextInput
            title="PassWord"
            placeholder="*******"
            secureTextEntry
            password
            onChangeText={valueText => this.onChangeText(valueText, 'password')}
            value={value.password}
            errorMessage={error.password}
            onBlur={() => this.onBlur(value.password, 'password')}
          />

          <TextInput
            title="Name"
            placeholder=" Nguyen Van A "
            onChangeText={valueText => this.onChangeText(valueText, 'name')}
            value={value.name}
            errorMessage={error.name}
            onBlur={() => this.onBlur(value.name, 'name')}
          />
          <TextInput
            title="Phone"
            placeholder="091-xxx-xxx"
            onChangeText={valueText => this.onChangeText(valueText, 'phone')}
            value={value.phone}
            errorMessage={error.phone}
            onBlur={() => this.onBlur(value.phone, 'phone')}
          />
          <TouchableOpacity style={styles.bottomStyle} onPress={this.onSubmit}>
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
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
  backBotton: {paddingLeft: 15},
});
