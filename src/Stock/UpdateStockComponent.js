import React, { Component } from 'react'
import StockService from '../services/StockService';

class UpdateStockComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            stockId: this.props.match.params.stockId,
            stockItem: '',
            stockType: '',
            stockPrice: ''
           
        }
        this.changeStockItemHandler = this.changeStockItemHandler.bind(this);
        this.changeStockTypeHandler = this.changeStockTypeHandler.bind(this);
        this.changeStockPriceHandler = this.changeStockPriceHandler.bind(this);
        this.updateStock = this.updateStock.bind(this);
    }

    componentDidMount(){
        StockService.getStockById(this.state.stockId).then( (res) =>{
            let stock = res.data;
            this.setState({stockItem: stock.stockItem,
                stockType: stock.stockType,
                stockPrice :stock.stockPrice
                
            });
        });
    }

    updateStock = (e) => {
        e.preventDefault();
        let stock = {stockItem: this.state.stockItem, stockType: this.state.stockType, stockPrice: this.state.stockPrice};
        console.log('stock => ' + JSON.stringify(stock));
        console.log('stockId => ' + JSON.stringify(this.state.stockId));
        StockService.updateStock(stock, this.state.stockId).then( res => {
            this.props.history.push('/getstock');
        });
    }
    
    changeStockItemHandler= (event) => {
        this.setState({stockItem: event.target.value});
    }

    changeStockTypeHandler= (event) => {
        this.setState({stockType: event.target.value});
    }

    changeStockPriceHandler= (event) => {
        this.setState({stockPrice: event.target.value});
    }
    
    cancel(){
        this.props.history.push('/getstock');
    }

    render() {
        return (
            <div className="viewstock">
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Stock</h3>
                                <div className = "card-body">
                                <form>
                                        <div className = "form-group">
                                            <label> Stock Item: </label>
                                            <input placeholder="Stock Item" name="stockitem" className="form-control" 
                                                value={this.state.stockItem} onChange={this.changeStockItemHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Stock Type: </label>
                                            <input placeholder="Stock Type" name="stocktype" className="form-control" 
                                                value={this.state.stockType} onChange={this.changeStockTypeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Stock Price:</label>
                                            <input placeholder="Company ID" name="stockprice" className="form-control" 
                                                value={this.state.stockPrice} onChange={this.changeStockPriceHandler}/>
                                        </div>
                                

                                        <button className="btn btn-success" onClick={this.updateStock}>Save</button>
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

export default UpdateStockComponent
