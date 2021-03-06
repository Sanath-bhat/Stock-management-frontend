import React, { Component } from 'react'
import StockService from '../services/StockService'
import Navbar2 from '../Investor/Navbar2'
import "./ViewStock.css"

class ViewStockComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                stocks: []
        }
        this.addStock = this.addStock.bind(this);
        this.editStock = this.editStock.bind(this);
        this.deleteStock = this.deleteStock.bind(this);
    }

    deleteStock(id){
        StockService.deleteStock(id).then( res => {
            this.setState({stocks: this.state.stocks.filter(stock => stock.id !== id)});
        });
    }
    // viewStock(id){
    //     this.props.history.push(`/view-stock/${id}`);
    // }
    editStock(id){
        this.props.history.push(`/update-stock/${id}`);
    }

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
                 <h2 className="text-center">Available Stocks</h2>
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
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.stocks.map(
                                        stock => 
                                        <tr key = {stock.id}>
                                             <td> { stock.stockItem} </td>   
                                             <td> {stock.stockType}</td>
                                             <td> {stock.stockPrice}</td>
                                              {/* <td> */}
                                                 {/* <button onClick={ () => this.editStock(stock.stockId)} className="btn btn-info">Update </button>*/}
                                                 <button style={{marginLeft: "20px"}} onClick={() => {if(window.confirm('Are you sure that you want to buy this stock?')){this.deleteStock(stock.stockId)};}} className="btn btn-danger">Buy</button> 
                                                 {/* <button style={{marginLeft: "10px"}} onClick={ () => this.viewStock(stock.id)} className="btn btn-info">View </button> */}
                                             {/* </td>  */}
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

export default ViewStockComponent
