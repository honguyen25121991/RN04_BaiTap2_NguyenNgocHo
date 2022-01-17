import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class DemoStyles extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Text>Demo Styles Component</Text>
        <View>
          <View style={styles.box} />
          <View style={{flexDirection: 'row'}}>
            <View style={styles.box} />
            <View style={styles.box} />
          </View>
          <View style={styles.box} />
        </View>
      </View>
    );
  }
}

const styles = {
  box: {
    backgroundColor: '#bfb',
    width: 100,
    height: 100,
    borderWidth: 3,
    borderStyle: 'dashed',
    borderColor: 'grey',
  },
};
