import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import router from './router/Router.jsx';
ReactDOM.render(
  <React.StrictMode>
   
   <RouterProvider router={router} />
  
     
   
  </React.StrictMode>,
  document.getElementById('root')
);
