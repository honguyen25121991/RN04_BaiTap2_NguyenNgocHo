import React, {Component} from 'react';
import {View, Text} from 'react-native';
class StateFull extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 24, fontWeight: '700', textAlign: 'center'}}>
          Hello React Native Application Statefull Component
        </Text>
      </View>
    );
  }
}

export default StateFull;
