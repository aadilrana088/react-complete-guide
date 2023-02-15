import React, {useState} from 'react';
import Card from './Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
const ExpenseItem = ({ title, amount, date }) => {
    const [newTitle, setNewTitle] = useState(title);
    const clickHandler = () => {
        setNewTitle("Updated Title")
        console.log(newTitle);
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date= {date} />
            <div className="expense-item__description">
                <h2>{newTitle}</h2>
                <div className="expense-item__price">${amount}</div>
                <button onClick={clickHandler}>Click</button>
            </div>
        </Card>
    );
};

export default ExpenseItem;
