import React from 'react';

const ExpenseTable = ({ expenses, deleteExpens, editExpense }) => {

    return (
        <div className="expense-list">
            {expenses.map((expense, index) => (
                <div key={index} className="expense-item">

                    <div className="expense-description">{expense.text}</div>
                    
                    <div
                        className="expense-amount"
                        style={{ color: expense.amount > 0 ? '#32d476' : '#f85947' }}
                    >₹{expense.amount}</div>

                    {/* Edit button------------ */}
                    <div className='gapp'>
                    <button className="Edit-button" onClick={() =>
                        editExpense(expense._id)}>Edit</button>

                    <button className="delete-button" onClick={() =>
                        deleteExpens(expense._id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ExpenseTable;
