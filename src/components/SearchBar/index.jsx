import React, {useState} from 'react'
import "./index.css"

function SearchBar() {

   const [searchValue, setSearchValue] = useState ("the search value");

    const handleInputChange = (event) => {
        setSearchValue(event.target.value)
    }
    


    return (
        <div>
            <input type="text" value={searchValue} onChange={handleInputChange} />
            
        </div>
    )
}

export default SearchBar
