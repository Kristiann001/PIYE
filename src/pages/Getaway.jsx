import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

export default function Getaway() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "https://www.apartments.com/blog/sites/default/files/styles/x_large_hq/public/image/2023-06/ParkLine-apartment-in-Miami-FL.jpg?itok=kQmw64UU",
    "https://cdn.sanity.io/images/v48q37k7/production/112627e4ceeb31851a8cfb20cccaa5f6ecb9daee-3600x2400.jpg?auto=format&fit=max&q=50&w=1800",
    "https://cdn.sanity.io/images/v48q37k7/production/c5a3dbb32e4c7807631edbf01b9c32a2250d0072-3876x2579.jpg?auto=format&fit=max&q=50&w=1938",
    "https://cdn.sanity.io/images/v48q37k7/production/4c0eca02e30cb3078857684beffca8d3fe62f21d-3000x2000.jpg?auto=format&fit=max&q=50&w=1500",
    "https://cdn.sanity.io/images/v48q37k7/production/a6f2bf89eb2588c0beb5de1cc34a08212bcefa09-3000x1998.jpg?auto=format&fit=max&q=50&w=1500",
  ];

  // Handle next and previous slide
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(goToNextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <>
      <Navbar />
      <div
        id="default-carousel"
        className="relative w-full"
        data-carousel="slide"
      >
        {/* Carousel wrapper */}
        <div className="relative h-[650px] overflow-hidden rounded-lg md:h-[700px]">
          {/* Dynamic carousel items */}
          {images.map((image, index) => (
            <div
              key={index}
              className={`duration-700 ease-in-out transition-opacity ${
                currentSlide === index
                  ? "opacity-100 block"
                  : "opacity-0 hidden"
              }`}
              data-carousel-item
            >
              <img
                src={image}
                className="absolute block w-full h-full object-cover top-0 left-0 transform scale-[1.1] origin-top"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
          {/* Text Overlay for Jumbotron */}
          <section className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 mt-10">
            <div className="text-center text-white px-4 mx-auto max-w-screen-xl py-24 lg:py-56">
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white">
                Welcome to PIYE Getaway
              </h1>
              <p className="mb-8 text-xl font-normal sm:px-16 lg:px-48 text-white">
                Escape to serenity and comfort. Discover breathtaking views,
                luxurious accommodations, and unforgettable experiences tailored
                just for you.
              </p>
              <div className="flex justify-center">
                <a
                  href="/booknow"
                  className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-green-900"
                >
                  Book Now
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Additional Text Section */}
      <div className="px-6 py-12 text-gray-800 bg-gray-50">
        <h2 className="text-3xl font-extrabold text-center mb-6">
          PIYE Getaway
        </h2>
        <h3 className="text-xl font-semibold text-center mb-4">
          Luxury Accommodation in Meru
        </h3>
        <p className="text-center max-w-3xl mx-auto">
          Just a four-hour drive from Nairobi, PIYE Getaway and Resort is a
          serene escape nestled in one of Kenya’s most breathtaking landscapes.
          The journey itself is an adventure, leading you through scenic views
          and captivating terrain. Our modern chalets, designed with elegance
          and comfort, are surrounded by lush gardens cultivated in fertile
          volcanic soils, creating a peaceful retreat. Each morning invites
          exploration of these vibrant grounds, while evenings showcase magical
          sunsets. The sky transforms into a canvas of brilliant oranges and
          purples, perfectly complementing a relaxing swim in our stunning pool.
          Beyond leisure, PIYE Getaway is an ideal venue for concerts, events,
          and celebrations. With exceptional service, world-class amenities, and
          a picturesque backdrop, every moment here becomes unforgettable.
          Escape the city and immerse yourself in the tranquility of PIYE
          Getaway—where nature, luxury, and cherished memories come together.
        </p>
      </div>
      {/* My Story Section */}
      <div className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-6">
            {/* Image on top in mobile, left in desktop */}
            <div className="flex-shrink-0 w-full md:w-1/2 mb-6 md:mb-0">
              <img
                src="https://media.istockphoto.com/id/1213840216/photo/luxury-travel-romantic-couple-in-beach-hotel.jpg?s=612x612&w=0&k=20&c=1m4GfnUTJV4zZEDr_p1OYVQhmwM5F30MrbUhzYVacko="
                alt="Our Story"
                className="rounded-lg shadow-lg object-cover w-full h-full"
              />
            </div>

            {/* Description on the right (for desktop), full-width for mobile */}
            <div className="w-full md:w-1/2">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
                  Our Story
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  PIYE Getaway was founded in February 2025 with a vision to
                  redefine rural tourism in Kenya. Nestled in the tranquil
                  landscapes of Meru, our mission is to provide tourists with a
                  unique opportunity to experience the charm of Kenya’s rural
                  areas while enjoying the comforts of modern amenities.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  More than just a getaway, PIYE is a destination where
                  traditional Kenyan hospitality meets contemporary luxury. We
                  aim to make rural areas not just a place to visit but a hub
                  for memorable events, from weddings to concerts, offering
                  stunning backdrops and exceptional service.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  At PIYE Getaway, we believe in bringing modernity to the heart
                  of rural Kenya. Our vision is to create a bridge between
                  tradition and innovation, ensuring every visitor enjoys a
                  seamless blend of culture, comfort, and adventure. Discover
                  the beauty of rural Kenya reimagined—your perfect escape
                  awaits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features around */}
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          What's Nearby
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
          {/* Mount Kenya Card */}
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 transform transition duration-300 mx-auto">
            <a href="#">
              <img
                className="rounded-t-lg object-cover w-full h-48"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Mount_Kenya.jpg/1200px-Mount_Kenya.jpg"
                alt="Mount Kenya"
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Mount Kenya
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Africa's second-highest peak offers climbing, hiking trails, and
                breathtaking views. Its alpine flora and fauna make it a
                must-visit for nature lovers and adventurers alike.
              </p>
            </div>
          </div>

          {/* Meru National Park Card */}
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 transform transition duration-300 mx-auto">
            <a href="#">
              <img
                className="rounded-t-lg object-cover w-full h-48"
                src="https://encloseafricasafaris.com/wp-content/uploads/2020/09/wildlife-meru-national-park-kenya.jpg"
                alt="Meru National Park"
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Meru National Park
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Experience Adamson’s Falls, the Tana and Ura rivers, and diverse
                wildlife in this serene national park. A perfect blend of
                natural beauty and ecosystem preservation.
              </p>
            </div>
          </div>

          {/* Rivers and Waterfalls Card */}
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 transform transition duration-300 mx-auto">
            <a href="#">
              <img
                className="rounded-t-lg object-cover w-full h-48"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVNFHogKSZ0H6S9gyb6iDGrpXrWm1aorsvqw&s"
                alt="Kathita Waterfall"
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Rivers and Waterfalls
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                The serene Kathita Waterfall offers perfect spots for picnics,
                photography, and relaxation. A hidden gem for those seeking
                tranquility in nature.
              </p>
            </div>
          </div>

          {/* Ngare Ndare Forest Reserve Card */}
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 transform transition duration-300 mx-auto">
            <a href="#">
              <img
                className="rounded-t-lg object-cover w-full h-48"
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/2c/92/43/waterfall.jpg?w=900&h=500&s=1"
                alt="Ngare Ndare Forest"
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Ngare Ndare Forest Reserve
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Enjoy canopy walks and eco-tourism activities in this lush
                forest reserve. A unique way to experience the beauty of nature
                from above.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden mt-32">
        {/* Row 1 - Right to Left */}
        <div className="flex space-x-4 animate-marquee">
          <img
            className="w-96 h-96 object-cover rounded-lg"
            src="https://images.ctfassets.net/pg6xj64qk0kh/2r4QaBLvhQFH1mPGljSdR9/39b737d93854060282f6b4a9b9893202/camden-paces-apartments-buckhead-ga-terraces-living-room-with-den_1.jpg"
            alt="Image 1"
          />
          <img
            className="w-96 h-96 object-cover rounded-lg"
            src="https://cdn.sanity.io/images/v48q37k7/production/d09208183125ab47493d5de2f8710b6faa27d7cc-3000x2000.jpg"
            alt="Image 2"
          />
          <img
            className="w-96 h-96 object-cover rounded-lg"
            src="https://cdn.sanity.io/images/v48q37k7/production/2d1fec7b0417444b5ad97d3f4832c6fca6ad3050-3467x2307.jpg?auto=format&fit=max&q=50&w=1734"
            alt="Image 3"
          />
          <img
            className="w-96 h-96 object-cover rounded-lg"
            src="https://cdn.sanity.io/images/v48q37k7/production/72ce23f73745c0c6d019da17ecb6b2ca1fd574e9-3467x2307.jpg?auto=format&fit=max&q=50&w=1734"
            alt="Image 4"
          />
          <img
            className="w-96 h-96 object-cover rounded-lg"
            src="https://cdn.sanity.io/images/v48q37k7/production/50e2fa71b7b6b533354cb6b7595297f4db0173b9-4000x2666.jpg?auto=format&fit=max&q=50&w=2000"
            alt="Image 5"
          />
          <img
            className="w-96 h-96 object-cover rounded-lg"
            src="https://cdn.sanity.io/images/v48q37k7/production/e63e83ba33dddc5f8d20c4efd75c66816c11f1cd-4246x2825.jpg?auto=format&fit=max&q=50&w=2123"
            alt="Image 6"
          />
        </div>

        {/* Row 2 - Right to Left (same images as Row 1) */}
        <div className="flex space-x-4 animate-marquee-rtl mt-4">
          <img
            className="w-96 h-96 object-cover rounded-lg"
            src="https://images.ctfassets.net/pg6xj64qk0kh/2r4QaBLvhQFH1mPGljSdR9/39b737d93854060282f6b4a9b9893202/camden-paces-apartments-buckhead-ga-terraces-living-room-with-den_1.jpg"
            alt="Image 1"
          />
          <img
            className="w-96 h-96 object-cover rounded-lg"
            src="https://cdn.sanity.io/images/v48q37k7/production/d09208183125ab47493d5de2f8710b6faa27d7cc-3000x2000.jpg"
            alt="Image 2"
          />
          <img
            className="w-96 h-96 object-cover rounded-lg"
            src="https://cdn.sanity.io/images/v48q37k7/production/2d1fec7b0417444b5ad97d3f4832c6fca6ad3050-3467x2307.jpg?auto=format&fit=max&q=50&w=1734"
            alt="Image 3"
          />
          <img
            className="w-96 h-96 object-cover rounded-lg"
            src="https://cdn.sanity.io/images/v48q37k7/production/72ce23f73745c0c6d019da17ecb6b2ca1fd574e9-3467x2307.jpg?auto=format&fit=max&q=50&w=1734"
            alt="Image 4"
          />
          <img
            className="w-96 h-96 object-cover rounded-lg"
            src="https://cdn.sanity.io/images/v48q37k7/production/50e2fa71b7b6b533354cb6b7595297f4db0173b9-4000x2666.jpg?auto=format&fit=max&q=50&w=2000"
            alt="Image 5"
          />
          <img
            className="w-96 h-96 object-cover rounded-lg"
            src="https://cdn.sanity.io/images/v48q37k7/production/e63e83ba33dddc5f8d20c4efd75c66816c11f1cd-4246x2825.jpg?auto=format&fit=max&q=50&w=2123"
            alt="Image 6"
          />
        </div>
      </div>
      <div>
        {/* WhatsApp icon */}
        <a
          href="https://wa.me/yourwhatsappnumber" // Replace with your WhatsApp number or link
          target="_blank"
          rel="noopener noreferrer"
          className="fixed right-5 bottom-5 z-50 group"
        >
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-whatsapp w-14 h-14 text-green-400 group-hover:text-green-600 transition-colors duration-300"
              viewBox="0 0 16 16"
            >
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
            </svg>
            <span className="ml-2 text-white opacity-0 group-hover:opacity-100 group-hover:text-black font-bold text-lg transition-all duration-300">
              Chat Now
            </span>
          </div>
        </a>
      </div>
      <Footer />
    </>
  );
}
