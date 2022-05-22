import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import ChildComponet from './Childcomponent';

const UnitTest = () => {
  const [state, setState] = useState({number: 0, name: 'Rn04'});
  const countUp = useCallback(
    () => setState({...state, number: state.number + 1}),
    [state.number],
  );

  const changName = () => setState({...state, name: state.name + state.number});
  useEffect(() => {
    console.log('Components Did Mount');
  }, []);
  useEffect(() => {
    console.log('Components Did Update', state.number);
  }, [state.number]);
  // useCallback
  return (
    <View style={styles.container}>
      <Text>UnitTest</Text>
      <Text>{state.number}</Text>
      <Text onPress={countUp}>Count Up Number</Text>
      <Text>{state.name}</Text>
      <Text onPress={changName}>Change Name</Text>
      <ChildComponet countUp={countUp} />
    </View>
  );
};

export default UnitTest;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
