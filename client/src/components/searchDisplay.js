import React, { Component } from 'react'
import SearchResultsAdd from './searchResultsAdd'
import SearchForm from './searchForm.js'
import DisplayTitle from './styledComponents/DisplayTitle.js'
import axios from 'axios'


//  search results #512CE8
class SearchDisplay extends Component {
    state = {
        accountId: "",
        stockList: [],
        searchCriteria: "",
        userId: ""
    };


    componentDidMount() {
        this.setState({accountId : this.props.activeAccount,
                        userId : this.props.userId})
    }

    componentDidUpdate(prevProps) {
        if (prevProps.activeAccount !== this.props.activeAccount){
            this.setState({accountId : this.props.activeAccount})
        }
    }
    handleSearchCriteriaChange = event => {
        this.setState({ searchCriteria: event.target.value })
    }

    // handleLSearchCriteriaQuery = () => {
    //     axios.get("/stocks/ticker", { params: {stockTicker: this.state.searchCriteria} }
    //     ).then((res) => {
    //         this.setState({ stockList: res.data })
    //     })
    // }

    handleLSearchCriteriaQuery = () => {
        axios.get("/stocks/search", { params: {keywords: this.state.searchCriteria} }
        ).then((res) => {
            this.setState({ stockList: res.data })
        })
    }

    // addStockList = (stockObj) => {
    //     axios.patch("/stocks/setParentAccount", { stockId: stockObj._id, parentAccount: this.state.accountId })
    //         .then((editedStock) => {
    //             console.log(editedStock.data)
    //         }).then(this.props.handleStockAdded)
    // }

    addStockList = (stockObj) => {
        axios.patch("/stocks/addStkAcc", { stockId: stockObj._id, parentAccount: this.state.accountId })
            .then((editedStock) => {
                console.log(editedStock.data)
            }).then(this.props.handleStockAdded)
    }

    render(){
        return(
            <div>
                <div>
                    <SearchForm handleSearchCriteriaChange={this.handleSearchCriteriaChange}
                                handleLSearchCriteriaQuery ={this.handleLSearchCriteriaQuery}
                    />
                </div>
                <div>
                    <SearchResultsAdd accountId={this.state.accountId}
                                   stockList= {this.state.stockList}
                                   addStockList={this.addStockList}/>
                </div>

            </div>

        )
        
    }
}

export default SearchDisplay;