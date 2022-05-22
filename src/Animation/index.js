import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
  Animated,
} from 'react-native';
const {width: screenWidth} = Dimensions.get('screen');
const BOX_SIZE = 100;
const AnimationComponent = () => {
  const [moved, setMoved] = useState(false);
  const animatedTimingValue = useRef(new Animated.Value(0)).current;
  const translateX = useRef(new Animated.Value(-100)).current;
  const translateY = useRef(new Animated.Value(-100)).current;

  const onPress = () => {
    setMoved(!moved);
    //   for (let index = 0; index < (screenWidth - BOX_SIZE) / 2; index++) {
    //     setTimeout(() => {
    //       console.log(index);
    //       setLeft(index);
    //     }, index * 20);
    //   }
  };
  //   Animated.timing(animatedValue, {
  //     toValue: (screenWidth - BOX_SIZE) / 2,
  //   }).start();
  // useEffect(() => {
  //   setInterval(() => {
  //     for (let index = 0; index < 200; index++) {
  //       console.log('block JS');
  //     }
  //   }, 100);
  // }, []);
  useEffect(() => {
    Animated.timing(translateX, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start(({finished}) => {
      if (finished) {
        Animated.timing(translateY, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }).start();
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      {/* <Animated.View
        style={[styles.box, {transform: [{translateX: animatedSpringValue}]}]}
      /> */}
      <Animated.View
        style={[
          styles.box,
          // {opacity: animatedTimingValue},
          {transform: [{translateY}, {translateX}]},
        ]}
      />
      {/* <View style={styles.btnContainer}>
        <Button title="Move box" onPress={onPress} />
      </View> */}
    </View>
  );
};

export default AnimationComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    height: BOX_SIZE,
    width: BOX_SIZE,
    backgroundColor: 'green',
    marginBottom: 15,
    borderRadius: 8,
  },
  btnContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
});
