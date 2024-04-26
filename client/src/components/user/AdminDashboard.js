
import AdminNav from '../Admin/AdminNav';
import UserNav from './UserNav';
import React from 'react';

const  AdminDashboard = () => 
{

  
    return (
      <>
      <div className="user-nav-wrapper">
        <AdminNav/>
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
            
        </main>
        
        </>
    );
};

export default AdminDashboard;
