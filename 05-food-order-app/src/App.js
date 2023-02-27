import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);
    const cartShowHandler = () => {
        setCartIsShown(true);
    };
    const cartcloseHandler = () => {
        setCartIsShown(false);
    };
    return (
        <CartProvider>
            {cartIsShown && <Cart onCloseCart={cartcloseHandler} />}
            <Header onShowCart={cartShowHandler} />
            <main>
                <Meals />
            </main>
        </CartProvider>
    );
}

export default App;
