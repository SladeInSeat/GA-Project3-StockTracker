import React from 'react'
import {Button} from './styledComponents/Button.js'
import {StockContainer, StockTitle, StockData, Li} from './styledComponents/Containers.js'

export default function SearchResults(props) {

    const stockList = props.stockList
    const viewStockList = stockList.map((stockObj, index) => {
        return (
            <Li key={index}>
                <StockContainer>
                    <StockTitle>{stockObj.stockTicker}</StockTitle>
                    <br></br>
                    <StockData>StockPrice: {stockObj.price}</StockData>
                    <StockData>StockPrice: {stockObj.price}</StockData>
                    <br></br>
                    <Button onClick={()=>{props.removeStockList(stockObj)}}>Remove Stock</Button>
                </StockContainer>

            </Li>
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