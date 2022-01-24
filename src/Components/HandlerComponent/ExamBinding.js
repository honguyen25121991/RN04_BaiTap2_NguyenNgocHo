import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';

export default class ExamBinding extends Component {
  showAlert() {
    Alert.alert('Hello Cyber Soft');
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.showAlert} style={styles.btnAller}>
          <Text>Thong bao</Text>
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
  btnAller: {
    backgroundColor: '#3be',
    padding: 20,
    borderRadius: 5,
  },
});
