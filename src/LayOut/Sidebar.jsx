import { Link, NavLink } from "react-router-dom";
// import { BsFillMoonStarsFill} from "react-icons/bs";
import { useState } from "react";
import {
  MdOutlineDarkMode,
  MdOutlineClass,
  MdManageAccounts,
  MdOutlineManageHistory,
  MdPayments,
  MdAttachMoney,
} from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi";
import { BiBookAdd } from "react-icons/bi";
import { GrCheckboxSelected } from "react-icons/gr";
import logo from "../assets/logo-11.jpeg";
import useAuthorization from "../Hooks/useAuthorization";
import useDark from "../Hooks/useDark";

const Sidebar = () => {
  const { role } = useAuthorization();
  const [isDark, setIsdark] = useState(null);
  useDark(isDark);

  return (
    <aside className="fixed top-0 bottom-0 h-screen p-10 shadow-2xl w-dashboard-md">
      <div className="flex items-center justify-center gap-3 mb-10">
        <img className="w-10 rounded-full" src={logo} alt="" />
        <Link to="/">
          <h1 className="text-2xl font-bol ">
            yoga<span className="text-lime-500">school</span>{" "}
          </h1>
        </Link>
      </div>
      <div className="flex items-center justify-center gap-3 ">
        <Link
          to={`/dashboard/${
            role === "admin"
              ? "manage-class"
              : role === "instructor"
              ? "add-class"
              : "my-select-class"
          }`}
          className="flex items-center gap-1 -ml-10"
        >
          <h3 className="text-2xl font-bold uppercase">{role}</h3>
        </Link>
        <button className="block -mr-10">
          {isDark ? (
            <HiOutlineLightBulb
              className="cursor-pointer"
              onClick={() => setIsdark(false)}
            />
          ) : (
            <MdOutlineDarkMode
              className="cursor-pointer"
              onClick={() => setIsdark(true)}
            />
          )}
        </button>
      </div>
      <ul className="mt-[60px] ">
        {role === "admin" ? (
          <>
            <li className="mt-4 font-bold">
              <NavLink
                to="/dashboard/manage-class"
                className={({ isActive }) =>
                  isActive
                    ? "d-active flex gap-2 text-[16px] items-center  "
                    : " flex gap-2 text-[16px] items-center text-black uppercase"
                }
              >
                {" "}
                <MdOutlineManageHistory /> <span>Manage Classes</span>
              </NavLink>
            </li>
            <li className="mt-4 font-bold">
              <NavLink
                to="/dashboard/manage-users"
                className={({ isActive }) =>
                  isActive
                    ? "d-active flex gap-2 text-[16px] items-center "
                    : " flex gap-2 text-[16px] items-center text-black uppercase"
                }
              >
                {" "}
                <MdManageAccounts /> <span>Manage Users</span>
              </NavLink>
            </li>
          </>
        ) : role === "instructor" ? (
          <>
            <li className="mt-4 font-bold">
              <NavLink
                to="/dashboard/add-class"
                className={({ isActive }) =>
                  isActive
                    ? "d-active flex gap-2 text-[16px] items-center  "
                    : "text-black uppercase flex gap-2 text-[16px] items-center"
                }
              >
                {" "}
                <BiBookAdd /> <span>Add Class</span>
              </NavLink>
            </li>
            <li className="mt-4 font-bold">
              <NavLink
                to="/dashboard/my-class"
                className={({ isActive }) =>
                  isActive
                    ? "d-active flex gap-2 text-[16px] items-center  "
                    : "text-black uppercase flex gap-2 text-[16px] items-center"
                }
              >
                {" "}
                <MdOutlineClass /> <span>My Classes</span>
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li className="mt-4 font-bold">
              <NavLink
                to="/dashboard/payment-history"
                className={({ isActive }) =>
                  isActive
                    ? "d-active flex gap-2 text-[16px] items-center "
                    : "text-black uppercase flex gap-2 text-[16px] items-center"
                }
              >
                {" "}
                <MdPayments /> <span>Payment History</span>
              </NavLink>
            </li>
            <li className="mt-4 font-bold">
              <NavLink
                to="/dashboard/my-select-class"
                className={({ isActive }) =>
                  isActive
                    ? "d-active flex gap-2 text-[16px] items-center  "
                    : "text-black uppercase flex gap-2 text-[16px] items-center"
                }
              >
                {" "}
                <GrCheckboxSelected />
                <span>Selected Classes</span>
              </NavLink>
            </li>
            <li className="mt-4 font-bold">
              <NavLink
                to="/dashboard/my-enroll-class"
                className={({ isActive }) =>
                  isActive
                    ? "d-active flex gap-2 text-[16px] items-center "
                    : "text-black uppercase flex gap-2 text-[16px] items-center"
                }
              >
                {" "}
                <MdAttachMoney className="w-5 h-5" />{" "}
                <span>Enrolled Classes</span>
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </aside>
  );
};

export default Sidebar;
