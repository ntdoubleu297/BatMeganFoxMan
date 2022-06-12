import React from "react";
import ReactBootstrap from 'react-bootstrap';
import axios from 'axios';
import Context from './context';
import {
  Form,
  Button,
  Card,
  Alert
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {toast} from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';
//import Popup from 'reactjs-popup';
//import 'reactjs-popup/dist/index.css';

//////////////////////////////////////////////////////////////////////

//import React, { useState } from "react";
import { useNavigate } from "react-router";


//const userContext = React.createContext({users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]});





function CreateAccount(){
const [show, setShow]         = React.useState(true);
const [status, setStatus]     = React.useState('');
const [name, setName]         = React.useState('');
const [email, setEmail]       = React.useState('');
const [password, setPassword] = React.useState('');
const ctx = React.useContext(Context);
//const [form, setForm] = React.useState({}); 
 


function validate(field, label){
if (!field ) {
  setStatus('Error: ' + label);
  setTimeout(() => setStatus(''),3000);
  return false;
}
return true;
}



function handleCreate(updateForm){
console.log(name,email,password);
if (!validate(name,     'name'))     return;
if (!validate(email,    'email'))    return;
if (!validate(password, 'password')) return;
//ctx.users.push({name,email,password,balance:100});
setShow(false); 
}    

function clearForm(){
setName('');
setEmail('');
setPassword('');
setShow(true);
navigate('/login');
}

function verifyPassword(){
const password = document.getElementById('password').value;
if (password === '') {
return document.getElementById('message').innerHTML = 'Fill in your Password Please!';
}
if (password.length < 8) {
document.getElementById('message').innerHTML = 'Password length must be atleast 8 characters!';
return false;
}
}

//toast.configure()

  //  const notify = () => {
   // toast.success('Success lets Toast!', {autoClose:false})
   // }


   
//const ctx = React.useContext(UserContext);  

  //function handle(){
   // console.log(name,email,password);
    //ctx.users.push({name,email,password});
   // props.setShow(false);
  //}    

  


  const [form, setForm] = React.useState({
    name: "",
    email: "",
    password: "",
    balance: 100
  });
  const navigate = useNavigate();
  
  // These methods will update the state properties.
  function updateForm(value) {
    const checkpass = verifyPassword();
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }
  
  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();
  
    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPerson = { ...form };
  
    await fetch("https://nmeganfoxw3377mongoosefp.herokuapp.com/user/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    })
    .catch(error => {
      window.alert(error);
      return;
    });
  
    setForm({ name: "", email: "", password: "", balance: 100 });
    setShow(false);
    //navigate("/createaccount");
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
    status={status}
    body={show}
   > 
   
    <Card.Header>Create Account</Card.Header>
    <Card.Body>
    <form onSubmit={(e) => verifyPassword, onSubmit}>
      <Card.Title>Name</Card.Title>
      <input type='input' placeholder='Enter Name' style={{ width: '13rem' }} id='name' value={form.name} onChange={(e) => updateForm({ name: e.target.value })} /><br/>
      <div style={{color: 'red'}}>{status}</div> 
      <br/>
      <Card.Title>Email</Card.Title>
      <input type='input' placeholder='Enter Email' style={{ width: '13rem' }} id='email' value={form.email} onChange={(e) => updateForm({ email: e.target.value })}/><br/>
      <div style={{color: 'red'}}>{status}</div>
      <br/>
     
      <Card.Title>Password</Card.Title>
      <input type='password' placeholder='Enter Password' style={{ width: '13rem' }} id='password' value={form.password} onChange={(e) => updateForm({password: e.currentTarget.value})}/><br/>
      <div id='message' style={{color: 'red'}}></div>
      <br/>
     <Button variant='light' type="submit" value='Submit' data-dismiss='alert' disabled={!form.name} onClick={(e)=> updateForm}>Create Account</Button>
    </form>
    </Card.Body>  
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
            status={status}
            body={show}
           > 
           <Card.Body>
            <h5>Success!</h5>
            <br/>
            <h2>{status}</h2>
            <br/>
            <button type="submit" className="btn btn-light" onClick={clearForm}>Add Another Account</button>
            </Card.Body>
            </Card>
            </>
        
        )


}

export default CreateAccount;



  
  
   

