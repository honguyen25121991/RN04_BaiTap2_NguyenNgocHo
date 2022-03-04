import {createStore, combineReducers} from 'redux';
import gameReducer from './reducers/GameReducre';
import reducer from './reducers/index';
const rootReducer = combineReducers({
  gameReducer: gameReducer,
  countUpReducer: reducer,
});
const store = createStore(rootReducer);
export default store;
