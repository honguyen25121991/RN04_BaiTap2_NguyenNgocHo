import {Text, View} from 'react-native';
import React, {Component, PureComponent} from 'react';

export default class Child extends PureComponent {
  //   shouldComponentUpdate(nextProps) {
  //     console.log('shouldComponentUpdate Child');
  //     if (nextProps.number > 3) {
  //       return true;
  //     }
  //     return false;
  //   }
  componentDidUpdate() {
    console.log('componentDidUpdate Child');
  }

  render() {
    console.log('render Child components');
    return (
      <View>
        <Text>Child props Text : {this.props.text}</Text>
        <Text>Child props : {this.props.number}</Text>
      </View>
    );
  }
}
