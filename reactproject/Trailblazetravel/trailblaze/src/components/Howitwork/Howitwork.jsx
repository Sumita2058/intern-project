import { CiSearch } from "react-icons/ci";
import { workprocess } from "../import";
import { FaMap, FaTicketAlt } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";

const Howitwork = () =>{
    return(
<div className="grid grid-cols-2 p-20">
    <img src={workprocess} alt="img" className="rounded-4xl h-[50rem] p-4" />
    <div className="p-4 space-y-2">
        <div className="flex-row gap-2">
            <span className="text-gray-400 text-2xl">how it works</span>
            <h1 className="text-7xl font-semibold capitalize text-black">one click for you</h1>
        </div>
        <div className="flex flex-row items-center gap-4 bg-white rounded-2xl p-4">
        <CiSearch className="text-4xl font-bold text-black bg-gray-400"/>
        <div className="">
        <h1 className="text-3xl font-semibold capitalize text-black">find your destination</h1>
        <p className="text-2xl text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, maiores ducimus. Autem architecto consectetur laborum!</p>
        </div>
        </div>
    
        <div className="flex flex-row items-center gap-4 rounded-2xl p-4">
        <FaTicketAlt  className="text-4xl font-bold text-black bg-gray-400"/>
        <div className="">
        <h1 className="text-3xl font-semibold capitalize text-black">Book a ticket</h1>
        <p className="text-2xl text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, maiores ducimus. Autem architecto consectetur laborum!</p>
        </div>
        </div>

        <div className="flex flex-row items-center gap-4 rounded-2xl p-4">
        <MdOutlinePayment className="text-4xl font-bold text-black bg-gray-400" />
        <div className="">
        <h1 className="text-3xl font-semibold capitalize text-black">Make payment</h1>
        <p className="text-2xl text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, maiores ducimus. Autem architecto consectetur laborum!</p>
        </div>
        </div>

        <div className="flex flex-row items-center gap-4 rounded-2xl p-4">
        < FaMap className="text-4xl font-bold text-black bg-gray-400" />
       <div className="">
       <h1 className="text-3xl font-semibold capitalize text-black">Explore destination</h1>
       <p className="text-2xl text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, maiores ducimus. Autem architecto consectetur laborum!</p>
       </div>
        </div>

    </div>

    </div>

    )
}
export default Howitwork;