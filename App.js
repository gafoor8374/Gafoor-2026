import React from "react";
import ReactDOM from "react-dom/client";

const Title = () =>(
    <h1>It is Heading title</h1>
)
const HeadingComponent = () => (
    <div id="container">
            <Title> </Title>
            <h1 className="heading">
                Welcome to the React Course

            </h1>
        </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);