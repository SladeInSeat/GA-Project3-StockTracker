import React from 'react'

export default function Login(props){
    return (
        <div>
            <input 
                type="text" 
                value={props.loginQeury}
                onChange={props.handleInputChange}
            />
            <button onClick={props.handleSubmitQuery}>Log in or Create</button>
        </div>
    );
}


