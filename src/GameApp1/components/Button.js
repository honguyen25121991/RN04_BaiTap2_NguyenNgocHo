import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';

export default class ButtonSelect extends Component {
  render() {
    const {title, backgroundColor} = this.props;
    return (
      <TouchableOpacity style={[styles.butonView, {backgroundColor}]}>
        <Text style={[styles.buttonText]}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  butonView: {
    width: 150,
    height: 60,
    backgroundColor: 'pink',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 30,
    color: '#fff',
    fontWeight: '800',
  },
});
