import Userfunc from "./Userfunc";
import Userclass from "./Userclass";
import React from "react";

// const About = () =>{
//     return (
//         <div>
//             <h1>About us page</h1>
//            {/* {<Userfunc  name={"Shaik Gafoor "} location={"Banglore"}/>} */}
//            <Userclass name={"Shaik Gafoor class"} location={"Banglore"} gmail={"shaikgafoor2324@gmail.com"}/>

//         </div>

//     )
// }

// we made class based component create as about page

class About extends React.Component {
    constructor(props){
        super(props);
        console.log("Parent Constructor");

    }

    componentDidMount(){
        console.log("parent Mount")
    }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About us page</h1>
        <Userclass
          name={"Shaik Gafoor class"}
          location={"Banglore"}
          gmail={"shaikgafoor2324@gmail.com"}
        />
      </div>
    );
  }
}

export default About;