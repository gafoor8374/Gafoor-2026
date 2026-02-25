import React from "react";
import ReactDOM from "react-dom/client";
/**
 * Home
 * - logo
 * - Navbar 
 * Body
 * -Search
 * -Resturant container
 *  -Resturant list
 *  -resturant card
 *    -Image
 *    -Name of Resturant
 *    - Rating
 *    -Cusines
 *    -Delivery time
 * Footer
 * -Links
 * -copy rights etc
 */
const Home = () =>{

    return(
        <div className="home-container">
            <div className="logo">
                <img className="logo-app" alt="logo" src="https://cdn2.f-cdn.com/contestentries/2426851/74260034/6689bc27dfb41_thumb900.jpg" />
            </div>      
            <div className="navbar">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>      
        </div>
    )
}

const Rescards = (props) =>{
    const {resList} = props;

    const {cloudinaryImageId, name,cuisines,avgRating,costForTwo} = resList?.info;
    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h5>{cuisines.join(",")}</h5>
            <h5>{avgRating} stars</h5>
            <h5>{resList.info.sla.deliveryTime}Mins</h5>
            <h5>{costForTwo}</h5>
        </div>
    )
}
const resturantList = [
{
type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
info: {
id: "275",
name: "Mani's Dum Biryani",
cloudinaryImageId: "xlr4ngepa5gxkugrsdbs",
locality: "Koramangala",
areaName: "Koramangala",
costForTwo: "₹400 for two",
cuisines: [
"Andhra",
"Biryani"
],
avgRating: 4.6,
parentId: "623",
avgRatingString: "4.6",
totalRatingsString: "32K+",
sla: {
deliveryTime: 20,
lastMileTravel: 2.1,
serviceability: "SERVICEABLE",
slaString: "20-25 mins",
lastMileTravelString: "2.1 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2026-02-25 23:59:00",
opened: true
},
badges: { },
isOpen: true,
aggregatedDiscountInfoV2: { },
type: "F",
badgesV2: {
entityBadges: {
imageBased: { },
textBased: { },
textExtendedBadges: { }
}
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "4.2",
ratingCount: "1.6K+"
},
source: "GOOGLE",
sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-8283b605-ed19-4958-a537-486a1a5e639c"
},
cta: {
link: "https://www.swiggy.com/city/bangalore/manis-dum-biryani-koramangala-rest275",
text: "RESTAURANT_MENU",
type: "WEBLINK"
},
widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
info: {
id: "5934",
name: "Burger King",
cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/ac30c19f-5572-448a-9c6a-44be9d986625_5934.jpg",
locality: "Koramangala",
areaName: "Koramangala",
costForTwo: "₹350 for two",
cuisines: [
"Burgers",
"American"
],
avgRating: 4.1,
parentId: "166",
avgRatingString: "4.1",
totalRatingsString: "104K+",
sla: {
deliveryTime: 15,
lastMileTravel: 1.6,
serviceability: "SERVICEABLE",
slaString: "15-20 mins",
lastMileTravelString: "1.6 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2026-02-26 06:00:00",
opened: true
},
badges: { },
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: { },
textBased: { },
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "ITEMS",
subHeader: "AT ₹59"
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "4.2",
ratingCount: "4.4K+"
},
source: "GOOGLE",
sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-8283b605-ed19-4958-a537-486a1a5e639c"
},
cta: {
link: "https://www.swiggy.com/city/bangalore/burger-king-koramangala-rest5934",
text: "RESTAURANT_MENU",
type: "WEBLINK"
},
widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
info: {
id: "23678",
name: "McDonald's",
cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/3/b9564130-be0f-4136-a8e1-6913cf24446d_23678.JPG",
locality: "5th Block",
areaName: "Koramangala",
costForTwo: "₹400 for two",
cuisines: [
"Burgers",
"Beverages",
"Cafe",
"Desserts"
],
avgRating: 4.4,
parentId: "630",
avgRatingString: "4.4",
totalRatingsString: "66K+",
sla: {
deliveryTime: 15,
lastMileTravel: 1.3,
serviceability: "SERVICEABLE",
slaString: "10-15 mins",
lastMileTravelString: "1.3 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2026-02-26 03:00:00",
opened: true
},
badges: { },
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: { },
textBased: { },
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "ITEMS",
subHeader: "AT ₹99"
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-8283b605-ed19-4958-a537-486a1a5e639c"
},
cta: {
link: "https://www.swiggy.com/city/bangalore/mcdonalds-5th-block-koramangala-rest23678",
text: "RESTAURANT_MENU",
type: "WEBLINK"
},
widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
info: {
id: "671928",
name: "KFC",
cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/8/aef064e8-0bf8-4750-8178-96e260ce7004_671928.JPG",
locality: "7th Block",
areaName: "Koramangla",
costForTwo: "₹400 for two",
cuisines: [
"Burgers",
"Fast Food",
"Rolls & Wraps"
],
avgRating: 4.2,
parentId: "547",
avgRatingString: "4.2",
totalRatingsString: "6.5K+",
sla: {
deliveryTime: 12,
lastMileTravel: 1.2,
serviceability: "SERVICEABLE",
slaString: "10-15 mins",
lastMileTravelString: "1.2 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2026-02-26 03:00:00",
opened: true
},
badges: { },
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: { },
textBased: { },
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "ITEMS",
subHeader: "AT ₹199"
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-8283b605-ed19-4958-a537-486a1a5e639c"
},
cta: {
link: "https://www.swiggy.com/city/bangalore/kfc-7th-block-koramangla-rest671928",
text: "RESTAURANT_MENU",
type: "WEBLINK"
},
widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
info: {
id: "656392",
name: "Subway",
cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/113d790a-4937-4b7a-a7d3-51cbbabdd50a_656392.jpg",
locality: "1st Block",
areaName: "Koramangala",
costForTwo: "₹350 for two",
cuisines: [
"sandwich",
"Salads",
"wrap",
"Healthy Food"
],
avgRating: 4.4,
parentId: "2",
avgRatingString: "4.4",
totalRatingsString: "4.9K+",
sla: {
deliveryTime: 15,
lastMileTravel: 1.6,
serviceability: "SERVICEABLE",
slaString: "15-20 mins",
lastMileTravelString: "1.6 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2026-02-26 06:45:00",
opened: true
},
badges: {
imageBadges: [
{
imageId: "High%20Protein/rx%20tag%205.png",
description: "High Protein"
}
]
},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: {
badgeObject: [
{
attributes: {
description: "High Protein",
imageId: "High%20Protein/rx%20tag%205.png"
}
}
]
},
textBased: { },
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "₹150 OFF",
subHeader: "ABOVE ₹299",
discountTag: "FLAT DEAL"
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-8283b605-ed19-4958-a537-486a1a5e639c"
},
cta: {
link: "https://www.swiggy.com/city/bangalore/subway-1st-block-koramangala-rest656392",
text: "RESTAURANT_MENU",
type: "WEBLINK"
},
widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
info: {
id: "229",
name: "Meghana Foods",
cloudinaryImageId: "xqwpuhgnsaf18te7zvtv",
locality: "Koramangala",
areaName: "Koramangala",
costForTwo: "₹500 for two",
cuisines: [
"Biryani",
"Andhra",
"South Indian",
"Chinese",
"Seafood"
],
avgRating: 4.6,
parentId: "635",
avgRatingString: "4.6",
totalRatingsString: "196K+",
sla: {
deliveryTime: 16,
lastMileTravel: 1.4,
serviceability: "SERVICEABLE",
slaString: "15-20 mins",
lastMileTravelString: "1.4 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2026-02-25 23:59:00",
opened: true
},
badges: {
imageBadges: [
{
imageId: "Rxawards/_CATEGORY-Biryani.png",
description: "Delivery!"
}
]
},
isOpen: true,
aggregatedDiscountInfoV2: { },
type: "F",
badgesV2: {
entityBadges: {
imageBased: {
badgeObject: [
{
attributes: {
description: "Delivery!",
imageId: "Rxawards/_CATEGORY-Biryani.png"
}
}
]
},
textBased: { },
textExtendedBadges: { }
}
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "4.3",
ratingCount: "21K+"
},
source: "GOOGLE",
sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-8283b605-ed19-4958-a537-486a1a5e639c"
},
cta: {
link: "https://www.swiggy.com/city/bangalore/meghana-foods-koramangala-rest229",
text: "RESTAURANT_MENU",
type: "WEBLINK"
},
widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
info: {
id: "426776",
name: "Theobroma",
cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/17/fbef0327-1e19-42a7-97bf-d5db21912052_426776.JPG",
locality: "Koramangala",
areaName: "Koramangala",
costForTwo: "₹400 for two",
cuisines: [
"Desserts",
"Bakery",
"Beverages"
],
avgRating: 4.6,
parentId: "1040",
avgRatingString: "4.6",
totalRatingsString: "7.2K+",
sla: {
deliveryTime: 10,
lastMileTravel: 1.3,
serviceability: "SERVICEABLE",
slaString: "10-15 mins",
lastMileTravelString: "1.3 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2026-02-25 22:59:00",
opened: true
},
badges: {
imageBadges: [
{
imageId: "Rxawards/_CATEGORY-Desserts.png",
description: "Delivery!"
},
{
imageId: "newg.png",
description: "Gourmet"
}
]
},
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: {
badgeObject: [
{
attributes: {
description: "Delivery!",
imageId: "Rxawards/_CATEGORY-Desserts.png"
}
},
{
attributes: {
description: "Gourmet",
imageId: "newg.png"
}
}
]
},
textBased: { },
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "50% OFF",
discountTag: "FLAT DEAL"
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "4.2",
ratingCount: "633"
},
source: "GOOGLE",
sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-8283b605-ed19-4958-a537-486a1a5e639c"
},
cta: {
link: "https://www.swiggy.com/city/bangalore/theobroma-koramangala-rest426776",
text: "RESTAURANT_MENU",
type: "WEBLINK"
},
widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
type: "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
info: {
id: "485933",
name: "Dindigul Thalappakatti - Since 1957 ",
cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/21/f89894cc-4731-432b-96bb-3788b53336c6_485933.JPG",
locality: "Nexus",
areaName: "Koramangala",
costForTwo: "₹500 for two",
cuisines: [
"South Indian",
"Biryani",
"Chinese",
"North Indian"
],
avgRating: 4.3,
parentId: "641506",
avgRatingString: "4.3",
totalRatingsString: "3.0K+",
sla: {
deliveryTime: 25,
lastMileTravel: 2.2,
serviceability: "SERVICEABLE",
slaString: "20-25 mins",
lastMileTravelString: "2.2 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
nextCloseTime: "2026-02-25 23:00:00",
opened: true
},
badges: { },
isOpen: true,
type: "F",
badgesV2: {
entityBadges: {
imageBased: { },
textBased: { },
textExtendedBadges: { }
}
},
aggregatedDiscountInfoV3: {
header: "ITEMS",
subHeader: "AT ₹205"
},
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { }
},
differentiatedUi: {
displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
differentiatedUiMediaDetails: {
mediaType: "ADS_MEDIA_ENUM_IMAGE",
lottie: { },
video: { }
}
},
reviewsSummary: { },
displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
restaurantOfferPresentationInfo: { },
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {
context: "seo-data-8283b605-ed19-4958-a537-486a1a5e639c"
},
cta: {
link: "https://www.swiggy.com/city/bangalore/dindigul-thalappakatti-since-1957-nexus-koramangala-rest485933",
text: "RESTAURANT_MENU",
type: "WEBLINK"
},
widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
}
]
function Body() {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-list">
                {resturantList.map((resturant) => ( <Rescards key={resturant.info.id} resList={resturant} /> ))}
            </div>
        </div>
    );
}
const GafoorFoodApp = () =>{
    return(
        <div className="food-app">
            <Home />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<GafoorFoodApp />);