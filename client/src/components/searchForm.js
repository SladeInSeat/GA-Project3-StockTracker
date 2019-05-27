import React from 'react'
import {Button} from './styledComponents/Button.js'
import {Input} from './styledComponents/Containers.js'
import DisplayTitle from './styledComponents/DisplayTitle.js'


export default function Search(props) {
    return (
        <div>
            <DisplayTitle>Stock Search Results</DisplayTitle>
            <Input
                type="text"
                value={props.searchCriteria}
                onChange={props.handleSearchCriteriaChange}
            />
            <Button onClick={props.handleLSearchCriteriaQuery}>Search</Button>
        </div>
    );
}
