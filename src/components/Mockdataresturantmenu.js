import { useEffect, useState } from "react";
import menuData from "../utils/menuData";

const Mockdataresturantmenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [menuInfo, setMenuInfo] = useState([]);

  useEffect(() => {
    const data = menuData;
    console.log(data);
    setResInfo(data.data);

    const groupedCard = resInfo?.cards?.find((card) => card.groupedCard);

    const regularCards =
      groupedCard?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
    const allItems = [];

    regularCards.forEach((item) => {
      const card = item?.card?.card;

      if (card?.itemCards) {
        allItems.push(...card.itemCards);
      }

      if (card?.categories) {
        card.categories.forEach((cat) => {
          if (cat?.itemCards) {
            allItems.push(...cat.itemCards);
          }
        });
      }
    });
    console.log(allItems);
    setMenuInfo(allItems);
  }, []);
  console.log(menuInfo);
  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRatingString,
    totalRatingsString,
  } = resInfo?.cards[2]?.card?.card?.info || {};
  return (
    <div>
      <h1>{name}</h1>
      <h3>
        {avgRatingString}({totalRatingsString}) <span>.</span>
        {costForTwoMessage}
      </h3>
      <p>{cuisines?.join(", ") || "No cuisines available"}</p>
      <div>menu</div>
      <div>
        <ul>
          {menuInfo.map((item) => (
            <li 
            key={`${item?.card?.info?.id}`}
            >
                {item?.card?.info?.name}
                </li> 
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Mockdataresturantmenu;
