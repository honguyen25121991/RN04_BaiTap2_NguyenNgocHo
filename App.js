/* eslint-disable react-native/no-inline-styles */
import React, {Fragment} from 'react';
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
// import rootStore from './src/redux/rootStore';
import rootStore1 from './src/redux1/rootStore1';
import DemoRedux from './src/DemoRedux';
import DemoLifycycle from './src/DemoLifecycle/DemoLifycycle';
import DemoCallApi from './src/DemoCallAPI';
import Login from './src/LoginUI';
import RegisterUI from './src/LoginUI/Register';
import DemoCallApi1 from './src/DemoCallAPI/index1';
import GameApp1 from './src/GameApp1';
import GameAGameAppStateManagement1 from './src/GameAppStateManagement1';
import DemoRedux1 from './src/DemoRedux1';

const App = () => {
  return (
    <Provider store={rootStore1}>
      {/* <StateFull />
      <StateLess /> */}
      {/* <DemoImage /> */}
      {/* <DemoInput /> */}
      {/* <DemoStyle /> */}
      {/* <Exam /> */}
      {/* <BindingData /> */}
      {/* <RenderWithMap /> */}
      {/* <DemoProps /> */}
      {/* <DemoScrollView /> */}
      {/* <DemoFlatList /> */}
      {/* <DemoSectionList /> */}
      {/* <ExamRenderMap /> */}
      {/* <ExamRenderFlatList /> */}
      {/* <GameApp /> */}
      {/* <GameApp1 /> */}
      {/* <GameAppStateManagement /> */}
      <GameAGameAppStateManagement1 />
      {/* <DemoRedux /> */}
      {/* <DemoRedux1 /> */}
      {/* <DemoLifycycle /> */}
      {/* <DemoCallApi /> */}
      {/* <DemoCallApi1 /> */}
      {/* <Login /> */}
      {/* <RegisterUI /> */}
    </Provider>
  );
};

export default App;
