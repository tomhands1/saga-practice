import { RECEIVED_TODO_LIST, REMOVE_TODO, CREATE_TODO } from '../actions/Todo';
import fp from 'lodash/fp';

const INITIAL_STATE = {
    todos: []
};

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case RECEIVED_TODO_LIST:
            return fp.set('todos', fp.concat(state.todos, payload), state);
        case REMOVE_TODO:
            return {
                ...state,
                todos: fp.pullAt(payload)(state.todos)
            };
        case CREATE_TODO:
            return {
                ...state,
                todos: fp.pullAt(payload)(state.todos)
            };
        default:
            return state;
    };
};
