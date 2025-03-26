import { useState } from "react";

export default function Navbar() {
  const myBnB = "piye";
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-white backdrop-blur-lg h-20 md:h-24 fixed w-full z-50 shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://t4.ftcdn.net/jpg/08/35/31/59/360_F_835315910_z7Z4ztNbE2pF2vTPa381Yh4bjqY2zlRp.jpg"
            className="h-10 w-10 rounded-full"
            alt="BnB"
          />
          <span className="self-center text-2xl font-semibold text-white">
            {myBnB}
          </span>
        </a>

        {/* Hamburger Menu */}
        <button
          onClick={toggleMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-black rounded-lg md:hidden hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Navigation Links */}
        <div className={`absolute top-20 left-0 w-full bg-white dark:bg-white shadow-lg md:relative md:top-0 md:w-auto md:shadow-none md:flex ${isOpen ? "block" : "hidden"}`}>
          <ul className="font-medium flex flex-col md:flex-row md:space-x-8 p-4 md:p-0">
            <li><a href="/" className="block py-2 px-3 text-black hover:text-green-600 dark:hover:text-green-600 rounded md:hover:bg-transparent">Home</a></li>
            <li><a href="/gallery" className="block py-2 px-3 text-black hover:text-green-600 dark:hover:text-green-600 rounded md:hover:bg-transparent">Gallery</a></li>
            <li><a href="/properties" className="block py-2 px-3 text-black hover:text-green-600 dark:hover:text-green-600 rounded md:hover:bg-transparent">Properties</a></li>
            <li><a href="/getaway" className="block py-2 px-3 text-black hover:text-green-600 dark:hover:text-green-600 rounded md:hover:bg-transparent">Getaway</a></li>
          </ul>
        </div>

        {/* Book Now Button */}
        <div className="hidden md:flex items-center">
          <a href="/booknow">
            <button className="bg-green-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-green-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800">
              Book Now
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}
