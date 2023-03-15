import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Welcome from './pages/Welcome';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/welcome",
    element: <Welcome />
  },
  {
    path: "/products",
    element: <Product />
  }
])

function App() {
    return <RouterProvider router={router} />;
}

export default App;
