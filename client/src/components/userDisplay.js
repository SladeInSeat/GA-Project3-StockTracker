import React, { Component } from 'react'

class userDisplay extends Component{
    state = {
        user: {userName: 'Slade'},
        newUser: {
            userName: ''
        }
    }

    render(){
        return(
            <div>
                Username: {this.state.user.userName}
            </div>
        )
    }
};

export default userDisplay;