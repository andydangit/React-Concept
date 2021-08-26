import "../App/index.css";
import CountButton from "../CountButton/index";
import SearchBar from "../SearchBar";


const products = [
  "tooth paste", 
  "tooth brush", 
  "mouth wash",
  "dental floss",
  'mouth guard',
];


function App() {

  return (
    <div className="App">
      <SearchBar products={products} />
      <CountButton incrementBy={1} buttonColor={'yellow'} borderRadius={"2px"} /> 
      <CountButton incrementBy={5} buttonColor={"red"} borderRadius={"30px"}/> 
      <CountButton incrementBy={7} buttonColor={"green"} borderRadius={"1px"}/> 
    </div>
  );
}

export default App;
