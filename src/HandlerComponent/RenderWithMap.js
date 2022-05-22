import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';

export default class RenderWithMap extends Component {
  listStudent = [
    {name: 'Nguyễn Văn A', age: 18},
    {name: 'Nguyễn Văn B', age: 19},
    {name: 'Nguyễn Văn C', age: 20},
    {name: 'Nguyễn Văn D', age: 21},
    {name: 'Nguyễn Văn E', age: 22},
    {name: 'Nguyễn Văn F', age: 23},
  ];

  renderListStudent = () => {
    const jsx = [];
    for (let index = 0; index < this.listStudent.length; index++) {
      const backgroundColor = index % 2 === 0 ? '#bef34f' : '#eee4ee';
      const element = (
        <View key={index} style={[styles.content, {backgroundColor}]}>
          <Text style={styles.txt}>Tên :{this.listStudent[index].name}</Text>
          <Text style={styles.txt}>Tuổi :{this.listStudent[index].age}</Text>
        </View>
      );
      jsx.push(element);
    }
    return jsx;
  };

  renderListStudentWithMap = () => {
    return this.listStudent.map((item, index) => {
      const backgroundColor = index % 2 === 0 ? '#bef34f' : '#eee4ee';
      return (
        <View key={index} style={[styles.content, {backgroundColor}]}>
          <Text style={styles.txt}>Tên :{item.name}</Text>
          <Text style={styles.txt}>Tuổi :{item.age}</Text>
        </View>
      );
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>RenderWithMap</Text>
        {/* {this.renderListStudent()} */}
        {this.renderListStudentWithMap()}
        {/* const backgroundColor = index % 2 === 0 ? '#bef34f' : '#eee4ee';
      return (
        <View key={index} style={[styles.content, {backgroundColor}]}>
          <Text style={styles.txt}>Tên :{item.name}</Text>
          <Text style={styles.txt}>Tuổi :{item.age}</Text>
        </View>
      ); */}
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
    width: '80%',
    backgroundColor: '#eee',
    borderRadius: 10,
    paddingVertical: 10,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  txt: {
    fontSize: 24,
    fontWeight: '700',
  },
});
