import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';

export default class BackgroundView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.backgroundView}>
          <View style={styles.bottomCycle} />
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
  backgroundView: {
    top: 0,
    left: 0,
    position: 'absolute',
    backgroundColor: '#000',
    height: 300,
    width: '100%',
    borderBottomLeftRadius: 80,
  },
  bottomCycle: {
    position: 'absolute',
    backgroundColor: '#000',
    height: 50,
    width: 50,
    borderRadius: 25,
    bottom: -5,
    right: -10,
  },
});
