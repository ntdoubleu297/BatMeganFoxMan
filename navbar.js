import React from "react";
import ReactBootstrap from 'react-bootstrap';
import axios from 'axios';
import {
    Navbar,
    Container,
    Nav
} from 'react-bootstrap';
import './badbank3k.css';
import { useState } from 'react';
  import image from './West-Enterprises.jpeg';




function NavBar(){


  
  
    
    function useHover() {
        const [hovering, setHovering] = useState(false)
        const onHoverProps = {
            onMouseEnter: () => setHovering(true),
            onMouseLeave: () => setHovering(false),
        }
                return [hovering, onHoverProps]
            }
    
            
                const [buttonAIsHovering, buttonAHoverProps] = useHover();
                const [buttonBIsHovering, buttonBHoverProps] = useHover();
                const [buttonCIsHovering, buttonCHoverProps] = useHover();
                const [buttonDIsHovering, buttonDHoverProps] = useHover();
                const [buttonEIsHovering, buttonEHoverProps] = useHover();
            


            
                //<Nav.Link href="/deposit" {...buttonBHoverProps}>{buttonBIsHovering ? 'Click here to make a Deposit' : 'Deposit/Withdraw'}</Nav.Link>
             
                
       

return(
<>
<div id='background'>
  <nav href='#'>BadBank</nav>
  <nav href="#">Create Account</nav>
  <nav href='#'>Login</nav>
  <img src={image} width={350} height={200}/>
  <nav href='#'>ApplyScience</nav>
  <nav href='#'>Map</nav>
</div>
<br/>
<br/>
<div id='background'></div>





<Navbar bg="dark" variant="dark">
<Container>
<Navbar.Brand href="/">BadBank</Navbar.Brand>
<Nav className="me-auto">
  <Nav.Link href="/createaccount" {...buttonAHoverProps}>{buttonAIsHovering ? 'Click here to Create your Account' : 'Create Account'} </Nav.Link>
  <Nav.Link href="/login" {...buttonEHoverProps}>{buttonEIsHovering ? 'Click here to Login' : 'Login'}</Nav.Link> 
  <img variant="bottom" src={image} width={350} height={200} fluid='true' alt='Card image' />
  
  <Nav.Link href="/applyscience" {...buttonCHoverProps}>{buttonCIsHovering ? 'Click here to applyscience' : 'Apply Science'}</Nav.Link>
  <Nav.Link href="/mapbox" {...buttonDHoverProps}>{buttonDIsHovering ? 'Click here to Map' : 'Map'}</Nav.Link>
</Nav>
</Container>
</Navbar>
    
 
</>

);

}


        

export default NavBar;


import React from "react";
import ReactBootstrap from 'react-bootstrap';
import {Card, Button} from 'react-bootstrap';
import { useNavigate } from "react-router";



  function Login(props){
    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState('');
    const [show, setShow]     = React.useState(true);
    const [status, setStatus] = React.useState('');  
    const [data, setData] = React.useState('');

    function handle(){      //name, email, password ''
        console.log(email,password);
        const url = `record/${email}`;
        (async () => {
          var res = await fetch(url);
          var data = await res.json();
          console.log(data.email);{
          if (!data) {
            console.log('one')      
            props.setStatus('fail!')      
            return; 
          }
         // if (user.password == password) {
          //  console.log('two')            
          //  props.setStatus('');
          props.setShow(false); //then we update the UI simply to show that we have created a new user
          return;
          }
        })();
      }
      

     


    ///////////////////////////front end login java ///////////////////////////////////////////////////////
      
  
      //React.useEffect(() => { //use the useEffect hook with useState to call that route and then update the UI
      //fetch(`http://localhost:5000/record/${email}`)
      //.then(response => response.json())
      //.then(data => {
        //console.log(data);
        //if (data.email == email){
          //console.log('one');
        //}
      //setData(JSON.stringify(data));
      //});
    //}, []);

    

        
    const [form, setForm] = React.useState({
      email: "",
      password: ""
    });
    
    //const navigate = useNavigate();
    
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
      const loginaccount = { ...form };
    
      await fetch("http://localhost:5001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginaccount),
      })
      .catch(error => {
        window.alert(error);
        return;
      });
    
      setForm({ email: "", password: "" });
      //setShow(false);
      //navigate("/createaccount");
    }
    
      
    
    ///////////////////////////front end login java ///////////////////////////////////////////////////////
  
    React.useEffect(() => { //use the useEffect hook with useState to call that route and then update the UI
      fetch('https://nmeganfoxw3377mongoosefp.herokuapp.com/users')
      .then(response => response.json())
      .then(data => {
        console.log(data);
       
        setData(JSON.stringify(data));
      });
    }, []);


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



    
    
    // This function will handle the submission.
    async function onSubmit(e) {
      e.preventDefault();

    
      // When a post request is sent to the create url, we'll add a new record to the database.
      //const loginaccount = { ...form }
    

    const response = await fetch(`https://nmeganfoxw3377mongoosefp.herokuapp.com/user/login`, {
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
      alert('Login Successful')
      setEmail(response.data);
      localStorage.setItem('email', response.data);
      console.log(response.data);
      window.location.href = '/deposit'
    } else {
      alert('Please check your username and password')
    }
  }

    
    async function onSubmitjwt(e) {
      e.preventDefault();
    
    const response = await fetch(`https://nmeganfoxw3377mongoosefp.herokuapp.com/user/logout`, {
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
      window.location.href = '/'
    } else {
      alert('Please check your username and password')
    }
  }
  

  const handleLogout = () => {
    //setUser({});
    setEmail("");
    setPassword("");
    localStorage.clear();
  };



    
    
      
    
    

  
    
  
  
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

<Card.Header>Login</Card.Header>
<Card.Body>
<form onSubmit={onSubmit}>
  <Card.Title>Email</Card.Title>
  <input type='text' placeholder='Enter Email' style={{ width: '13rem' }} id='email' value={email} onChange={(e) => setEmail(e.currentTarget.value )} /><br/>
  <div style={{color: 'red'}}>{status}</div> 
  <br/>
  <Card.Title>Password</Card.Title>
  <input type='password' placeholder='Enter Password' style={{ width: '13rem' }} id='password' value={password} onChange={(e) => setPassword(e.currentTarget.value)}/><br/>
  <div id='message' style={{color: 'red'}}></div>
  <br/>
 <Button variant='light' name="submit" type="submit" value='Login' data-dismiss='alert' onClick={onSubmit}>Login</Button>
 <Button variant='dark' name='submit' tyoe='submit' onClick={onSubmitjwt}>logout</Button>
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
        <button type="submit" className="btn btn-light" >Add Another Account</button>
        </Card.Body>
        </Card>
        </>
    
    )
   

}




  export default Login;