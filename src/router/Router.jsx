import {
  createBrowserRouter,
  Router,
  RouterProvider,
} from "react-router-dom";
import App from "../App";


import Main from "../components/Main";

import PronosticoContainer from "../components/PronosticoContainer";

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
        path: "/pronostico/:city",
        element: <PronosticoContainer/>,
        
      }
    ]
  },

 
]);

export default router