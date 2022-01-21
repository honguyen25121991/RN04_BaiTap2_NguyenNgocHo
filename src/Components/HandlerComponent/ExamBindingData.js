import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class BindingData extends Component {
  // game = {
  //   id: 0,
  //   title: "Alto's Odyssey",
  //   icon: Alto_icon,
  //   subTitle:
  //     'Just beyond the horizon sits a majestic desert, vast and unexplored.',
  //   description:
  //     'Just beyond the horizon sits a majestic desert, vast and unexplored.\nJoin Alto and his friends and set off on an endless sandboarding journey to discover its secrets. Soar above windswept dunes, traverse thrilling canyons, and explore long-hidden temples in a fantastical place far from home.',
  //   age: '9+',
  //   rating: 4.4,
  //   banner: Alto_0,
  //   backgroundColor: '#824671CC',
  // };
  render() {
    return (
      <View styles={styles.container}>
        <Image />
        <View>
          <Image />
          <View>
            <Text>11</Text>
            <Text></Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#343434',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
