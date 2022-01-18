import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

export default class ExamStyles extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, styles.box__header, styles.green]}>
          <View style={[styles.box_2, styles.yellow]}></View>
          <View style={[styles.box_2, styles.yellow]}></View>
        </View>
        <View style={[styles.box, styles.box__bottom, styles.purple]}>
          <View style={[styles.box_3]}>
            <View style={[styles.box_4, styles.blue]}></View>
            <View style={[styles.box_4, styles.blue]}></View>
          </View>
          <View style={[styles.box_3]}>
            <View style={[styles.box_4, styles.blue]}></View>
            <View style={[styles.box_4, styles.blue]}></View>
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
  },
  box__header: {
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
    width: '85%',
    marginVertical: 30,
  },
  box_3: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 20,
  },
  box_4: {
    flex: 1,
    borderRadius: 20,
    marginLeft: 35,
    marginRight: 35,
    marginVertical: 15,
    height: '85%',
  },

  purple: {
    backgroundColor: '#c8c8fA',
  },
  blue: {
    backgroundColor: '#4f82c0',
  },
  green: {
    backgroundColor: '#A1c99A',
  },
  yellow: {
    backgroundColor: '#ffffc2',
  },
});
