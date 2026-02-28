import Rescards from "./Rescards";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

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
    console.log(searchRes);
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

//   useEffect(()=>{
//     if(resturantList.length>0){
//         updateFetchData();
//     }
//   },[resturantList]);

//   const updateFetchData = async () =>{
//     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/update",
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         lat: 12.9352403, 
//         lng: 77.624532,
//       }),
//     });
//     const json = await data.json();
//     console.log(json);
//   }

  //Conditional rendering
 
    return resturantList.length === 0 ? <Shimmer /> : (
      <div className="body">
        <div className="flt-btn">
          <input
            type="text"
            placeholder="Search Restaurant"
            value={searchText}
            onChange={SearchReasturant}
          />
          <button
            onClick={SeachingResturant}>
            Search
          </button>

          <button className="btn" onClick={FilterRest}>
            Filter Resturant
          </button>
        </div>
        <div className="res-list">
          {filterList.map((resturant) => (
            <Rescards key={resturant.info.id} resData={resturant} />
          ))}
        </div>
      </div>
    );
};

export default Body;
