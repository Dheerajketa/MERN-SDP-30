import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/data/Login';
import Stats from './components/Home/Stats'
import Register from './components/data/Register';
import Dashboard from './components/user/Dashboard';
import AdminDashboard from './components/user/AdminDashboard';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbare from './components/Home/Navbar';
import Loan from './components/user/Loan';
import TransferMoney from './components/user/TransferMoney';
import Balance from './components/user/Balance';
import CheckBalance from './components/user/CheckBalance';
import { useEffect, useState } from 'react';
import AdminLogin from './components/Admin/AdminLogin';
function App() {
  const [isCustomerLoggedIn, setIsCustomerLoggedIn] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  useEffect(() => {
    const customerloggedIn =
      localStorage.getItem("isCustomerLoggedIn") === "true";
    const adminloggedIn = localStorage.getItem("isAdminLoggedIn") === "true";

    setIsCustomerLoggedIn(customerloggedIn);
    setIsAdminLoggedIn(adminloggedIn);
  }, []);

  const onCustomerLogin = () => {
    localStorage.setItem("isCustomerLoggedIn", "true");
    setIsCustomerLoggedIn(true);
  };
  const onAdminLogin = () => {
    localStorage.setItem("isAdminLoggedIn", "true");
    setIsAdminLoggedIn(true);
  };
  
  return (
    <>
    <Routes>
            <Route path="/" element={<Home onAdminLogin={onAdminLogin} onCustomerLogin={onCustomerLogin}/>} />
            <Route path="/login" element={<Login  onCustomerLogin={onCustomerLogin} />} />
            <Route path="/register" element={<Register/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path='/admindashboard' element={<AdminDashboard/>}/>
            <Route path="/loan" element={<Loan/>} />
            <Route path="/transfer" element={<TransferMoney/>} />
            <Route path="/balance" element={<CheckBalance/>} />
            <Route path="/adminlogin" element={<AdminLogin onAdminLogin={onAdminLogin}/>} />
          </Routes>
          
    </>
    
  );
}

export default App;
