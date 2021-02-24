import React, { useState, useEffect } from 'react';
import './TodoList.css';
import Todo from './Todo';
import ListGroup from 'react-bootstrap/ListGroup';
import Alert from 'react-bootstrap/Alert';

const TodoList = ({ setTodo, filteredTodos }) => {

    return (
        <div className="todo-container">
            <ListGroup className="todo-list">
                {filteredTodos.length !== 0 ?
                    filteredTodos.map((todo) => (
                        <Todo key={todo.id} todo={todo} setTodo={setTodo} />
                    )) :
                    <Alert variant="info">You have no tasks!</Alert>
                }
            </ListGroup>
        </div>
    );
};

export default TodoList;