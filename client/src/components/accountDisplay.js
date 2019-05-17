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
        let userId = this.props.userId
        return (
            <div>
                Account Name: {this.state.account.accountName}<br></br>
                Parent User: {this.state.account.parentUser}
                test id: {userId}
            </div>
        )
    }
};

export default accountDisplay;