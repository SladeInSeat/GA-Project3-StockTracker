import React, { Component } from 'react'
import SearchResults2 from './searchResultsAdd'
import SearchForm from './searchForm.js'
import DisplayTitle from './styledComponents/DisplayTitle.js'
import axios from 'axios'


//  search results #512CE8
class SearchDisplay extends Component {
    state = {
        accountId: "",
        stockList: [],
        searchCriteria: "I am search criteria"
    };


    componentDidMount() {
        this.setState({accountId : this.props.activeAccount})
    }

    componentDidUpdate(prevProps) {
        if (prevProps.activeAccount !== this.props.activeAccount){
            this.setState({accountId : this.props.activeAccount})
        }
    }
    handleSearchCriteriaChange = event => {
        this.setState({ searchCriteria: event.target.value })
    }

    handleLSearchCriteriaQuery = () => {
        axios.get("/stocks/ticker", { params: {stockTicker: this.state.searchCriteria} }
        ).then((res) => {
            this.setState({ stockList: res.data })
        })
    }

    stockSearch = () => {
        
        this.setState({searchCriteria: "stockSearch worked, beeiotch"})
    }

    getActiveAccountId = () => {
        //  why do i need this?
    }

    addStockList = (stockObj) => {
        axios.patch("/stocks/setParentAccount", { stockId: stockObj._id, parentAccount: this.state.accountId })
            .then((editedStock) => {
                console.log(editedStock)
            })
    }

    render(){
        return(
            <div>
                <div>
                    <DisplayTitle>Search Form</DisplayTitle>
                    <SearchForm handleSearchCriteriaChange={this.handleSearchCriteriaChange}
                                handleLSearchCriteriaQuery ={this.handleLSearchCriteriaQuery}
                    />
                </div>
                <div>
                    <SearchResults2 accountId={this.state.accountId}
                                   stockList= {this.state.stockList}
                                   addStockList={this.addStockList}/>
                </div>

            </div>

        )
        
    }
}

export default SearchDisplay;