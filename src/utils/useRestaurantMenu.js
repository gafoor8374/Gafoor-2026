import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    const [menuInfo, setMenuInfo] = useState([]);


    useEffect(() => {
        fetchMenu();
    }, []);
    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId, {
            method: "GET",
            headers: {
                accept: "*/*",
                "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
            },
        });

        const json = await data.json();

        console.log(json);
        setResInfo(json.data);

        const groupedCards = json?.data?.cards?.find((card) => {
           return card?.groupedCard
        });

        const regularCards =
            groupedCards?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
        const allItems = regularCards
            .map((item) => {
                const card = item?.card?.card;
                
                const directItems = card?.itemCards || [];

                const nestedItems =
                    card?.categories?.map((cat) => cat?.itemCards || []) || [];

                return [...directItems, ...nestedItems.flat()];
            })
            .flat();

        console.log("allItmems:", allItems);

        setMenuInfo(allItems);

    };
    return [resInfo, menuInfo];
};

export default useRestaurantMenu;
