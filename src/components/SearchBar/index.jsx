import React, { useState } from "react";
import "./index.css";

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
      console.log(event);
    setSearchValue(event.target.value);
  };

  const handleClearClick = () => { 
setSearchValue("");
  }

  // this will create if something will show up 
  const shouldDisplayButton = searchValue.length > 0



  return (
    <div>
      <input type="text" value={searchValue} onChange={handleInputChange} />
      <br /> 
      {shouldDisplayButton &&  <button onClick={handleClearClick}> Clear</button>}
     
    </div>
  );
}

export default SearchBar;
