import React, { useState, useContext } from 'react';

// Adding Global State
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {

    const { addTransaction } = useContext(GlobalContext)

    const [description, setDescription] = useState('');
    const [transactionAmount, setTransactionAmount] = useState();

    const onSubmit = (event) => {
        event.preventDefault()

        if (Number(transactionAmount) === 0) {
            alert("Please Enter Correct Amount");
            return false;
        }


        const newTransaction = {
            id: new Date().getTime(),   
            description, 
            transactionAmount: +transactionAmount
        }
        
        addTransaction(newTransaction)

        setDescription('');
        setTransactionAmount(0);
    } 
   
    return (
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit= {onSubmit}>
                <div className="form-control">
                    <label htmlFor='description'>
                        Description:
                    </label>
                    <input 
                        type="text" 
                        id="description" 
                        placeholder="Enter Transaction Detail"
                        required = "required"
                        value={description}
                        onChange={(event)=>setDescription(event.target.value)}
                    />
                </div>

                <div className="form-control">
                    <label htmlFor='transactionamount'>
                        Amount:
                        <p>(negative: Expense, positive: Income)</p>
                    </label>
                    <input 
                        type="number" 
                        id="transactionamount" 
                        placeholder="Enter Transaction Amount"
                        required = "required"
                        value={transactionAmount}
                        onChange={(event)=>setTransactionAmount(event.target.value)}
                    />
                </div>

                    <button className="btn">
                        Add Transaction
                    </button>
            </form>
        </div>
    )
}
