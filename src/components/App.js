import "./App.css";
import CountButton from "./CountButton";

function App() {

  return (
    <div className="App">
      <CountButton incrementBy={1} buttonColor={'blue'}  /> 
      <CountButton incrementBy={5} buttonColor={"red"}/> 
      <CountButton incrementBy={7} buttonColor={"green"}/> 
    </div>
  );
}

export default App;
