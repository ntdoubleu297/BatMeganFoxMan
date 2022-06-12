import React from "react";
import ReactBootstrap from 'react-bootstrap';
import axios from 'axios';
import Context from './context';
import Home from './home';
import CreateAccount from './createaccount';
import Deposit from './deposit';
import Withdraw from './withdraw';
import AllData from './alldata';
import ApplyScience from './applyscience';
import {
  Card,
  Navbar
} from 'react-bootstrap';
import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom'; 
import NavBar from './navbar';


//const userContext = React.createContext({users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]});
//export { userContext 


//<Context.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]}}>
//</Context.Provider>




function Spa() {
    return (


      <HashRouter>
            <NavBar/>
            
          <div className="container" style={{padding: "20px"}}>
         
         
            <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/createaccount/" element={<CreateAccount/>} />
            <Route path="/deposit/" element={<Deposit/>} />
            <Route path="/withdraw/" element={<Withdraw/>} />
            <Route path="/alldata/" element={<AllData/>} />
            <Route path="/applyscience/" element={<ApplyScience/>} />
            </Routes>
            
           
          </div>
   
          
        
          
      </HashRouter>
    );
  }

  
  export default Spa;

  



  import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import CreateAccount from "./components/createaccount";
 
const App = () => {
 return (
   <div>
     <Navbar />
     <Routes>
       <Route exact path="/" element={<RecordList />} />
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/createaccount" element={<CreateAccount />} />
     </Routes>
   </div>
 );
};
 
export default App;
