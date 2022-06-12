import React from "react";
import ReactBootstrap from 'react-bootstrap';
import axios from 'axios';
import {
  Card,
  Img,
  Button
} from 'react-bootstrap';
import image from './bank.jpeg';
const userContext = React.createContext({users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]});

function Home(){

    const ctx = React.useContext(userContext);
     console.log(ctx.users);

return (

    [
        'Primary'
      ].map((variant, idx) => (
        <Card
          bg='primary'
          key={idx}
          text={variant.toLowerCase() === 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
             
          <Card.Header>BadBank Landing Module </Card.Header>
          <Card.Body>
            <Card.Title>Welcome to the Federal Bank</Card.Title>
            <Card.Text>
              You can move around using the navigation bar. 
            </Card.Text>
          </Card.Body>
        <Card.Img variant="bottom" src={image} fluid='true' alt='Card image' />
        </Card>
     
      ))
);

}

export default Home;





