import React, { createContext, useReducer } from 'react';

// Import Reducer
import AppReducer from './AppReducer';

// Initialize State
const initialState = {
    transactions: []
} 


// Create Global Context
export const GlobalContext = createContext(initialState);


// Create Global Provider
export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState)

    // Adding Actions for various Transactions

    // Add Transaction
    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    // Delete Transaction
    function delTransaction(transaction){
        dispatch({
            type: 'DEL_TRANSACTION',
            payload: transaction
        })
    }

    return(
        <GlobalContext.Provider value={
            {
                transactions: state.transactions,
                addTransaction,
                delTransaction
            }
        }>
            { children }    
        </GlobalContext.Provider>
    )
}
    
