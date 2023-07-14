import logo from "../assets/logo-11.jpeg";
import { Link } from "react-router-dom";
import {  useAuth } from "../Providers/AuthProviders";
import { MdDarkMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";
import useDark from "../Hooks/useDark";
import { useState } from "react";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isDark, setIsdark] = useState(null)
  useDark(isDark)

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/instructors-details">Instructors</Link>
      </li>
      <li>
        <Link to="/all-class">Classes</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      {user?.photoURL ? (
        <img
          className="w-[35px] h-[35px] rounded-full"
          src={user.photoURL}
          title={user.displayName}
          alt=""
        />
      ) : (
        <></>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img className="w-12 rounded-full" src={logo} alt="" />
          <div className="font-bold">
            yoga<span className="text-lime-500">school</span>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        <button className="px-2">
          {isDark ? (
            <CiDark
              className="cursor-pointer text-2xl"
              onClick={() => setIsdark(false)}
            />
          ) : (
            <MdDarkMode
              className="cursor-pointer text-2xl"
              onClick={() => setIsdark(true)}
            />
          )}
        </button>

        {user ? (
          <>
            <button
              onClick={handleLogOut}
              className="btn bg-lime-500 hover:bg-lime-700  hover:text-white"
            >
              LogOut
            </button>
          </>
        ) : (
          <>
            <Link
              className="btn bg-lime-500 hover:bg-lime-700  hover:text-white"
              to="/login"
            >
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
