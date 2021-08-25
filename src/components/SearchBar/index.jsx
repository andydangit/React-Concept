import React from 'react'
import "./index.css"

function SearchBar() {

    const searchValue = "Software Developer"
    


    return (
        <div>
            <input type="text" value={searchValue} />
        </div>
    )
}

export default SearchBar
