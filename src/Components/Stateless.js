import React from 'react';
import {View, Text} from 'react-native';

const StateLess = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#bbf',
      }}>
      <Text style={{fontSize: 24, fontWeight: '700'}}>
        Hello React Native App Application StateLess Component
      </Text>
    </View>
  );
};

export default StateLess;
