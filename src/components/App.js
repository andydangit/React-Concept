import "./App.css";
import CountButton from "./CountButton";

function App() {

  return (
    <div className="App">
      <CountButton incrementBy={1} /> 
      <CountButton incrementBy={5} /> 
      <CountButton incrementBy={7} /> 
    </div>
  );
}

export default App;
