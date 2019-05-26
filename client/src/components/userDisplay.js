import React, { Component } from 'react'
import Button from './styledComponents/Button.js'
import {NavbarLi} from './styledComponents/Containers.js'

class userDisplay extends Component{

    render(){
        let newUserProps = this.props.user
        let handleUserLogout = this.props.handleUserLogout
        let handleUserDelete = this.props.handleUserDelete
        return(
            <NavbarLi>
                <h4>Welcome {newUserProps.userName}</h4>
                        <Button onClick={handleUserLogout}>Log Out</Button>
                        <input
                            type="text" 
                            value={this.props.newUserName}
                            onChange={this.props.handleUserNameChange}
                        />
                        <Button onClick={this.props.handleUserNameUpdate}>Edit User Name</Button>
                        <Button onClick={handleUserDelete}>Delete this user</Button>
            </NavbarLi>
        )
    }
};

export default userDisplay;