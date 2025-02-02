import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";

export default function Homepage() {
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
                Welcome to PIYE Living
              </h1>
              <p className="mb-8 text-xl font-normal sm:px-16 lg:px-48 text-white">
                Experience comfort and luxury like never before. Book your stay
                with us today and enjoy a home away from home.
              </p>
              <div className="flex justify-center">
                <a
                  href="/booknow"
                  className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                >
                  Book Now
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* About Us Section */}
      <div className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Card Container */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden w-full">
            <div className="flex flex-col lg:flex-row items-center space-x-6">
              {/* Image on top for mobile, left on large screens */}
              <div className="flex-shrink-0 w-full lg:w-1/2">
                <img
                  src="https://media.istockphoto.com/id/1365649825/photo/stylish-micro-apartment-for-one.jpg?s=612x612&w=0&k=20&c=B84a7PkFLhZGTG0GPDOxBs2yDjBvy2NHaqZw5_Vp878="
                  alt="About Us"
                  className="rounded-lg shadow-lg object-cover w-full h-full"
                />
              </div>

              {/* Description on the right for large screens, below image for mobile */}
              <div className="w-full lg:w-1/2 p-6">
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
                  About Us
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  We are a hospitality business focused on providing exceptional
                  stays in beautiful and unique properties. Whether you are
                  looking for a cozy BnB experience or an adventurous getaway,
                  we offer personalized services to make your stay
                  unforgettable.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Our goal is to offer you a home away from home with the
                  comforts and amenities you need to relax, recharge, and
                  explore the surroundings. Explore our properties and book your
                  stay with us today!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-10 text-center">
            Features We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 shadow-lg text-center">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAilBMVEX8/Pz///8AAAAeHh6ioqISEhIVFRUFBQUbGxsZGRna2toJCQns7OwYGBjExMS4uLipqanS0tL09PRvb2+FhYU6Ojrq6urk5OR6enozMzNPT08pKSnLy8tpaWlFRUWMjIxeXl4rKytOTk5hYWGWlpa0tLQ8PDyAgICTk5OKioo0NDScnJxtbW1HR0fT05rGAAAOb0lEQVR4nO1d62KqvBJlkiYEI1axBUVttRd7sX3/1ztJQLkFASHab5+sH9tdCIRlVmYmF0bHsbCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLD4GwDzNZiv4lztwTQ0+wAwngY3pAjBHuHI5ANAuEKPt6MIwSPFzDVIEUKfYX85vhFFSdDDPlsZowjRjvnY925EEYInSh+DV5eZEiqEO49vgydCbyJU2YLkSVi6jWtIqFKifCusdUxuIVRJkD7JrxZeuZFWFBL1eCz/oyheuxWVRNNawYhQhUR9RVBSVEIduIKG6lOJpn8JoSJFEVIMUEPIhESPFTgxp1cVakIw040UqrSosL5XWPd+FtGCjMdZBVcWqpLodz5gS4U6QSlmPZ8FxkKi28Kha1rUVKLFY9KihlOEOUIco/t+j5JItHTweha1LNH0qBDq8ovwu8nkjfdkCOEy64MZYnId11+VaHr81cUUC31KrfZiqJFogusItWhFC2c2Lh6CIYw1ElUnriLUzNFrzm35AAyFRL3UD1ZOXcGi5h29BluERk4/hkqieoLXcP31Ek1Ow9sU+jGE0NMZmdNpw65fb0ULJWSc2oNhydFrChgVap0VLRe7nGGtFc3DnEXVOXptuYsZah19FaYsarNEjwUvZVjj6Ksw4/pbStRRDPHyghm4VhJNYEKoDVa0CBGGk84UU4m2ucyE6z/n6DWlt7zz9JR09CRu+RUOb1EbHH21/JZ7q06teNbRa4oP7Po7STS5oqNQRSzqteyD6QWDuv6KFa3MVVQnL7oJVTp6cs7R6zCcUMtWFGD9Od++Lu5GKSWAcPqx2f58TfKrKJJiy1aUEvW3nR/shfmDWNSSowfnjSBCqU85erxXUdo6Ri4VRwhCH8W5m3ZChbHHMJp0Nr5Td5AJ/5JEYbbimCBvtyLIx2gbQjBHjCG+2ol/MKGZr28rVOno8QUTH5LhABRLEoV7JPg9z8ZOEE5+EKN0sicYxfdR4IxHB+xidOgoVBgvPbq6kOHK7yvUkhWFNcJokfQ2YViiX8GIke+ZMjLS1LyJ8++dhApj7PHXSwI9wRDN+rr+iqPHhTYCZyGaNM5bWdHGPOwg1GREf1Eoqxg6L70satnRwx0iP4W7wQbtC34SDogscowbXL+QKBWOXnwxFzIEZ9/D9Vcd/ZJ5pe8L1qVAAPYez8nmvOs/OnoYXTCJnDCUrv9iocK+KFHxHOSjfKvK36LefHMoodZ9x4lE1a1HnZ8xbUMZo3aJKPMIECpO3U9Rs9eCCJGvQqFtbftATI+xqGY5p2mFJ2XoyMEU2Vw25J48F758eCao2b8B8oujWHi+q7lI9OKt+gQnHI2iIEcJIIhGUXiOZMbQidHDhTItdbEPgprVAMT7LV1Xf81MnnYm8yVHCOH4LkjKQnj4xeII+V7Maq/OGIIzanqqdoAHgsbNpRDrFEPDZI9EDEgI9T2XfwpCEHwg7lHCCfUoiut6aK4NhwLc8Ra3DBCddxlnPYjICD0t3g4PW+4yjiMRVhCG2Ob58Dl/RL6PakRuguEE8bouVSh0aF8vzEUUNB8l469gigljIi7iy/sgGY7NtuL8m/Z+Bhg6AWePjQw3Pmpv+eFT0Jkcu5rguBFBEkYPWZwoDHhNzGqCoTQ104Ywc4a89t1QeFhcMM8gRIuLdcipO6RzqCYYOiHCbkOEtGeo/So+vPrl9hGy/Swd+eTkWXNLIwyFqOjr2UD6y+3gfEV0ULW7UI3xdgxrJomMMHTgiZW/4sLpe9nI7RlOdQF39cAb1+nCEMOort+rsyO302wEzClqETOLvq0zz2YYqlaqDTNDfLaFqxe8+N9tyo21LtYQQzkAxHp3IEbrDC26VCkGL79tygWUajq3KYYqCGEaijDe+6TNylHukqeWDMlVGaowhFcowlgMl1s9b+6a2F+1KTbWjEtNMnTgRwi1ZNwgZB556bhzX0YQbaYbJ0gXaBhk6MBCxVr5IyPMOhOUj05aWCbYUF3PN8lQfPmFWUMH1hwng9luCBjDjbNIIrQrjziT4yYZqogZnSYrVHTcyYoeLzy4pPE6iJnWBZtlmJB6TWQJX3m63eDXetdcTdomNM1QTn8zsg/lXNe2PBzocBcRQOzOhnkQuXX+1zBDUfVSDMUnMFpR3724Jvhwzy4cQrBjNYN84wxF5bLxFpTxfZ9t7E/MPdMVIaZ1gxXzDJPhKsVo02f1B8LaaQp5ds79Zd058wxlNyJu3URR63vIcX7dZNMCMVy3JnAVhqIzfvWuRE1TaClKt0uUlYEqrsTw7HRv61vc6ymquEIShLEOQavJzb8BRbESvp0ifNgiLdxGX/p3oCgWhw8g18iJYhAQTvToMG95a6i++JPfoRP8Cm+bEIDJx4MWHxfGGTcBzAjjv6dJG4iwT3dHN6uxM4O9X3U9iNjI949r/qJJ83z/EUDwyJmrRp1wh+Rg7B8jKLUo5w6ehfSOn/8e1DzeZvTEC8PrfwrCa3geYlQ3l/ePAKK9nA+5ZRYF0wBnwbpMm/8XAf9yA1pYWFhYWFhYWFhYWFhY/Flce945nem+3nw3jD+vOi0G0d3nNIJg8naYXGXGGKIdItdc4XpALnHRYoc4R99G04omkGnxMLveEpdaMkVy7wBBiDJifGEDQuqRJbnaOqVc8V/dR/crgh5Gox/SvJ2qb4XRTiaykGvt16EId67cYw3RdioNzd7bGa4vVKkpQW5UvI5Q5btz8r2rxI7CnOLmt7A61pBflkyTizrJXszrbIo48Pw++eHbEGZrhSTJZSTzPKQnriRU0Q/Z/jgjXnrheJD7vx/3QAhJphI9njIq1Nzi/ub0sqha+A8HruiDYBchIt+3EFa0kNDJpFBz79BAsGSuoqgSA/RMP1mt6YHQw/v7AxF3jsqpSMwJVXx52dZVuRXT3QiDoN2A07uqB8JDlTJwosmWY0qo6v3E7CVfGHHGf4ODWgYfvC7BMJIM+RRrUnKZEaoimN9MJAwAlSlG+u4X1FZ2ZIg9rMt3ZEKocm/i6t0ttGLw62LmDt0H1a1PDLUETQg13dm2LgjVEVHUyojhzhjWJXQaWqiCIOMq/3Jx1xtEZgaHJ4aoNiXXsEKVEk02ZcAsa0WDG74Sho6z+Dj7UIMJNf96VU6o85eXOI5fYhNJ4FOGZ7+94YQqJeom9YFzEqrc8OZTmZvAwMjpyLCh1EBClQSVRGG2GMGpFVVOxsfHR0xvxnAgoWb7g9eIkxPFL2kG3gHG1MToF75aMRxEqEcrqnixdLO3asWZYhiaYAjhN2vzsuAQQj1ZUcmK/PKMohszUwxlzrG2mRv7CjUvUdn55uk7CWmDmmEoc46RbevSvYRakKgMsE/fmDxgiGGn5KJOP6EWJJqMnDKKM2SGoZCoT9onF3X6CLUs0dPBo1DFbQdnqCTaieDlQs0c/To/BsxacSxfeRyYoZSoV5VoQw1y0qO7UDNHXxpQSIquOqGeaFCGUqLYLQ04ZSqu6BjAibgqLCTqUgflMKurULUSzU6RY5g6KEOZFk+MCAsMIfxcyUm3J/mjb+C8x/IP/6FARzHsKNSKFS2czLo2hL4uBcFlEBL16Z4VGMKBc0wJ8Rha3cPsUQiLcLla8pGf+RMx8lM3oRataCUDW0YRQuJfloJOU6myoqNCBixVkzt/+9zKqcU5ZwT9Pr8tmDiaM0dqyuqji0U9I9GsQCLUgAw1E5Va0QJDeBb1TJPcXF8qyJiH6q/JyiNZAqIkYWcHi3pWommRvOu/NM1e8Y6po88zlEtc/rFdpBRPs17qtevTukLCsL3r1zh6baEcxf6teHT0RYYLks8yOyG51p0hPy4ybO36GyWaFSPDUUxiUSgxFCYyb3UKSbxffRRmzaum3dsJtcbRawoOKVT4IUm6kjxDmbyz/hvOpf88Jc4VQmXfTeFBnaPXFD25/v6tCG+pbSwwnJ3JLJhPB5z9X1BsSKTYUqJZ4USok/4UU8X1ZCj6c+MzN1nRQvEBhXp82Hw/DLUZjdKCOpU216J39PXvxA5tUcu2lGBeyzBmp/xrrRnWSBQmr5sSTombhhRqcsMCw2deDsNP5SYoC6baMqyVKKYelfA831efNLPhQ7v+IsNQBJs1M1KrnF9oybDW0QcrjFcS+PS5KkWOwwkVilHbAfkv+piK5PKZt2NYb0WDlR87gcCj/yI/YMlyDAd2/VCKvGPKdUn+3hDbZWmtWjFUBPVWVDKUJ+CRJp9FhqVWvDCH0+lmRYbOmOiyWLwXw7M2DKWhqHP0KUMnZeiUGZZcf78p6DJDNeNVHvRPSpsjWjHc+urRdPaikWHeoro9lzHKDBM6hbxA1QQsrRju6W9dVwpWdKuc4F4wlKgwzEX1S9otYWPlQcoMK35I5TY7lIs0M3zx8Bj0Fj9YseVcYoV36WeZ4ZEiRNrMkR1QZZi02eKUw/lQIdiO4QF5T+8HrnNp0ltQ4Ql94S2kQ/RxlaESqnf3/s0uzaZ2vE+VYbpMkmakW2gStrXzFnvOXP2MhGRIOOcEy09CiI5hksFR3EObsq49dAzl3h2PyjRmEMS6HwBuxzDYIISYLkbK+cNY4w9P1bzJjPyLnm+4axmqjHQeXUO0I7qN0G1jmmi91j6esDR5f6ixpekNxuvJBT/UV7qJlmGaTlBEXXyvqaJ95K0vlDI84y1O1/ffl1HDUNz7S2Wk+9E1Qt9fBW72hwOijqEyqaRsRI+n+jNs8ofDoZ6hGGl81KW+7vvb1Tv2+PkssMPf8uNT4w8HwxmGtd1ogDYUXoIoL3H8ZLdhWHtR31/n/qlkoBtsMaZa2S0YalIJGiN4I4bXxP8Lw674jzEkz6OuKP062Z+GXFAj+gSbZ6ALx/8sIuRegu4/LXozwPruEvx3mtA5k17zLG792BYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWw+J/bcvnPR5QpdMAAAAASUVORK5CYII="
                alt="Feature 1"
                className="w-20 h-20 mx-auto mb-4 rounded-full"
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Cozy Ambiance
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Enjoy a warm and cozy environment that makes you feel right at
                home, no matter where you are.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 shadow-lg text-center">
              <img
                src="https://www.shutterstock.com/image-vector/vector-line-icon-facilities-600nw-2327059699.jpg"
                alt="Feature 2"
                className="w-20 h-20 mx-auto mb-4 rounded-full"
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Modern Amenities
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                All of our properties are equipped with modern amenities to
                ensure comfort during your stay.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 shadow-lg text-center">
              <img
                src="data:image/jpeg;base64,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"
                alt="Feature 3"
                className="w-20 h-20 mx-auto mb-4 rounded-full"
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Personalized Service
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Our team is dedicated to providing a personalized service to
                cater to your every need during your stay.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features around */}
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          What's Nearby
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {/* Mall Card */}
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 transform transition duration-300">
            <a href="#">
              <img
                className="rounded-t-lg object-cover w-full h-48"
                src="https://www.upkenya.com/wp-content/uploads/2020/10/img-20190410-150211-hdr.jpg"
                alt="Mall"
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Nearby Mall
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Visit <strong>Westgate</strong>, the ultimate shopping
                destination that offers everything from luxurious brands to
                everyday essentials, ensuring all your needs are met.
              </p>
              <a
                href="https://www.westgate.co.ke"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Visit Website
              </a>
            </div>
          </div>

          {/* Restaurants Card */}
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 transform transition duration-300">
            <a href="#">
              <img
                className="rounded-t-lg object-cover w-full h-48"
                src="https://villa-rosa-kempinski-nairobi.booked.net/data/Photos/OriginalPhoto/14843/1484373/1484373518/Villa-Rosa-Kempinski-Nairobi-Exterior.JPEG"
                alt="Restaurants"
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Nearby Restaurants
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Enjoy an exceptional dining experience at{" "}
                <strong>Kempinski</strong>, featuring a range of five-star meals
                and a welcoming atmosphere for every occasion.
              </p>
              <a
                href="https://www.kempinski.com/en/nairobi/villa-rosa"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Visit Website
              </a>
            </div>
          </div>

          {/* Parks Card */}
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 transform transition duration-300">
            <a href="#">
              <img
                className="rounded-t-lg object-cover w-full h-48"
                src="https://www.kids365.org/wp-content/uploads/2021/02/Nairobi-National-Park-lion-1400x744.jpg"
                alt="Parks"
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Nearby Parks
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Explore the wonders of <strong>Nairobi National Park</strong>,
                where guided tours allow you to see diverse wildlife in their
                natural habitats. The pride of Africa.
              </p>
              <a
                href="https://www.nairobinationalparkkenya.com"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Visit Website
              </a>
            </div>
          </div>

          {/* Museum Card - Illusions Experience */}
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 transform transition duration-300">
            <a href="#">
              <img
                className="rounded-t-lg object-cover w-full h-48"
                src="https://museumofillusionsnairobi.co.ke/wp-content/uploads/2024/12/Open-graf-Nairobi-EN.png"
                alt="Museum"
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Nearby Museum
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Visit the <strong>Museum of Illusions</strong> where you'll
                experience mind-bending visual illusions, interactive exhibits,
                and optical tricks that will leave you amazed and fascinated.
              </p>
              <a
                href="https://museumofillusionsnairobi.co.ke/"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Visit Website
              </a>
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
