import React, { Component } from 'react'
import Navbar from '../admin/Navbar';
import UserService from "../services/UserService ";
//import './Display.css'

class CreateManagerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            userId: this.props.match.params.userId,
            fname:'',
            lname:'',
            email: '',
            phoneno:'',
            gender:'',
            passsword:'',
            salary: '',
            managername:'',
            cmpnyId: '',
            role:'Manager'
          
        }
        this.changeManagerNameHandler = this.changeManagerNameHandler.bind(this);
        this.changeSalaryHandler = this.changeSalaryHandler.bind(this);
        this.changeCompanyIdHandler = this.changeCompanyIdHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.saveManager = this.saveManager.bind(this);
    }

    
    // componentDidMount(){

    //     step 4
    //     if(this.state.id === '_add'){
    //         return
    //     }else{
    //         ManagerService.getManagerById(this.state.id).then( (res) =>{
    //             let manager = res.data;
    //             this.setState({managerName: manager.managerName,
    //                 managerType: manager.managerType,
    //                 managerName : manager.managerName,
    //                 investorLimit: manager.investorLimit,
    //                 stockCount:manager.stockCount
    //             });
    //         });
               
    // }
    saveManager = (e) => {
        e.preventDefault();
        let user = {fname: this.state.fname,lname: this.state.lname,email: this.state.email,phoneno: this.state.phoneno,gender: this.state.gender, password: this.state.password, salary: this.state.salary,managername: this.state.managername,cmpnyId: this.state.cmpnyId,role:this.state.role};
        console.log('user => ' + JSON.stringify(user));

        // step 5
        // if(this.state.id === '_add'){
            UserService.createUser(user).then(res =>{
                this.props.history.push('/getmanager');
            });
        // else{
        //     ManagerService.updateManager(manager, this.state.id).then( res => {
        //         this.props.history.push('/getmanager');
        //     });
        }
    
    changeManagerNameHandler= (event) => {
        this.setState({managername: event.target.value});
    }

    changeSalaryHandler= (event) => {
        this.setState({salary: event.target.value});
    }

    changeCompanyIdHandler= (event) => {
        this.setState({cmpnyId: event.target.value});
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

    // getTitle(){
    //     if(this.state.id === '_add'){
    //         return <h3 className="text-center">Add Manager</h3>
    //     }else{
    //         return <h3 className="text-center">Update Manager</h3>
    //     }
    // }
    render() {
        return (
            <div className="display">
                <Navbar/>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {/* {
                                    this.getTitle()
                                } */}
                                <h3 className="text-center">Add Manager</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Manager Name: </label>
                                            <input placeholder="Manager Name" name="managerName" className="form-control" 
                                                value={this.state.managername} onChange={this.changeManagerNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Salary: </label>
                                            <input placeholder="Salary" name="Salary" className="form-control" 
                                                value={this.state.salary} onChange={this.changeSalaryHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Company ID:</label>
                                            <input placeholder="Company ID" name="companyId" className="form-control" 
                                                value={this.state.cmpnyId} onChange={this.changeCompanyIdHandler}/>
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
                                      
                            

                                        <button className="btn btn-success" onClick={this.saveManager}>Save</button>
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

export default CreateManagerComponent
