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
        if (prevProps.userId != this.props.userId) {
            axios.get("/account", {
                params: { parentUser: this.props.userId }
            }).then((res) => {
                this.setState({ account: res.data[0] })
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
            .then((updatedAccount) => {
                console.log("editedAccount" + updatedAccount)
            });
        let clonedAccount = { ...this.state.account }
        clonedAccount.accountName = this.state.newAccountName
        this.setState({ account: clonedAccount })
    }

    render() {
        return (
            <div>
                Account Display<br></br>
                Account Name: {this.state.account.accountName}<br></br>
                Parent User: {this.state.account.parentUser}<br></br>
                <input 
                    type="text" 
                    value={this.props.newAccountName}
                    onChange={this.handleAccountNameChange}
            />
            <button onClick={this.handleAccountNameUpdate}>Edit Account Name</button>
            </div>
        )
    }
};

export default accountDisplay;