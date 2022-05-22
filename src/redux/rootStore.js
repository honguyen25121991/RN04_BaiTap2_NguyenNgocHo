import {createStore, combineReducers} from 'redux';
import reducer from './reducers';
import gameReducer from './reducers/gameReducer';
import countReducer from './reducers/countReducer';

const rootReducer = combineReducers({
  // gameReducer: gameReducer,
  countReducer: reducer,
  // countNumber: countReducer,
});

const store = createStore(rootReducer);
export default store;
