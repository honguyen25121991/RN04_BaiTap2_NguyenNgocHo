import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import {connect} from 'react-redux';

class DemoRedux extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Demo Redux</Text>
        <Text>State From Store: {this.props.number} </Text>
        <TouchableOpacity onPress={this.props.countUpReducer}>
          <Text>Count up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.countDownReducer}>
          <Text>Count Down</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    number: state.countReducer.number,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    countUpReducer: () => {
      dispatch({type: 'COUNT_UP'});
    },
    countDownReducer: () => {
      dispatch({type: 'COUNT_DOWN'});
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DemoRedux);

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
