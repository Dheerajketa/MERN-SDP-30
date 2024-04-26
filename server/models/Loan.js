const mongoose = require("mongoose");

const loanSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  loanAmount: {
    type: String,
    required: true,
  },
  interestRate: {
    type: String,
    required: true,
  },
  loanTerm: {
    type: String,
    required: true,
  },
  // Add other relevant fields as needed (e.g., collateral, purpose, etc.)
});

const Loan = mongoose.model("Loan", loanSchema);

module.exports = Loan;