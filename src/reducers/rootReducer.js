import { combineReducers } from 'redux';
import counter from './Counter';
import randomPerson from './RandomPerson';
import todo from './Todo';
import randomPicture from './RandomPicture';

const rootReducer = combineReducers({
  counter,
  todo,
  randomPerson,
  randomPicture
});

export default rootReducer;
