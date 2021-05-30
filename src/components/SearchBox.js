import React from 'react'

function SearchBox(props) {
    return (
        <div>
            <input onChange={props.handleInput} placeholder='Search for a movie '  className="search" type="text" />
        </div>
    )
}

export default SearchBox
