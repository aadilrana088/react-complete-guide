import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    item: [],
    totalAmount: 0,
}
const  addItemToCartHandler = (item) => {}
const removeItemFromCartHandler = (id) => {}
const CartProvider = (props) => {
    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }
    
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;