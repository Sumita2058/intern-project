import { SlCalender } from "react-icons/sl";
import home from "../../assets/home.jpg";
import { IoIosArrowDown } from "react-icons/io";
import { BsCalendar2DateFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";

const Hero = () => {
  return (
    <div className="p-20 rounded-md">
    <div
      className="relative w-full min-h-screen bg-cover bg-center flex flex-col items-center"
      style={{ backgroundImage: `url(${home})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 w-full">
        <Navbar />
      </div>

      <div className="relative flex flex-col items-center text-center text-white mt-24 px-4">
        <h1 className="font-medium text-xl md:text-6xl lg:text-7xl">
          Extraordinary natural and <br /> cultural charm
        </h1>
        <p className="font-semibold text-[12px] md:text-2xl mt-4">
          Exploring Indonesia is an unforgettable adventure.
        </p>

        <div className="mt-5 md:mt-16 w-full px-4">
          <div className="flex flex-col md:flex-row bg-bgc backdrop-blur-md text-white rounded-full h-14 px-6 md:px-16 py-4 md:py-0 w-full md:w-[90%] lg:w-[50%] mx-auto gap-4 md:gap-6 items-center justify-center">
            <div className="flex flex-row text-[10px] text-base gap-4 md:gap-6 justify-center">
              <span className="flex items-center gap-2">
                <SlCalender />
                Date <IoIosArrowDown />|
              </span>
              <span className="flex items-center gap-2">
                <BsCalendar2DateFill />
                Date <IoIosArrowDown />|
              </span>
              <span className="flex items-center gap-2">
                <FaUser />
                Guests <IoIosArrowDown />|
              </span>
            </div>
           <button className="rounded-full h-8 w-full md:w-auto px-4 bg-white text-black font-medium -mt-3 md:mt-0">
              Search
            </button>
          </div>
        </div>
      </div>

     
    </div>
    <div className="mt-6 md:absolute md:-mt-14 md:gap-6 md:left-1/2 md:-translate-x-1/2">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            { value: "10M+", label: "Total Customers" },
            { value: "09+", label: "Years of Experience" },
            { value: "12k", label: "Total Destinations" },
            { value: "0.5M", label: "Average Rating" },
          ].map((item, index) => (
            <div key={index} className="bg-white px-8 py-6 rounded-lg shadow-md">
              <span className="font-bold text-lg md:text-2xl">{item.value}</span>
              <p className="text-gray-600 text-sm md:text-base">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;