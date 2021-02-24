import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { Search } from 'react-bootstrap-icons';

const TodoNav = ({ todos, setFilteredTodos }) => {
    const filterTasks = (event) => {
        const newList = todos.filter((item) => (
            item.task.indexOf(event.target.value) >= 0
        ));
        setFilteredTodos(newList);
    }
    return (
        <Navbar bg="primary" variant="dark" className="justify-content-between">
            <Navbar.Brand href="/">My Todo App</Navbar.Brand>
            <Form inline className="my-2 my-sm-0">
                <Button disabled><Search /></Button>
                <FormControl type="text" placeholder="Search" className="sm-2" onKeyUp={filterTasks} />
            </Form>
        </Navbar>
    );
};

export default TodoNav;