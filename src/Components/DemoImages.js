import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import Cat from '../Images/cat.jpeg';

export default class DemoImages extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {/* Internal Images */}
        {/* <Image source={Cat} style={{width: 100, height: 100}} /> */}
        {/* Extanal Images */}
        <Image
          source={{
            uri: 'https://vnn-imgs-f.vgcloud.vn/2021/09/07/09/chu-meo-noi-tieng-mang-xa-hoi-voi-phong-cach-thoi-trang-sanh-dieu.jpeg',
          }}
          style={{width: 100, height: 200}}
        />
        <Text>Demo Images Component</Text>
      </View>
    );
  }
}
