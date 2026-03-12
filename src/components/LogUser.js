import { useContext } from "react";
import UserContext from "../utils/UserContext";

const LogUser = ()=>{

    const {loggedUser, setName} = useContext(UserContext)

    return (
        <div className="text-center">
            <div>
                <label>UserName:</label>
                <input className="border border-black p-2 rounded-lg my-2 " value={loggedUser} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div>
                <label>PassWord:</label>
                <input className="border border-black p-2 rounded-lg mx-2" />
            </div>
        </div>
    )
}
export default LogUser;