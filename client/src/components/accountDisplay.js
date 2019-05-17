import React, { Component} from 'react'
import axios from 'axios';

class accountDisplay extends Component {
    state = {
        account: { 
            _id: "",
            accountName: "",
            parentUser: ""
        }
    }

    componentDidMount(){
        axios.get("/account",{params: {parentUser: "5cdd79d9ee985408362348bb"}
            }).then(res => {
                console.log(res.data[0])
                this.setState({account: res.data[0]}) 
            }).catch((error) => {
                console.log(error)
            })
    ;}

    render(){
        let userId = this.props.userId
        return (
            <div>
                Account Display<br></br>
                Account Name: {this.state.account.accountName}<br></br>
                Parent User: {this.state.account.parentUser}
            </div>
        )
    }
};

export default accountDisplay;