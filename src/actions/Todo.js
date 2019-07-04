export const REQUEST_TODO_LIST = 'REQUEST_TODO_LIST';
export const RECEIVED_TODO_LIST = 'RECEIVED_TODO_LIST';
export const REMOVE_TODO = 'REMOVE_TODO';
export const  CREATE_TODO = ' CREATE_TODO';

export const todoListRequest = () => {
    return {
        type: REQUEST_TODO_LIST
    }
}

export const todoListReceived = data => {
    return {
        type: RECEIVED_TODO_LIST,
        payload: data
    }
}

export const createTodo = todo => {
    return {
        type: CREATE_TODO,
        payload: todo
    }
}
export const removeTodo = index => {
    return {
        type: REMOVE_TODO,
        payload: index
    }
}