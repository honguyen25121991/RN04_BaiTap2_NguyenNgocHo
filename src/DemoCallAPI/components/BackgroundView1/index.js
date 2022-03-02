import {StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';

export default class BackroundView1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.cycleHeader}></View>
        </View>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceef2',
  },
  headerContainer: {
    backgroundColor: '#000',
    height: 300,
    width: '100%',
    borderBottomLeftRadius: 80,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  cycleHeader: {
    backgroundColor: '#000',
    width: 50,
    height: 50,
    borderRadius: 25,
    position: 'absolute',
    right: -10,
    bottom: -5,
  },
});
