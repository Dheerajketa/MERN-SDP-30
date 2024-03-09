import React from 'react';
import { Link } from 'react-router-dom';

const BankingDashboard = () => {
  const accountBalance = 5000; // Replace this with real data from your server
  const recentTransactions = [
    {
      id: 1,
      amount: 1000,
      type: 'deposit',
      date: '2023-03-01'
    },
    {
      id: 2,
      amount: -500,
      type: 'withdrawal',
      date: '2023-02-28'
    }
  ]; // Replace this with real data from your server

  return (
    <div>
      <h1>Banking Dashboard</h1>
      <p>Your account balance is: ${accountBalance}</p>
      <h2>Recent Transactions</h2>
      <ul>
        {recentTransactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.amount > 0 ? '+' : '-'} ${transaction.amount} {transaction.type} - {transaction.date}
          </li>
        ))}
      </ul>
      <Link to="/transfer">Transfer Money</Link>
      <br />
      <Link to="/loan">Apply for a Loan</Link>
    </div>
  );
};

export default BankingDashboard;