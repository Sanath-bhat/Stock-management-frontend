import React, { Component } from 'react'
import Navbar from '../admin/Navbar'
import UserService from "../services/UserService "
//import './Display.css'

class ListManagerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                user: []
        }
        this.addManager = this.addManager.bind(this);
        this.editManager = this.editManager.bind(this);
        this.deleteManager = this.deleteManager.bind(this);
    }

    deleteManager(userId){
        UserService.deleteUser(userId).then( res => {
            this.setState({user: this.state.user.filter(user => user.userId !== userId)});
            // window.confirm("This record will be deleted");
        });
    }
    // viewManager(companyId){
    //     this.props.history.push(`/view-company/${companyId}`);
    // }
    editManager(userId){
        this.props.history.push(`/update-user/${userId}`);
    }

    componentDidMount(){
        UserService.getUser().then((res) => {
            this.setState({ user: res.data});
        });
    }

    addManager(){
        this.props.history.push('/add-manager');
    }

    render() {
        return (
           
            <div className="display">
                 <Navbar/>
                
                 <h2 className="text-center">Manager List</h2>
                 <div class="col-md-8 offset-2 mt-4 card card-body"> 
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addManager}> Add Manager</button>
                 </div>
                 <br></br>
                
                 <div className = "row">
                        <table className = "table table-striped table-bordered" >

                            <thead>
                                <tr>
                                    <th> Manager Name</th>
                                    <th> Salary</th>
                                    <th> Company ID</th>
                                    <th> Email Id</th>
                                    <th> Password</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.user.map(
                                        user =>user.role==="Manager"&&(

                                        
                                        <tr key = {user.userId}>
                                             <td> {user.managername} </td>   
                                             <td> {user.salary}</td>
                                             <td> {user.cmpnyId}</td>
                                             <td> {user.email}</td>
                                             <td> {user.password}</td>
                                             
                                            
        
                                             <td>
                                                 <button onClick={ () => this.editManager(user.userId)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={() => {if(window.confirm('Delete Manager?')){this.deleteManager(user.userId)};}} className="btn btn-danger">Delete </button>
                                                 {/* <button style={{marginLeft: "10px"}} onClick={ () => this.viewManager(company.id)} className="btn btn-info">View </button> */}
                                             </td>
                                        </tr>)
                                    )
                                }
                            </tbody>
                        </table>

                 </div>
</div>
            </div>
        )
    }
}

export default ListManagerComponent
