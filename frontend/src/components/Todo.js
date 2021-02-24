import React from 'react';
import './Todo.css';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { Check, Trash } from 'react-bootstrap-icons';

const Todo = ({todo, setTodo}) => {
    const todoCompleteHandler = (e) => {
        e.preventDefault();
        fetch(`/api/tasks/${todo.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'status': 1})
        }).then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            } else {
                setTodo({'id': todo.id, 'status': 1});
            }
        }).catch(error => {
            console.log(error);
        });
    }

    const todoDeleteHandler = (e) => {
        e.preventDefault();
        fetch(`/api/tasks/${todo.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            } else {
                setTodo({'id': todo.id});
            }
        }).catch(error => {
            console.log(error);
        });
    }
    
    return (
        <ListGroup.Item className="todo">
            {todo.status === 1 ? <del>{todo.task}</del> : todo.task}
            <div className="actions">
                <Button variant="success" onClick={todoCompleteHandler} disabled={todo.status === 1 ? true : ''} ><Check /></Button>
                <span>   </span>
                <Button variant="danger" onClick={todoDeleteHandler} ><Trash /></Button>
            </div>
        </ListGroup.Item>
    );
};

export default Todo;