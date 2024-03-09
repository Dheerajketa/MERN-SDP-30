import React, { useState } from 'react';
import axios from 'axios';
import UserNav from './UserNav';

export default function Transfermoney() {
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState(0);
  const [balance, setBalance] = useState(null);

  const handleTransaction = async () => {
    try {
      await axios.post('http://localhost:8081/transaction', { email, amount });
      alert('Transaction successful');
    } catch (error) {
      console.error('Error during transaction:', error);
      alert('Error during transaction');
    }
  };

  const handleCheckBalance = async () => {
    try {
      const response = await axios.get(`http://localhost:8081/balance/${email}`);
      setBalance(response.data.balance);
    } catch (error) {
      console.error('Error checking balance:', error);
      alert('Error checking balance');
    }
  };

  return (
    <>
    <UserNav/>
    <div>
      <h1>Banking App</h1>
      <div>
        <label>Email:</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Amount:</label>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>
      <button onClick={handleTransaction}>Make Transaction</button>
      <button onClick={handleCheckBalance}>Check Balance</button>
      {balance !== null && (
        <div>
          <h2>Balance: ${balance}</h2>
        </div>
      )}
    </div>
    </>
  );
}

