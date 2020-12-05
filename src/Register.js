import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './Register.css'
import UserService from './services/UserService ';

class Register extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            errors:{
            userId: this.props.match.params.userId,
            
            fname: '',
            lname: '',
            email: '',
            phoneno:'',
            gender:'',
            password:'',
            role:'Investor'
             
        }}
        // this.changefnameHandler = this.changefnameHandler.bind(this);
        // this.changelnameHandler = this.changelnameHandler.bind(this);
        // this.changeemailHandler = this.changeemailHandler.bind(this);
        // this.changephonenoHandler = this.changephonenoHandler.bind(this);
        this.changegenderHandler = this.changegenderHandler.bind(this);
        // this.changepasswordHandler = this.changepasswordHandler.bind(this);
        // this.changeroleHandler = this.changeroleHandler.bind(this);
        this.saveUser = this.saveUser.bind(this);
        this.changeHandler =this.changeHandler.bind(this);
    }

    // changefnameHandler= (event) => {
    //     this.setState({fname: event.target.value});
    // }

    // changelnameHandler= (event) => {
    //     this.setState({lname: event.target.value});
    // }

    // changeemailHandler= (event) => {
    //     this.setState({email: event.target.value});
    // }
    // changephonenoHandler= (event) => {
    //     this.setState({phoneno: event.target.value});
    // }

    changegenderHandler= (event) => {
        this.setState({gender: event.target.value});
    }
    // changepasswordHandler= (event) => {
    //     this.setState({password: event.target.value});
    // }
    // changeroleHandler= (event) => {
    //     this.setState({role: event.target.value});
    // }

    changeHandler =(event)=>{
        let name =event.target.name;
        let value = event.target.value;
        let errors = this.state.errors;
        let role = this.state.role;
    
    switch(name){
      
        case "fname":errors.fame =value.length < 3 ? "Name is too short,please enter your Fullname" : "";  
        break;
        case "lname":errors.lame =value.length < 3 ? "Name is too short,please enter your Fullname" : "";  
        break;
        case "email":errors.email =value.length <5 ? " Invalid email":"";
        let apos = value.indexOf('@');
        let dotpos = value.lastIndexOf('.');
    
        if(apos < 1 || dotpos - apos <2){
          errors.email ="Please enter valid emailId";
        }
        break;
        case "password":errors.password =value.length < 8 ? "password should have minimum 8 characters" : "";  
        break;
    
        case "phoneno":errors.phoneno=value.length !=10 ? "Invalid ,Phonenumber should have 10 digits" : "";  
        break;
        
        default: break;
    }
    this.setState({errors,[name]:value, role:'Investor'});
    }

    saveUser = (e) => {
        e.preventDefault();
        let user = {fname: this.state.fname,
             lname: this.state.lname,
              email: this.state.email,
              phoneno: this.state.phoneno,
               gender: this.state.gender,
                password: this.state.password,
                role: this.state.role};
        console.log('user => ' + JSON.stringify(user));

        UserService.createUser(user).then(res =>{
            this.props.history.push('/login');
        });
        alert("Registered successfully")
    }
    render() {
        const {errors}=this.state;
    return (
        <div className="registerr">
             <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div className="navbar-brand">Stock Management App</div>
                    </nav>
        <div class="col-md-4 offset-4 mt-4 card card-body"> 
            <h2 class="card-title text-center bg-white text-dark">Sign up</h2>  
        <form>
        <div class="form-row">
		<div class="col form-group">
			<label>First name </label>   
		  	<input type="text" class="form-control" name="fname"placeholder=""value={this.state.fname} onChange={this.changeHandler}/>
              <p style={{color:"red"}}>{errors.userfname}</p>

		</div>
		<div class="col form-group">
			<label>Last name</label>
		  	<input type="text" class="form-control" name="lname" placeholder=""value={this.state.lname} onChange={this.changeHandler}/>
		      <p style={{color:"red"}}>{errors.lname}</p>

        </div> 
	</div> 
	<div class="form-group">
		<label>Email address</label>
		<input type="email" class="form-control"  name="email"placeholder="" value={this.state.email} onChange={this.changeHandler}/>
        <p style={{color:"red"}}>{errors.email}</p> 
	<small class="form-text text-muted">We'll never share your email with anyone else.</small>
	</div> 
    <div class="form-group">
		<label>Phone no</label>
		<input type="phone" class="form-control"  name="phoneno"placeholder=""value={this.state.phoneno} onChange={this.changeHandler}/>
	    <p style={{color:"red"}}>{errors.phoneno}</p>

    </div> 

    <div class="form-group">
		<label>Gender</label>
		<input type="gender" class="form-control" placeholder=""value={this.state.gender} onChange={this.changegenderHandler}/>
	</div>
	{/* <div class="form-group">
			<label class="form-check form-check-inline">
		  <input class="form-check-input" type="radio" name="gender"value1="option1" />
		  <span class="form-check-label"> Male </span>
		</label>
		<label class="form-check form-check-inline">
		  <input class="form-check-input" type="radio" name="gender" value1 ="option2"/> 
		  <span class="form-check-label"> Female</span>
		</label>
       </div>
     */}
    

          <div class="form-group">
		<label>Create password</label>
	    <input class="form-control" type="password" name="password" placeholder="Enter passsword" value={this.state.password} onChange={this.changeHandler}/>
	    <p style={{color:"red"}}>{errors.password}</p> 
    </div>

    {/* <div class="form-group col-md-6">
		  <label>Register as</label>
		  <select id="inputState" class="form-control"value={this.state.role} onChange={this.changeroleHandler}>
		    <option> Choose...</option>
		      <option>Admin</option>
		      <option>Investor</option>
		  </select>
		</div> */}
          
<div>
<Link to="/login"><button type="submit" class="btn btn-primary" onClick={this.saveUser}>Register</button></Link>
</div>
</form>
        </div>
        </div>
        
    )
    
}}
export default Register;


