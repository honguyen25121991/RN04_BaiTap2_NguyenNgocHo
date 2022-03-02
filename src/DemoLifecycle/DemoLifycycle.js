import {StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import Child from './Child';

export default class DemoLifycycle extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');
    this.state = {
      text: '',
      number: 0,
    };
    this.onPress = this.onPress.bind(this);
  }

  static getDerivedStateFromProps() {
    console.log('getDerivedStateFromProps');
    return null;
  }

  componentDidMount() {
    this.setState({text: 'RN4'});
    console.log('componentDidMount');
  }

  onPress() {
    this.setState({number: this.state.number + 1});
    // console.log(this);
  }

  render() {
    console.log('render');
    console.log(this.state);
    return (
      <View style={styles.container}>
        <Text onPress={this.onPress}>Life Cycle</Text>
        <Child text={this.state.text} number={this.state.number} />
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
});
