import React, { Component } from 'react'
import axios from 'axios'

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