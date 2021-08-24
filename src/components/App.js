import "./App.css";
import CountButton from "./CountButton";

function App() {

  return (
    <div className="App">
      <CountButton incrementBy={1} buttonColor={'blue'} borderRadius={"2px"} /> 
      <CountButton incrementBy={5} buttonColor={"red"} borderRadius={"30px"}/> 
      <CountButton incrementBy={7} buttonColor={"green"} borderRadius={"1px"}/> 
    </div>
  );
}

export default App;
