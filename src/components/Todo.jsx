import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import { todoListRequest, removeTodo, todoListReceived } from '../actions/Todo'

const Todo = ({ todos, generateTodo, removeTodo, createTodo }) => {
    const [newTodo, setNewTodo] = useState('');
    const todoRef = useRef(newTodo);

    const getTodo = () => {
        generateTodo();
    }

    const addTodo = () => {
        if (newTodo !== '') {
            const id = Math.floor(Math.random() * 20 + 1);
            const title = newTodo;
            const todo = { id, title };
            createTodo(todo);
        } else {
            return;
        }
        todoRef.current.value = '';
        setNewTodo('');
    }

    const deleteTodo = (index) => {
        removeTodo(index);
    }

    const updateTodo = () => {
        setNewTodo(todoRef.current.value);
    }

    return (
        <div className="todo-container">
            <div>
                {todos.length ?
                    todos.map((todo, index) => (
                            <div className="todo-item" key={index} onClick={() => deleteTodo(index)}>{index + 1}. {todo.title}</div>
                    ))
                    :
                    <div>
                        You have nothing left to do!
            </div>
                }
            </div>
            <div>
                <button className="todo-button" onClick={getTodo}>Get to do!</button>
            </div>
            <div>
                <input className="todo-input" ref={todoRef} onChange={updateTodo}></input>
                <button className="todo-button" onClick={addTodo}>Add to do</button>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    todos: state.todo.todos
});

const mapDispatchToProps = dispatch => ({
    generateTodo: () => dispatch(todoListRequest()),
    removeTodo: (index) => dispatch(removeTodo(index)),
    createTodo: (todo) => dispatch(todoListReceived(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
