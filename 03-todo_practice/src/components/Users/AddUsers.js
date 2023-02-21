import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUsers.module.css';

const AddUsers = (props) => {
    const [error, setError] = useState(null);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const addUserHandler = (e) => {
        e.preventDefault();
        if (name.trim().length === 0 || age.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message:
                    'Please enter a valid name and age (non-empty values).',
            });
            return;
        }
        if (+age < 1) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid age (> 0).',
            });
            return;
        }
        const data = {
            name: name,
            age: age,
            id: Math.random().toString(),
        };
        props.onAddUser(data);
        setName('');
        setAge('');
        // console.log(data);
    };
    const errorHandler = ()=> {
        setError(null)
    }
    return (
        <>
            {error && <ErrorModal
                onConfirm = {errorHandler}
                title={error.title}
                message={error.message}
            />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        value={name}
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label htmlFor="age">Age (Years)</label>
                    <input
                        id="age"
                        value={age}
                        type="number"
                        onChange={(e) => setAge(e.target.value)}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </>
    );
};

export default AddUsers;
