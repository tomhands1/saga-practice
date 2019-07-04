import { combineReducers } from 'redux';
import counter from './Counter';
import randomPerson from './RandomPerson';
import todo from './Todo';

const rootReducer = combineReducers({
  counter,
  todo,
  randomPerson
});

export default rootReducer;
