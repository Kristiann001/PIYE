export default function Navbar() {

    const myBnB = "MyBnB"
    return (
        <nav className="bg-green-500 border-b border-gray-200 dark:border-gray-700 backdrop-blur-lg h-20">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 h-full">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://t4.ftcdn.net/jpg/08/35/31/59/360_F_835315910_z7Z4ztNbE2pF2vTPa381Yh4bjqY2zlRp.jpg" className="h-8" alt="BnB" />
                    <span className="self-center text-2xl font-bold text-white">{myBnB}</span>
                </a>
                <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false">
                        <img className="w-8 h-8 rounded-full" src="https://cdn3.pixelcut.app/1/3/profile_picture_1728ecf2bd.jpg" alt="user photo" />
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-12 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800"> {/* Increased spacing here */}
                        <li className="md:mx-4"> {/* Add margin to the list items */}
                            <a href="/" className="block py-2 px-3 text-white rounded hover:bg-gray-400 md:hover:bg-transparent md:hover:text-gray-600 md:p-0 dark:text-white">Home</a>
                        </li>
                        <li className="md:mx-4">
                            <a href="/about" className="block py-2 px-3 text-white rounded hover:bg-gray-400 md:hover:bg-transparent md:hover:text-gray-600 md:p-0 dark:text-white">About</a>
                        </li>
                        <li className="md:mx-4">
                            <a href="/properties" className="block py-2 px-3 text-white rounded hover:bg-gray-400 md:hover:bg-transparent md:hover:text-gray-600 md:p-0 dark:text-white">Property</a>
                        </li>
                        <li className="md:mx-4">
                            <a href="/getaway" className="block py-2 px-3 text-white rounded hover:bg-gray-400 md:hover:bg-transparent md:hover:text-gray-600 md:p-0 dark:text-white">Get Away</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
