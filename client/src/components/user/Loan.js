import React, { useEffect, useState } from 'react'; // Importing necessary dependencies
import UserNav from './UserNav'; // Importing UserNav component
import './Style.css'; // Importing custom styles
import loans from './Loans.json'; // Importing loans data from a local JSON file

export default function Loan() {
  // Initializing state with an empty object
  const [data, setData] = useState({});
  const [appliedLoans, setAppliedLoans] = useState([]); // State to track applied loans

  // Using useEffect hook to set the state with the loans data from the JSON file
  useEffect(() => {
    setData(loans);
  }, []);

  // Function to handle applying for a loan
  const handleApply = (loanId) => {
    setAppliedLoans([...appliedLoans, loanId]); // Add the applied loan ID to the list
  };

  // Returning the JSX content to be rendered
  return (
    <>
      <UserNav /> {/* Rendering the UserNav component */}

      <div>
        <h1>Loan page</h1>
        <table className="styled-table"> {/* Rendering a table to display loan data */}
          <thead>
            <tr>
              <th>Title of Loan</th>
              <th>Loan Amount</th>
              <th>Interest Rate</th>
              <th>Loan Term</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Mapping through the loans data and rendering a table row for each loan */}
            {loans.map((loan) => (
              <tr key={loan.id}>
                <td>{loan.title}</td>
                <td>{loan.loanAmount}</td>
                <td>{loan.interestRate}</td>
                <td>{loan.loanTerm}</td>
                <td>
                  {/* Check if the loan is already applied for */}
                  {appliedLoans.includes(loan.id) ? (
                    <span>Applied</span>
                  ) : (
                    <button onClick={() => handleApply(loan.id)}>Apply</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
