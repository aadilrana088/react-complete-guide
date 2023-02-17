import React, { useState } from 'react';
import Card from './Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

const Expenses = ({ expenses }) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
        // console.log(selectedYear);
    };
    const filteredExpenses = expenses.filter( expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })
    let expenseContent = <p style={{color: "white",fontSize: "20px", textAlign: "center"}}>No Content Found</p>
    if (filteredExpenses.length > 0 ) {
        expenseContent = filteredExpenses.map((expense) => (
            <ExpenseItem
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                key={expense.id}
            />
        ))
    }
    // console.log(filteredExpenses);
    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            {expenseContent}
        </Card>
    );
};

export default Expenses;
