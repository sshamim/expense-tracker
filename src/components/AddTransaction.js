import React from 'react'

export const AddTransaction = () => {
    return (
        <div>
            <input type='text'>Enter Description:</input>
            
            <input type='number'>Enter Amount:</input>
            
            <button className='btn'>Add Transaction</button>
        </div>
    )
}
