import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import {Rock, Paper, Scissor, bgGame, player, playerComputer} from './assets';
import PlayerViewItem from './components/PlayerViewItem';
import PlaySelect from './components/PlayerSeled';
import ButtonSelect from './components/Button';
import LinearGradient from 'react-native-linear-gradient';

export default class GameApp1 extends Component {
  render() {
    return (
      <ImageBackground source={bgGame} style={styles.background}>
        <View style={styles.overlay} />
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.container}>
          <View style={styles.playerView}>
            <PlayerViewItem player={player} playSelectedImage={Rock} />
            <PlayerViewItem player={playerComputer} playSelectedImage={Paper} />
          </View>
          <View style={styles.selectView}>
            <PlaySelect playSelectedImage={Rock} />
            <PlaySelect playSelectedImage={Paper} />
            <PlaySelect playSelectedImage={Scissor} />
          </View>
          <View style={styles.infoView}>
            <Text style={styles.infoText}>Score :0</Text>
            <Text style={styles.infoText}>Time :9</Text>
          </View>
          <View style={styles.buttonView}>
            <ButtonSelect title="Play" colors={['#ef0a72', '#fec5e3']} />
            <ButtonSelect title="Back" colors={['#fdad3c', '#fbf40e']} />
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.6)',
    bottom: 0,
    top: 0,
    right: 0,
    left: 0,
  },
  playerView: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  selectView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  infoView: {
    flex: 1,
    alignItems: 'center',
  },
  infoText: {fontSize: 40, fontWeight: 'bold', color: '#26ddbb'},

  buttonView: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  // linearGradient: {
  //   flex: 1,
  //   paddingLeft: 15,
  //   paddingRight: 15,
  //   borderRadius: 5,
  // },
  buttonText: {
    fontSize: 18,
    color: '#ffffff',
  },
});
