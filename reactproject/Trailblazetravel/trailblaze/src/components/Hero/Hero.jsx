import { SlCalender } from "react-icons/sl";
import home from "../../assets/home.jpg";
import { IoIosArrowDown } from "react-icons/io";
import { BsCalendar2DateFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
const Hero = () =>{
    return(
<div className="relative top-0">
<div className="absolute z-8 top-2 w-full">
        <Navbar />
      </div>
      <div className="relative flex items-center justify-center">
   <img src={home} alt="img" className="rounded-4xl h-full p-4" />
   <div className="grid grid-rows-5  flex-row gap-1 absolute z-10 inset-10 mt-55 text-center ">
    <h1 className="row-span-2 text-white py-4 font-semibold text-8xl">Extraordinary natural and <br/> cultural charm</h1>
    <p  className="row-span-1 text-white font-semibold text-2xl">Exploring indonesia is an unforgettable adventure.</p>
    <div className="row-span-1  bg-white/30 backdrop-blur-none rounded-full h-14 w-[40%] flex flex-row text-white font-md text-2xl gap-4 ml-140 justify-center">
         <span className="flex flex-row items-center  gap-6"><SlCalender />Date <IoIosArrowDown /> |</span> 
            <span className="flex flex-row items-center gap-6"><BsCalendar2DateFill />Date <IoIosArrowDown /> |</span>
            <span className="flex flex-row items-center gap-6"><FaUser />Date<IoIosArrowDown /> | </span>
        <button className="rounded-full h-10 mt-2 items-center w-30  bg-white text-black">search</button>
    </div> 
    
   </div>
   
    </div>

    <div className="grid grid-cols-4 items-center justify-between mt-0">
        <div className="bg-white px-8 py-8 m-8 rounded-lg">
        <span className="font-md text-6xl">10M+ </span>
        <p className="text-gray-600">total customer</p>
        </div>
        <div className="bg-white px-8 py-8 m-8  rounded-lg">
         <span className="font-md text-6xl">09+</span>
        <p className="text-gray-600"> years of experience</p>
        </div>
        <div className="bg-white px-8 py-8 m-8  rounded-lg">
         <span className="font-md text-6xl">12k</span>
        <p className="text-gray-600">total destination</p>
        </div>
        <div className="bg-white px-8 py-8 m-8  rounded-lg">
       <span className="font-md text-6xl"> 0.5M</span>
        <p className="text-gray-600">Average rating</p>
        </div>
    </div>
    </div>
    );
};
export default Hero;