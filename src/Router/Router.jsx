import { createBrowserRouter } from "react-router-dom";
import App from "../LayOut/App";
import Error from "../Error/Error";
import Home from "../Home/Home";
import AllClass from "../Page/AllClass";
import Login from "../Page/Login/Login";
import SingUp from "../Page/SingUp/SingUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../LayOut/Dashboard";
import InstructorOnly from "../Providers/InstructorOnly";
import AddClass from "../Dashboard/Instructors/Shared/AddClass";
import MyCourse from "../Dashboard/Instructors/Shared/MyClass";
import Edit from "../Dashboard/Instructors/components/Edite";
import ManageClasess from "../Dashboard/Admin/Shared/ManageClassess";
import AdminOnly from "../Providers/AdminOnly";
import MyEnrolledCours from "../Dashboard/Student/Shared/MyEnrollCoures";
import MySelectCourse from "../Dashboard/Student/Shared/MySelecttCoures";
import Payment from "../Dashboard/Student/Shared/Payment";
import PaymentHistory from "../Dashboard/Student/Shared/PaymentHistory";
import AboutSection from "../Page/AboutSection";
import InstructorsDetails from "../Page/InstructorsDetails";
import ManageUsers from "../Dashboard/Admin/Shared/ManageUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-class",
        element: <AllClass />,
      },
      {
        path: "/instructors-details",
        element: <InstructorsDetails />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sing-up",
        element: <SingUp />,
      },
      {
        path: "/about",
        element: <AboutSection />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "/dashboard/add-class",
        element: (
          <InstructorOnly>
            <AddClass />
          </InstructorOnly>
        ),
      },
      {
        path: "/dashboard/my-class",
        element: (
          <InstructorOnly>
            <MyCourse />{" "}
          </InstructorOnly>
        ),
      },
      {
        path: "/dashboard/:id/edit",
        element: <Edit />,
      },
      {
        path: "/dashboard/manage-class",
        element: (
          <AdminOnly>
            <ManageClasess />
          </AdminOnly>
        ),
      },
      {
        path: "/dashboard/manage-users",
        element: (
          <AdminOnly>
            <ManageUsers />
          </AdminOnly>
        ),
      },
      {
        path: "/dashboard/my-enroll-class",
        element: <MyEnrolledCours />,
      },
      {
        path: "/dashboard/my-select-class",
        element: <MySelectCourse />,
      },
      {
        path: "/dashboard/payment",
        element: <Payment />,
      },
      {
        path: "/dashboard/payment-history",
        element: <PaymentHistory />,
      },
    ],
  },
]);

export default router;
