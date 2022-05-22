import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';

const ChildComponet = ({number}) => {
  console.log('render ChildComponents');
  return (
    <View>
      <Text style={{color: 'red'}}>ChildComponet</Text>
      <Text>{number}</Text>
    </View>
  );
};

export default memo(ChildComponet);
