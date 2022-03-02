import {View, StyleSheet, Image} from 'react-native';
import React, {Component} from 'react';

export default class PlaySelect extends Component {
  render() {
    const {playSelectedImage} = this.props;

    return (
      <View style={styles.playViewContainer}>
        <Image source={playSelectedImage} style={styles.playerSelectedImage} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  playViewContainer: {
    height: 80,
    width: 80,
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#c0bf2c',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playerSelectedImage: {
    height: 60,
    width: 60,
  },
});
