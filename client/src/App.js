import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/data/Login';
import Stats from './components/Home/Stats'
import Register from './components/data/Register';
import Dashboard from './components/user/Dashboard';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbare from './components/Home/Navbar';
import Loan from './components/user/Loan';
import TransferMoney from './components/user/TransferMoney';
import Balance from './components/user/Balance';
import CheckBalance from './components/user/CheckBalance';
function App() {
  return (
    <>
    <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/loan" element={<Loan/>} />
            <Route path="/transfer" element={<TransferMoney/>} />
            <Route path="/balance" element={<CheckBalance/>} />
          </Routes>
          
    </>
    
  );
}

export default App;
