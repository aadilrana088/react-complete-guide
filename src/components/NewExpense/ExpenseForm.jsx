import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteDate] = useState('')
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredDate: '',
    //     enteredAmount: '',
    // });

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
        // setUserInput((prevState) => ({
        //     ...prevState,
        //     enteredTitle: e.target.value,
        // }));
        // console.log(userInput.enteredTitle);
    };
    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);
        // setUserInput((prevState) => ({
        //     ...prevState,
        //     enteredAmount: e.target.value,
        // }));
        // console.log(userInput.enteredAmount);
    };
    const dateChangeHandler = (e) => {
        setEnteDate(e.target.value);
        // setUserInput((prevState) => ({
        //     ...prevState,
        //     enteredDate: e.target.value,
        // }));
        // console.log(userInput.enteredDate);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteDate('');
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={enteredAmount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max="2022-12-31"
                        value={enteredDate}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
