import { Fragment, useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);
    const cartShowHandler = () => {
        setCartIsShown(true);
    };
    const cartcloseHandler = () => {
        setCartIsShown(false);
    };
    return (
        <Fragment>
            {cartIsShown && <Cart onCloseCart={cartcloseHandler} />}
            <Header onShowCart={cartShowHandler} />
            <main>
                <Meals />
            </main>
        </Fragment>
    );
}

export default App;
