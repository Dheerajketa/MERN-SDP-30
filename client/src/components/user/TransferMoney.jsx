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
    <UserNav/>
    <div>
      <h2>Transfer Money</h2>
      <label htmlFor="senderMobile">Sender Mobile Number:</label>
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
      {message && <p>{message}</p>}
      {error && <p>{error}</p>}
    </div>
    </>
    
  );
}

export default TransferMoney;
