import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {connect} from 'react-redux';

class TextRedux extends Component {
  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Text>TextRedux</Text>
        <Text>Count Number :{this.props.number}</Text>
        <TouchableOpacity onPress={this.props.countUp}>
          <Text>Count Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.countDown}>
          <Text>Count Down</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    number: state.countNumber.number,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    countUp: () => {
      dispatch({
        type: 'COUNT_UP',
      });
    },
    countDown: () => {
      dispatch({
        type: 'COUNT_DOWN',
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TextRedux);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
