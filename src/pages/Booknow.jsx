import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Booknow() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col sm:flex-row justify-center items-center space-x-0 sm:space-x-4 min-h-screen pt-32">
        {" "}
        {/* Flex container centered vertically and horizontally */}
        {/* BnB Book Now Card */}
        <div className="max-w-xs sm:max-w-sm w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-6 sm:mb-0 sm:mr-4 transform transition-transform duration-300 hover:scale-105">
          <a href="#">
            <img
              className="rounded-t-lg w-full h-48 object-cover"
              src="https://media.istockphoto.com/id/1398814566/photo/interior-of-small-apartment-living-room-for-home-office.jpg?s=612x612&w=0&k=20&c=8clwg8hTpvoEwL7253aKdYAUuAp1-usFOacNR5qX-Rg="
              alt="BNB Stay"
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Book Now for BNB Stay
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Enjoy a cozy and personalized stay at our charming Bed and
              Breakfast.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Book Now
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
        {/* Getaway Book Now Card */}
        <div className="max-w-xs sm:max-w-sm w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-6 sm:mb-0 sm:ml-4 transform transition-transform duration-300 hover:scale-105">
          <a href="#">
            <img
              className="rounded-t-lg w-full h-48 object-cover"
              src="https://i0.wp.com/www.travelwithapen.com/wp-content/uploads/2021/07/Amboseli-Campfire-Place-scaled.jpg?ssl=1"
              alt="Getaway"
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Book Now for Your Getaway
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Escape to a beautiful destination with our all-inclusive getaway
              packages.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Book Now
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
