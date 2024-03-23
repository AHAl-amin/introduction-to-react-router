import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './componants/Home/Home.jsx';
import About from './componants/About/About.jsx';
import Contact from './componants/Contact/Contact.jsx';
import User from './componants/User/User';
const router = createBrowserRouter([
  {
    path: "/",
  element:<Home></Home>,
   children:[
    {
      path:'/about',
      element:<About></About>
    },
    {
      path:'/user',
      loader:() =>fetch('https://jsonplaceholder.typicode.com/users'),
      element:<User></User>
    },
    {
      path:'/contact',
      element:<Contact></Contact>
    }
   ]
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
