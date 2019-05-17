import React, {Component} from 'react'
import UserDisplay from "./userDisplay.js"
import axios from 'axios'

class Dashboard extends Component{
    state = {
        user: {}
    }

    componentDidMount(){
            axios.get("/user",{params: {userName: "Slade"}
              }).then(res => {
                    console.log("axios output: " + res.data)
                    let newUser = {...this.state.user}
                    newUser = res.data
                    this.setState({user: newUser}) 
                }).catch((error) => {
                    console.log(error)
                })
        ;}

    render(){
        // let users = this.getUser()  // this is not working, value is not being passed to users

        return (
            <div>
                Dashboard
                <div>
                    <UserDisplay
                    user = {this.state.user}
                    />
                </div>
            </div>
        )
    }
}

export default Dashboard;