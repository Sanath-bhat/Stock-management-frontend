import React, { Component } from 'react'
import UserService from "../services/UserService ";

class UpdateManagerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: this.props.match.params.userId,
            managername: '',
            salary: '',
            cmpanyId: '',
            email:'',
            password:''
           
        }
        this.changeManagerNameHandler = this.changeManagerNameHandler.bind(this);
        this.changeSalaryHandler = this.changeSalaryHandler.bind(this);
        this.changeCompanyIdHandler = this.changeCompanyIdHandler.bind(this);
         this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.updateManager = this.updateManager.bind(this);
    }

    componentDidMount(){
        UserService.getByUser(this.state.userId).then( (res) =>{
            let company = res.data;
            this.setState({managername: company.managername,
                salary: company.salary,
                cmpanyId : company.cmpanyId,
                email: company.email,
                password:company.password
            });
        });
    }

    updateManager = (e) => {
        e.preventDefault();
        let user = {managername: this.state.managername, salary: this.state.salary, cmpanyId: this.state.cmpanyId, email: this.state.email,password: this.state.password};
        console.log('user => ' + JSON.stringify(user));
        console.log('userId => ' + JSON.stringify(this.state.userId));
        UserService.updateUser(user, this.state.userId).then( res => {
            this.props.history.push('/getmanager');
        });
    }
    
    changeManagerNameHandler= (event) => {
        this.setState({managername: event.target.value});
    }

    changeSalaryHandler= (event) => {
        this.setState({salary: event.target.value});
    }

    changeCompanyIdHandler= (event) => {
        this.setState({cmpanyId: event.target.value});
    }
    
     changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }

     changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }
    
    cancel(){
        this.props.history.push('/getmanager');
    }

    render() {
        return (
            <div className="display">
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Manager</h3>
                                <div className = "card-body">
                                <form>
                                        <div className = "form-group">
                                            <label> Manager Name: </label>
                                            <input placeholder="Manager Name" name="name" className="form-control" 
                                                value={this.state.managername} onChange={this.changeManagerNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Salary: </label>
                                            <input placeholder="Manager Salary" name="salary" className="form-control" 
                                                value={this.state.salary} onChange={this.changeSalaryHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Company ID:</label>
                                            <input placeholder="Company ID" name="companyId" className="form-control" 
                                                value={this.state.cmpanyId} onChange={this.changeCompanyIdHandler}/>
                                        </div>
                                         <div className = "form-group">
                                            <label>Email Id:</label>
                                            <input placeholder="Email Id" name="emailId" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>
                                         <div className = "form-group">
                                            <label>Password:</label>
                                            <input placeholder="password" name="password" className="form-control" 
                                                value={this.state.password} onChange={this.changePasswordHandler}/>
                                        </div>
                                

                                        <button className="btn btn-success" onClick={this.updateManager}>Save</button>
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

export default UpdateManagerComponent
