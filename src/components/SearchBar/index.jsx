import React, { useState } from "react";
import "./index.css";


function SearchBar(props) {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    console.log(event);
    setSearchValue(event.target.value);
  };

  const handleClearClick = () => {
    setSearchValue("");
  };

  // this will map the array onto screen  
  console.log(props.products.map((product) => {
    return product.toUpperCase()
  })
  );

  
  // this will create if something will show up
  const shouldDisplayButton = searchValue.length > 0;

  // this will filter
const filteredProducts = props.products.filter((product) => {
  return product.includes(searchValue)
})



  return (
    <div>
      <input type="text" value={searchValue} onChange={handleInputChange} />
      <br />
      {/* this will show the clear button when there is text   */}
      {shouldDisplayButton && (
        <button onClick={handleClearClick}> Clear</button>
      )}
        <ul> 
          {/* key = identify the element in the list  */}
        {filteredProducts.map((product) => {
          return<li key={product}>{product} </li> 
        })}
        </ul> 

    </div>
  );
}

export default SearchBar;
