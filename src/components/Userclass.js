import React from "react";

class Userclass extends React.Component{
    constructor(props){
        super(props);


        this.state={
          count:0,
          userInfo:{
            name:"Dummy",
            bio:"dummy",
            location:"defalut",
            gmail:"abc@gmail.com",

          }
        };
        console.log("Child Constructor")

    };
    async componentDidMount(){
        // here we have using api calls
        console.log("child mount")
        const data = await fetch('https://api.github.com/users/gafoor8374');

        const json = await data?.json()

        // console.log(json);
        this.setState({
            userInfo: json
        })
    }

    componentDidUpdate(){
        // console.log("component did update")
    }

    componentWillUnmount(){
        // console.log("unmount the component")
    }
    render (){
        const {name, location, gmail, bio} = this.state.userInfo;
        const {count} = this.state;
        // console.log("Child Render")
        return (

            <div className="border border-solid-black w-[300px] m-5 p-5">
                <h5 className="font-bold">Count : {count}</h5>
                <div className="">
                    <button className="mx-1 rounded-md bg-gray-200 border border-black w-[50px]" onClick={()=>{
                    this.setState({
                        count: this.state.count+1,
                    })
                }}>Add</button>
                <button className="mx-1 rounded-md bg-gray-200 border border-black w-[50px]" onClick={()=>{
                    this.setState({
                        count: this.state.count >0 ? this.state.count-1 :0,
                    })
                }}>Sub</button>
                </div>
                
            <h2>Name: {name}</h2>
            <h4>Location: {location}</h4>
            <h5>gmail: {gmail}</h5>
            <h5>Bio: {bio}</h5>
          </div>
        )
    }
}

export default Userclass;



/***
 *  ##### Mounting ####
 * consturtor (create dummy data)
 * render (dummy data)
 * 
 * DOM update (dummy data)
 * ComponentDidMount (api call)
 * 
 *    ##### updating ####
 * render(update the state with api data)
 * componentDidUpdate(update api data) => updateing 
 * 
 * 
 * comoponetWillUpdate()=> unmount the data
 
 * 
 */