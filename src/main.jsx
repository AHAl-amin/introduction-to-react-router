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
import UserDetails from './componants/UserDetails/UserDetails';
import Posts from './componants/Posts/Posts';
import PostsDetails from './componants/PostsDetails/PostsDetails';
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
    },
    {
      path:'/user/:userId',
      element:<UserDetails></UserDetails>
    },
    {
      path:'/posts',
      loader:() => fetch('https://jsonplaceholder.typicode.com/posts'),
      element:<Posts></Posts>
    },
    {
      path:'/post/:postId',
      loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
      element:<PostsDetails></PostsDetails>
    }
   ]
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
