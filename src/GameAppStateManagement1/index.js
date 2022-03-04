import {
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  View,
  StatusBar,
  Alert,
} from 'react-native';
import React, {Component} from 'react';
import {Background} from './assets';
import PlayerViewItemContainer from './PlayerViewItemContainer';
import InfoContainer from './components/InfoContainer';
import BottonContainer from './BottonContainer';
import SelectContainer from './components/SelectContainer';

export default class GameAGameAppStateManagement1 extends Component {
  // onPressSelect = selectedOption => {
  //   this.setState({playerSelected: selectedOption});
  // };

  // onPressPlayButton = () => {
  //   if (this.state.times > 0) {
  //     const randomBotSelect = setInterval(() => {
  //       const botSelected =
  //         selectedOptionConstant[Math.floor(Math.random() * 3)];
  //       this.setState({botSelected});
  //     }, 100);
  //     setTimeout(() => {
  //       clearInterval(randomBotSelect);
  //       const {times, score} = this.checkResult();
  //       this.setState({times, score});
  //     }, 2000);
  //   } else {
  //     Alert.alert(
  //       'Thông Báo',
  //       'Bạn đã hết lượt chơi vui lòng ấn "Reset" để chơi lại',
  //     );
  //   }
  // };

  // checkResult = () => {
  //   const {
  //     playerSelected: {type: playerSelectedType},
  //     botSelected: {type: botSelectedType},
  //     times,
  //     score,
  //   } = this.state;
  //   if (playerSelectedType === botSelectedType) {
  //     return {times: times - 1, score};
  //   } else if (
  //     (playerSelectedType === 'rock' && botSelectedType === 'scissor') ||
  //     (playerSelectedType === 'scissor' && botSelectedType === 'paper') ||
  //     (playerSelectedType === 'paper' && botSelectedType === 'rock')
  //   ) {
  //     return {times: times + 1, score: score + 1};
  //   } else {
  //     return {times: times - 1, score: score - 1};
  //   }
  // };

  onPressResetButton = () => this.setState({times: 9, score: 0});

  render() {
    return (
      <ImageBackground source={Background} style={styles.background}>
        <View style={styles.overlay} />
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.container}>
          <PlayerViewItemContainer />
          <SelectContainer />
          <InfoContainer />
          <BottonContainer
          // onPressPlayButton={this.onPressPlayButton}
          // onPressResetButton={this.onPressResetButton}
          />
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.6)',
    bottom: 0,
    right: 0,
    top: 0,
    left: 0,
  },
  container: {
    flex: 1,
  },
});
