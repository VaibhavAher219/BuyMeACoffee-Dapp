import {ethers} from 'ethers';
import React from 'react';
import './form.css';
import ava from './abcd.png';
// import PropTypes from 'prop-types';

const Buy = ({state,account})=>{
    const buyCoffees=async(event)=>{

        event.preventDefault();
        const{ contract }=state;
        // const {account} = props;
        // console.log(account);
        // const accadd= document.querySelector('.address');
        // const shrtadd=account.slice(0,4);
        // accadd.innerHTML=`${shrtadd}`;
        const name=document.querySelector('#name').value;
        const Message=document.querySelector('#Message').value;
        
      
        const amount = { value: ethers.utils.parseEther("0.001") };
        const transaction = await contract.buyCoffee(name, Message, amount);
        
        await transaction.wait();
        console.log("Transaction is done"); 

    }
    return<>    
    <form onSubmit={buyCoffees}>
        
        {/* <label>Name</label>
        <input type="text" id='name' placeholder='Enter name'></input>
        <label>Message</label>
        <input type="text" id='Message' placeholder='Enter Your Message'></input>
        <button type="submit" disabled={!state.contract}>Pay</button> */}

    <div className="container">
                    <div className="panel">
                    <p id="acc">Account :</p>
                    <div className="subpanel">
                    
                    <p className="address">{account[0].slice(0,4)}...{account[0].slice(-5)}</p>
                    <img className="avatar" src={ava} alt="User Avatar"/>
                    </div>
                    </div>
                    <input type="name" className="fname" id='name' placeholder="name or @mention"></input>
                    <textarea className="textarea" rows="10" id='Message' cols="20" placeholder="message"></textarea>
                    <button type="submit" disabled={!state.contract}  className="pbutton"> Send </button>
    </div>
    </form>
    </>
}
export default Buy;