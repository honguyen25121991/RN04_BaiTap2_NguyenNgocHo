import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

export default class ExamStyles extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, styles.box__top, styles.green]}>
          <View style={[styles.box_2, styles.yellow]}></View>
          <View style={[styles.box_2, styles.yellow]}></View>
        </View>
        <View style={[styles.box, styles.box__bottom, styles.purple]}>
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
    // borderRadius: 20,
  },
  box__top: {
    marginBottom: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  box__bottom: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 10,
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
    borderRadius: 20,
    marginVertical: 25,
    marginHorizontal: 20,
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
