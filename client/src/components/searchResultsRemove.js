import React from 'react'
import Button from './styledComponents/Button.js'

export default function SearchResults(props) {

    const stockList = props.stockList
    const viewStockList = stockList.map((stockObj, index) => {
        return (
            <li key={index}>
                 StockTicker: {stockObj.stockTicker}<br></br>
                 StockPrice: {stockObj.price}<br></br>
                 <Button onClick={()=>{props.removeStockList(stockObj)}}>Remove Stock</Button>
            </li>
        )
    })
    
    return (
        <div>
            <ol>
                {viewStockList}
            </ol>
    </div>
    );
}