import {Text, StyleSheet, View, TextInput as RNTextInput} from 'react-native';
import React, {Component} from 'react';
import EntypoIcon from 'react-native-vector-icons/Entypo';

export default class TextInput extends Component {
  render() {
    const {title, placeholder, secureTextEntry, password} = this.props;

    return (
      <View style={styles.container}>
        <RNTextInput
          placeholder={placeholder}
          style={styles.textInput}
          {...this.props}
          secureTextEntry={secureTextEntry}></RNTextInput>
        <Text style={styles.textInputTitle}>{title}</Text>
        {password && (
          <EntypoIcon
            name="eye"
            color="#bbb"
            size={20}
            style={styles.rightIcon}
            {...this.props}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#f3f0ee',
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingTop: 15,
    marginBottom: 10,
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
    bottom: 25,
  },
});
