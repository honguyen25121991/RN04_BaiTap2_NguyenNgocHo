import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import ChildComponent from './ChildComponent';

const DemoHook = () => {
  // const [state, setState] = useState({number: 0, name: 'Name'});
  const [number, setNumber] = useState(0);
  const [number_2, setNumber_2] = useState(2);

  const countUpNumber = useCallback(() => {
    console.log('useCallback', number);
    setNumber(number + 1);
  }, [number]);
  const countUpNumber_2 = () => setNumber_2(number_2 + 2);

  // const changeName = () => setState({...state, name: state.name + number});
  useEffect(() => {
    console.log('Component Did Mount');
  }, []);
  useEffect(() => {
    console.log('Component Did Update', number);
  }, [number]);

  return (
    <View style={styles.container}>
      <Text>DemoHook</Text>

      <NumberView number={number} />
      {/* <Text>{number}</Text> */}
      <Text onPress={countUpNumber}>Count Up Number</Text>
      {/* <Text>{state.name}</Text>
      <Text onPress={changeName}>Change Name</Text> */}
      <Text>{number_2}</Text>
      <Text onPress={countUpNumber_2}>Count Up Number _2</Text>
      <ChildComponent countUpNumber={countUpNumber} />

      {/* <Text>{state.name}</Text> */}
      {/* <Text onPress={changeName}>Change Name</Text> */}
    </View>
  );
};

export default DemoHook;

// const NumberView = ({number}) => {
//   useEffect(() => {
//     return () => {
//       console.log('component Will Unmound');
//     };
//   }, []);
//   return (
//     <View>
//       <Text> {number}</Text>
//     </View>
//   );
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
