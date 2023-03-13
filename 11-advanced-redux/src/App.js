import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { uiAction } from './store/uiSlice';
let isInitial = true;
function App() {
    const dispatch = useDispatch();
    const cartShow = useSelector((state) => state.ui.cartIsVisible);
    const cart = useSelector((state) => state.cart);
    const notification = useSelector((state) => state.ui.notification);
    useEffect(() => {
        const sendCartData = async () => {
            dispatch(
                uiAction.showNotification({
                    status: 'pending',
                    title: 'Sending...',
                    message: 'Sending cart data!',
                })
            );
            const response = await fetch(
                'https://react-http-60ae9-default-rtdb.firebaseio.com/cart.json',
                { method: 'PUT', body: JSON.stringify(cart) }
            );
            if (!response.ok) {
                throw new Error('Sending cart data failed');
            }
            dispatch(
                uiAction.showNotification({
                    status: 'success',
                    title: 'Success!',
                    message: 'Sent cart data successfully!',
                })
            );
        };
        if (isInitial) {
          isInitial = false;
          return
        }
        sendCartData().catch((error) => {
            dispatch(
                uiAction.showNotification({
                    status: 'error',
                    title: 'Error!',
                    message: 'Sending cart data failed!',
                })
            );
        });
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
