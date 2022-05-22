import {
  Text,
  StyleSheet,
  View,
  TextInput as RNTextInput,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import EntypoIcon from 'react-native-vector-icons/Entypo';

export default class TextInput extends Component {
  state = {
    secureTextEntry: this.props.secureTextEntry,
  };

  render() {
    const {title, placeholder, password, errorMessage, touched} = this.props;
    const {secureTextEntry} = this.state;

    const isShowError = !!errorMessage && touched;

    return (
      <View style={styles.wrapperTextInput}>
        <View>
          <RNTextInput
            {...this.props}
            placeholder={placeholder}
            style={[styles.textInput, isShowError && styles.errorBackground]}
            secureTextEntry={secureTextEntry}></RNTextInput>
          <Text style={styles.textInputTitle}>{title}</Text>
          {password && (
            <TouchableOpacity
              onPress={() => {
                this.setState({secureTextEntry: !this.state.secureTextEntry});
              }}>
              <EntypoIcon
                name="eye"
                color="#bbb"
                size={20}
                style={styles.rightIcon}
                {...this.props}
              />
            </TouchableOpacity>
          )}
          {isShowError && (
            <Text style={styles.errorMessage}> * {errorMessage}</Text>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  errorBackground: {
    borderColor: 'red',
    backgroundColor: '#f9c8c8',
  },
  errorMessage: {
    color: 'red',
    marginTop: 5,
  },
  wrapperTextInput: {
    marginBottom: 10,
  },
  textInput: {
    backgroundColor: '#f3f0ee',
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingTop: 15,
    // marginBottom: 10,
  },
  textInputTitle: {
    color: '#bbb',
    position: 'absolute',
    top: 5,
    left: 20,
  },
  rightIcon: {
    position: 'absolute',
    right: 20,
    bottom: 15,
  },
});
