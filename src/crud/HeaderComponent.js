import React, { Component } from 'react'
import {BrowserRouter as Router,Link, Route, Switch} from 'react-router-dom'
import './Home.css'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className="home">
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <Link className="navbar-brand" to="/">Stock Management App</Link>
                    
                    {/* <li className="nav-item" active>
        <Link className="nav-link" to="/homeimg">Home</Link>
      </li>  */}
      {/* <li className="nav-item1" >
        <Link className="nav-link" to="/login">Login</Link>
      </li> */}
      


<nav className="nav navbar-nav navbar-right">


      <li className="nav-item1">
          <Link className="nav-link" to="/login"><button type="button" className="btn btn-primary btn-small btn-nav">Login</button></Link></li>
      <li className="nav-item2">
          <Link className="nav-link" to="/register"><button type="button" className="btn btn-success btn-small btn-nav">Sign up</button></Link></li>
          {/* <li className="nav-item3">
          <Link className="nav-link" to="/managerlogin"><button type="button" className="btn btn-primary btn-small btn-nav">Manager Login</button></Link></li> */}
  </nav>
      </nav>

      
                </header>
                
            </div>
        )
    }
}

export default HeaderComponent
