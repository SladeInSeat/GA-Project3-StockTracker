import React, { Component } from 'react'
import axios from 'axios';
import SearchResults from './searchResults'
import Button from './styledComponents/Button.js'
import DisplayTitle from './styledComponents/DisplayTitle.js'


class accountDisplay extends Component {
    state = {
        account: {
            _id: "",
            accountName: "",
            parentUser: ""
        },
        newAccountName: "",
        stockList: [{stockTicker: "MSFT",parentAccount: "idMSFT"},
                    {stockTicker: "UL", parentAccount: "idUL"},
                    {stockTicker: "BKBEF", parentAccount: "idBKBEF"}]
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
        }).catch((error) => {
            console.log(error)
        })
    };

    componentDidUpdate(prevProps) {
        if (prevProps.userId !== this.props.userId) {
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
            }).catch((error) => {
                console.log(error)
            })
        }
    }

    handleAccountNameChange = event => {
        this.setState({ newAccountName: event.target.value })
    }

    handleAccountNameUpdate = () => {
        axios.patch('accounts', {
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
        axios.post('accounts', {
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



    render() {
        return (
            <div>
                <DisplayTitle>Account: {this.state.account.accountName}</DisplayTitle>
                {this.props.userId ?
                    <div>
                        <SearchResults
                            stockList={this.state.stockList}/>
                        <br></br>
                        <input
                            type="text"
                            value={this.state.newAccountName}
                            onChange={this.handleAccountNameChange}
                        />
                        <Button onClick={this.handleAccountNameUpdate}>Edit Account</Button>
                        <br></br>
                        <Button onClick={this.handleAccountCreate}>Create Account</Button>
                        <br></br>
                        <Button onClick={this.handleAccountDelete}>Delete Account</Button>
                    </div>
                    :
                    <div>
                    </div>
                }
            </div>
        )
    }
};

export default accountDisplay;