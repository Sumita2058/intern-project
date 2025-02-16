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
            <h1 className="text-6xl font-semibold capitalize text-black">one click for you</h1>
        </div>
        <div className="flex flex-row md:items-center gap-4 bg-white rounded-2xl p-4">
        <CiSearch className="text-8xl rounded-md  font-bold md:px-3 bg-white-900 text-black"/>
        <div className="">
        <h1 className="text-2xl font-semibold capitalize text-black">find your destination</h1>
        <p className="text-xl text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, maiores ducimus. Autem architecto consectetur laborum!</p>
        </div>
        </div>
    
        <div className="flex flex-row md:items-center gap-4 rounded-2xl p-4">
        <FaTicketAlt  className="text-8xl rounded-md  font-bold text-black md:px-3 bg-white"/>
        <div className="">
        <h1 className="text-2xl font-semibold capitalize text-black">Book a ticket</h1>
        <p className="text-xl text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, maiores ducimus. Autem architecto consectetur laborum!</p>
        </div>
        </div>

        <div className="flex flex-row md:items-center gap-4 rounded-2xl p-4">
        <MdOutlinePayment className="text-8xl rounded-md  font-bold text-black md:px-3 bg-white" />
        <div className="">
        <h1 className="text-2xl font-semibold capitalize text-black">Make payment</h1>
        <p className="text-xl text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, maiores ducimus. Autem architecto consectetur laborum!</p>
        </div>
        </div>

        <div className="flex flex-row md:items-center gap-4 rounded-2xl p-4">
        < FaMap className="text-8xl rounded-md  font-bold text-black md:px-3 bg-white" />
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