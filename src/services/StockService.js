import axios from 'axios';

const   STOCK_API_BASE_URL = "http://localhost:8080/getstock";
const   STOCK_API_BASE_URL2 = "http://localhost:8080/addstock";
const   STOCK_API_BASE_URL3 = "http://localhost:8080/updatestock";
const   STOCK_API_BASE_URL5 = "http://localhost:8080/deletestock";
const   STOCK_API_BASE_URL6 = "http://localhost:8080/getbystock";

class StockService {

    getStocks(){
        return axios.get(STOCK_API_BASE_URL);
    }

    createStock(stock){
        return axios.post(STOCK_API_BASE_URL2, stock);
    }

    getStockById(stockId){
        return axios.get(STOCK_API_BASE_URL6 + '/' + stockId);
    }

    updateStock(stock, stockId){
        return axios.put(STOCK_API_BASE_URL3 + '/' + stockId, stock);
    }

    deleteStock(stockId){
        return axios.delete(STOCK_API_BASE_URL5 + '/' + stockId);
    }
}

export default new StockService()