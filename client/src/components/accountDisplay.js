import React, { Component } from 'react'
import axios from 'axios';
import SearchResults from './searchResultsRemove'
import {Button, DelButton} from './styledComponents/Button.js'
import DisplayTitle from './styledComponents/DisplayTitle.js'
import {SearchResultsContainer, Input} from './styledComponents/Containers.js'

class accountDisplay extends Component {
    state = {
        account: {
            _id: "",
            accountName: "",
            parentUser: ""
        },
        newAccountName: "",
        stockList: []
    }
   
    componentDidMount() {
        axios.get("/account", {
            params: { parentUser: this.props.userId }
        }).then((res) => {
            if (res.data[0]) {
                this.setState({ account: res.data[0] });
                this.props.handleActiveAccount(res.data[0]._id);
            } else {
                this.setState({
                    account: {
                        _id: "",
                        accountName: "No Accounts",
                        parentUser: this.props.userId
                    },
                    newAccountName: "",
                    stockList: []
                })
            }
        }).then(() => {
            axios.get("/stocks/parentAccount", {params: { parentAccount: this.state.account._id }}
            ).then((newStockList) => {
                this.setState({ stockList: newStockList.data })
            })
        })
    };

    componentDidUpdate(prevProps) {
        if (prevProps.userId !== this.props.userId || prevProps.stockAddedToggle !== this.props.stockAddedToggle) {
            axios.get("/account", {
                params: { parentUser: this.props.userId }
            }).then((res) => {
                console.log(res.data)
                if (res.data[0]) {
                    this.setState({ account: res.data[0] });
                    this.props.handleActiveAccount(res.data[0]._id);
                } else {
                    this.setState({
                        account: {
                            _id: "",
                            accountName: "No Accounts",
                            parentUser: this.props.userId
                        },
                        newAccountName: "",
                        stockList: []
                    })
                }
            }).then(() => {
                axios.get("/stocks/parentAccount", { params: { parentAccount: this.state.account._id } }
                ).then((newStockList) => {
                    this.setState({ stockList: newStockList.data })
                })
            }).catch((error) => {
                console.log(error)
            })
        }
    }

    handleAccountNameChange = event => {
        this.setState({ newAccountName: event.target.value })
    }

    handleAccountNameUpdate = () => {
        axios.patch('/accounts', {
            accountId: this.state.account._id,
            accountName: this.state.newAccountName
        })
            .then(() => {
                console.log("editedAccount")
            });
        let clonedAccount = { ...this.state.account }
        clonedAccount.accountName = this.state.newAccountName
        this.setState({ account: clonedAccount })
    }

    handleAccountCreate = () => {
        axios.post('/accounts', {
            accountName: this.state.newAccountName,
            parentUser: this.state.account.parentUser
        })
            .then((createdAccount) => {
                console.log(createdAccount.data)
                this.setState({
                    account: createdAccount.data,
                    newAccountName: ""
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    handleAccountDelete = () => {
        axios.delete('/accounts', { data: { _id: this.state.account._id } })
            .then((res) => {
                console.log("req.body sent as res: " + res.data)
                let newAccountState = { ...this.state.account }
                newAccountState._id = ""
                newAccountState.accountName = ""
                this.setState({
                    account: newAccountState,
                    newAccountName: ""
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    removeStockList = (stockObj) => {
        axios.patch("/stocks/removeParentAccount", { stockId: stockObj._id })
            .then(() => {
                axios.get("/stocks/parentAccount", { params: { parentAccount: this.state.account._id } }
                ).then((newStockList) => {
                    this.setState({ stockList: newStockList.data })
                })
            })

    }





    render() {
        return (
            <div>
                <DisplayTitle>{this.state.account.accountName}</DisplayTitle>
                {this.props.userId ?
                    <SearchResultsContainer>
                        <SearchResults
                            stockList={this.state.stockList}
                            parentAccount={this.state.account._id}
                            removeStockList={this.removeStockList}
                        />
                        <br></br>
                        <Input
                            type="text"
                            value={this.state.newAccountName}
                            onChange={this.handleAccountNameChange}
                        />
                        <Button onClick={this.handleAccountNameUpdate}>Edit Account</Button>
                        <br></br>
                        <Button onClick={this.handleAccountCreate}>Create Account</Button>
                        <br></br>
                        <DelButton onClick={this.handleAccountDelete}>Delete Account</DelButton>
                    </SearchResultsContainer>
                    :
                    <div>
                    </div>
                }
            </div>
        )
    }
};

export default accountDisplay;