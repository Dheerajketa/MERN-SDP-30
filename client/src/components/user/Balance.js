import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [mobile, setMobileNumber] = useState('');
  const [balance, setBalance] = useState(null);

  const handleCheckBalance = async () => {
    try {
      const response = await axios.get(`http://localhost:8081/balance/${mobile}`);
      setBalance(response.data.balance);
    } catch (error) {
      console.error('Error checking balance:', error);
      alert('Error checking balance');
    }
  };

  return (
    <div>
      <h1>Banking App</h1>
      <div>
        <label>Mobile Number:</label>
        <input type="text" value={mobile} onChange={(e) => setMobileNumber(e.target.value)} />
      </div>
      <button onClick={handleCheckBalance}>Check Balance</button>
      {balance !== null && (
        <div>
          <h2>Balance: ${balance}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
