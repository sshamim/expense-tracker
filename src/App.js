import React from 'react';

// Adding CSS file
import './App.css';

// Adding Provider
import { GlobalProvider } from './context/GlobalState';

//Adding Components
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { AccountSummary } from './components/AccountSummary';
import { TransactionHistory } from './components/TransactionHistory';
import { AddTransaction } from './components/AddTransaction';


function App() {
  return (
  <GlobalProvider>
    <Header />
    <div className="container">
      <Balance />
      <AccountSummary />
      <TransactionHistory />
      <AddTransaction />
    </div>
</GlobalProvider>

    
  );
}

export default App;
