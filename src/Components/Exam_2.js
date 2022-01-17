import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

export default class ExamStyles extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, styles.green]}>
          <View style={[styles.box_2, styles.yellow]}></View>
          <View style={[styles.box_2, styles.yellow]}></View>
        </View>
        <View style={[styles.box, styles.purple]}>
          <View style={[styles.box_3]}>
            <View style={[styles.box, styles.box_4, styles.blue]}></View>
            <View style={[styles.box, styles.box_4, styles.blue]}></View>
          </View>
          <View style={[styles.box_3]}>
            <View style={[styles.box, styles.box_4, styles.blue]}></View>
            <View style={[styles.box, styles.box_4, styles.blue]}></View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginVertical: 10,
  },
  box_2: {
    flex: 1,
    borderRadius: 20,
    width: '90%',
    marginVertical: 30,
  },
  box_3: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 20,
    width: '85%',
  },

  box_4: {
    margin: 15,
  },

  purple: {
    backgroundColor: '#c9c9ff',
  },
  blue: {
    backgroundColor: '#3d85c6',
  },
  green: {
    backgroundColor: '#96cc96',
  },
  yellow: {
    backgroundColor: '#ffffbb',
  },
});
