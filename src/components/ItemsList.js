import { useState } from "react";
import AccordinBody from "./AccordinBody";

const ItemsList = ({ menu = []}) => {
  //   console.log(menu);
  const [open, setOpen] = useState(null);

  const handleClick = (index) => {
    if (open === index) {
      setOpen(null);
    } else {
      setOpen(index);
    }
  };

  return (
    <div>
      <div className=" p-4 m-4">
        {menu?.map((cat, index) => (
          // <div className="">
          <div
            key={cat?.card?.card?.categoryId}
            className="mx-52 my-5 font-bold w-200 bg-gray-200 ">
            <div
              onClick={() => handleClick(index)}
              className="flex justify-between px-6 py-4 font-bold cursor-pointer">
              <span>
                {cat?.card?.card?.title} ({cat?.card?.card?.itemCards?.length})
              </span>
              <span>{open === index ? "⬆️" : "⬇️"}</span>
            </div>
            {open === index && (
              <AccordinBody list={cat?.card?.card?.itemCards} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemsList;
