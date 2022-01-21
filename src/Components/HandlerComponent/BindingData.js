import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

export default class BindingData extends Component {
  textRender = 'Hello React Native 04';
  textLogin = ' Should Login My App';
  state = {
    isLogin: true,
  };
  renderLogin = () => {
    if (this.state.isLogin) {
      return <Text style={[styles.text]}>{this.textRender}</Text>;
    }
    return <Text style={[styles.text]}>Binding Data Component</Text>;
  };
  // onPressLogin = function () {
  //   console.log('Login');
  // };
  onPressLogout = () => {
    this.setState({isLogin: !this.state.isLogin});
    console.log('logout');
  };
  onPressLogin = () => {
    this.setState({isLogin: !this.state.isLogin}, () => {
      console.log('Done set state', this.state.isLogin);
    });
    console.log('login');
  };

  render() {
    console.log('render Run', this.state.isLogin);
    return (
      <View style={[styles.container]}>
        {this.renderLogin()}
        <Text style={[styles.text]}>
          {this.state.isLogin ? this.state.textRender : this.state.textLogin}
        </Text>
        <TouchableOpacity
          style={styles.botton}
          onPress={() => {
            this.onPressLogin();
          }}>
          <Text style={{color: 'white'}}>
            {this.state.isLogin ? 'Logout' : 'Login'}
          </Text>
        </TouchableOpacity>
        <TouchableHighlight
          style={styles.botton}
          onPress={() => this.onPressLogout()}
          underlayColor={'green'}>
          <Text style={{color: 'white'}}>Logout</Text>
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
  text: {
    fontSize: 24,
    fontWeight: '700',
  },
  botton: {
    backgroundColor: 'red',
    height: 50,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 10,
  },
});
