import React, { Component } from 'react'
import UserService from "../services/UserService ";

class UpdateUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: this.props.match.params.userId,
            ilimit:''
           
        }
        this.changeLimitHandler = this.changeLimitHandler.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }

    componentDidMount(){
        UserService.getByUser(this.state.userId).then( (res) =>{
            let user = res.data;
            this.setState({ilimit: user.ilimit});
        });
    }

    updateUser = (e) => {
        e.preventDefault();
        let user = {ilimit: this.state.ilimit};
        console.log('user => ' + JSON.stringify(user));
        console.log('userId => ' + JSON.stringify(this.state.userId));
        UserService.updateUser(user, this.state.userId).then( res => {
            this.props.history.push('../admin/users');
        });
    }
    
    changeLimitHandler= (event) => {
        this.setState({ilimit: event.target.value});
    }
    
    cancel(){
        this.props.history.push('../admin/users');
    }

    render() {
        return (
            <div className="display">
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Add Investor Limit</h3>
                                <div className = "card-body">
                                <form>
                                        <div className = "form-group">
                                            <label>Investor Limit:</label>
                                            <input placeholder="Investor Limit" name="investorLimit" className="form-control" 
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

export default UpdateUserComponent
