import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import React, {Component} from 'react';

export default class BindingData extends Component {
  name = 'React Native';
  address = 'HCM';
  state = {
    isLogin: true,
  };
  renderName() {
    if (this.state.isLogin) {
      return (
        <>
          <Text>{this.name}</Text>
        </>
      );
    }
    return (
      <>
        <Text>{this.address}</Text>
      </>
    );
  }
  handlePress = () => {
    this.setState({isLogin: false});
  };
  handlePress1 = () => {
    this.setState({isLogin: true});
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>BindingData</Text>
        {this.renderName()}

        {/* {this.state.isLogin ? (
          <>
            <Text>{this.address}</Text>
          </>
        ) : (
          <Text>{this.name}</Text>
        )} */}
        {/* {this.state.isLogin && (
          <>
            <Text>{this.address}</Text>
          </>
          
        )} */}
        <TouchableOpacity
          style={styles.btnSignIn}
          onPress={() => this.handlePress()}>
          <Text style={styles.txtSignIn}>Sign In</Text>
        </TouchableOpacity>
        <TouchableHighlight
          style={[styles.btnSignIn, styles.btnGreen]}
          onPress={this.handlePress1}
          underlayColor="#fbf">
          <Text style={styles.txtSignIn}>Sign In</Text>
        </TouchableHighlight>
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
  btnSignIn: {
    height: 50,
    width: 100,
    backgroundColor: '#bbf',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10,
  },
  btnGreen: {
    backgroundColor: '#bfb',
  },
  txtSignIn: {
    fontSize: 18,
  },
});
