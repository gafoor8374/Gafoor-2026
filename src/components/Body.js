import Rescards from "./Rescards";
import resList from "../utils/mockData";
import { useState } from "react";


const Body = () => {
    const [resturantList, setResturantList] = useState(resList);
    
    const arr = useState(resList);
    const [resList, setReslist] = arr

    const FilterRest = () => {
    let filteredResturantList = resturantList.filter(
        (restaurant) => restaurant?.info?.avgRating > 4.4
    );

    console.log(filteredResturantList);
    setResturantList(filteredResturantList)
}; 
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="flt-btn">
            <button className="btn" onClick={FilterRest}>Filter Resturant </button>
        </div>
        <div className="res-list">
            {resturantList.map((resturant) => (<Rescards key={resturant.info.id} resData={resturant} />))}
        </div>
    </div>
)
};
export default Body;