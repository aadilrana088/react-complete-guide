import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import styled from 'styled-components';
import './CourseInput.css';

const FormControl = styled.div`
    margin: 0.5rem 0;

    & label {
        font-weight: bold;
        display: block;
        margin-bottom: 0.5rem;
        // color: ${(props) => (props.isValid ? 'red' : 'black')};
        color: ${props => (props.isValid ? 'red' : 'black')};
    }
    & input {
        display: block;
        width: 100%;
        border: 1px solid ${(props) => (props.isValid ? '#ccc' : '#ccc')};
        background: ${(props) => (props.isValid ? '#ffd7d7' : 'transparent')};
        font: inherit;
        line-height: 1.5rem;
        padding: 0 0.25rem;
    }
    & input:focus {
        outline: none;
        background: #fad0ec;
        border-color: #8b005d;
    }
`;
const CourseInput = (props) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isValid, setIsValid] = useState(true);

    const goalInputChangeHandler = (event) => {
        // console.log(event.target.value.trim().length);
        if (event.target.value.trim().length > 0) {
            setIsValid(true);
        }
        setEnteredValue(event.target.value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (enteredValue.trim().length === 0) {
            setIsValid(false);
            return;
        }
        props.onAddGoal(enteredValue);
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <FormControl isValid={!isValid}>
                <label>Course Goal</label>
                <input type="text" onChange={goalInputChangeHandler} />
            </FormControl>
            {/* <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
                <label>Course Goal</label>
                <input type="text" onChange={goalInputChangeHandler} />
            </div> */}
            <Button type="submit">Add Goal</Button>
        </form>
    );
};

export default CourseInput;
