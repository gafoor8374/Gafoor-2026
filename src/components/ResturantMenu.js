import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";

const ResturantMenu = () => {
  const { resId } = useParams();

  const [resInfo, setResInfo] = useState(null);
  const [menuInfo, setMenuInfo] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(MENU_API+ resId, {
        method: "GET",
        headers: {
          accept: "*/*",
          "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
        },
      });
      const json = await data.json();
      console.log(json);
      setResInfo(json.data);

      const groupedCard = resInfo?.cards?.find((card) => card.groupedCard);

    //   console.log(groupedCard);

      const regularCards =
        groupedCard?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

    //   console.log(regularCards);


    const allItems = regularCards
  .map((item) => {
    const card = item?.card?.card;

    const directItems = card?.itemCards || [];

    const nestedItems =
      card?.categories?.map((cat) => cat?.itemCards || []) || [];

    return [...directItems, ...nestedItems.flat()];
  })
  .flat();
    
      console.log(allItems);

      setMenuInfo(allItems);
    } catch (error) {
      console.log(error);
    }
  };
 if(resInfo === null){
    return <Shimmer />
 } else{
  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRatingString,
    totalRatingsString,
  } = resInfo?.cards[2]?.card?.card?.info || {};

  return (
    <div className="res-info">
      <h1>{name}</h1>
      <h3>
        {avgRatingString}({totalRatingsString}) <span>.</span>
        {costForTwoMessage}
      </h3>
      {cuisines?.length ? cuisines.join(", ") : "No cuisines available"}
      <div className="menu">
        <h2>Menu</h2>
        <ul>
          {menuInfo.map((item, index)=> (<li  key={item?.card?.info?.id || index}>{item?.card?.info?.name} - Rs:{item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100 }</li>))}
        </ul>
      </div>
    </div>
  );
};
};

export default ResturantMenu;
