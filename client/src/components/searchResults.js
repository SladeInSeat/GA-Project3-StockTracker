import React from 'react'

export default function SearchResults(props) {
    const stockList = props.stockList
        
    const viewStockList = stockList.map((stockObj, index) => {
        return (
            <li key={stockObj.parentAccount}>
                 StockTicker: {stockObj.stockTicker}<br></br>
                 {/* StockParent: {stockObj.parentAccount} */}
                 <button>Add/Remove Stock</button>
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