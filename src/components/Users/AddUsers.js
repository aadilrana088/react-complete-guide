import React from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './AddUsers.module.css';

const AddUsers = () => {
    const addUserHandler = (e) => {
        e.preventDefault();
    };
    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" />
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
};

export default AddUsers;
