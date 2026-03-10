import { RESIMG_URL }  from "../utils/constants";

const Rescards = (props) =>{
    const {resData} = props;

    const {cloudinaryImageId, name,cuisines,avgRating,sla,costForTwo} = resData?.info;
    return (
        <div className="w-[300px] border border-solid bg-gray-100 p-4 m-4 hover:bg-gray-300 rounded-lg">
            <img className="w-[100%] h-[150px] rounded-xl" alt="res-logo" src={RESIMG_URL+cloudinaryImageId}/>
            <h3 className="font font-bold truncate">{name}</h3>
            <h5 className="font-extralight font-serif hover:font-sans truncate">{cuisines.join(",")}</h5>
            <h5 className="*">{avgRating} stars</h5>
            <h5>{sla?.deliveryTime} Mins</h5>
            <h5>{costForTwo}</h5>
        </div>
    )
}

export default Rescards;