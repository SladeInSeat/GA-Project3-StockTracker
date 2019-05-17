import React, {Component} from 'react'
import UserDisplay from "./userDisplay.js"
import AccountDisplay from "./accountDisplay"
import axios from 'axios'
import searchDisplay from './searchDisplay.js';

class Dashboard extends Component{
    state = {
        user: {
            userName: "",
            _id: ""
        }
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
                Dashboard
                <div>
                    <UserDisplay user={this.state.user}/><br></br>
                    <AccountDisplay userId={this.state.user._id}/><br></br>
                    <searchDisplay userId={this.state.user._id}/>

                </div>
            </div>
        )
    }
}

export default Dashboard;