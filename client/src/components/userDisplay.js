import React, { Component } from 'react'
import {Button, DelButton} from './styledComponents/Button.js'
import {NavbarContainer, UserAccContainer} from './styledComponents/Containers.js'
import UserTitle from './styledComponents/UserTitle'
import AppTitle from './styledComponents/AppTitle.js'
import {Input} from './styledComponents/Containers.js'

class userDisplay extends Component{

    render(){
        let newUserProps = this.props.user
        let handleUserLogout = this.props.handleUserLogout
        let handleUserDelete = this.props.handleUserDelete
        return(
            <UserAccContainer>
                <NavbarContainer>
                    <UserTitle>Welcome, {newUserProps.userName}!</UserTitle>
                </NavbarContainer>
                <NavbarContainer>
                        <DelButton onClick={handleUserDelete}>Delete this user</DelButton>
                        <Button onClick={this.props.handleUserNameUpdate}>Edit User Name</Button>
                        <Input
                            type="text" 
                            value={this.props.newUserName}
                            onChange={this.props.handleUserNameChange}
                        />
                        <Button onClick={handleUserLogout}>Log Out</Button>
                </NavbarContainer>
            </UserAccContainer>
        )
    }
};

export default userDisplay;