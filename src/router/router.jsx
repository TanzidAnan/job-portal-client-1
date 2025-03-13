import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<h1>page not found</h1>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:'/jobs/:id',
          element:<JobDetails></JobDetails>,
          loader:({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
          path:'/signin',
          element:<SignIn></SignIn>
        }
      ]
    },
  ]);

  export default router