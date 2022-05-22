/* eslint-disable react-native/no-inline-styles */
import React, {Fragment} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Text} from 'react-native';
import StateFull from './src/Component/Statefull';
import StateLess from './src/Component/Stateless';
import DemoImage from './src/Component/DemoImage';
import DemoInput from './src/Component/DemoTextInput';
import DemoStyle from './src/Component/DemoStyle';
import Exam from './src/Component/Exam';
import BindingData from './src/HandlerComponent/BindingData';
import ExamBinding from './src/HandlerComponent/Exam';
import RenderWithMap from './src/HandlerComponent/RenderWithMap';
import DemoProps from './src/Props/DemoProps';
import DemoScrollView from './src/Props/DemoScrollView';
import DemoFlatList from './src/Props/DemoFlatList';
import DemoSectionList from './src/Props/DemoSection';
import ExamRenderMap from './src/Props/ExamRenderMap';
import ExamRenderFlatList from './src/Props/ExamRenderFlatlist';
import GameApp from './src/GameApp';
import GameAppStateManagement from './src/GameAppStateManagement';
import {Provider} from 'react-redux';
import rootStore from './src/redux/rootStore';
import DemoRedux from './src/DemoRedux';
import DemoLifycycle from './src/DemoLifecycle/DemoLifycycle';
import DemoCallApi from './src/DemoCallAPI';
import Login from './src/LoginUI';
import RegisterUI from './src/LoginUI/Register';
import DemoCallApi1 from './src/DemoCallAPI/index1';
import GameApp1 from './src/GameApp1';
import GameAGameAppStateManagement1 from './src/GameAppStateManagement1';
import DemoRedux1 from './src/DemoRedux1';
import RootApp from './src/Navigation';
import HomeScreen from './src/Navigation';
import DemoHook from './src/Hook/DemoHook';
import BeforeHook from './src/Hook/BeforeHook';
import AnimationComponent from './src/Animation';
import DemoCallAPIWithAxios from './src/CallAPIWithAxios';
import CallApi from './src/CallApi';
import UnitTest from './src/unitTest';
import DemoLoadMoreFlatListuseHook from './src/DemoLoadMoreFlatList';
import DemoFlastList from './src/DemoFlastList';
import CallAPIWithUseEffect from './src/CallAPIWithUseEffect';
import TextRedux from './src/TextRedux';

const App = () => {
  return (
    <Provider store={rootStore}>
      <NavigationContainer>
        {/* <StateFull /> */}
        {/* <StateLess /> */}
        {/* <DemoImage /> */}
        {/* <DemoInput /> */}
        {/* <DemoStyle /> */}
        {/* <Exam /> */}
        {/* <ExamBinding /> */}
        {/* <BindingData />
         */}
        {/* <RenderWithMap />
         */}
        {/* <DemoProps /> */}
        {/* <DemoScrollView /> */}
        {/* <DemoFlatList /> */}
        {/* <DemoSectionList /> */}
        {/* <ExamRenderMap /> */}
        {/* <ExamRenderFlatList /> */}
        {/* <GameApp /> */}
        {/* <GameApp1 /> */}
        {/* <GameAppStateManagement /> */}
        {/* <GameAGameAppStateManagement1 /> */}
        <DemoRedux />
        {/* <DemoLifycycle /> */}
        {/* <DemoCallApi /> */}
        {/* <DemoCallApi1 /> */}
        {/* <Login /> */}
        {/* <RegisterUI /> */}
        {/* <RootApp /> */}
        {/* <HomeScreen /> */}
        {/* <BeforeHook /> */}
        {/* <DemoHook /> */}
        {/* <AnimationComponent /> */}
        {/* <DemoCallAPIWithAxios /> */}
        {/* <UnitTest /> */}
        {/* <DemoLoadMoreFlatListuseHook /> */}
        {/* <CallApi /> */}
        {/* <DemoFlastList /> */}
        {/* <CallAPIWithUseEffect /> */}
        {/* <TextRedux /> */}
      </NavigationContainer>
    </Provider>
  );
};

export default App;
