import React, { Component } from 'react'
import SearchResults from './searchResults.js'
import SearchForm from './searchForm.js'

class SearchDisplay extends Component {
    state = {
        accountId: "",
        stockList: [],
        searchCriteria: "I am search criteria"
    };

    componentDidMount(){
        this.setState({accountId : this.props.userId})
    }

    stockSearch = () => {
        
        this.setState({searchCriteria: "stockSearch worked, beeiotch"})
    }

    render(){
        return(
            <div>
                <div>
                    search Form<br></br>
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