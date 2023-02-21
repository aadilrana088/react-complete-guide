import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [openForm, setOpenForm]= useState(false)
    const saveExpenseDataHandler = (enteredExpensData) => {
        const expenseData = {
            ...enteredExpensData,
            id: Math.random().toString(),
        };
        // console.log(expenseData);
        props.onAddExpense(expenseData);
    };
    const closeFormHandler = () => {
        setOpenForm(!openForm)
    }
    return (
        <div className="new-expense">
            {!openForm && <button onClick={closeFormHandler}>Add New Expense</button>}
            {openForm && <ExpenseForm closeFormHandler={closeFormHandler} openForm={openForm} onSaveExpenseData={saveExpenseDataHandler} />}
        </div>
    );
};

export default NewExpense;
