import React from "react";
import ReactBootstrap from 'react-bootstrap';
import axios from 'axios';
import {
  Card,
  Button
} from 'react-bootstrap';

const userContext = React.createContext({users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]});
export { userContext };

export const UserContext = React.createContext(undefined);
export function UserProvider() {
 const [users, setUsers] = React.useState(undefined);

 const manageUser = {users, setUsers} 
}

function Withdraw() {
    const ctx = React.useContext(userContext);


///////////////////////////////////////////////////////////////////////
let transactionState = 0;
const [deposit, setDeposit] = React.useState(0);
const [totalState, setTotalState] = React.useState(100);
const [isDeposit, setIsDeposit] = React.useState(false);
const [atmMode, setAtmMode] = React.useState('');
const [validTransaction, setValidTransaction] = React.useState(false);
const [show, setShow]         = React.useState(true);
const [number, setNumber] = React.useState('');
const [email, setEmail] = React.useState('');






let status = `Account Balance $ ${totalState} `;
console.log(`Account Rendered with isDeposit: ${isDeposit}`);
const handleChange = (event) => {
console.log(Number(event.target.value));
transactionState = Number(event.target.value); //deposit
if (transactionState > totalState){
alert('Account OverDraft!');}
if (transactionState !== Number(event.target.value)){
alert('Not a Number!');//if(!deposit){
  document.getElementById('number').innerHTML = 'NaN Alert: +NUMBERS ONLY!!'
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
let newTotal = totalState - deposit; //isDeposit ? totalState + deposit : totalState - deposit;
setTotalState(newTotal); 
event.preventDefault();
if (totalState < 0){ //e.currentTarget.value
alert('Account Overdraft!');}
setValidTransaction(false);
//const number = document.getElementById('mode-select').value;
//if(status == 'NaN'); 
//document.getElementById('number').innerHTML = 'NEGATIVE DEPOSIT!';
//return false;

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
//setStatus('Error: ' + label);
//setTimeout(() => setStatus(''),3000);
return false;
}
return true;
}



function handleCreate(){
console.log(deposit);
if (!validate(deposit,     totalState))     return;
let newTotal = totalState - deposit;
ctx.users.push({balance: setTotalState(newTotal)});
setShow(false);
}    

function clearForm(){
let newTotal = totalState;
setTotalState(newTotal);
setShow(true);
}


async function updateBalance(e) {
  e.preventDefault();
  setTotalState(totalState + transactionState);
  let newTotal = isDeposit ? totalState + deposit : totalState - deposit;


  // When a post request is sent to the create url, we'll add a new record to the database.
  //const loginaccount = { ...form }


async function updateQuote(event){
  event.preventDefault();
  const req = await fetch('http://localhost:5000/record/balance', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': localStorage.getItem('token'), 
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
}

async function onSubmitjwt(e) {
  e.preventDefault();

const response = await fetch(`http://localhost:5000/logout`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email,
    //password,
  }),
})
const data = await response.json();
console.log(response.json());
if (data){
  console.log(response.json());
  alert('Logout Successful')
  setEmail(response.data);
  localStorage.setItem('email', response.data);
  console.log(response.data);
  window.location.href = '/createaccount'
} else {
  alert('Please check your username and password')
}
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
      <Button variant='light' type="button" value='Submit' disabled={deposit<= 0} onClick={() => handleCreate, updateBalance}>Withdraw</Button> <br/>
      {atmMode && (
      <Withdraw
      onChange={handleChange}
     isDeposit={isDeposit}
     isValid={validTransaction}
     ></Withdraw>
      )}
    </Card.Body>
    </form>
  </Card>

)
)
) : (

    <>
        <Card
        bg='primary'
        text='white'
        style={{ width: '18rem' }}
        className="mb-2"
        status={atmMode}
        body={show}
       > 
       <Card.Body>
        <h5>Withdrawal Successful!</h5>
        <br/>
        <h2>{status}</h2>
        <br/>
        <button type="submit" className="btn btn-light" onClick={clearForm}>--Withdraw again...</button>
        </Card.Body>
        </Card>
        </>
    
    ); 

}

export default Withdraw;
        

       

