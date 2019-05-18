import React from 'react'

export default function Login(props){
    return (
        <div>
            <input 
                type="text" 
                value={props.loginQeury}
                onChange={props.handleLogInChange}
            />
            <button onClick={props.handleLoginQuery}>Log in or Create</button>
        </div>
    );
}


