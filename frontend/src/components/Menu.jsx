import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBox,
  FaCalendarAlt,
  FaChartBar,
  FaClipboard,
  FaCog,
  FaElementor,
  FaHdd,
  FaHome,
  FaUser,
  FaUsers,
} from "react-icons/fa";

const Menu = () => {
  const [activeLink, setActiveLink] = useState("/admin");
  const handleActiveLink = (link) => {
    setActiveLink(link);
  };
  return (
    <div className="h-screen bg-gray-800 text-gray-200 w-[350px] shadow-lg">
      <ul className="flex flex-col items-start justify-start pl-[20px] overflow-y-auto h-full">
        {/* Home */}
        <Link to="/admin" onClick={() => handleActiveLink("/admin")}>
          <li
            className={`flex items-center text-[18px] font-medium cursor-pointer mt-[20px] py-[12px] px-[15px] rounded-md hover:bg-gray-700 transition-all duration-200
          ${activeLink === "/admin" ? "text-white" : ""}`}
          >
            <FaHome className="inline-block mr-[15px] text-red-500 text-[22px]" />
            Home
          </li>
        </Link>

        {/* Profile */}
        <Link to="/profile" onClick={() => handleActiveLink("/profile")}>
          <li className="flex items-center text-[18px] font-medium cursor-pointer mt-[10px] py-[12px] px-[15px] rounded-md hover:bg-gray-700 transition-all duration-200">
            <FaUser className="inline-block mr-[15px] text-red-500 text-[22px]" />
            Profile
          </li>
        </Link>

        <hr className="w-[90%] mt-[30px] mb-[30px] border-[1px] border-gray-600" />

        {/* Donors */}
        <Link
          to="/admin/donors"
          onClick={() => handleActiveLink("/admin/donors")}
        >
          <li className="flex items-center text-[18px] font-medium cursor-pointer mt-[20px] py-[12px] px-[15px] rounded-md hover:bg-gray-700 transition-all duration-200">
            <FaBox className="inline-block mr-[15px] text-red-500 text-[22px]" />
            Donors
          </li>
        </Link>

        {/* Prospects */}
        <Link
          to="/admin/prospects"
          onClick={() => handleActiveLink("/admin/prospects")}
        >
          <li className="flex items-center text-[18px] font-medium cursor-pointer mt-[10px] py-[12px] px-[15px] rounded-md hover:bg-gray-700 transition-all duration-200">
            <FaUsers className="inline-block mr-[15px] text-red-500 text-[22px]" />
            Prospects
          </li>
        </Link>

        {/* Orders */}
        <Link to="/orders" onClick={() => handleActiveLink("/orders")}>
          <li className="flex items-center text-[18px] font-medium cursor-pointer mt-[10px] py-[12px] px-[15px] rounded-md hover:bg-gray-700 transition-all duration-200">
            <FaHome className="inline-block mr-[15px] text-red-500 text-[22px]" />
            Orders
          </li>
        </Link>

        <hr className="w-[90%] mt-[30px] mb-[30px] border-[1px] border-gray-600" />

        {/* Elements */}
        <Link to="/elements" onClick={() => handleActiveLink("/elements")}>
          <li className="flex items-center text-[18px] font-medium cursor-pointer mt-[20px] py-[12px] px-[15px] rounded-md hover:bg-gray-700 transition-all duration-200">
            <FaElementor className="inline-block mr-[15px] text-red-500 text-[22px]" />
            Elements
          </li>
        </Link>

        {/* Settings */}
        <Link to="/settings" onClick={() => handleActiveLink("/settings")}>
          <li className="flex items-center text-[18px] font-medium cursor-pointer mt-[10px] py-[12px] px-[15px] rounded-md hover:bg-gray-700 transition-all duration-200">
            <FaCog className="inline-block mr-[15px] text-red-500 text-[22px]" />
            Settings
          </li>
        </Link>

        {/* Backups */}
        <Link to="/backups" onClick={() => handleActiveLink("/backups")}>
          <li className="flex items-center text-[18px] font-medium cursor-pointer mt-[10px] py-[12px] px-[15px] rounded-md hover:bg-gray-700 transition-all duration-200">
            <FaHdd className="inline-block mr-[15px] text-red-500 text-[22px]" />
            Backups
          </li>
        </Link>

        <hr className="w-[90%] mt-[30px] mb-[30px] border-[1px] border-gray-600" />

        {/* Charts */}
        <Link to="/charts" onClick={() => handleActiveLink("/charts")}>
          <li className="flex items-center text-[18px] font-medium cursor-pointer mt-[20px] py-[12px] px-[15px] rounded-md hover:bg-gray-700 transition-all duration-200">
            <FaChartBar className="inline-block mr-[15px] text-red-500 text-[22px]" />
            Charts
          </li>
        </Link>

        {/* All logs */}
        <Link to="/logs" onClick={() => handleActiveLink("/logs")}>
          <li className="flex items-center text-[18px] font-medium cursor-pointer mt-[10px] py-[12px] px-[15px] rounded-md hover:bg-gray-700 transition-all duration-200">
            <FaClipboard className="inline-block mr-[15px] text-red-500 text-[22px]" />
            All logs
          </li>
        </Link>

        {/* Calendar */}
        <Link to="/calendar" onClick={() => handleActiveLink("/calendar")}>
          <li className="flex items-center text-[18px] font-medium cursor-pointer mt-[10px] py-[12px] px-[15px] rounded-md hover:bg-gray-700 transition-all duration-200">
            <FaCalendarAlt className="inline-block mr-[15px] text-red-500 text-[22px]" />
            Calendar
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Menu;
