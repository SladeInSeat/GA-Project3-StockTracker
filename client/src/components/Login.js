import React from 'react'
import styled from 'styled-components'
import Button from './styledComponents/Button.js'
import DisplayTitle from './styledComponents/DisplayTitle.js'


export default function Login(props){
    return (
        <div>
            <DisplayTitle>Log In</DisplayTitle>
            <input 
                type="text" 
                value={props.loginQeury}
                onChange={props.handleLogInChange}
            />
            <Button onClick={props.handleLoginQuery}>Log in or Create</Button>
        </div>
    );
}


