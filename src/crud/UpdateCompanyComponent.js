import React, { Component } from 'react'
import CompanyService from '../services/CompanyService';

class UpdateCompanyComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            companyId: this.props.match.params.companyId,
            companyName: '',
            companyType: '',
            managerName: '',
            // investorLimit:'',
            stockCount:''
        }
        this.changeCompanyNameHandler = this.changeCompanyNameHandler.bind(this);
        this.changeCompanyTypeHandler = this.changeCompanyTypeHandler.bind(this);
        this.changeCompanyManagerHandler = this.changeCompanyManagerHandler.bind(this);
        // this.changeLimitHandler = this.changeLimitHandler.bind(this);
        this.changeStockCountHandler = this.changeStockCountHandler.bind(this);
        this.updateCompany = this.updateCompany.bind(this);
    }

    componentDidMount(){
        CompanyService.getByCompany(this.state.companyId).then( (res) =>{
            let company = res.data;
            this.setState({companyName: company.companyName,
                companyType: company.companyType,
                managerName : company.managerName,
                investorLimit: company.investorLimit,
                stockCount:company.stockCount
            });
        });
    }

    updateCompany = (e) => {
        e.preventDefault();
        let company = {companyName: this.state.companyName, companyType: this.state.companyType, managerName: this.state.managerName,investorLimit: this.state.investorLimit, stockCount: this.state.stockCount};
        console.log('company => ' + JSON.stringify(company));
        console.log('companyId => ' + JSON.stringify(this.state.companyId));
        CompanyService.updateCompany(company, this.state.companyId).then( res => {
            this.props.history.push('/getcompany');
        });
    }
    
    changeCompanyNameHandler= (event) => {
        this.setState({companyName: event.target.value});
    }

    changeCompanyTypeHandler= (event) => {
        this.setState({companyType: event.target.value});
    }

    changeCompanyManagerHandler= (event) => {
        this.setState({managerName: event.target.value});
    }
    // changeLimitHandler= (event) => {
    //     this.setState({investorLimit: event.target.value});
    // }

    changeStockCountHandler= (event) => {
        this.setState({stockCount: event.target.value});
    }
    cancel(){
        this.props.history.push('/getcompany');
    }

    render() {
        return (
            <div className="display">
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Company</h3>
                                <div className = "card-body">
                                <form>
                                        <div className = "form-group">
                                            <label> Company Name: </label>
                                            <input placeholder="Company Name" name="companyName" className="form-control" 
                                                value={this.state.companyName} onChange={this.changeCompanyNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Company Type: </label>
                                            <input placeholder="Company Type" name="companyType" className="form-control" 
                                                value={this.state.companyType} onChange={this.changeCompanyTypeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Company Manager:</label>
                                            <input placeholder="Company Manger" name="managerName" className="form-control" 
                                                value={this.state.managerName} onChange={this.changeCompanyManagerHandler}/>
                                        </div>
                                        {/* <div className = "form-group">
                                            <label>Investor limit:</label>
                                            <input placeholder="Investor Limit" name="investorlimit" className="form-control" 
                                                value={this.state.investorLimit} onChange={this.changeLimitHandler}/>
                                        </div> */}
                                        <div className = "form-group">
                                            <label>Stock Count:</label>
                                            <input placeholder="Stock Count" name="stockcount" className="form-control" 
                                                value={this.state.stockCount} onChange={this.changeStockCountHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateCompany}>Save</button>
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

export default UpdateCompanyComponent
