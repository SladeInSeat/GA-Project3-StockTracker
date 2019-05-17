import React from 'react'

export default function Search(props) {
    return (
        <div>
            <input  
                type="text"
                value={props.searchCriteria}
            />
            <button onClick={props.stockSearch}>Search</button>
        </div>
    );
}
