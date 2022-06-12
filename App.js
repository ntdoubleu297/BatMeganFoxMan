import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
import {State} from 'react';
 
// We import all the components we need in our app
import Navbar from "./components/navbarbb";
//import RecordList from "./components/recordList";
//import Edit from "./components/edit";
import CreateAccount from "./components/createaccount";
import Deposit from './components/deposit';
import Withdraw from './components/withdraw';
import AllData from './components/alldata';
import Home from './components/home';
import Login from './components/login';
import ApplyScience from './components/applyscience';
import Map from './components/mapbox';
import {
    HashRouter
  } from 'react-router-dom'; 
import L from './components/salaries.json';
 
const App = () => {

  
 
  //{this.state.isActive ? <h1>Hello React</h1> : null }
   // <button onClick={this.handleShow}>Show</button>
   // <button onClick={this.handleHide}>Hide</button>
   // { (this.state.isNavBarHidden) ? null : <NavBar /> }


 return (
    
   <div>
        
     <Navbar />

     <div className="container" style={{padding: "20px"}}></div>
     <Routes>
              <Route path="/" exact element={<Home/>} />
              <Route path="/createaccount" element={<CreateAccount />} />
              <Route path="/login" element={<Login/>} /> 
               <Route path="/deposit/" element={<Deposit/>} />  
               <Route path="/withdraw/" element={<Withdraw/>} /> 
               <Route path="/alldata/" element={<AllData/>} /> 
               <Route path="/applyscience/" element={<ApplyScience/>} />
               <Route path="/mapbox/" element={<Map/>}/>
     </Routes>

   </div>

   
 );
};
 
export default App;



