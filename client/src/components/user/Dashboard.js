import React from 'react';
import { Link } from 'react-router-dom';
import UserNav from './UserNav';
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
      <UserNav/>
      
    </div>
  );
};

export default BankingDashboard;