import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Aboutpage() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-left space-y-12 p-8">
        {/* Vision Section */}
        <div className="flex items-center space-x-6 w-full">
          <div className="w-2/5 flex justify-center">
            <img
              className="w-full h-96 rounded-full shadow-lg"
              src="https://st3.depositphotos.com/4169661/15362/i/450/depositphotos_153623944-stock-photo-our-vision-sign-on-white.jpg"
              alt="PIYE Vision"
            />
          </div>
          <div className="w-3/5 text-gray-700 dark:text-gray-300 text-left">
            <h5 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-5">
              Our Vision
            </h5>
            <p className="text-lg leading-relaxed">
              At PIYE, our vision is to create an exceptional blend of real estate and hospitality experiences. We strive to offer the perfect getaway where our customers can relax, rejuvenate, and feel at home. We are dedicated to expanding our brand while maintaining a commitment to excellence. With every property, we aim to provide comfort, style, and innovation, ensuring that your stay or investment with us exceeds expectations. PIYE is where dreams meet reality, redefining what it means to feel truly welcome.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="flex items-center space-x-6 w-full mt-12">
          <div className="w-2/5 flex justify-center">
            <img
              className="w-full h-96 rounded-full shadow-lg"
              src="https://t4.ftcdn.net/jpg/09/71/06/15/360_F_971061505_ORVuM3jYYT1KE371hx1Tg8EZzGluc12F.jpg"
              alt="PIYE Mission"
            />
          </div>
          <div className="w-3/5 text-gray-700 dark:text-gray-300 text-left">
            <h5 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-5">
              Our Mission
            </h5>
            <p className="text-lg leading-relaxed">
              At PIYE, our mission is to bring our vision to life by delivering unparalleled real estate and hospitality solutions. We are committed to creating unique experiences where our customers can escape, recharge, and feel at ease. By fostering innovation, prioritizing customer satisfaction, and ensuring every detail is perfect, we aim to redefine excellence. At PIYE, we are driven to build connections, craft memorable spaces, and empower our customers to live their best lives in the environments we create.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
