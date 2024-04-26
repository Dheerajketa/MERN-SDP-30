import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import logo from '../../images/Project logo.png';

export default function Register() {

  
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const usernameValue = data.get('username');
    const emailValue = data.get('email');
    const mobileValue = data.get('mobile');
    const accountNumberValue = data.get('accountNumber');
    const passwordValue = data.get('password');

    // Validate account number and mobile number format
    const isAccountNumberValid = accountNumberValue.length === 12;
    const isMobileValid = mobileValue.length === 10;

    if (!isAccountNumberValid) {
      console.error('Account number must be 12 digits');
      setError('Account number must be 12 digits');
      return;
    }

    if (!isMobileValid) {
      console.error('Mobile number must be 10 digits');
      setError('mobile number must be 10digits');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8081/insert', {
        username: usernameValue,
        email: emailValue,
        mobile: mobileValue,
        accountNumber: accountNumberValue,
        password: passwordValue,
        balance: 100000, // Default account balance
        isAdmin:false
      });
      console.log(response.data);
      navigate("/login");
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-2">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Link to="/">
          <img
            className="mx-auto h-42 w-auto"
            src={logo}
            alt="Your Company"
          />
        </Link>
        <h2 className="text-center text-2xl font-bold leading-5 tracking-tight text-gray-900">
          Sign up to your account
        </h2>
      </div>

      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
              Username
            </label>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="off"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="off"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="mobile" className="block text-sm font-medium leading-6 text-gray-900">
              Mobile Number
            </label>
            <div className="mt-2">
              <input
                id="mobile"
                name="mobile"
                type="text"
                autoComplete="off"
                required
                pattern="[0-9]{10}"
                title="Mobile number must be 10 digits"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="accountNumber" className="block text-sm font-medium leading-6 text-gray-900">
              Account Number
            </label>
            <div className="mt-2">
              <input
                id="accountNumber"
                name="accountNumber"
                type="text"
                autoComplete="off"
                required
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Register
            </button>
          </div>
        </form>
        <p className="mt-6 text-center text-sm text-gray-500">
          Already a member?{' '}
          <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
