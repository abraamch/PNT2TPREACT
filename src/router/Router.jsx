import {
  createBrowserRouter,
  Router,
  RouterProvider,
} from "react-router-dom";
import App from "../App";

import Main from "../components/Main";
import CityDetails from "../components/CityDetails"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      
      {
        path: "/",
        element: <Main/>,
        
      },
      {
        path: "/clima/:city",
        element: <CityDetails/>,
        
      }
    ]
  },

 
]);

export default router