import { RECEIVED_RANDOM_PERSON, RECEIVED_ADD_PERSON, RECEIVED_REMOVE_PERSON } from '../actions/RandomPerson';
import fp from 'lodash/fp';

const initialState = {
  newPerson: {results: null},
  people: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case RECEIVED_RANDOM_PERSON:
      return fp.set('newPerson', payload, state);
    case RECEIVED_ADD_PERSON:
      return fp.set('people', fp.concat(state.people, payload), state);
    case RECEIVED_REMOVE_PERSON:
      return fp.set('people', fp.tail(state.people), state);
      //return fp.set('people', fp.drop(1, state.people), state);
    default:
      return state;
  };
};