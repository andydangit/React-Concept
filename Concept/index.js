const reactContentRoot = document.getElementById("root");

// const myFirstElement = React.createElement("ul", null, [
//   React.createElement("li", null, "item1"),
//   React.createElement("li", null, "item2"),
// ]);



const App = () => {
    const myItem = 'item3'

return ( 
    <ul>
    <li>item 1 </li>
    <li>item 3 </li>
    <li> {myItem} </li>
  </ul>
)
}





ReactDOM.render(<App />, reactContentRoot);
