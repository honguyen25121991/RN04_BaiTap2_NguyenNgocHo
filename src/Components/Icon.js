import React, {Component} from 'react';
import {TouchableOpacity, Image} from 'react-native';

export default class Icon extends Component {
  render() {
    const {onPress, iconSource} = this.props;

    return (
      <TouchableOpacity onPress={onPress}>
        <Image style={{width: 50, height: 50, margin: 6}} source={iconSource} />
      </TouchableOpacity>
    );
  }
}
