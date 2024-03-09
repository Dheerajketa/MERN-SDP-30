import React, { useState } from 'react';
import axios from 'axios';

function CheckBalance() {
  const [mobile, setMobile] = useState('');
  const [balance, setBalance] = useState('');
  const [error, setError] = useState('');

  const checkBalance = async () => {
    try {
      const response = await axios.post('http://localhost:8081/balance', { mobile });

      if (!response.data) {
        throw new Error('Empty response');
      }

      setBalance(response.data.balance);
      setError('');
    } catch (error) {
      console.error('Error checking balance:', error);
      setBalance('');
      setError('Failed to fetch data. Please try again later.');
    }
  };

  return (
    <div>
      <h2>Check Balance</h2>
      <label htmlFor="mobile">Enter Mobile Number:</label>
      <input
        type="text"
        id="mobile"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <button onClick={checkBalance}>Check Balance</button>
      {balance && <p>Balance: ${balance}</p>}
      {error && <p>{error}</p>}
    </div>
  );
}

export default CheckBalance;
