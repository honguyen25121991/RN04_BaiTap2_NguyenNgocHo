import {Text, View, TouchableOpacity, StyleSheet, Button} from 'react-native';
import React, {Component} from 'react';

class Title extends React.Component {
  state = {
    title: '',
    text: '',
  };
  changeTitle = title => {
    this.setState({title});
  };
  changeText = text => {
    this.setState({text});
  };
  render() {
    return (
      <TitleFunction
        title={this.state.title}
        changeTitle={this.changeTitle}
        text={this.state.text}
        changeText={this.changeText}
      />
    );
  }
}

const TitleFunction = props => {
  return (
    <View style={styles.container}>
      <Text>{props.title}</Text>
      <TouchableOpacity>
        <Text onPress={() => props.changeTitle('After Change Title')}>
          Change Title
        </Text>
      </TouchableOpacity>
      <Text>{props.text}</Text>
      <TouchableOpacity>
        <Text onPress={() => props.changeText('After Change Text')}>
          Change Text
        </Text>
      </TouchableOpacity>
      {/* <Button
        title="Click me"
       onPress={() => props.changeTitle('After Change')}
       color="#fff000"
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    color: 'white',
    width: '60',
  },
});
export default Title;
