import ReactDOM from 'react-dom';
import "./App.css";

function App() {
  const myItem = "Andy";

  return (
    <div className="App">
      <ul>
        <li> item 1 </li>
        <li>item </li>
        <li> {myItem}</li>
      </ul>
    </div>
  );
}

export default App;
