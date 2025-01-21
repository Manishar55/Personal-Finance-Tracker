import React from 'react'

function ExpenseDetails({ incomeAmt, expenseAmt }) {
    return (
        <div>
            <br></br><br></br>
            <div className='ex'>
                Total Balance Available  ₹{incomeAmt - expenseAmt}
            </div>
            {/* Show Income & Expense amount */}
            <div className="amounts-container">
                Income
                <span className="income-amount">₹{incomeAmt}</span>
                Expense
                <span className="expense-amount">₹{expenseAmt}</span>
            </div>
        </div>
    )
}

export default ExpenseDetails