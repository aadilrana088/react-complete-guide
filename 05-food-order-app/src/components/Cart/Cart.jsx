import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const totalAmount = `₹${cartCtx.totalAmount.toFixed(2)}`;
    const hasItem = cartCtx.items.length > 0;
    const cartItemRemoveHandler = id => {}
    const cartItemAddHandler = item => {}
    const cartItem = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler(null, item.id)}
                    onAdd={cartItemAddHandler(null, item)}
                />
            ))}
            {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map(
                (item) => (
                    <li key={item.id}>{item.name}</li>
                )
            )}
        </ul>
    );
    return (
        <Modal onClose={props.onCloseCart}>
            <div>
                {cartItem}
                <div className={classes.total}>
                    <span>Total Amount</span>
                    <span>{totalAmount}</span>
                </div>
                <div className={classes.actions}>
                    <button
                        className={classes['button--alt']}
                        onClick={props.onCloseCart}
                    >
                        Close
                    </button>
                    {hasItem && (
                        <button className={classes.button}>Order</button>
                    )}
                </div>
            </div>
        </Modal>
    );
};

export default Cart;
