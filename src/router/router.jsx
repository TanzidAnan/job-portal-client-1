import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";
import PravateRoute from "./PravateRoute";
import JobApply from "../pages/JobApply/JobApply";
import MyApplication from "../pages/MyApplication/MyApplication";
import AddJobs from "../pages/AddJobs/AddJobs";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";
import ViewApplication from "../pages/ViewApplication/ViewApplication";

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
          element:<PravateRoute><JobDetails></JobDetails></PravateRoute>,
          loader:({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
        },
        {
          path:'/jobApply/:id',
          element:<PravateRoute><JobApply></JobApply></PravateRoute>,
        },
        {
          path:'/myApplication',
          element:<PravateRoute><MyApplication></MyApplication></PravateRoute>
        },
        {
          path:'/viewApplication/:job_id',
          element:<PravateRoute><ViewApplication></ViewApplication></PravateRoute>
        },
        {
          path:'/myPostedJobs',
          element:<PravateRoute><MyPostedJobs></MyPostedJobs></PravateRoute>
        },
        {
          path:'/addJob',
          element:<PravateRoute><AddJobs></AddJobs></PravateRoute>
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