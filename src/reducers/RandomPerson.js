import { RECEIVED_RANDOM_PERSON, RECEIVED_ADD_PERSON, RECEIVED_REMOVE_PERSON } from '../actions/RandomPerson';
import fp from 'lodash/fp';

const INITIAL_STATE = {
  newPerson: {results: null},
  people: []
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case RECEIVED_RANDOM_PERSON:
      return fp.set('newPerson', payload, state);
    case RECEIVED_ADD_PERSON:
      return fp.set('people', fp.concat(state.people, payload), state);
    case RECEIVED_REMOVE_PERSON:
      return fp.set('people', fp.tail(state.people), state);
    default:
      return state;
  };
};