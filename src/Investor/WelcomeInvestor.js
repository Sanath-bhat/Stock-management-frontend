import React, { Component } from 'react'
import Navbar2 from './Navbar2'
import "./InvestorWelcome.css"

export default class WelcomeInvestor extends Component {

    //    localStorage.setItem('admindetails',JSON.stringify(this.user[i])) 
    constructor(props) {
        super(props)
    
        this.state = {
             usersdata:''
        }
    }
    componentDidMount() {
        let userdata = JSON.parse(localStorage.getItem('admindetails')) 
        // const user = rememberMe ? localStorage.getItem('user') : '';
         //this.setState(userdata);
        console.log(userdata);
      }
    
    //    usersdata = JSON.parse( localStorage.getItem('admindetails'));
      
    render() {
        return (
            <div className="investor">
                <Navbar2/>
                <div className="cd">
              
                  <div class="col-md-4 offset-4 mt-4 card card-body"> 
                  <h2 class="card-header text-center bg-white text-dark h-400">Welcome Investor!!!</h2>  
                  <h5>From here,you can view the available stocks.You can
                      buy or sell the stocks.</h5>
                      <h5>When it comes to investing, nothing will pay off more than educating yourself. Do the necessary research and analysis before making any investment decisions.. </h5>
                      <h5>In investing, what is comfortable is rarely profitable.</h5>
                  </div>
                  </div>
            </div>
        )
    }
}
