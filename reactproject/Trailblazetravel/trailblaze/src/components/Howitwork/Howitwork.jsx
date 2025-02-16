import { CiSearch } from "react-icons/ci";
import { workprocess } from "../import";
import { FaMap, FaTicketAlt } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";

const Howitwork = () =>{
    return(
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-20">
    <img src={workprocess} alt="img" className="rounded-4xl h-[40rem] md:h-[48rem] object-cover" />
    <div className=" space-y-8">
        <div className="flex-row gap-1">
            <span className="text-gray-400 text-2xl">how it works</span>
            <h1 className="text-5xl font-semibold capitalize text-black">one click for you</h1>
        </div>
        <div className="flex flex-row gap-4 bg-white rounded-2xl p-4">
       <div className="">
       <CiSearch className="text-5xl rounded-md bg-white px-2 py-2 font-bold text-black"/>
       </div>
        <div className="">
        <h1 className="text-2xl font-semibold capitalize text-black">find your destination</h1>
        <p className="text-xl text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, maiores ducimus. Autem architecto consectetur laborum!</p>
        </div>
        </div>
    
        <div className="flex flex-row gap-4 rounded-2xl p-4">
       <div className="p-2">
       <FaTicketAlt  className="text-5xl rounded-md bg-white px-2 py-2 font-bold text-black "/>
       </div>
        <div className="">
        <h1 className="text-2xl font-semibold capitalize text-black">Book a ticket</h1>
        <p className="text-xl text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, maiores ducimus. Autem architecto consectetur laborum!</p>
        </div>
        </div>

        <div className="flex flex-row  gap-4 rounded-2xl p-4">
       <div className="">
       <MdOutlinePayment className="text-5xl rounded-md bg-white px-2 py-2 font-bold text-black" />
       </div>
        <div className="">
        <h1 className="text-2xl font-semibold capitalize text-black">Make payment</h1>
        <p className="text-xl text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, maiores ducimus. Autem architecto consectetur laborum!</p>
        </div>
        </div>

        <div className="flex flex-row  gap-4 rounded-2xl p-4">
      <div className="">
      < FaMap className="text-5xl rounded-md bg-white px-2 py-2 font-bold text-black" />
      </div>
       <div className="">
       <h1 className="text-2xl font-semibold capitalize text-black">Explore destination</h1>
       <p className="text-xl text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, maiores ducimus. Autem architecto consectetur laborum!</p>
       </div>
        </div>

    </div>

    </div>

    )
}
export default Howitwork;