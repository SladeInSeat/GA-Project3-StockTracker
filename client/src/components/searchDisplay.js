import React, { Component } from 'react'
import SearchResults from './searchResults.js'
import SearchForm from './searchForm.js'

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

    // componentDidMount(){
    //     this.setState({accountId : this.props.activeAccount})
    // }

    stockSearch = () => {
        
        this.setState({searchCriteria: "stockSearch worked, beeiotch"})
    }

    getActiveAccountId = () => {
        
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