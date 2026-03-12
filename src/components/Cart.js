import { useDispatch, useSelector } from "react-redux";
import AccordinBody from "./AccordinBody";
import { clearCart } from "../utils/cartSlice";

const Cart = ()=>{
    const cartItems = useSelector((store)=> store.cart.items)
     const dispatch = useDispatch() // import dispatch function
//   console.log(list);
const handheldClearCart = (item)=>{
  //dispatch an action to item
  dispatch(clearCart(item));
  
};

    return (
        <div className="mx-8 px-8 font-bold text-center">
            <h1>cart</h1>
            <div className="w-6/12 m-auto">
                <button className="w-auto rounded-xl p-4 m-4 border border-black bg-blue-500 text-white"
                onClick={()=>handheldClearCart(cartItems)}>Clear Cart</button>
                <AccordinBody list={cartItems} />
            </div>
        </div>
    )
}
export default Cart;