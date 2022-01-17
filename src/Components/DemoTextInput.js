import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';

export default class DemoTextInput extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          // backgroundColor: '#bbf',
        }}>
        <Text>Demo Text Input Component</Text>
        <TextInput
          placeholder="Username"
          style={{
            width: '70%',
            backgroundColor: '#eee',
            fontSize: 30,
            borderWidth: 1,
            borderRadius: 10,
            paddingLeft: 10,
          }}
        />
      </View>
    );
  }
}
