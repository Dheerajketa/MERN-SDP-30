import React, { useState } from 'react';
import AdminNav from './AdminNav';

const ApproveLoan = () => {
  const [loanRequests, setLoanRequests] = useState([
    { id: 1, name: 'Aarav Patel', amount: 5000, status: 'Pending' },
    { id: 2, name: 'Ishaan Sharma', amount: 8000, status: 'Pending' },
    { id: 3, name: 'Neha Gupta', amount: 3000, status: 'Pending' },
    { id: 4, name: 'Riya Singh', amount: 7000, status: 'Pending' },
    { id: 5, name: 'Arjun Kumar', amount: 6000, status: 'Pending' },
    { id: 6, name: 'Sanvi Mishra', amount: 4000, status: 'Pending' },
    { id: 7, name: 'Advik Joshi', amount: 5500, status: 'Pending' },
    { id: 8, name: 'Saisha Singhania', amount: 4500, status: 'Pending' },
    { id: 9, name: 'Vihaan Gupta', amount: 6500, status: 'Pending' },
    { id: 10, name: 'Aaradhya Verma', amount: 4800, status: 'Pending' },
    { id: 11, name: 'Aryan Reddy', amount: 5100, status: 'Pending' },
    { id: 12, name: 'Myra Patel', amount: 5900, status: 'Pending' },
    { id: 13, name: 'Vivaan Singh', amount: 4300, status: 'Pending' },
    { id: 14, name: 'Anaya Kapoor', amount: 4900, status: 'Pending' },
    { id: 15, name: 'Reyansh Sharma', amount: 5400, status: 'Pending' },
    // Add more loan requests here
  ]);

  const approveLoan = id => {
    setLoanRequests(prevRequests =>
      prevRequests.map(request =>
        request.id === id ? { ...request, status: 'Approved' } : request
      )
    );
  };

  const removeRequest = id => {
    setLoanRequests(prevRequests =>
      prevRequests.filter(request => request.id !== id)
    );
  };

  return (
    <>
    <AdminNav></AdminNav>
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Loan Requests</h2>
      <table style={{ margin: 'auto' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {loanRequests.map(request => (
            <tr key={request.id}>
              <td>{request.name}</td>
              <td>{request.amount}</td>
              <td>{request.status}</td>
              <td>
                {request.status === 'Pending' && (
                  <button onClick={() => approveLoan(request.id)} style={{ marginLeft: '5px' }}>Approve</button>
                )}
                <button onClick={() => removeRequest(request.id)} style={{ marginLeft: '5px' }}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default ApproveLoan;