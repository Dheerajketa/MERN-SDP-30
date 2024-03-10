import React, { useState } from 'react';
import axios from 'axios';
import UserNav from './UserNav';

function TransferMoney() {
  const [senderMobile, setSenderMobile] = useState('');
  const [recipientMobile, setRecipientMobile] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const transferMoney = async () => {
    try {
      const response = await axios.post('http://localhost:8081/transfer', {
        senderMobile,
        recipientMobile,
        amount
      });

      setMessage(response.data);
      setError('');
    } catch (error) {
      console.error('Error transferring money:', error.response.data);
      setMessage('');
      setError(error.response.data);
    }
  };

  return (

    <>
    <style>
      {
        `/* TransferMoney component styles */
        .transfer-money-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        
        .transfer-money-form {
          width: 100%;
          max-width: 400px;
        }
        
        .transfer-money-form h2 {
          margin-bottom: 1rem;
        }
        
        .transfer-money-form label {
          margin-top: 1rem;
          font-size: 1rem;
        }
        
        .transfer-money-form input {
          width: 100%;
          padding: 0.75rem;
          margin-top: 0.5rem;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 1rem;
        }
        
        .transfer-money-form button {
          width: 100%;
          padding: 0.75rem;
          margin-top: 1rem;
          background-color: #4a90e2;
          color: #fff;
          border: none;
          border-radius: 4px;
          font-size: 1rem;
          cursor: pointer;
        }
        
        .transfer-money-form button:hover {
          background-color: #3572b8;
        }
        
        .message {
          margin-top: 0.5rem;
          font-size: 1rem;
          color: green;
        }
        
        .error-message {
          margin-top: 0.5rem;
          font-size: 1rem;
          color: red;
        }
        
        `
      }
    </style>
    
    
    <UserNav />
    
    <div className="transfer-money-container"> {/* Apply styling for centering */}
      
      <div className="transfer-money-form">
        <h2 className="text-center">Transfer Money</h2>
        <label htmlFor="senderMobile ">Sender Mobile Number:</label>
        <input
          type="text"
          id="senderMobile"
          value={senderMobile}
          onChange={(e) => setSenderMobile(e.target.value)}
        />
        <label htmlFor="recipientMobile">Recipient Mobile Number:</label>
        <input
          type="text"
          id="recipientMobile"
          value={recipientMobile}
          onChange={(e) => setRecipientMobile(e.target.value)}
        />
        <label htmlFor="amount">Amount:</label>
        <input
          type="text"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={transferMoney}>Transfer Money</button>
        {message && <p className="message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
    </>
  );
}

export default TransferMoney;
