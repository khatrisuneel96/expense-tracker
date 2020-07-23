import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const TransactionsList = () => {

    const [text, setText] = useState('')
    const [amount, setAmount] = useState(null)

    const { addTransaction } = useContext(GlobalContext)

    const onSubmit = (e) => {
        e.preventDefault()

        const newTransaction = {
            id: Math.floor(Math.random() * 1000000000),
            text,
            amount: Number(amount)
        }
        addTransaction(newTransaction)

        setText('')
        setAmount('')
    }

    return (
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div>
                    <label className="label">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter Transaction" required />
                </div>

                <div>
                    <label className="label">Amount <br /> 
                    (negative - expense, positive - income)
                    </label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter Amount" required/>
                </div>

                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}
