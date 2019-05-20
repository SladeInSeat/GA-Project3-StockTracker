import React from 'react'
import Button from './styledComponents/Button.js'


export default function Search(props) {
    return (
        <div>
            <input  
                type="text"
                value={props.searchCriteria}
            />
            <Button onClick={props.stockSearch}>Search</Button>
        </div>
    );
}
