import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Home from './Components/Home.jsx';
// import Statistics from './Components/Statistics.jsx';
import Error from './Components/Error.jsx';
import ProductDetails from './ProductDetails.jsx';
import SelectedData from './Components/SelectedData/SelectedData.jsx';
// import ListedHeart from './Components/ListedHeart.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/",
        element: <Home />, 
      },
      { path: "/dashboard",
        element: <SelectedData />,
        loader: () => fetch('/AllProductsData.json')
      },
      // { path: "/statistics",
      //   element: <Statistics />,
      // },
      { path: "/details/:product_id/",
        element: <ProductDetails />,
        loader: () => fetch('/AllProductsData.json')
      },
    ],
  },
  { path: "*",
    element: <Error />,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
