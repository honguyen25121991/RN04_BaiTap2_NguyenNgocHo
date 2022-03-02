import {Text, View, StyleSheet, Image} from 'react-native';
import React, {Component} from 'react';

export default class PlayerViewItem extends Component {
  render() {
    const {player, playSelectedImage} = this.props;

    return (
      <View style={styles.playViewContainer}>
        <View style={styles.playSelectedViewContainer}>
          <Image
            source={playSelectedImage}
            style={styles.playerSelectedImage}
          />
        </View>
        <View style={styles.triangle} />
        <Image source={player} style={styles.characterImage} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  playViewContainer: {alignItems: 'center'},
  playSelectedViewContainer: {
    width: 100,
    height: 100,
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#c0bf2c',
    justifyContent: 'center',
    alignItems: 'center',
  },

  playerSelectedImage: {
    height: 80,
    width: 80,
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 7,
    borderRightWidth: 7,
    borderTopWidth: 14,
    borderStyle: 'solid',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#c0bf2c',
  },
  characterImage: {
    marginTop: 10,
    height: 100,
    width: 100,
  },
});
