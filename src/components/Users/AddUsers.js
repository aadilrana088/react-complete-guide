import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './AddUsers.module.css';

const AddUsers = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const addUserHandler = (e) => {
        e.preventDefault();
        if (name.trim().length === 0 || age.trim().length === 0) {
            alert('please enter username and password');
            return;
        } 
        if (+age < 1) {
            alert("please enter positive value")
            return;
        }
        const data = {
            username: name,
            age: age,
        };
        setName('');
        setAge('');
        console.log(data);
    };
    return (
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
    );
};

export default AddUsers;
