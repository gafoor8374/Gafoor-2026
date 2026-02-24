import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1", key: "child1" }, [
    React.createElement("h1", {id:"h1 child1", key:"h1-child1"}, "I am h1 tag"),
    React.createElement("h2", {id:"h2 child1", key:"h2-child1"}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child2", key: "child2" }, [
    React.createElement("h1", {id:"h1 child2", key:"h1-child2"}, "I am h1 tag"),
    React.createElement("h2", {id:"h2 child2", key:"h2-child2"}, "I am h2 tag"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
