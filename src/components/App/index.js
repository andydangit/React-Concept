import { useState, useEffect } from "react";
import "../App/index.css";
import CountButton from "../CountButton/index";
import SearchBar from "../SearchBar";
import Button from '../Button/Button';

function App() {
  const [productsState, setProductsState] = useState([]);

  useEffect(() => {
    // this is asynchronous
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((productsArray) => {
        const newProductsState = productsArray.map((product) => {
          return product.title;
        });
        setProductsState(newProductsState);
      });

    // setTimeout(() => {
    //   setProductsState ([
    //     "tooth paste",
    //     "tooth brush",
    //     "mouth wash",
    //     "dental floss",
    //     'mouth guard',
    //   ])
    // }, 2000)
  }, []);

  const hasProducts = productsState.length > 0;

  return (
    <div className="App">

      <Button> Hello World</Button>
      <Button> 2nd</Button>
      <Button> Third</Button>


      {/* <CountButton
        incrementBy={1}
        buttonColor={"yellow"}
        borderRadius={"2px"}
      /> */}

      {/* {hasProducts ? <SearchBar products={productsState} /> : "Loading"} */}

      {/* <CountButton incrementBy={5} buttonColor={"red"} borderRadius={"30px"}/> 
      <CountButton incrementBy={7} buttonColor={"green"} borderRadius={"1px"}/>  */}
    </div>
  );
}

export default App;
