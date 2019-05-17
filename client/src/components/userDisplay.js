import React, { Component } from 'react'

class userDisplay extends Component{
    state = {
        user: {}
    }

    render(){
        let newUserProps = this.props.user
        console.log(`userDisplay:${newUserProps}`)
        return(
            <div>
                User: {newUserProps.userName}
            </div>
        )
    }
};

export default userDisplay;