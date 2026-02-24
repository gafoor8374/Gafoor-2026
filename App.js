/**
 * <div parent>
 *   div child1
 * h1
 * h2
 * 
 * div child2 
 * h1
 * h2
 * </div>
 */

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {id:"h1 child1"}, "I am h1 tag"),
    React.createElement("h2", {id:"h2 child1"}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {id:"h1 child2"}, "I am h1 tag"),
    React.createElement("h2", {id:"h2 child2"}, "I am h2 tag"),
  ]),
]);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
