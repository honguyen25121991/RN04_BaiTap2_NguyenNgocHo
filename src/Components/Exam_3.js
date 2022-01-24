import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Icon from './Icon';

import care from '../Images/Exam_3/emoji/care.png';
import angry from '../Images/Exam_3/emoji/angry.png';
import haha from '../Images/Exam_3/emoji/haha.png';
import like from '../Images/Exam_3/emoji/like.png';
import love from '../Images/Exam_3/emoji/love.png';
import sad from '../Images/Exam_3/emoji/sad.png';

export default class Exam_3 extends Component {
  array = [care, angry, sad, haha, like, love];
  state = {
    handleEmoji: care,
  };

  onPressIcon = handleEmoji => this.setState({handleEmoji});

  renderEmoji = () => {
    return this.array.map((emoji, index) => (
      <Icon
        handleEmoji={emoji === this.state.handleEmoji}
        key={index}
        iconSource={emoji}
        onPress={() => this.onPressIcon(emoji)}
      />
    ));
  };

  render() {
    const {handleEmoji} = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Bạn thấy như thế nào ?</Text>
        <Image style={styles.handleEmoji} source={handleEmoji} />

        <View style={styles.emojiContainer}>{this.renderEmoji()}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontWeight: '700',
    fontSize: 20,
  },
  handleEmoji: {
    height: 150,
    width: 150,
    marginVertical: 20,
  },
  emojiContainer: {
    flexDirection: 'row',
  },
});
