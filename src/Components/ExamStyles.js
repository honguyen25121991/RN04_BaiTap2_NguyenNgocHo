import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class ExamStyles extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.infoText}>Purple: #C9C9FF</Text>
        </View>
        <View style={[styles.box, styles.blue]}>
          <Text style={styles.infoText}>Blue: #3D85C6</Text>
        </View>
        <View style={[styles.box, styles.green]}>
          <Text style={styles.infoText}>Green: #96CC96</Text>
        </View>
        <View style={[styles.box, styles.yellow]}>
          <Text style={styles.infoText}>Yellow: #F4B940</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 15,
  },
  box: {
    flex: 1,
    backgroundColor: '#C9C9FF',
    marginHorizontal: 10,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  blue: {
    backgroundColor: '#3D85C6',
  },
  green: {
    backgroundColor: '#96CC96',
  },
  yellow: {
    backgroundColor: '#F4B940',
  },
  infoText: {
    fontWeight: '900',
  },
});
