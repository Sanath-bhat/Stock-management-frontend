// import React, { Component } from 'react'
// import CompanyService from '../services/CompanyService'

// class ViewCompanyComponent extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             id: this.props.match.params.id,
//             company: {}
//         }
//     }

//     componentDidMount(){
//         CompanyService.getCompanyById(this.state.id).then( res => {
//             this.setState({company: res.data});
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <br></br>
//                 <div className = "card col-md-6 offset-md-3">
//                     <h3 className = "text-center"> View Employee Details</h3>
//                     <div className = "card-body">
//                         <div className = "row">
//                             <label> Company Name: </label>
//                             <div> { this.state.company.companyName }</div>
//                         </div>
//                         <div className = "row">
//                             <label> Company Type: </label>
//                             <div> { this.state.company.companyType }</div>
//                         </div>
//                         <div className = "row">
//                             <label> Company Manager: </label>
//                             <div> { this.state.company.companyManager }</div>
//                            </div>
//                             <div className = "row">
//                             <label> Investor limit: </label>
//                             <div> { this.state.company.investorLimit }</div>
//                              </div>
//                             <div className = "row">
//                             <label> Stock Count: </label>
//                             <div> { this.state.company.stockCount }</div>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         )
//     }
// }

// export default ViewCompanyComponent
