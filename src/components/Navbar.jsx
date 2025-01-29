import { useState } from "react";

export default function Navbar() {
  const myBnB = "PIYE";
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-green-500 border-b border-gray-200 dark:border-gray-700 backdrop-blur-lg h-32">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-24 h-full">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://t4.ftcdn.net/jpg/08/35/31/59/360_F_835315910_z7Z4ztNbE2pF2vTPa381Yh4bjqY2zlRp.jpg"
            className="h-8"
            alt="BnB"
          />
          <span className="self-center text-2xl font-bold text-white">
            {myBnB}
          </span>
        </a>

        {/* Hamburger Menu for mobile */}
        <button
          onClick={toggleMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Desktop Navigation Menu */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:block md:w-auto md:order-1`}
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:space-x-12 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800">
            <li className="md:mx-4">
              <a
                href="/"
                className="block py-2 px-3 text-white rounded hover:bg-blue-600 md:hover:bg-transparent md:hover:text-blue-800 md:p-0 dark:text-white"
              >
                Home
              </a>
            </li>
            <li className="md:mx-4">
              <a
                href="/about"
                className="block py-2 px-3 text-white rounded hover:bg-blue-600 md:hover:bg-transparent md:hover:text-blue-800 md:p-0 dark:text-white"
              >
                About
              </a>
            </li>
            <li className="md:mx-4">
              <a
                href="/properties"
                className="block py-2 px-3 text-white rounded hover:bg-blue-600 md:hover:bg-transparent md:hover:text-blue-800 md:p-0 dark:text-white"
              >
                Property
              </a>
            </li>
            <li className="md:mx-4">
              <a
                href="/getaway"
                className="block py-2 px-3 text-white rounded hover:bg-blue-600 md:hover:bg-transparent md:hover:text-blue-800 md:p-0 dark:text-white"
              >
                Get Away
              </a>
            </li>
          </ul>
        </div>

        {/* Book Now Button */}
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <a href="/booknow" className="inline-block">
            <button
              type="button"
              className="flex items-center font-medium text-md bg-blue-600 p-3 hover:text-white rounded-lg md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              aria-expanded="false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-5 h-5 mr-2"
              >
                <path d="M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm64 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 400l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z" />
              </svg>
              Book Now
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}
