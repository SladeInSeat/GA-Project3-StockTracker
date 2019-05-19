import React, { Component } from 'react'
import axios from 'axios';

class accountDisplay extends Component {
    state = {
        account: {
            _id: "",
            accountName: "",
            parentUser: ""
        },
        newAccountName: ""
    }

    componentDidUpdate(prevProps) {
        if (prevProps.userId !== this.props.userId) {
            axios.get("/account", {
                params: { parentUser: this.props.userId }
            }).then((res) => {
                if (res.data[0]) {
                    this.setState({ account: res.data[0] })
                } else {
                    this.setState({
                        account: {
                            _id: "",
                            accountName: "No Accounts",
                            parentUser: this.props.userId
                        },
                        newAccountName: ""
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
                this.setState({ account: createdAccount.data,
                                newAccountName: "" })
            })
            .catch((error) => {
                console.log(error)
            })
    }


    render() {
        return (
            <div>
                Account Display<br></br>
                Account Name: {this.state.account.accountName}<br></br>
                Parent User: {this.state.account.parentUser}<br></br>
                {this.state.account.parentUser ?
                    <div>
                        <input
                            type="text"
                            value={this.state.newAccountName}
                            onChange={this.handleAccountNameChange}
                        />
                        <button onClick={this.handleAccountNameUpdate}>Edit Account Name</button>
                        <button onClick={this.handleAccountCreate}>Create New Account</button>

                    </div>
                    :
                    <div>
                        nothing in state.account.parentUser
                    </div>
                }
            </div>
        )
    }
};

export default accountDisplay;