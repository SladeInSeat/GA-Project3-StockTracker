import React, { Component } from 'react'
import axios from 'axios'
import Login from './Login.js'
import UserDisplay from "./userDisplay.js"
import AccountDisplay from "./accountDisplay.js"
import SearchDisplay from './searchDisplay.js';

class Dashboard extends Component {
    state = {
        user: {
            userName: "",
            _id: ""
        },
        newUserName: "",
        logInQeury: "",
        activeAccount: ""
    };

    handleLogInChange = event => {
        this.setState({ logInQeury: event.target.value })
    }

    handleLoginQuery = () => {
        axios.patch('/login', { userName: this.state.logInQeury }
        ).then((res) => {
            this.setState({ user: res.data })
        })
    }

    handleUserLogout = () => {
        this.setState({
            user: {
                userName: "",
                _id: ""
            },
            newUserName: "",
            logInQeury: "",
            activeAccount: ""
        })
    }

    handleUserDelete = () => {
        let userId = this.state.user._id
        axios.delete('/users', { data: { _id: userId } }).then(() => {
            this.handleUserLogout()
        })
    }

    handleUserNameChange = event => {
        this.setState({ newUserName: event.target.value })
    }

    handleUserNameUpdate = () => {
        axios.patch('users', {
            userId: this.state.user._id,
            userName: this.state.newUserName
        })
            .then((updatedUser) => {
                console.log("editedUser" + updatedUser)
            });
        let clonedUser = { ...this.state.user }
        clonedUser.userName = this.state.newUserName
        this.setState({ user: clonedUser })
    }

    handleActiveAccount = (accountId) => {
        this.setState({ activeAccount: accountId })
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

    render() {
        return (
            <div>
                Dashboard
                <div>
                    {this.state.user.userName ?
                        <UserDisplay
                            user={this.state.user}
                            handleUserLogout={this.handleUserLogout}
                            handleUserDelete={this.handleUserDelete}
                            newUserName={this.state.newUserName}
                            handleUserNameChange={this.handleUserNameChange}
                            handleUserNameUpdate={this.handleUserNameUpdate}
                        />
                        :
                        <Login
                            logInQeury={this.logInQeury}
                            handleLogInChange={this.handleLogInChange}
                            handleLoginQuery={this.handleLoginQuery}
                        />}
                    <br></br>
                    <AccountDisplay
                        userId={this.state.user._id}
                        handleActiveAccount={this.handleActiveAccount}
                    />
                    <br></br>
                    <SearchDisplay
                        userId={this.state.user._id}
                        activeAccount={this.state.activeAccount} />
                </div>
            </div>
        )
    }
}

export default Dashboard;