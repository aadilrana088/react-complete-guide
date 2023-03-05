import React, { useState, useRef, useEffect } from 'react';
const SimpleInput = (props) => {
    const [name, setName] = useState('');
    const [nameIsvalid, SetNameIsvalid] = useState(false);
    const [nameTouched, setNameTouched] = useState(false);
    const inputRef = useRef();

    useEffect(() => {
        if (nameIsvalid) {
            console.log('Name Input is not valid');
        }
    }, [nameIsvalid]);

    const nameChangeHandler = (e) => {
        setName(e.target.value);
        if(e.target.value.trim !== 0) {
          SetNameIsvalid(true)
        }
    };
    const nameBlurHandler = (e) => {
        setNameTouched(true);
        if (name.trim() === '') {
            SetNameIsvalid(false);
            return;
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setNameTouched(true);
        if (name.trim() === '') {
            SetNameIsvalid(false);
            return;
        }
        const enteredName = inputRef.current.value;
        setName('');
        console.log(name);
        console.log(enteredName);
        SetNameIsvalid(true);
    };
    const nameInputIsValid = !nameIsvalid && nameTouched;
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
                    ref={inputRef}
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
