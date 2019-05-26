import React from 'react'
import Button from './styledComponents/Button.js'


export default function Search(props) {
    return (
        <div>
            <input  
                type="text"
                value={props.searchCriteria}
                onChange={props.handleSearchCriteriaChange}
            />
            <Button onClick={props.handleLSearchCriteriaQuery}>Search</Button>
        </div>
    );
}
