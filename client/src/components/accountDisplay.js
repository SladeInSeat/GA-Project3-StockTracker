import React, { Component} from 'react'

class accountDisplay extends Component {
    state = {
        account : {
            accountName: "NewAccount",
            parentUser: "5cdd79d9ee985408362348bc"
        },
        newAccount : {
            accountName: "",
            parentUser: ""
        }
    }

    render(){
        return (
            <div>
                Account Name: {this.state.account.accountName}<br></br>
                Parent User: {this.state.account.parentUser}
            </div>
        )
    }
};

export default accountDisplay;