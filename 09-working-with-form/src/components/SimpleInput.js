import React, { useState } from 'react';
const SimpleInput = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [nameTouched, setNameTouched] = useState(false);
    const [emailTouched, setEmailTouched] = useState(false);
    const nameIsvalid = name.trim() !== '';
    const emailIsValid = email.includes('@');
    const nameInputIsValid = !nameIsvalid && nameTouched;
    const emailInputIsValid = !emailIsValid && emailTouched;
    let formIsvalid = false;
    if (nameIsvalid && emailIsValid) {
        formIsvalid = true;
    }
    const nameChangeHandler = (e) => {
        setName(e.target.value);
    };
    const emailChangeHandler = (e) => {
        setEmail(e.target.value);
    };
    const nameBlurHandler = (e) => {
        setNameTouched(true);
    };
    const emailBlurHandler = (e) => {
        setEmailTouched(true);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) {
            setNameTouched(true);
            return;
        }
        setName('');
        setEmail('')
        setNameTouched(false);
        console.log(name);
    };
    const nameInputClass = nameInputIsValid
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
                    value={name}
                    onChange={nameChangeHandler}
                    onBlur={nameBlurHandler}
                />
                {nameInputIsValid && (
                    <p className="error-text">Name is invalid</p>
                )}
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
