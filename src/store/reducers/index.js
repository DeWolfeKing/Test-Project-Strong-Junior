import {combineReducers} from 'redux';
import {loginReducer} from './loginReducer';
import {newsReducer} from './newsReducer';
export default combineReducers({
  loginReducer,
  newsReducer,
});
