import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import CardItem from './CardItem';

export default class DemoProps extends Component {
  listStudent = [
    {name: 'Nguyễn Văn A', age: 18, address: 'HCM'},
    // {name: 'Nguyễn Văn B', age: 19, address: 'HCM'},
    // {name: 'Nguyễn Văn C', age: 20, address: 'HCM'},
    // {name: 'Nguyễn Văn D', age: 21, address: 'HCM'},
    // {name: 'Nguyễn Văn E', age: 22, address: 'HCM'},
    // {name: 'Nguyễn Văn F', age: 23, address: 'HCM'},
  ];

  state = {
    number: 1,
  };

  renderListStudentWithMap = () => {
    return this.listStudent.map((item, index) => {
      const backgroundColor = index % 2 === 0 ? '#bff524' : '#eeef2b';
      return (
        <CardItem
          key={index}
          name={item.name}
          age={item.age}
          address={item.address}
          backgroundColor={backgroundColor}
        />
      );
    });
  };

  onPressButton = () => {
    this.setState({number: this.state.number + 1});
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Demo Props Component</Text>
        {/* {this.renderListStudentWithMap()} */}
        <CardItem name={'React Native 04'} age={this.state.number} />
        <TouchableOpacity onPress={this.onPressButton}>
          <Text>Count Up Age</Text>
        </TouchableOpacity>
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
  content: {
    backgroundColor: '#eee',
    borderRadius: 8,
    width: '80%',
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
  },
  txt: {
    fontSize: 24,
    fontWeight: '700',
  },
});
