import "./App.css";
import CountButton from "./CountButton/index";

function App() {

  return (
    <div className="App">
      <CountButton incrementBy={1} buttonColor={'yellow'} borderRadius={"2px"} /> 
      <CountButton incrementBy={5} buttonColor={"red"} borderRadius={"30px"}/> 
      <CountButton incrementBy={7} buttonColor={"green"} borderRadius={"1px"}/> 
    </div>
  );
}

export default App;
