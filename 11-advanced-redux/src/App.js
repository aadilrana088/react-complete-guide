import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const cartShow = useSelector(state => state.ui.cartIsVisible)
  return (
    <Layout>
      {cartShow && <Cart /> }
      <Products />
    </Layout>
  );
}

export default App;
