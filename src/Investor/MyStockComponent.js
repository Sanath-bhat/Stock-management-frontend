import React, { Component } from 'react'
import StockService from '../services/StockService'
import Navbar2 from './Navbar2'
import "./ViewStock.css"

class MyStockComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                stocks: []
        }
        // this.addStock = this.addStock.bind(this);
        // this.editStock = this.editStock.bind(this);
        // this.deleteStock = this.deleteStock.bind(this);
    }

    // deleteStock(id){
    //     StockService.deleteStock(id).then( res => {
    //         this.setState({stocks: this.state.stocks.filter(stock => stock.id !== id)});
    //     });
    // }
    // viewStock(id){
    //     this.props.history.push(`/view-stock/${id}`);
    // }
    // editStock(id){
    //     this.props.history.push(`/update-stock/${id}`);
    // }

    componentDidMount(){
        StockService.getStocks().then((res) => {
            this.setState({ stocks: res.data});
        });
    }

    addStock(){
        this.props.history.push('/add-stock');
    }

    render() {
        return (
            <div className="viewstock">
                <Navbar2/>
                 <h2 className="text-center">My Stocks</h2>
                 <div class="col-md-8 offset-2 mt-4 card card-body"> 
                 {/* <div className = "row">
                    <button className="btn btn-primary" onClick={this.addStock}> Add Stock</button>
                 </div> */}
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Stock Name</th>
                                    <th> Stock Type</th>
                                    <th> Stock Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                             <td>NYSE:PRO </td>   
                                             <td>Class A</td>
                                             <td> 3196</td>    
                                             </tbody> 
                                             <tbody>
                                             <td>NYSE:TTM </td>   
                                             <td>Class B</td>
                                             <td> 2465</td>  
                                             </tbody>

                                             <tbody>
                                             <td>CVE:RECO </td>   
                                             <td>Class B</td>
                                             <td> 2786</td>  
                                             </tbody>

                                             <tbody>
                                             <td>NSDAQ:MSFT </td>   
                                             <td>Class A</td>
                                             <td> 4268</td>  
                                             </tbody>

                                             <tbody>
                                              <td>EBR:EWAP</td>   
                                             <td>Class B</td>
                                             <td>2988</td>      
                            </tbody>
                        </table>

                 </div>
</div>
            </div>
        )
    }
}

export default MyStockComponent
