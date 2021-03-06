import React from 'react'
import {Button} from './styledComponents/Button.js'
import {Input} from './styledComponents/Containers.js'


export default function Login(props){
    return (
        <div>
            <Input 
                type="text" 
                value={props.loginQeury}
                onChange={props.handleLogInChange}
            />
            <Button onClick={props.handleLoginQuery}>Log in or Create</Button>
        </div>
    );
}


