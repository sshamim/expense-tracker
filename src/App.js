import React from 'react';

// Adding CSS file
import './App.css';

//Adding Components
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { AccountSummary } from './components/AccountSummary';
import { TransactionHistory } from './components/TransactionHistory';
// import { AddTransaction } from './components/AddTransaction';

function App() {
  return (
    <div className="container">
        <Header />
        <Balance />
        <AccountSummary />
       <TransactionHistory />
    </div>
  );
}

export default App;
