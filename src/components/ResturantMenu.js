import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";

const ResturantMenu = () => {
  const { resId } = useParams();

  const [resInfo, setResInfo] = useState(null);
  const [categories, setCategories] = useState([]);
  const [openCategoryIndex, setOpenCategoryIndex] = useState(null);
  const [openSubCategoryIndex, setOpenSubCategoryIndex] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await fetch(MENU_API + resId);
      const json = await response.json();

      setResInfo(json?.data);

      const groupedCard = json?.data?.cards?.find(
        (card) => card?.groupedCard
      );

      const regularCards =
        groupedCard?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

      // ✅ Allow both normal and nested categories
      const filteredCategories = regularCards.filter(
        (item) =>
          item?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );

      setCategories(filteredCategories);
    } catch (error) {
      console.log(error);
    }
  };

  if (!resInfo) return <Shimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRatingString,
    totalRatingsString,
  } = resInfo?.cards[2]?.card?.card?.info || {};

  return (
    <div className="res-info" style={{ maxWidth: "800px", margin: "auto" }}>
      <h1>{name}</h1>

      <h3>
        {avgRatingString} ({totalRatingsString}) • {costForTwoMessage}
      </h3>

      <p>{cuisines?.join(", ")}</p>

      <hr />

      <div className="menu">
        <h2>Menu</h2>

        {categories.map((category, catIndex) => {
          const card = category?.card?.card;
          console.log(card);
          const isCategoryOpen = openCategoryIndex === catIndex;

          return (
            <div
              key={card?.categoryId || catIndex}
              style={{ marginBottom: "15px" }}
            >
              {/* 🔥 MAIN CATEGORY HEADER */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "12px",
                  background: "#f2f2f2",
                  cursor: "pointer",
                  borderRadius: "6px",
                }}
                onClick={() => {
                  setOpenCategoryIndex(
                    isCategoryOpen ? null : catIndex
                  );
                  setOpenSubCategoryIndex(null);
                }}
              >
                <h3>{card?.title}</h3>
                <span>{isCategoryOpen ? "▲" : "▼"}</span>
              </div>

              {/* 🔥 CATEGORY CONTENT */}
              {isCategoryOpen && (
                <div style={{ paddingLeft: "15px", marginTop: "8px" }}>
                  
                  {/* ✅ Direct Items */}
                  {card?.itemCards?.map((item) => {
                    const info = item?.card?.info;

                    return (
                      <div
                        key={info?.id}
                        style={{
                          padding: "8px 0",
                          borderBottom: "1px solid #eee",
                        }}
                      >
                        <strong>{info?.name}</strong>
                        <div>
                          ₹
                          {(info?.price ||
                            info?.defaultPrice) / 100}
                        </div>
                        <p style={{ fontSize: "12px", color: "#666" }}>
                          {info?.description}
                        </p>
                      </div>
                    );
                  })}

                  {/* 🔥 NESTED SUB-CATEGORIES */}
                  {card?.categories?.map((subCat, subIndex) => {
                    const isSubOpen =
                      openSubCategoryIndex === subIndex;

                    return (
                      <div
                        key={subCat?.categoryId || subIndex}
                        style={{ marginTop: "10px" }}
                      >
                        {/* 🔥 SUB CATEGORY HEADER */}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            cursor: "pointer",
                            background: "#fafafa",
                            padding: "8px",
                            borderRadius: "4px",
                          }}
                          onClick={() =>
                            setOpenSubCategoryIndex(
                              isSubOpen ? null : subIndex
                            )
                          }
                        >
                          <h4>{subCat?.title}</h4>
                          <span>{isSubOpen ? "▲" : "▼"}</span>
                        </div>

                        {/* 🔥 SUB CATEGORY ITEMS */}
                        {isSubOpen && (
                          <div style={{ paddingLeft: "15px" }}>
                            {subCat?.itemCards?.map((item) => {
                              const info = item?.card?.info;

                              return (
                                <div
                                  key={info?.id}
                                  style={{
                                    padding: "6px 0",
                                    borderBottom: "1px solid #eee",
                                  }}
                                >
                                  {info?.name} - ₹
                                  {(info?.price ||
                                    info?.defaultPrice) / 100}
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}

                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResturantMenu;