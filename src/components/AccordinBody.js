import { useState } from "react";
import { RESIMG_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const AccordinBody = ({ list = [] }) => {
  const [count, setCount] = useState(0)

  const dispatch = useDispatch() // import dispatch function
//   console.log(list);
const handleAddItems = (item)=>{
  //dispatch an action to item
  dispatch(addItem(item));
  
};
  return (
    <div>
      {list?.map((item) => (
        <div
          className="flex justify-between border-b border-gray-400 m-10"
          key={item?.card?.info?.id}
        >
          <div className="w-9/12 ">
            <span className="font-bold block">{item?.card?.info?.name}</span>

            <span className="block">
              ₹
              {(item?.card?.info?.price || item?.card?.info?.defaultPrice) /
                100}
            </span>
            <p className="text-sm text-gray-600">
              {item?.card?.info?.description}
            </p>
          </div>
          <div className="w-3/12 relative">
            <img
              className="rounded-lg w-full h-28 object-cover"
              src={RESIMG_URL + item?.card?.info?.imageId}
              alt=""
            />

            <button className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white text-green-600 font-bold px-4 py-1 rounded-lg shadow" 
            onClick={()=>handleAddItems(item)} >
              ADD +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordinBody;
