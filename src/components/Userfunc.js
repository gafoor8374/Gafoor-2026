 import { use, useState } from "react";
 
 const Userfunc = (props) =>{
    const [count, setCount] = useState(0);
    const {name, location} = props;
    return (
        <div className="user-card">
            <h5>Count: {count}</h5>
            <button onClick={()=>{
                setCount((prev)=>prev+1)
            }}>Add</button>
            <button onClick={()=>{
                setCount((prev)=> prev>0 ? prev-1 :0)
        
            }}>Sub</button>
            <h2>Name: {name}</h2>
            <h4>Location: {location}</h4>
            <h5>gmail: shaikgafoor2324@gmail.com</h5>
        </div>
    )
 }

 export default Userfunc;