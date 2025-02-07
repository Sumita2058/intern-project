import { FaArrowRight } from "react-icons/fa";

const Destination = () =>{
    return(
<div className="p-20 flex flex-col gap-3">
      <h1 className="uppercase text-bold text-gray-500">Destinations</h1>
      <div className="grid grid-cols-2">
        <h2 className="text-black text-5xl font-bold capitalize ">city escape and  <br/> nature retreats</h2>
        <span className="flex flex-col gap-1">
          <p className="text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, id ratione quasi consequatur expedita, beatae tempore totam rem exercitationem commodi molestiae minima eum, natus vel ipsa. Voluptatum voluptas assumenda quaerat?</p>
           <button className="text-green-700 flex flex-row gap-0.5 items-center text-bold">Explore More <FaArrowRight /></button>
        </span>
      </div>
     </div>
    );
};
export default Destination;