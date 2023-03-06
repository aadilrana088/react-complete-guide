import React, { useState } from 'react';
import useInput from '../hooks/use-input';
const SimpleInput = (props) => {
    const {
        value: enteredName,
        isValid: nameIsvalid,
        hasError: nameHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput,
    } = useInput((value) => value.trim() !== '');
    const [email, setEmail] = useState('');
    const [emailTouched, setEmailTouched] = useState(false);
    const emailIsValid = email.includes('@');
    const emailInputIsValid = !emailIsValid && emailTouched;
    let formIsvalid = false;
    if (nameIsvalid && emailIsValid) {
        formIsvalid = true;
    }
    const emailChangeHandler = (e) => {
        setEmail(e.target.value);
    };
    const emailBlurHandler = (e) => {
        setEmailTouched(true);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!enteredName) {
            return;
        }
        console.log(enteredName);
        resetNameInput();
        setEmail('');
    };
    const nameInputClass = nameIsvalid
        ? 'form-control invalid'
        : 'form-control';
    const emailInputClass = emailInputIsValid
        ? 'form-control invalid'
        : 'form-control';
    return (
        <form onSubmit={handleSubmit}>
            <div className={nameInputClass}>
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    value={enteredName}
                    onChange={nameChangeHandler}
                    onBlur={nameBlurHandler}
                />
                {nameHasError && <p className="error-text">Name is invalid</p>}
            </div>
            <div className={emailInputClass}>
                <label htmlFor="email">Your E-Mail</label>
                <input
                    type="email"
                    id="email"
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                    value={email}
                />
                {emailInputIsValid && (
                    <p className="error-text">Please enter valid Email</p>
                )}
            </div>
            <div className="form-actions">
                <button disabled={!formIsvalid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
