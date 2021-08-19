const reactContentRoot = document.getElementById("root");

const myFirstElement = React.createElement("ul", null, [
  React.createElement("li", null, "item1"),
  React.createElement("li", null, "item2"),
]);

const myJSXElement = (
  <ul>
    <li>item 1 </li>
    <li>item 2 </li>
  </ul>
);

ReactDOM.render(myFirstElement, reactContentRoot);
