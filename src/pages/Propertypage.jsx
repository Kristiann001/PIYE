import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Propertypage() {
  const bnbImages = [
    "https://decoholic.org/wp-content/uploads/2022/05/small-Scandinavian-apartment.jpg",
    "https://preview.redd.it/uq4cvbnmqbq81.jpg?width=640&crop=smart&auto=webp&s=17a00db801d7bcbcd2b23e65cf1134537ff607af",
    "https://miro.medium.com/v2/resize:fit:1128/1*an0VSqd8UflHhxxDDwQE9w.jpeg",
  ];

  const getawayImages = [
    "https://www.travelandleisure.com/thmb/-BKpLbCHiq25xq3zQ95h03P5EKQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/40-LIttle-Palm-Island-Florida-HONEYMOON0616-aac88105d78645be8120fba04df478dd.jpg",
    "https://i.dailymail.co.uk/1s/2024/11/12/15/91931229-0-image-a-3_1731425324308.jpg",
    "https://images.myguide-cdn.com/md/zimbabwe/companies/chengeta-and-pamuzinda-safari-lodges/large/chengeta-and-pamuzinda-safari-lodges-700217.jpg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <Navbar />
      {/* Page Header */}
      <div className="text-center p-5">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Discover Your Perfect Stay
        </h1>
        <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">
          Find charming stays and unique experiences for your next escape.
        </p>
      </div>

      {/* Cards Section */}
      <div className="space-y-14 p-5">
        {/* Card 1 - Apartment */}
        <div className="flex flex-col md:flex-row-reverse items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="w-full md:w-1/2 lg:w-2/5">
            <Slider {...settings}>
              {bnbImages.map((image, index) => (
                <div key={index}>
                  <img
                    className="rounded-t-lg md:rounded-none md:rounded-r-lg w-full h-80 object-cover"
                    src={image}
                    alt={`BNB Slide ${index + 1}`}
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="p-7 w-full md:w-1/2 lg:w-3/5">
            <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              PIYE BNB/APARTMENT
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Nestled in the heart of Nairobi, this cozy BnB and modern
              apartment offer a tranquil escape from the city hustle. With
              amenities like high-speed Wi-Fi, fully equipped kitchens, and
              stunning city views, it’s perfect for both leisure and business
              travelers seeking a comfortable and memorable stay.
            </p>
            <div className="space-x-4">
              <a
                href="/booknow"
                className="inline-flex items-center px-4 py-3 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Inquire Now
                <svg
                  className="rtl:rotate-180 w-4 h-4 ms-2"
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
              <a
                href="/bnbprices"
                className="inline-flex items-center px-4 py-3 text-sm font-medium text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Check Prices
              </a>
            </div>
          </div>
        </div>

        {/* Card 2 - Getaway */}
        <div className="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="w-full md:w-1/2 lg:w-2/5">
            <Slider {...settings}>
              {getawayImages.map((image, index) => (
                <div key={index}>
                  <img
                    className="rounded-t-lg md:rounded-none md:rounded-l-lg w-full h-80 object-cover"
                    src={image}
                    alt={`Getaway Slide ${index + 1}`}
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="p-7 w-full md:w-1/2 lg:w-3/5">
            <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              PIYE GETAWAY
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Located in the serene countryside of Meru, this getaway combines
              modern comfort with breathtaking natural beauty. Perfect for a
              family retreat or romantic escape, it offers activities like
              hiking, bird watching, and outdoor dining. Create lasting
              memories in this idyllic destination. The spacious grounds allow
              for outdoor gatherings and adventures, while the cozy interiors
              provide a relaxing space after a day of exploring.
            </p>
            <div className="space-x-4">
              <a
                href="/booknow"
                className="inline-flex items-center px-4 py-3 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Inquire Now
                <svg
                  className="rtl:rotate-180 w-4 h-4 ms-2"
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
              <a
                href="/getawayprices"
                className="inline-flex items-center px-4 py-3 text-sm font-medium text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Check Prices
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
