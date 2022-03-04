import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import {connect} from 'react-redux';
class DemoRedux1 extends Component {
  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Text>DemoRedex</Text>
        <Text>State From Store :{this.props.number}</Text>
        <TouchableOpacity onPress={this.props.countUpNumber}>
          <Text>Count Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.countDownNumber}>
          <Text>Count Down</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {number: state.countUpReducer.number};
};

const mapDispatchToProps = dispatch => {
  return {
    countUpNumber: () => {
      dispatch({type: 'countUp'});
    },
    countDownNumber: () => {
      dispatch({type: 'countDown'});
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DemoRedux1);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
