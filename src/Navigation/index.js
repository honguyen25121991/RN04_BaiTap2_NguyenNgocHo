import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IconButton from 'react-native-vector-icons/AntDesign';
class HomeScreen extends Component {
  render() {
    console.log(JSON.stringify(this.props, null, 2));

    return (
      <SafeAreaView style={{flex: 1}}>
        <Text>Home Screens</Text>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{color: '#bbbfff'}}
            onPress={() => this.props.navigation.navigate('DetailScreen-home')}>
            Move to Detail
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}
class SettingScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Text>SettingScreen</Text>
        <Text
          style={{color: 'red'}}
          onPress={() =>
            this.props.navigation.navigate('DetailScreen-Setting')
          }>
          Move another Detail
        </Text>
      </SafeAreaView>
    );
  }
}
class DetailScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Text>Detail Screens</Text>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{color: 'red'}}
            onPress={() => this.props.navigation.push('DetailScreen-home')}>
            Move another Detail
          </Text>
          <Text
            style={{color: 'red'}}
            onPress={() => this.props.navigation.navigate('HomeScreen')}>
            Navigate home
          </Text>
          <Text
            style={{color: 'red'}}
            onPress={() => this.props.navigation.goBack()}>
            Go back
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}

class RootStack extends Component {
  render() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DetailScreen-home" component={DetailScreen} />
      </Stack.Navigator>
    );
  }
}
class SettingStack extends Component {
  render() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Setting" component={SettingScreen} />
        <Stack.Screen name="DetailScreen-Setting" component={DetailScreen} />
      </Stack.Navigator>
    );
  }
}
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default class RootApp extends Component {
  render() {
    return (
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="HomeScreen"
          component={RootStack}
          options={{
            tabBarIcon: () => <IconButton name="home" size={30} />,
          }}></Tab.Screen>
        <Tab.Screen
          name="SettingStack"
          component={SettingStack}
          options={{
            tabBarIcon: () => <IconButton name="home" size={30} />,
          }}></Tab.Screen>
      </Tab.Navigator>
    );
  }
}
