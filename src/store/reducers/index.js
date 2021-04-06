import {combineReducers} from 'redux';
import {loginReducer} from './loginReducer';
import {newsReducer} from './newsReducer';
import {profileReducer} from './profileReducer';
export default combineReducers({
  loginReducer,
  newsReducer,
  profileReducer,
});
