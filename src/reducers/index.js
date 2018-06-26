import { combineReducers } from 'redux';
import apiReducer from './apiReducer';

const birdieTest = combineReducers({
  apiStore: apiReducer
});

export default birdieTest;
