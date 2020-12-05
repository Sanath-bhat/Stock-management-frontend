import React, { Component } from 'react'
import './ManagerWelcome.css'
import Navbar1 from './Navbar1'
import './ManagerWelcome.css'

export default class ManagerWelcome extends Component {
    render() {
        return (
            <div className="wlcm">
                <Navbar1/>
                <div className="cd">
                  <div class="col-md-4 offset-4 mt-4 card card-body"> 
                  <h2 class="card-header text-center bg-white text-dark">Hello Manager!</h2>  
                  <p>From here,you can manage all the Stock management activities.You can
                       add/manage stocks.</p>
                      <p>Please Keep in mind that with big power comes with big responsibility.
                           Therefore,please do not misuse your managing control to create trouble. </p>
                  </div>
            </div></div>
        )
    }
}
