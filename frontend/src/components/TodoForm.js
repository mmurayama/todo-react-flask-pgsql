import React, { useState } from 'react';
import './TodoForm.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import { Plus } from 'react-bootstrap-icons';

const TodoForm = ({ setTodo }) => {
    const [taskName, setTaskName] = useState('');
    const [createTaskError, setCreateTaskError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const createTask = (taskName) => {
        fetch('/api/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'task': taskName })
        }).then((response) => {
            if (!response.ok) {
                throw Error(response)
            } else {
                return response.json();
            }
        }).then((data) => {
            setTodo({ 'id': data.id, 'task': data.task, 'status': data.status });
        }).catch((error) => {
            console.log(error);
            setCreateTaskError(true);
            setErrorMessage('Failed to add the task');
        });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (taskName.trim().length === 0) {
            setCreateTaskError(true);
            setErrorMessage('Please enter a task');
        } else {
            createTask(taskName);
            setTaskName('');
        }
    };

    return (
        <div>
            <div className="form-container">
                <Form inline className="justify-content-center">
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Control htmlSize={30} value={taskName} onChange={e => setTaskName(e.target.value)} type="text" placeholder="Enter a task" className="mt-2 mb-2" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Button onClick={submitHandler} variant="primary" type="submit" className="mt-2 mb-2">
                                <Plus />
                            </Button>
                        </Col>
                    </Row>
                </Form>
                {createTaskError ? <Alert variant="danger" onClose={() => setCreateTaskError(false)} dismissible>{errorMessage}</Alert> : ''}
            </div>
        </div>
    );
};

export default TodoForm;