import React, { Component } from 'react'
import SearchResults from './searchResults.js'
import SearchForm from './searchForm.js'
import DisplayTitle from './styledComponents/DisplayTitle.js'

class SearchDisplay extends Component {
    state = {
        accountId: "",
        stockList: [],
        searchCriteria: "I am search criteria"
    };


    componentDidUpdate(prevProps) {
        if (prevProps.activeAccount !== this.props.activeAccount){
            this.setState({accountId : this.props.activeAccount})
        }
    }


    stockSearch = () => {
        
        this.setState({searchCriteria: "stockSearch worked, beeiotch"})
    }

    getActiveAccountId = () => {
        //  why do i need this?
    }

    render(){
        return(
            <div>
                <div>
                    <DisplayTitle>Search Form</DisplayTitle><br></br>
                    <SearchForm stockSearch={this.stockSearch}/>
                </div>
                <div>
                    <SearchResults accountId={this.state.accountId}
                                    stockList= {this.state.stockList}/>
                </div>

            </div>

        )
        
    }
}

export default SearchDisplay;