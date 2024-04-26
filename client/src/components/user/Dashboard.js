
import UserNav from './UserNav';
import React, { useEffect,useState } from 'react';
import axios from 'axios'

const Dashboard = () => 
{
  const [userData, setUserData] = useState({});
  const [updatedUserData, setUpdatedUserData] = useState({});
  const [error, setError] = useState("");
 
  // const handleInputChange = (e) => {
  //   setUpdatedUserData({ ...updatedUserData, [e.target.name]: e.target.value });
  // };

  // const handleUpdate = () => {
  //   setUpdatedUserData(userData);
  // };

  useEffect(() => {
    const user = localStorage.getItem("User")
    const userEmail = localStorage.getItem("userEmail")
    if(userEmail)
    {
      axios.get(`http://localhost:8081/getuserbyemail/${userEmail}`)
      .then((response)=>{
        setUserData(response.data)

      })
      .catch((error)=>{
        console.error("Error fetching user details",error)
      })
    }
  }, [])
  

    return (
      <>
      <div className="user-nav-wrapper">
          <UserNav className="w-full" />
        </div>
        <main>

            <style>
              {
                `
              
              :root {
                --light: #353535;
                --dark: #262626;
                --darker: #1f1f1f;
                --light-blue: #00d4ff;
                --dark-blue: #0045cd;
                --green: #37a26c;
                --red: #e15754;
                --slight-white: rgba(255, 255, 255, 0.5);
              }
              body {
                background: var(--darker);
                color: white;
            }

            .dashboard-container {
                display: flex;
                flex-direction: column;
                align-items: stretch;
            }

            .user-nav-wrapper {
                flex: 0 0 auto;
            }

            main {
                flex: 1;
                padding: 20px;
            }
              
             
              
              .options-box {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: start;
              }
              
              .option {
                width: 100%;
                display: flex;
                align-items: center;
                gap: 1rem;
                color: var(--slight-white);
              }
              
              .option i {
                padding: 5px;
              }
              
              .selected,
              .option:hover {
                color: var(--light-blue);
                cursor: pointer;
              }
              
              .selected i {
                color: white;
                background: linear-gradient(
                  to bottom right,
                  var(--light-blue) 40%,
                  var(--dark-blue)
                );
                padding: 5px;
                border-radius: 50%;
              }
              
              .option {
                font-size: 1.2vw;
              }
              
              .second-box {
                justify-content: center;
                gap: 20px;
              }
              
              .last-box {
                justify-content: end;
              }
              
              
              .user-nav-wrapper {
                width: 100%;
                padding: 10px; /* Adjust padding as needed */
                box-sizing: border-box;
            }
              
              
              .input-style {
                display: flex;
                align-items: center;
                border-radius: 20px;
                width: 30%;
                height: 100%;
                background: var(--dark);
                padding: 10px;
              }
              
              .input-style input {
                background: none;
                border: none;
                outline: none;
                color: white;
                width: 100%;
              }
              
              .input-style i {
                font-size: 100%;
              }
              
              .sidebar .pfp {
                height: 5cqh;
                border-radius: 50%;
              }
              
              .main-grid {
                width: 100%;
                height: 90%;
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                grid-template-rows: repeat(5, 1fr);
                grid-template-areas:
                  "available available transaction transaction"
                  "available available transaction transaction"
                  "income spending transaction transaction"
                  "subscription subscription send send"
                  "subscription subscription send send";
                gap: 2rem;
              }
              
              .main-grid div {
                border-radius: 20px;
              }
              
              .balance {
                grid-area: available;
                background: linear-gradient(
                  to bottom right,
                  var(--light-blue),
                  var(--dark-blue)
                );
                padding: 5%;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: start;
              }
              
              .main-grid > div {
                padding: 5%
              }
              
              .main-grid .container {
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
              }
              
              .transaction {
                grid-area: transaction;
                background: var(--dark);
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: start;
              }
              
              .transactions {
                width: 100%;
                height: 85%;
                display: flex;
                flex-direction: column;
                align-items: start;
                gap: 1cqw;
              }
              
              .payment {
                width: 100%;
                height: 20%;
                /* 	border: 1px solid white; */
                display: flex;
                justify-content: space-between;
                align-items: center;
              }
              
              .payment i {
                padding: 5%;
                background: var(--light);
                border-radius: 5px;
              }
              
              .income {
                grid-area: income;
                background: var(--dark);
                padding: 10%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: start;
              }
              
              .spending {
                grid-area: spending;
                background: var(--dark);
                padding: 10%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: start;
              }
              
              .subscription {
                grid-area: subscription;
                background: var(--dark);
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: start;
              }
              
              .subscriptions {
                width: 100%;
                height: 80%;
                display: flex; 
                flex-direction: column;
                align-items: start;
                gap: 2cqw
              }
              
              .send {
                grid-area: send;
                background: var(--dark);
                display: flex;
                flex-direction: column;
                justify-content: space-between;
              }
              
              .friends {
                width: 100%;
                height: 80%;
                display: flex;
                justify-content: space-between;
                align-items: center;
              }
              
              .friend {
                width: 30%;
                height: 80%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
              }
              
              .friend img {
                width: auto;
                height: 8cqh;
              }
              
              @media screen and (width < 768px) {
                  main {
                  width: 67vw;
                  padding: 10px;
                }
                .main-grid {
                  width: 100%;
                  grid-template-columns: 1fr 1fr;
                  grid-template-rows: repeat(10, 1fr);
                  grid-template-areas: 
                    'available available'
                    'available available'
                    'income spending'
                    'subscription subscription'
                    'subscription subscription'
                    'transaction transaction'
                    'transaction transaction'
                    'transaction transaction'
                    'send send'
                    'send send';
                }
                input::placeholder {
                  font-size: 1.5cqw
                }
                
                .sidebar i {
                  font-size: 2cqw
                }
              }
                
                
                `
              }
            </style>
            <div className='main-grid'>
                <div className='balance'>
                    <div className='container'>
                      
                        <p style={{ fontSize: '1.5cqw' }}>Available Balance</p>
                        <i className="fa-brands fa-css3-alt" style={{ fontSize: '3cqw' }}></i>
                    </div>
                    <h1 style={{ fontSize: '4cqw' }}>₹ 700.00</h1>
                    <div className='container' style={{ fontSize: '1.5cqw' }}>
                        <div className='info'>
                            <p style={{}}>Card Number</p>
                            <p style={{ color: 'var(--slight-white)' }}>234-135-826</p>
                        </div>
                        <div className='info'>
                            <p style={{}}>Credit Card</p>
                            <p style={{ color: 'var(--slight-white)', letterSpacing: '2px' }}>MACIELBANK</p>
                        </div>
                    </div>
                </div>
                  
                <div className='income'>
                    <p style={{ fontSize: '1.5cqw' }}>Income</p>
                    <div className='container'>
                        <h3 style={{ color: 'var(--green)', fontSize: '2cqw' }}>+ ₹1000</h3>
                        <i className="fa-solid fa-signal" style={{ fontSize: '2cqw' }}></i>
                    </div>
                </div>
                <div className='spending'>
                    <p style={{ fontSize: '1.5cqw' }}>Spending</p>
                    <div className='container'>
                        <h3 style={{ color: 'var(--red)', fontSize: '2cqw' }}>- ₹3000</h3>
                        <i className="fa-solid fa-sack-dollar" style={{ fontSize: '2cqw' }}></i>
                    </div>
                </div>
                <div className='subscription'>
                    <div className='container'>
                        <h3 style={{ fontSize: '2cqw' }}>My subscription</h3>
                        <i className='fa-solid fa-ellipsis' style={{ fontSize: '2cqw' }}></i>
                    </div>
                    <div className='subscriptions' style={{}}>
                        <div className='payment'>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <i className="fa-solid fa-tv"></i>
                                <div>
                                    <p style={{ fontSize: '1.5cqw', whiteSpace: 'nowrap' }}>Streaming Service</p>
                                    <p style={{ color: 'var(--slight-white)', fontSize: '1.2cqw' }}>Yesterday</p>
                                </div>
                            </div>
                            <h3 style={{ color: 'var(--red)', fontSize: '2cqw' }}>- ₹60</h3>
                        </div>
                        <div className='payment'>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <i className="fa-solid fa-wifi" style={{ padding: '7%' }}></i>
                                <div>
                                    <p style={{ fontSize: '1.5cqw', whiteSpace: 'nowrap' }}>Internet</p>
                                    <p style={{ color: 'var(--slight-white)', fontSize: '1.2cqw', whiteSpace: 'nowrap' }}>2 days ago</p>
                                </div>
                            </div>
                            <h3 style={{ color: 'var(--red)', fontSize: '2cqw' }}>- ₹60</h3>
                        </div>
                        <div className='payment'>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <i className="fa-brands fa-codepen" style={{ padding: '7%' }}></i>
                                <div>
                                    <p style={{ fontSize: '1.5cqw', whiteSpace: 'nowrap' }}>Codepen Pro</p>
                                    <p style={{ color: 'var(--slight-white)', fontSize: '1.2cqw' }}>1 month ago</p>
                                </div>
                            </div>
                            <h3 style={{ color: 'var(--red)', fontSize: '2cqw' }}>- ₹60</h3>
                        </div>
                    </div>
                </div>
                <div className='transaction'>
                    <div className='container'>
                        <h2 style={{ fontSize: '2cqw' }}>Transaction</h2>
                        <i className='fa-solid fa-ellipsis' style={{ fontSize: '2cqw' }}></i>
                    </div>
                    <div className='transactions'>
                        <div className='payment'>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <i className="fa-solid fa-money-bill"></i>
                                <div>
                                    <p style={{ fontSize: '1.5cqw', whiteSpace: 'nowrap' }}>Sergio Medeiro</p>
                                    <p style={{ color: 'var(--slight-white)', fontSize: '1.2cqw' }}>Yesterday</p>
                                </div>
                            </div>
                            <h3 style={{ color: 'var(--green)', fontSize: '2cqw' }}>+ ₹300</h3>
                        </div>
                        <div className='payment'>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <i className='fa-solid fa-heart'></i>
                                <div>
                                    <p style={{ fontSize: '1.5cqw', whiteSpace: 'nowrap' }}>Medical treatment</p>
                                    <p style={{ color: 'var(--slight-white)', fontSize: '1.2cqw' }}>Yesterday</p>
                                </div>
                            </div>
                            <h3 style={{ color: 'var(--red)', fontSize: '2cqw' }}>- ₹300</h3>
                        </div>
                        <div className='payment'>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <i className="fa-solid fa-credit-card"></i>
                                <div>
                                    <p style={{ fontSize: '1.5cqw', whiteSpace: 'nowrap' }}>Shopping</p>
                                    <p style={{ color: 'var(--slight-white)', fontSize: '1.2cqw' }}>4 days ago</p>
                                </div>
                            </div>
                            <h3 style={{ color: 'var(--red)', fontSize: '2cqw' }}>- ₹60</h3>
                        </div>
                        <div className='payment'>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <i className="fa-solid fa-money-bills"></i>
                                <div>
                                    <p style={{ fontSize: '1.5cqw', whiteSpace: 'nowrap' }}>Work</p>
                                    <p style={{ color: 'var(--slight-white)', fontSize: '1.2cqw', whiteSpace: 'nowrap' }}>7 days ago</p>
                                </div>
                            </div>
                            <h3 style={{ color: 'var(--green)', fontSize: '2cqw' }}>+ ₹850</h3>
                        </div>
                    </div>
                </div>
                <div className='send'>
                    <div className='container'>
                        <h3 style={{ fontSize: '2cqw' }}>Send to Friend</h3>
                        <i className="fa-solid fa-angle-right"></i>
                    </div>
                    <div className='friends'>
                        <div className='friend'>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png' alt='Profile'/>
                            <p>Joe</p>
                        </div>
                        <div className='friend'>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png' alt='Profile'/>
                            <p>Maria</p>
                        </div>
                        <div className='friend'>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png' alt='Profile'/>
                            <p>May</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        
        </>
    );
};

export default Dashboard;
