import React, { Component } from 'react'
import Navbar from '../admin/Navbar'
import CompanyService from '../services/CompanyService'
import './Display.css'

class ListCompanyComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                company: []
        }
        this.addCompany = this.addCompany.bind(this);
        this.editCompany = this.editCompany.bind(this);
        this.deleteCompany = this.deleteCompany.bind(this);
    }

    deleteCompany(companyId){
        CompanyService.deleteCompany(companyId).then( res => {
            this.setState({company: this.state.company.filter(company => company.companyId !== companyId)});
        });
    }
    // viewCompany(companyId){
    //     this.props.history.push(`/view-company/${companyId}`);
    // }
    editCompany(companyId){
        this.props.history.push(`/update-company/${companyId}`);
    }

    componentDidMount(){
        CompanyService.getCompany().then((res) => {
            this.setState({ company: res.data});
        });
    }

    addCompany(){
        this.props.history.push('/add-company');
    }

    render() {
        return (
           
            <div className="display">
                 <Navbar/>
                
                 <h2 className="text-center">Company List</h2>
                 <div class="col-md-8 offset-2 mt-4 card card-body"> 
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addCompany}> Add Company</button>
                 </div>
                 <br></br>
                
                 <div className = "row">
                        <table className = "table table-striped table-bordered" >

                            <thead>
                                <tr>
                                    <th> Company Name</th>
                                    <th> Company Type</th>
                                    <th> Company Manager</th>
                                    {/* <th> Investor Limit</th> */}
                                    <th> Stock Count</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.company.map(
                                        company => 
                                        <tr key = {company.companyId}>
                                             <td> {company.companyName} </td>   
                                             <td> {company.companyType}</td>
                                             <td> {company.managerName}</td>
                                             {/* <td> {company.investorLimit}</td> */}
                                             <td> {company.stockCount}</td>
                                             <td>
                                                 <button onClick={ () => this.editCompany(company.companyId)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteCompany(company.companyId)} className="btn btn-danger">Delete </button>
                                                 {/* <button style={{marginLeft: "10px"}} onClick={ () => this.viewCompany(company.id)} className="btn btn-info">View </button> */}
                                             </td>
                                        </tr>
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

export default ListCompanyComponent
