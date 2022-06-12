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
