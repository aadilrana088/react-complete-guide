import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { sendCartData } from './store/cartSlice';
let isInitial = true;
function App() {
    const dispatch = useDispatch();
    const cartShow = useSelector((state) => state.ui.cartIsVisible);
    const cart = useSelector((state) => state.cart);
    const notification = useSelector((state) => state.ui.notification);
    useEffect(() => {
        dispatch(sendCartData(cart))
        if (isInitial) {
          isInitial = false;
          return
        }
    }, [cart, dispatch]);

    return (
        <>
            {notification && (
                <Notification
                    status={notification.status}
                    title={notification.title}
                    message={notification.message}
                />
            )}
            <Layout>
                {cartShow && <Cart />}
                <Products />
            </Layout>
        </>
    );
}

export default App;
