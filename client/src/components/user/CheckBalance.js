import React, { useState } from 'react';
import axios from 'axios';
import UserNav from './UserNav';
import './Dashboard.css'; // Importing custom CSS for styling

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
    <>
      <UserNav/>
      <div className="check-balance-container">
        <h2 className="balance-heading">Check Balance</h2>
        <div className="input-container">
          <label htmlFor="mobile" className="input-label">Enter Mobile Number:</label>
          <input
            type="text"
            id="mobile"
            className="input-field"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
        <button className="check-button" onClick={checkBalance}>Check Balance</button>
        {balance && <p className="balance-info">Balance: ${balance}</p>}
        {error && <p className="error-message">{error}</p>}
      </div>
    </>
  );
}

export default CheckBalance;
