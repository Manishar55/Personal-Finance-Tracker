import React from 'react';

const ExpenseTable = ({ expenses, deleteExpens, editExpense }) => {

    return (
        <div className="expense-list">
            {expenses.map((expense, index) => (
                <div key={index} className="expense-item">

                    {/* <button className="delete-button" onClick={() =>
                        editExpense(expense._id)}>Edit</button> */}

                    <div className="expense-description">{expense.text}</div>
                    
                    <div
                        className="expense-amount"
                        style={{ color: expense.amount > 0 ? '#27ae60' : '#c0392b' }}
                    >₹{expense.amount}</div>

                    <button className="delete-button" onClick={() =>
                        deleteExpens(expense._id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default ExpenseTable;
