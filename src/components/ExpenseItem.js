import React, { useState } from 'react';
import Card from './Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
const ExpenseItem = ({ title, amount, date }) => {
    // const [newTitle, setNewTitle] = useState(title);
    // const clickHandler = () => {
    //     setNewTitle('Updated Title');
    // };
    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={date} />
                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <div className="expense-item__price">${amount}</div>
                    {/* <button onClick={clickHandler}>Click</button> */}
                </div>
            </Card>
        </li>
    );
};

export default ExpenseItem;
