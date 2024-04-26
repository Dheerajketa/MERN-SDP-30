import React from 'react';
import AdminNav from './AdminNav';

const BankAccountDetails = () => {
  // Static account holder details
  const accountHolders = [
    { id: 1, name: 'John Doe', age: 35, accountNumber: 'ACC123456', balance: 5000, loan: 2000 },
    { id: 2, name: 'Jane Smith', age: 28, accountNumber: 'ACC654321', balance: 8000, loan: 1500 },
    { id: 3, name: 'Alice Johnson', age: 40, accountNumber: 'ACC987654', balance: 3000, loan: 1000 },
    // Indian account holders
    { id: 4, name: 'Aarav Patel', age: 32, accountNumber: 'ACC456123', balance: 7000, loan: 2500 },
    { id: 5, name: 'Ishaan Sharma', age: 45, accountNumber: 'ACC789456', balance: 6000, loan: 1800 },
    { id: 6, name: 'Neha Gupta', age: 29, accountNumber: 'ACC321654', balance: 4000, loan: 1200 },
    { id: 7, name: 'Riya Singh', age: 37, accountNumber: 'ACC654789', balance: 5500, loan: 3000 },
    { id: 8, name: 'Arjun Kumar', age: 42, accountNumber: 'ACC987321', balance: 4500, loan: 1500 },
    { id: 9, name: 'Sanvi Mishra', age: 25, accountNumber: 'ACC852147', balance: 6500, loan: 2000 },
    { id: 10, name: 'Advik Joshi', age: 34, accountNumber: 'ACC369852', balance: 4800, loan: 1700 },
    { id: 11, name: 'Saisha Singhania', age: 38, accountNumber: 'ACC753951', balance: 5100, loan: 2500 },
    { id: 12, name: 'Vihaan Gupta', age: 31, accountNumber: 'ACC159357', balance: 5900, loan: 2200 },
    { id: 13, name: 'Aaradhya Verma', age: 27, accountNumber: 'ACC456789', balance: 4300, loan: 1800 },
    { id: 14, name: 'Aryan Reddy', age: 39, accountNumber: 'ACC987654', balance: 4900, loan: 2300 },
    { id: 15, name: 'Myra Patel', age: 33, accountNumber: 'ACC147258', balance: 5400, loan: 1900 },
    { id: 16, name: 'Vivaan Singh', age: 30, accountNumber: 'ACC258369', balance: 6200, loan: 2700 },
    { id: 17, name: 'Anaya Kapoor', age: 36, accountNumber: 'ACC369147', balance: 5700, loan: 2100 },
    { id: 18, name: 'Reyansh Sharma', age: 26, accountNumber: 'ACC951753', balance: 4600, loan: 1600 },
    { id: 19, name: 'Kavya Mishra', age: 41, accountNumber: 'ACC753159', balance: 6800, loan: 2800 },
    { id: 20, name: 'Aarav Singh', age: 43, accountNumber: 'ACC159753', balance: 5100, loan: 2400 }
  ];

  return (
    
    <>
    <AdminNav/>
    <div>
      <h2 style={{textAlign: 'center'}}>Account Holders</h2>
      <table style={{margin: 'auto'}}>
        <thead>
          <tr>
            <th style={{textAlign: 'center'}}>Name</th>
            <th style={{textAlign: 'center'}}>Age</th>
            <th style={{textAlign: 'center'}}>Account Number</th>
            <th style={{textAlign: 'center'}}>Balance</th>
            <th style={{textAlign: 'center'}}>Loan</th>
          </tr>
        </thead>
        <tbody>
          {accountHolders.map(holder => (
            <tr key={holder.id}>
              <td style={{textAlign: 'center'}}>{holder.name}</td>
              <td style={{textAlign: 'center'}}>{holder.age}</td>
              <td style={{textAlign: 'center'}}>{holder.accountNumber}</td>
              <td style={{textAlign: 'center'}}>{holder.balance}</td>
              <td style={{textAlign: 'center'}}>{holder.loan}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default BankAccountDetails;
