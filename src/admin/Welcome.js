import React, { Component } from 'react'
import Navbar from './Navbar'
import './Welcome.css'

export default class Welcome extends Component {
    render() {
        return (
            <div className="wlcme">
                <Navbar/>
                  <div class="col-md-4 offset-4 mt-4 card card-body"> 
                  <h2 class="card-header text-center bg-white text-dark">Hello Admin!</h2>  
                  <p>From here,you can manage all the Stock management activities.You can
                      add/manage companies and also their managers who will in turn add/manage stocks.</p>
                      <p>Please Keep in mind that with big power comes with big responsibility.
                           Therefore,please do not misuse your admin control to create trouble. </p>
                  </div>
            </div>
        )
    }
}
