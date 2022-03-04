import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';

export default class ButtonSelect extends Component {
  render() {
    const {title, colors} = this.props;
    return (
      <TouchableOpacity>
        <LinearGradient colors={colors} style={[styles.butonView]}>
          <Text style={[styles.buttonText]}>{title}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  butonView: {
    width: 150,
    height: 60,
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
