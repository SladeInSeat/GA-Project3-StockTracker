import React, {Component} from 'react'
import axios from 'axios'
import Login from './Login.js'
import UserDisplay from "./userDisplay.js"
import AccountDisplay from "./accountDisplay.js"
import SearchDisplay from './searchDisplay.js';

class Dashboard extends Component{
    state = {
        user: {
            userName: "",
            _id: ""
        },
        logInQeury: ""
    };

    handleInputChange = event => {
        this.setState({logInQeury: event.target.value})
    }

    handleSubmitQuery = () => {
        axios.patch('/login',{userName: this.state.logInQeury}
            ).then((res) => {
                this.setState({user:res.data})
            })
    }

    // componentDidMount(){
    //     let willBePropsFromLogin = ""
    //     axios.get("/user",{params: {userName: `${willBePropsFromLogin}`}
    //         }).then(res => {
    //             console.log(res.data[0])
    //             this.setState({user: res.data[0]}) 
    //         }).catch((error) => {
    //             console.log(error)
    //         })
    // ;}

    render(){
        return (
            <div>
                Dashboard
                <div>
                    {this.state.user.userName ?
                    <UserDisplay user={this.state.user}/>
                    :
                    <Login
                        logInQeury={this.logInQeury}
                        handleInputChange={this.handleInputChange}
                        handleSubmitQuery={this.handleSubmitQuery}
                        />}
                    <br></br>
                    <AccountDisplay userId={this.state.user._id}/><br></br>
                    <SearchDisplay userId={this.state.user._id}/>

                </div>
            </div>
        )
    }
}

export default Dashboard;