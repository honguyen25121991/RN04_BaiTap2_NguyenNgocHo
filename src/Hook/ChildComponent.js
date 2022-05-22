import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';

const ChildComponent = () => {
  console.log('render child component');
  return (
    <View>
      <Text>ChildComponent</Text>
    </View>
  );
};

export default memo(ChildComponent);
