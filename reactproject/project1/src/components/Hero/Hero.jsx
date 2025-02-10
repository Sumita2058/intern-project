import homebackground from "../../assets/home-background.jpg";
import { CiSearch } from "react-icons/ci";
import { Navbar } from "../import";

const Hero = () => {
  return (
    <div className="relative   text-white ">
      
      <div className="absolute z-10 top-5 w-full px-4">
        <Navbar />
      </div>

     
      <div className="relative flex items-center justify-center min-h-screen">
        <img
          src={homebackground}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover rounded-2xl"
        />

        
        <div className="relative flex flex-col items-center text-center px-6 md:px-8 lg:px-16">
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-semibold">
            Travelx
          </h1>

         
          <p className="mt-2 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
            Let&apos;s embark on your <br /> dream journey
          </p>

         
          <p className="mt-4 text-sm sm:text-md md:text-lg text-gray-300 max-w-lg">
            Discover inspiring destinations, create unforgettable memories, and
            travel with confidence - your adventure starts here.
          </p>

        
          <div className="mt-6 flex items-center w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl bg-white rounded-full p-2 shadow-md">
            <CiSearch className="text-2xl text-gray-500 mx-3" />
            <input
              className="w-full px-3 py-2 text-gray-600 bg-transparent border-none focus:outline-none placeholder-gray-400"
              type="text"
              placeholder="Your journey begins with your search..."
            />
            <button className="px-5 py-2 text-white bg-gray-700 rounded-full text-sm sm:text-md md:text-lg">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
