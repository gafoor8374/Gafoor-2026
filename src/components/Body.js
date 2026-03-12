import Rescards, {PromtedWithLabel}from "./Rescards";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [resturantList, setResturantList] = useState([]);
  const [filterList, setFilterList] = useState([]);

  const [searchText, setSearchText] = useState("");

  // Event handler
  const FilterRest = () => {
    let filteredResturantList = resturantList.filter(
      (restaurant) => restaurant.info?.avgRating > 4.4,
    );

    // console.log(filteredResturantList);
    setFilterList(filteredResturantList);
  };

  const SearchReasturant = (e) => {
    setSearchText(e.target.value);
  };
  
  const SeachingResturant = () => {
    let searchRes = resturantList.filter((res) =>
      res.info?.name.toLowerCase().includes(searchText.toLowerCase()),
    );
    // console.log(searchRes);
    setFilterList(searchRes);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );

    const json = await data.json();
    // console.log(json);
    setResturantList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setFilterList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };
// debugger;
  const onlineStatus = useOnlineStatus();
  const  WithPromtedLabel= PromtedWithLabel();

  if(onlineStatus === false){
    return(<h4>Look's your internet connection check...!!!!</h4>);  
  }

  //Conditional rendering
 
    return resturantList.length === 0 ? (
      <Shimmer />
    ) : (
      <div className="body">
        <div className="flex mx-10">
          <input
          className=" m-4 border border-black rounded-lg"
            type="text"
            placeholder="Search Restaurant"
            value={searchText}
            onChange={SearchReasturant}

          />
          <button className="m-4 border border-black bg-green-200 rounded-lg"
            onClick={SeachingResturant}>
            Search
          </button>

          <button className="m-4 border border-black bg-green-200 rounded-lg" onClick={FilterRest}>
            Filter Resturant
          </button>
        </div>
        
        <div className="flex flex-wrap border-solid m-5 p-4">
          {filterList.map((resturant) => (
            <Link
              key={resturant.info.id}
              to={("restaurant/menu/"+ resturant.info.id)}
            >
              {resturant.info.promoted ?( <WithPromtedLabel resData={resturant} />) :(<Rescards resData={resturant} />)}
              
            </Link>
          ))}
        </div>
      </div>
    );
};

export default Body;
