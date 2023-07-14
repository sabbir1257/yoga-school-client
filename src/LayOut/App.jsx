import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

function App() {
  const location = useLocation();
  // const noHeaderFooter =
  //   location.pathname.includes("login") ||
  //   location.pathname.includes("sing-up");
  return (
    <>
      {/* {noHeaderFooter || <Navbar />}
      <Outlet />
      {noHeaderFooter || <Footer />} */}
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
