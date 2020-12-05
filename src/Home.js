import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
//import Showmobiles from './Showmobiles'
// import Homeimg from './Homeimg'
// import Login from './Login'
// import Show from './Show';
// import Showmobiles from './Showmobiles';
// import Showmobiles from './Showmobiles';

 class Home extends Component {
  
  render() {
  
    return (
      
        <div>
        
         
      <nav className="navbar navbar-expand-lg navbar-light bg-danger">
  
  
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
    
       <li className="nav-item" active>
        <Link className="nav-link" to="/homeimg">Home</Link>
      </li> 
      <li className="nav-item1" >
        <Link className="nav-link" to="/login">Login</Link>
      </li>
     
     
    </ul>
  </div>
</nav>

    
   


      </div>
    )
  }
}
export default Home;
