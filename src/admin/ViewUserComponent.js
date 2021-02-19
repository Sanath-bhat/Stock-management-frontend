import React, { Component } from 'react'
import UserService from "../services/UserService "
import Navbar from './Navbar'

class ViewUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                user: []
        }
        // this.addUser = this.addUser.bind(this);
        this.editUser = this.editUser.bind(this);
        // this.deleteUser = this.deleteUser.bind(this);
    }

    // deleteUser(userId){
    //     UserService.deleteUser(userId).then( res => {
    //         this.setState({users: this.state.users.filter(user => user.userId !== userId)});
    //     });
    // }
    // viewUser(id){
    //     this.props.history.push(`/view-user/${id}`);
    // }
    editUser(userId){
        this.props.history.push(`/update-user1/${userId}`);
    }

    componentDidMount(){
        UserService.getUser().then((res) => {
            this.setState({ user: res.data});
        });
    }

    // addUser(){
    //     this.props.history.push('/add-user');
    // }

    render() {
        return (
            <div className="viewstock">
                <Navbar/>
                 <h2 className="text-center">Investors</h2>
                 <div class="col-md-8 offset-2 mt-4 card card-body"> 
                 {/* <div className = "row">
                    <button className="btn btn-primary" onClick={this.addUser}> Add User</button>
                 </div> */}
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Investor Limit</th>
                                    <th>Actions</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.user.map(
                                        user =>user.role==="Investor"&&(
                                        <tr key = {user.userId}>
                                             <td> {user.fname} </td>   
                                             <td> {user.lname}</td>
                                             <td> {user.email}</td>
                                              <td> {user.ilimit}</td>
                                              <td> 
                                                  <button onClick={ () => this.editUser(user.userId)} className="btn btn-info">Add Limit </button>
                                                 {/* <button style={{marginLeft: "10px"}} onClick={ () => this.deleteUser(user.userId)} className="btn btn-danger">Delete </button> */} 
                                                  {/* <button style={{marginLeft: "10px"}} onClick={ () => this.viewUser(user.id)} className="btn btn-info">View </button> */} 
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

export default ViewUserComponent
