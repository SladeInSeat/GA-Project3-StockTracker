import React, { Component } from 'react'

class userDisplay extends Component{
    state = {
        user: {
            userName: "",
            _id: ""
        }
    }

    render(){
        let newUserProps = this.props.user
        let handleUserLogout = this.props.handleUserLogout
        console.log(newUserProps)
        return(
            <div>
                <br></br>
                userDisplay<br></br>
                User: {newUserProps.userName}
                <br></br>
                <button onClick={handleUserLogout}>Log Out</button>
                <br></br>
            </div>
        )
    }
};

export default userDisplay;