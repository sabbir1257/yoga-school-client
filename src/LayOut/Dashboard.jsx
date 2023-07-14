import React from "react";
import { Link, Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <Sidebar />
        <Link
           to="/"
           className="md:mt-[700px] btn bg-lime-500 hover:bg-lime-700  hover:text-white"
         >
           Home
         </Link>
      </div>
    </div>
  );
};

export default Dashboard;
