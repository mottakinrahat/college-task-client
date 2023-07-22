import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Home from './component/Home/HomeCompo/Home.jsx';
import College from './component/College/College.jsx';
import CollegeDetails from './component/CollegeDetails/CollegeDetails.jsx';
import Admisson from './component/Admisson/Admisson.jsx';
import AddCandidate from './component/AddCandidate/AddCandidate.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'college',
        element:<College></College>
      },
      {
        path:'collegeDetails/:id',
        element:<CollegeDetails></CollegeDetails>,
        loader:({params})=>fetch(`http://localhost:5000/clgInfo/${params.id}`)
      },
      {
        path:'admisson',
        element:<Admisson></Admisson>
      },
      {
        path:'addcandidate/:id',
        element:<AddCandidate></AddCandidate>,
        loader:({params})=>fetch(`http://localhost:5000/candidateInfo/${params.id}`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
