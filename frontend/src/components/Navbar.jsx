import { Router, Link as RouterLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsVisible(prevScrollPos > currentScrollPos);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-20 bg-white bg-opacity-90 shadow-md py-4 transition-transform ${
        isVisible ? "transform-none" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between h-[60px] px-4 md:px-12">
        <img
          src="/logo.jpg"
          alt="Logo"
          height={100}
          width={150}
          className="cursor-pointer"
        />
        <div className="flex items-center justify-evenly cursor-pointer">
          <RouterLink
            to="/home"
            className="mr-6 text-[18px] font-medium text-gray-800 hover:text-red-600"
          >
            Home
          </RouterLink>
          <RouterLink
            to="/about"
            className="mr-6 text-[18px] font-medium text-gray-800 hover:text-red-600"
          >
            About Us
          </RouterLink>
          <RouterLink
            to="/contact"
            className="mr-6 text-[18px] font-medium text-gray-800 hover:text-red-600"
          >
            Contact Us
          </RouterLink>

          <div className="relative group" aria-label="Donate Blood Options">
            <div className="mr-6 text-[18px] font-medium text-gray-800 hover:text-red-600">
              Want to Donate Blood?
            </div>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md p-2">
              <RouterLink
                to="/camp-schedules"
                className="cursor-pointer hover:text-red-400 hover:underline"
              >
                Blood Donation Camps
              </RouterLink>
              <RouterLink
                to="donorLogin"
                className="block px-4 py-2 text-gray-800 hover:bg-red-100 hover:text-red-600"
              >
                Donor Login
              </RouterLink>
            </div>
          </div>

          <div className="relative group" aria-label="Blood Bank Login Options">
            <div className="mr-6 text-[18px] font-medium text-gray-800 hover:text-red-600">
              Blood Bank Login
            </div>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md p-2">
              <RouterLink
                to="/addBloodBank"
                className="cursor-pointer hover:text-red-400 hover:underline"
              >
                Add Blood Bank
              </RouterLink>
              <RouterLink
                to="donorLogin"
                className="block px-4 py-2 text-gray-800 hover:bg-red-100 hover:text-red-600"
              >
                JeevanSetu Login
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
