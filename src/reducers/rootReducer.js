import { combineReducers } from 'redux';
import counter from './Counter';
import randomPerson from './RandomPerson';

const rootReducer = combineReducers({
  counter,
  randomPerson
});

export default rootReducer;
