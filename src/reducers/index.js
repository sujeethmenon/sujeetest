/* eslint-disable prettier/prettier */
import {combineReducers} from 'redux';


import Home from './fetchdataReducers';
export default combineReducers({
  home: Home,
});
