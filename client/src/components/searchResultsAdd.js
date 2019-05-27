import React from 'react'
import {Button} from './styledComponents/Button.js'
import {SearchResultsContainer} from './styledComponents/Containers.js'

export default function SearchResults(props) {

    const stockList = props.stockList
    const viewStockList = stockList.map((stockObj, index) => {
        return (
            <li key={index}>
                 StockTicker: {stockObj.stockTicker}<br></br>
                 StockPrice: {stockObj.price}<br></br>
                 <Button onClick={()=>{props.addStockList(stockObj)}}>Add Stock</Button>
            </li>
        )
    })
    
    return (
        <SearchResultsContainer>
            <ol>
                {viewStockList}
            </ol>
        </SearchResultsContainer>
    );
}