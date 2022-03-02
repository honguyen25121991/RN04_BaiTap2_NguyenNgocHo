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
  state = {
    isShowLoading: true,
  };
  mavigate = () => {
    this.setState({
      isShowLoading: !this.isShowLoading,
    });
  };
  render() {
    const {isShowLoading} = this.state;
    return <>{isShowLoading ? <LoginUI /> : <Register />}</>;
  }
}
