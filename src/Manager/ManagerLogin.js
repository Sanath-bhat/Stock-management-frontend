import React from 'react';
import {Link} from 'react-router-dom';
import  './ManagerLogin.css';

export default function ManagerLogin() {
    return (
    // <div><h1>Login Form</h1>
    <div className="managerlogin">
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
    <Link className="navbar-brand" to="/">Stock Management App</Link>
                    </nav>
    <div class="col-md-4 offset-4 mt-4 card card-body"> 
    {/* <h3 class="card-title mt-4">Log in</h3>  */}
    <h4 class="card-title text-center bg-white text-dark">
      Login</h4>  
<form>
  <div class="form-group">
    <label htmlFor="exampleInputEmail1">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>

  <div class="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div><br/>
<div>
<Link className="nav-link" to="/manager/welcome"><button type="submit" class="btn btn-primary">Submit</button></Link>
  </div>
</form>
</div> 
</div>      
        
    )
}

