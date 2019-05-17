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
        console.log(newUserProps)
        return(
            <div>
                <br></br>
                userDisplay<br></br>
                User: {newUserProps.userName}
            </div>
        )
    }
};

export default userDisplay;