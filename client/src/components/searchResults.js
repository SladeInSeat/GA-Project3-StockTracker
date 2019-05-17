import React from 'react'

export default function searchResults(props) {
    const stockList = props.stockList
        
    const viewStockList = stockList.map((stockObj, index) => {
        return (
            <li key={index}>
                 {stockObj.name}
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