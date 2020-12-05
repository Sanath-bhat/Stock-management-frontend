import React, { Component } from 'react'
import { RiGameFill } from 'react-icons/ri';
import {Link} from 'react-router-dom';
import  './Login.css';
import UserService from "./services/UserService "

export default class Login extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      user: [],
      mail:'',
      pwd:'',
       role:'',
       a:''

    }
    this.changePassword = this.changePassword.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.changeEmail= this.changeEmail.bind(this);
    this.checkRole = this.checkRole.bind(this);

  }
  changeEmail =(event)=>{
    this.setState({
        mail:event.target.value
    })
}
changePassword= (event)=>{
    this.setState({
        pwd:event.target.value
    })
}

//   changeRole =(event)=>{
//     this.setState({
//         role:event.target.value
//     })
// }


componentDidMount(){
  UserService.getUser().then((res) => {
      this.setState({ user: res.data});
      // console.log(res.data);
        this.state.a = (res.data);
        // console.log(a[1].email);
        console.log(this.state.a);
        
      
  });
}

//   checkRole=(e)=>{
//     e.preventDefault()
//     let role = {role:this.state.role}
//     console.log('role =>' +JSON.stringify(role));
//      if(this.state.role === "Admin" && this.state.emailId === "admin@stock.com" && this.state.password === "admin")
//      {
//         this.props.history.push("/admin/welcome")
//      }
//      else if(this.state.role === "Investor" )
//      {
//          this.props.history.push("/investor/welcome")
//      }
//      else{
//          alert("invalid user")
//      }
// }

checkRole=(e)=>{
  console.log(this.state.pwd);


  if(this.state.mail == "admin@gmail.com" && this.state.pwd == "admin")
    {
      console.log(this.state.mail)
      this.message="Logined successfully";
      console.log(this.message);
       //localStorage.setItem('admindetails',JSON.stringify(this.state.a[i]))
      this.props.history.push("/admin/welcome")

    }
  for(let i=0;i<this.state.a.length;i++){
    if((this.state.mail===this.state.a[i].email)&&(this.state.pwd===this.state.a[i].password)){
     console.log(this.state.a[i].mail)
     console.log("Sanath")
     if(this.state.a[i].role=="Investor")
      {

         this.message="Logined successfully";
         console.log(this.message);
        // localStorage.setItem('admindetails',JSON.stringify(this.user[i]))
         this.props.history.push("/investor/welcome")
    }
     if(this.state.a[i].role=="Manager")
    {

    console.log("sanath");
       this.message="Logined successfully";
       console.log(this.message);
      // localStorage.setItem('admindetails',JSON.stringify(this.user[i]))
       this.props.history.push("/manager/welcome")
  }
    else{
      this.message='Invalid credentials';
      console.log(this.message);
    }

  }
}


}
  
  render(){
    return (
    // <div><h1>Login Form</h1>
    <div className="loginn">
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
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"value={this.state.mail} onChange={this.changeEmail}/>
  </div>

  <div class="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"value={this.state.pwd} onChange={this.changePassword}/>
  </div><br/>

  {/* <div class="form-group col-md-6">
		  <label>Login as</label>
		  <select id="inputState" class="form-control" value={this.state.role} onChange={this.changeRole}>
		    <option> Choose...</option>
		      <option>Admin</option>
		      <option>Investor</option>
		  </select>
		</div> */}
<div>
{/* <Link className="nav-link" to="/admin/welcome"> */}
<button type="submit" class="btn btn-primary"onClick={this.checkRole}>Submit</button>
{/* </Link>  */}
  <Link to="/register" className="link">Register </Link>
  </div>
</form>
</div> 
</div>      
        
    )
}}

