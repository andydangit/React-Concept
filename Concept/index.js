const reactContentRoot = document.getElementById("root");

// const myFirstElement = React.createElement("ul", null, [
//   React.createElement("li", null, "item1"),
//   React.createElement("li", null, "item2"),
// ]);

const myItem = 'item3'

const myJSXElement = (
  <ul>
    <li>item 1 </li>
    <li>item 3 </li>
    <li> {myItem} </li>
  </ul>
);

ReactDOM.render(myJSXElement, reactContentRoot);
