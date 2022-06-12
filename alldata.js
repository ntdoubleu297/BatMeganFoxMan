import React from "react";
import ReactBootstrap from 'react-bootstrap';
import axios from 'axios';
import Context from './context';
import CreateAccount from './createaccount';





//function AllData(){
  //const ctx = React.useContext(UserContext);
  //return (
   // <>
  //  <h5>All Data in Store</h5>
   // {JSON.stringify(ctx)}<br/>
  //  </>
 // );
//}

function AllData(){
    const [data, setData] = React.useState('');
  
    React.useEffect(() => { //use the useEffect hook with useState to call that route and then update the UI
      fetch('http://localhost:5000/record')
      .then(response => response.json())
      .then(data => {
        console.log(data);
       
        setData(JSON.stringify(data));
      });
    }, []); //{data} below is simply the [data, setData] that we have set the useState - set once we call that backend 
  
    return(
      <>
      <h5>All Data in Store</h5>
      {data} 
      </>
    );
  }

  export default AllData;