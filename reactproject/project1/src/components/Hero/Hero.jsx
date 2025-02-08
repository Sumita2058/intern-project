import homebackground from "../../assets/home-background.jpg";

import { CiSearch } from "react-icons/ci";
import { Navbar } from "../import";

const Hero = () => {
  return (
    <div className=" text-white relative">
      <div className="  absolute z-10 top-5 w-full">{<Navbar />}</div>
      <div className="container relative ">
        <img
          src={homebackground}
          alt="img"
          className="w-full rounded-2xl p-2"
        />
        <div className=" inset-10 absolute mt-40">
          <h1 className="font-md text-center text-3xl mt-10">TravelX</h1>
          <div className="text-center mt-8">
            <span className="capitalize font-semibold text-7xl">
              let&apos;s embark on your
              <br />
              dream journey
            </span>
            <p className="font-md mt-4 text-lg capitalize">
              discover inspiring destinatons, create unfgettable memories, and
              travel with
              <br /> confidence - adventure start adventure starts here
            </p>

            <div className="mt-8 p-3 ml-120 items-center justify-center  w-120 rounded-full bg-white text-gray-500">
              <button className="grid grid-cols-4 items-center gap-10">
                <div className="flex flex-row col-span-3 gap-2 items-center">
                  <CiSearch className="text-2xl font-bold" />
                  <input
                    className="w-full bg-transparent border-none focus:outline-none"
                    type="text"
                    placeholder="your journey begins with your search"
                  />
                </div>
                <span className="w-22 col-span-1 p-1 text-md rounded-4xl bg-gray-700">
                  search
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
