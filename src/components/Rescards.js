import { RESIMG_URL }  from "../utils/constants";

const Rescards = (props) =>{
    const {resData} = props;

    const {cloudinaryImageId, name,cuisines,avgRating,costForTwo} = resData?.info;
    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src={RESIMG_URL+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h5>{cuisines.join(",")}</h5>
            <h5>{avgRating} stars</h5>
            <h5>{resData?.info?.sla?.deliveryTime} Mins</h5>
            <h5>{costForTwo}</h5>
        </div>
    )
}

export default Rescards;