import React from 'react';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './UsersList.module.css';
const UsersList = (props) => {
    return (
        <>
            <ErrorModal
                title="An error occured!"
                message="Something went wrong!"
            />
            <Card className={classes.users}>
                <ul>
                    {props.users.map((user, index) => (
                        <li key={index}>
                            {user.name} is {user.age} years old
                        </li>
                    ))}
                </ul>
            </Card>
        </>
    );
};

export default UsersList;
