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
import Login from './component/Login/Login.jsx';
import Register from './component/Register/Register.jsx';
import AuthProviders from './component/authProvider/AuthProviders.jsx';
import PrivateRouter from './Router/PrivateRouter.jsx';
import MyCollege from './component/MyCollege/MyCollege.jsx';
import ApplyDetails from './component/ApplyDetails/ApplyDetails.jsx';
import UserProfile from './component/UserProfile/UserProfile.jsx';



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
        element:<PrivateRouter><CollegeDetails></CollegeDetails></PrivateRouter>,
        loader:({params})=>fetch(`http://localhost:5000/clgInfo/${params.id}`)
      },
      {
        path:'admisson',
        element:<Admisson></Admisson>
      },
      {
        path:'addcandidate/:id',
        element:<AddCandidate></AddCandidate>,
        loader:({params})=>fetch(`http://localhost:5000/clgInfo/${params.id}`)
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'register',
        element:<Register></Register>
      },
      {
        path:'mycollege',
        element:<MyCollege></MyCollege>
      },
      {
        path:'mycollege/:id',
        element:<ApplyDetails></ApplyDetails>,
        loader:({params})=>fetch(`http://localhost:5000/candidateData/${params.id}`)
      },
      {
        path:'userprofile',
        element:<UserProfile></UserProfile>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
    <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
