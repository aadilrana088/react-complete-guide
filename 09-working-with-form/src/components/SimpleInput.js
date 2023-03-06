import { useState } from 'react';
import useInput from '../hooks/use-input';
const SimpleInput = (props) => {
    const [formData, setFormData] = useState('')
    const {
        value: enteredName,
        isValid: nameIsvalid,
        hasError: nameHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput,
    } = useInput((value) => value.trim() !== '');
    const {
        value: enteredEmail,
        isValid: emailIsvalid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput,
    } = useInput((value) => value.includes('@'));
    let formIsvalid = false;
    if (nameIsvalid && emailIsvalid) {
        formIsvalid = true;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!enteredName && !enteredEmail) {
            return;
        }
        console.log(enteredName, enteredEmail);
        setFormData(`Name: ${enteredName}, Email: ${enteredEmail}`)
        resetNameInput();
        resetEmailInput();
    };
    const nameInputClass = nameHasError
        ? 'form-control invalid'
        : 'form-control';
    const emailInputClass = emailHasError
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
                    value={enteredEmail}
                />
                {emailHasError && (
                    <p className="error-text">Please enter valid Email</p>
                )}
            </div>
            <h4>{formData}</h4>
            <div className="form-actions">
                <button disabled={!formIsvalid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
