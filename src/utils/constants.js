const LOGO_URL = "https://cdn2.f-cdn.com/contestentries/2426851/74260034/6689bc27dfb41_thumb900.jpg";

const RESIMG_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

// const MENU_API = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=5934&catalog_qa=undefined&submitAction=ENTER";

const lat = 12.9352403;
const lng = 77.624532;

const MENU_API = "https://corsproxy.io/https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=";

export {LOGO_URL, RESIMG_URL, MENU_API};