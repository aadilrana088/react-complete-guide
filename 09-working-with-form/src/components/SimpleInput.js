import React, { useState } from 'react';
const SimpleInput = (props) => {
    const [name, setName] = useState('');
    const [nameTouched, setNameTouched] = useState(false);
    const nameIsvalid = name.trim() !== ''
    const nameInputIsValid = !nameIsvalid && nameTouched;
    const nameChangeHandler = (e) => {
        setName(e.target.value);
    };
    const nameBlurHandler = (e) => {
        setNameTouched(true);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name) {
            setNameTouched(true);
            return
        }
        setName('');
        setNameTouched(false);
        console.log(name);
    };
    const nameInputClass = nameInputIsValid
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
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
