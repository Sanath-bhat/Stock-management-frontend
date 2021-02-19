import React, { Component } from 'react'
import StockService from '../services/StockService';
import "../Manager/ManagerWelcome.css"

class CreateStockComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            stockItem: '',
            stockType: '',
            stockPrice: ''
        }
        this.changeStockItemHandler = this.changeStockItemHandler.bind(this);
        this.changeStockTypeHandler = this.changeStockTypeHandler.bind(this);
        this.changeStockPriceHandler = this.changeStockPriceHandler.bind(this);
        this.saveOrUpdateStock = this.saveOrUpdateStock.bind(this);
    }


    

    // step 3
    // componentDidMount(){

    //     // step 4
    //     // if(this.state.id === '_add'){
    //     //     return
    //     // }else{
    //         StockService.getStockById(this.state.id).then( (res) =>{
    //             let stock = res.data;
    //             this.setState({stockItem: stock.stockItem,
    //                 stockType: stock.stockType,
    //                 stockPrice : stock.stockPrice
    //             });
    //         });
    //     // }        
    // }
    saveOrUpdateStock = (e) => {
        e.preventDefault();
        let stock = {stockItem: this.state.stockItem, stockType: this.state.stockType, stockPrice: this.state.stockPrice};
        console.log('stock => ' + JSON.stringify(stock));

        // step 5
        // if(this.state.id === '_add'){
            StockService.createStock(stock).then(res =>{
                this.props.history.push('/getstock');
             });
        // }else{
        //     StockService.updateStock(stock, this.state.id).then( res => {
        //         this.props.history.push('/getstock');
        //     });
        // }
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

    // getTitle(){
    //     if(this.state.id === '_add'){
    //         return <h3 className="text-center">Add Stock</h3>
    //     }else{
    //         return <h3 className="text-center">Update Stock</h3>
    //     }
    // }
    render() {
        return (
            <div className="wlcm">
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
                                            <label> Stock Item: </label>
                                            <input placeholder="Stock Item" name="stockItem" className="form-control" 
                                                value={this.state.stockItem} onChange={this.changeStockItemHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Stock Type: </label>
                                            <input placeholder="Stock Type" name="stockType" className="form-control" 
                                                value={this.state.stockType} onChange={this.changeStockTypeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Stock Price: </label>
                                            <input placeholder="Stock Price" name="stockPrice" className="form-control" 
                                                value={this.state.stockPrice} onChange={this.changeStockPriceHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateStock}>Save</button>
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

export default CreateStockComponent
