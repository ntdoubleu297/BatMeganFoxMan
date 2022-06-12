import { useNavigate } from "react-router";
import { useEffect } from 'react';
import React from "react";
import ReactBootstrap from 'react-bootstrap';
import axios from 'axios';
import {
    Card,
  Button
} from 'react-bootstrap';
import {
  createContext,
  createElement
} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Popup from 'reactjs-popup';
//import 'reactjs-popup/dist/index.css';
const userContext = React.createContext({users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]});
export { userContext };


//import jwt from 'jsonwebtoken'


function Deposit() {
const ctx = React.useContext(userContext);


///////////////////////////////////////////////////////////////////////
let transactionState = 0;
const [deposit, setDeposit] = React.useState(0);
const [totalState, setTotalState] = React.useState(100);
const [isDeposit, setIsDeposit] = React.useState(true);
const [atmMode, setAtmMode] = React.useState('');
const [validTransaction, setValidTransaction] = React.useState(false);
const [show, setShow]         = React.useState(true);
const [number, setNumber] = React.useState('');
const [email, setEmail] = React.useState('');

const navigate = useNavigate();





let status = `Account Balance $ ${totalState} `;
console.log(`Account Rendered with isDeposit: ${isDeposit}`);
const handleChange = (event) => {
console.log(Number(event.target.value));
transactionState = Number(event.target.value); //deposit
// if(!deposit){
//document.getElementById('number1').innerHTML = '--NO NEGATIVE DEPOSITS!!'
// }
// if(!deposit){
//document.getElementById('number2').innerHTML = 'NaN: NO LETTER DEPOSITS!!'
//}

if (Number(event.target.value) < 0) {
alert('Negative Number!');}
else
if (transactionState !== Number(event.target.value)){
alert('Not a Number!');//if(!deposit){
  //document.getElementById('number').innerHTML = 'NaN Alert: +NUMBERS ONLY!!'
}

if (Number(event.target.value) <= 0) {
return setValidTransaction(false);
} if (atmMode === 'Cash Back' && Number(event.target.value) > totalState) {
setValidTransaction(false);
} else {
setValidTransaction(true);
}
setDeposit(Number(event.target.value));
};

const handleSubmit = (event) => {
setTotalState(totalState + transactionState);
let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
setTotalState(newTotal);
setValidTransaction(false);
event.preventDefault();
};

const handleModeSelect = (event) => {
console.log(event.target.value);
setAtmMode(event.target.value);
setValidTransaction(false);
if (event.target.value === 'Deposit') {
setIsDeposit(true); 
} else {
setIsDeposit(false);
}
};

////////////////////////////////////////////////////////////////////////

function validate(field, label){
if (!field ) {
// setStatus('Error: ' + label);
// setTimeout(() => setStatus(''),3000);
return false;
}
return true;
}



function handleCreate(){
console.log(deposit);
if (!validate(deposit,     totalState))     return;
let newTotal = totalState + deposit;
ctx.users.push({balance: setTotalState(newTotal)});
//setShow(false);
alert('transaction successful!');
} 

function theShow(){
  setShow(false);
}

function handleCreate2(){
  console.log(deposit);
  if (!validate(deposit,     totalState))     return;
  let newTotal = totalState - deposit;
  ctx.users.push({balance: setTotalState(newTotal)});
  //setShow(false);
  alert('transaction successful!');
  }    

  
  const handleChange2 = (event) => {
    console.log(Number(event.target.value));
    transactionState = Number(event.target.value); //deposit
    if (transactionState > `${totalState}`){
    alert('Account OverDraft!');}
    if (transactionState !== Number(event.target.value)){
    alert('Not a Number!');//if(!deposit){
      document.getElementById('number').innerHTML = 'NaN Alert: +NUMBERS ONLY!!'
    }
  }

function showBack(){
  setShow(true);
}

function clearForm(){
let newTotal = totalState;
setTotalState(newTotal);
setShow(true);
}


async function populateQuote(){
  const req = await fetch('http://localhost:5001/api/quote', {
    headers: {
      'x-access-token': localStorage.getItem('token'),
    },
  })


  const data = await req.json()
  if (data.status === 'ok'){
    setTotalState(data.balance) //no setQuote
  
} else {
  alert(data.error)
}
}


//const history = useHistory();

//useEffect(() => {
  //const token = localStorage.getItem('token')
  //if (token){
   // const user = jwt.decode(token)
  //if(!user){
   // localStorage.removeItem('token');
    //navigate('/login'); // ** change to navigate();
  //} else {
   // populateQuote();
 // }
 // }
 // }, []);


async function updateQuote(event){
  event.preventDefault();
  const req = await fetch('http://localhost:5000/record/balance', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      //'x-access-token': localStorage.getItem('token'),
    },
    body: JSON.stringify({
      balance: totalState,
    })
  })

  const data = await req.json()
  if (data.status === 'ok'){
   // setTotalState() //no setQuote
    setTotalState('')
  
} else {
  alert(data.error)
}
}

async function onSubmitjwt(e) {
  e.preventDefault();
  alert('Logout Successful')
  window.location.href = '/'
} 












return (show) ? (
 [
        'Primary'
      ].map((variant, idx) => (

    <Card
    bg={variant.toLowerCase()}
    key={idx}
    text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
    style={{ width: '18rem' }}
    className="mb-2"
    status={atmMode}
    body={show}
   > 
   
    <Card.Header>Foxwoods Rockland</Card.Header>
    <form onSubmit={handleSubmit}>
    <Card.Body>
      <h2>{status}</h2>
      <br/>
      <div>DEPOSIT</div>
      <input type='text' placeholder='Enter Deposit' style={{ width: '13rem' }} onChange={handleChange} name="mode" id="mode-select"/><br/>
      <div style={{color: 'red'}}></div> 
      <br/>
      <br/>
      <br/>
      <Button variant='light' type="button" value='Submit' disabled={!deposit} onClick={handleCreate}>Deposit</Button><br/>
      <br/>
      <Button variant='dark' type="button" value='Submit' onClick={theShow}>Withdraw</Button> <br/> <br/>
      <Button variant='dark' type="button" value='Submit' onClick={onSubmitjwt}>Logout/Home</Button>
      <br/><br/>
      {atmMode && (
      <Deposit
      onChange={handleChange}
     isDeposit={isDeposit}
     isValid={validTransaction}
     ></Deposit>
      )}
    </Card.Body>
    </form>
  </Card>
     
)
) 
) : (

  <Card
  bg='primary'
  text='white'
  style={{ width: '18rem' }}
  className="mb-2"
  status={atmMode}
  body={show}
 > 

<Card.Header>Mohegan Sun TRC</Card.Header>
<form onSubmit={handleSubmit}>
<Card.Body>
  <h2>{status}</h2>
  <br/>
  <div>WITHDRAW</div>
  <input type='text' placeholder='Enter Withdrawal' style={{ width: '13rem' }} onChange={e => setNumber(e.currentTarget.value)} onChange={handleChange} name="mode" id="mode-select"/><br/>
  <div style={{color: 'red'}}>{number}</div> 
  <br/>
  <br/>
  <br/>
  <Button variant='light' type="button" value='Submit' disabled={deposit<= 0} onClick={handleCreate2}>Withdraw</Button> <br/>
  <br/>
  <Button variant='dark' type="button" value='Submit' onClick={showBack}>Deposit</Button> <br/>

  {atmMode && (
  <Deposit
  onChange={handleChange2}
 isDeposit={isDeposit}
 isValid={validTransaction}
 ></Deposit>
  )}
</Card.Body>
</form>
</Card>
    
      

);

}

        export default Deposit;

       
   