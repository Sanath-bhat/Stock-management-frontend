import React, { Component } from 'react'
import UserService from "../services/UserService ";

export default class ChangePassword extends Component {
    constructor(props) {
        super(props)
    
        this.state = {

            password:'' 
        }
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
    }

    updatePassword = (e) => {
        e.preventDefault();
        let user1 = {password: this.state.password};
        console.log('user => ' + JSON.stringify(user1));
        console.log('userId => ' + JSON.stringify(this.state.userId));
        UserService.updateUser(user1, this.state.userId).then( res => {
            this.props.history.push('/manager/welcome');
        });
    }
    componentDidMount() {
        let userdata= JSON.parse(localStorage.getItem('admindetails'))
        console.log(userdata.userId);
        UserService.getByUser(userdata.userId).then( (res) =>{
      let user=res.data;
        // console.log(user);
        this.setState({ userId: user.userId,
            password:user.password
        });
    });
    
      }
      cancel(){
        this.props.history.push('/investor/welcome');
    }
      changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }
    
    render() {
        return (
            <div>
               <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Change Password</h3>
                                <div className = "card-body">
                                <form>
                 <div className = "form-group">
                                            <label>Password:</label>
                                            <input placeholder="password" name="password" className="form-control" 
                                                value={this.state.password} onChange={this.changePasswordHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.updatePassword}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                
                                        </form>
                                        </div>
                                        </div>
                                        </div></div>

            </div>
        )
    }
}
