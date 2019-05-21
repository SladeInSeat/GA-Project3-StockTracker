import React from 'react'

export default function SearchResults(props) {
    const stockList = props.stockList
        
    const viewStockList = stockList.map((stockObj, index) => {
        return (
            <li key={index}>
                 StockTicker: {stockObj.stockTicker}<br></br>
                 {/* StockParent: {stockObj.parentAccount} */}
                 <button>Add Stock</button>
            </li>
        )
    })
    return (
        <div>
            Search Results
            <ol>
                {viewStockList}
            </ol>
    </div>
    );
}