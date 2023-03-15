import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './pages/Error';
import Home from './pages/Home';
import Product from './pages/Product';
import ProudctDetails from './pages/ProudctDetails';
import Roots from './pages/Roots';
import Welcome from './pages/Welcome';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Roots />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/welcome',
                element: <Welcome />,
            },
            {
                path: '/products',
                element: <Product />,
            },
            {
              path: '/products/:id',
              element: <ProudctDetails />,
          },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
