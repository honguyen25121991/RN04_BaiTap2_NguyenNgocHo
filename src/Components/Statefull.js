import React from 'react';
import {View, Text} from 'react-native';

export default class StateFull extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          //   backgroundColor: '#bbf',
        }}>
        <Text style={{fontSize: 24, fontWeight: '700'}}>
          Hello React Native App Application StateFull Component
        </Text>
        {/* <Image /> */}
      </View>
    );
  }
}
