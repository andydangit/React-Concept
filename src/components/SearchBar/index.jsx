import React, { useState } from "react";
import "./index.css";

const products = [
  "tooth paste", 
  "tooth brush", 
  "mouth wash",
  "dental floss",
  'mouth guard',
];


function SearchBar() {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    console.log(event);
    setSearchValue(event.target.value);
  };

  const handleClearClick = () => {
    setSearchValue("");
  };

  // this will map the array onto screen  
  console.log(products.map((product) => {
    return product.toUpperCase()
  })
  );

  
  // this will create if something will show up
  const shouldDisplayButton = searchValue.length > 0;

  return (
    <div>
      <input type="text" value={searchValue} onChange={handleInputChange} />
      <br />
      {/* this will show the clear button when there is text   */}
      {shouldDisplayButton && (
        <button onClick={handleClearClick}> Clear</button>
      )}

        {products.map((product) => {
          return<li>{product} </li> 
        })}

    </div>
  );
}

export default SearchBar;
