import React, {Component} from 'react'
import UserDisplay from "./userDisplay.js"
import AccountDisplay from "./accountDisplay"
import axios from 'axios'

class Dashboard extends Component{
    state = {
        user: {}
    };


    componentDidMount(){
        let willBePropsFromLogin = "Slade"
        axios.get("/user",{params: {userName: `${willBePropsFromLogin}`}
            }).then(res => {
                console.log(res.data[0])
                this.setState({user: res.data[0]}) 
            }).catch((error) => {
                console.log(error)
            })
    ;}

    render(){
        return (
            <div>
                Dashboard {this.state.user.userName}
                <div>
                    <UserDisplay user={this.state.user}/>
                    <AccountDisplay userId={this.state.user._id}/>

                </div>
            </div>
        )
    }
}

export default Dashboard;