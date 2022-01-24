import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Alto_icon from '../../Images/Alto_icon.png';
import Alto_0 from '../../Images/Alto_0.png';

export default class BindingData extends Component {
  game = {
    id: 0,
    title: "Alto's Odyssey",
    icon: Alto_icon,
    subTitle:
      'Just beyond the horizon sits a majestic desert, vast and unexplored.',
    description:
      'Just beyond the horizon sits a majestic desert, vast and unexplored.\nJoin Alto and his friends and set off on an endless sandboarding journey to discover its secrets. Soar above windswept dunes, traverse thrilling canyons, and explore long-hidden temples in a fantastical place far from home.',
    age: '9+',
    rating: 4.4,
    banner: Alto_0,
    backgroundColor: '#824671CC',
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#343434',
        }}>
        <Image source={this.game.icon} resizeMode="contain" />
        <View
          style={{
            flex: 1,
            backgroundColor: this.game.backgroundColor,
            width: '90%',
            marginTop: 8,
            padding: 10,
            height: 100,
            borderRadius: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Image
            source={this.game.preview}
            style={{
              width: 50,
              height: 50,
              borderRadius: 8,
              borderWidth: 1,
              backgroundColor: 'rgba(255,255,255,0.5)',
            }}
          />
          <View style={{flexBasis: '80%'}}>
            <Text style={{color: '#fff', fontWeight: '700', fontSize: 20}}>
              {this.game.title}
            </Text>
            <Text style={{color: '#fff', fontSize: 14}}>
              {this.game.subTitle}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
