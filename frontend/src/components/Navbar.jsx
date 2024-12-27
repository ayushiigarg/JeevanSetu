import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-20 bg-white bg-opacity-90 shadow-md py-4">
      <div className="flex items-center justify-between h-[60px] px-[100px]">
        <img
          src="/logo.jpg"
          alt="Logo"
          height={100}
          width={150}
          className="cursor-pointer"
        />
        <div className="flex items-center justify-evenly cursor-pointer">
          <Link
            to="hero"
            smooth={true}
            duration={1000}
            className="mr-6 text-[18px] font-medium text-gray-800 hover:text-red-600"
          >
            Home
          </Link>
          <Link
            to="featured"
            smooth={true}
            duration={1000}
            className="mr-6 text-[18px] font-medium text-gray-800 hover:text-red-600"
          >
            About Us
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={1000}
            className="mr-6 text-[18px] font-medium text-gray-800 hover:text-red-600"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
