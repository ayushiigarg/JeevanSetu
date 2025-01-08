import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white px-[5%] md:px-[10%] py-12 mt-12 w-full">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0 w-full px-[5%] md:px-[10%]">
        {/* Logo & Slogan */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start space-y-4">
          {/* Logo */}
          <img
            src="/bg.png" // Logo path
            alt="Logo"
            className="h-20 w-20 object-contain mb-4"
          />
          {/* Red line below the logo */}
          <div className="w-[7rem] h-1 bg-red-500 mb-4"></div>
          {/* JEEVANSETU in light blue */}
          <span
            className="text-3xl font-extrabold mb-2"
            style={{ color: "#bcf5f9" }}
          >
            JEEVANSETU
          </span>
          {/* Slogan in red color */}
          <span className="text-lg font-medium text-red-500">
            Connecting Lives, Saving Futures
          </span>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left space-y-3">
          <h3 className="text-xl font-semibold mb-4 text-gray-300">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <RouterLink
                to="/home"
                className="cursor-pointer hover:text-yellow-400 hover:underline"
              >
                Home
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/about"
                className="cursor-pointer hover:text-yellow-400 hover:underline"
              >
                About Us
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/contact"
                className="cursor-pointer hover:text-yellow-400 hover:underline"
              >
                Contact
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/login"
                className="cursor-pointer hover:text-yellow-400 hover:underline"
              >
                Admin
              </RouterLink>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-left space-y-3">
          <h3 className="text-xl font-semibold mb-4 text-gray-300">
            Contact Us
          </h3>
          <p className="mb-2">
            Phone:{" "}
            <a href="tel:+919876543210" className="hover:text-yellow-400">
              +91 98765 43210
            </a>
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:support@jeevansetu.com"
              className="hover:text-yellow-400"
            >
              support@jeevansetu.com
            </a>
          </p>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center w-full">
        <p className="text-sm text-gray-400">
          &copy; 2024 JeevanSetu. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
