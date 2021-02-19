import React, { Component } from 'react'
import UserService from "../services/UserService ";

export default class UpdateProfile extends Component {
constructor(props) {
    super(props)

    this.state = {
        userId: this.props.match.params.userId,
        fname: '',
        lname: '',
        phoneno: '',
        email:'',
        password:'',
        ilimit:''
    }
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changePhoneNoHandler = this.changePhoneNoHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.changeLimitHandler = this.changeLimitHandler.bind(this);
    this.updateUser = this.updateUser.bind(this);
}


updateUser = (e) => {
    e.preventDefault();
    let user = {fname: this.state.fname, lname: this.state.lname, phoneno: this.state.phoneno, email: this.state.email,password: this.state.password,ilimit: this.state.ilimit};
    console.log('user => ' + JSON.stringify(user));
    console.log('userId => ' + JSON.stringify(this.state.userId));
    UserService.updateUser(user, this.state.userId).then( res => {
        this.props.history.push('/investor/welcome');
    });
}

changeFirstNameHandler= (event) => {
    this.setState({fname: event.target.value});
}

changeLastNameHandler= (event) => {
    this.setState({lname: event.target.value});
}

changePhoneNoHandler= (event) => {
    this.setState({phoneno: event.target.value});
}

 changeEmailHandler= (event) => {
    this.setState({email: event.target.value});
}

 changePasswordHandler= (event) => {
    this.setState({password: event.target.value});
}
changeLimitHandler= (event) => {
    this.setState({ilimit: event.target.value});
}

cancel(){
    this.props.history.push('/investor/welcome');
}





componentDidMount() {
    let userdata= JSON.parse(localStorage.getItem('admindetails'))
    console.log(userdata.userId);
    UserService.getByUser(userdata.userId).then( (res) =>{
   let user=res.data;
    // console.log(user);
    this.setState({ userId: user.userId,
        fname: user.fname,
        lname: user.lname,
        phoneno: user.phoneno,
        email: user.email,
        password:user.password,
        ilimit: user.ilimit
    });
});

  }


    render() {
        return (
            <div className="display">
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Profile</h3>
                                <div className = "card-body">
                                <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="fname" className="form-control" 
                                                value={this.state.fname} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lname" className="form-control" 
                                                value={this.state.lname} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Phone No:</label>
                                            <input placeholder="Phone No" name="phoneno" className="form-control" 
                                                value={this.state.phoneno} onChange={this.changePhoneNoHandler}/>
                                        </div>
                                         <div className = "form-group">
                                            {/* <label>Email Id:</label> */}
                                            <input type="hidden" placeholder="Email Id" name="emailId" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>
                                         <div className = "form-group">
                                            <label>Password:</label>
                                            <input placeholder="password" name="password" className="form-control" 
                                                value={this.state.password} onChange={this.changePasswordHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            {/* <label>Investor Limit:</label> */}
                                            <input type="hidden" placeholder="Investor Limit" name="investorLimit" className="form-control" 
                                                value={this.state.ilimit} onChange={this.changeLimitHandler}/>
                                        </div>
                                

                                        <button className="btn btn-success" onClick={this.updateUser}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}
