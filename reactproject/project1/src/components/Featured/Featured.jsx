import { FaStar } from "react-icons/fa";
import { featured1, featured2, featured3, plane } from "../../image"; 
 const Featured = () =>{
    return(
    <div className="grid grid-cols-10 p-20 gap-6">
      <div className="grid col-span-6 border-solid rounded-2xl border-gray-600 p-2  border-1">
        <p className="uppercase text-gray-500">featured offer</p>
        <h1 className="capitalize font-bold text-black text-6xl ">unlock exclusive offers</h1>
        <span className="font-md text-xl text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. lets go for it</span>
        <div className="flex justify-between items-center ">
          <button className="bg-green-700 rounded-4xl p-2 h-10">Show More</button>
        <img src={plane} alt="img" className="w-80 h-40"/>
        </div>
      </div>
      <div className="relative grid col-span-4">
      <img src={featured1} alt="img" className="rounded-2xl h-80 w-[98%]"/>
      <section className="absolute insect-10 mt-50 text-white ml-10">
        <h1 className="font-semibold text-2xl">Yulilaya Hotel</h1>
        <p className="text-gray-700 text-lg">gill trawangan, lombok</p>
        <span className="flex gap-1 items-center"> <FaStar className="text-yellow-100"/> 4.9 | 853 review</span>
      </section>
      </div>
    
     <div className="relative grid col-span-5">
      <img src={featured2} alt="img" className="rounded-2xl  h-80 w-[98%]"/>
      <section className=" absolute insect-10 mt-50 text-white ml-10">
        <h1 className="font-semibold text-2xl">Yulilaya Hotel</h1>
        <p className="text-gray-700 text-lg">gill trawangan, lombok</p>
        <span className="flex gap-1 items-center"> <FaStar className="text-yellow-200 overflow-hidden"/> 4.9 | 853 review</span>
      </section>
      </div>
      <div className="relative grid col-span-5">
      <img src={featured3} alt="img" className="rounded-2xl  h-80 w-[98%]"/>
      <section className=" absolute insect-10 mt-50 text-white ml-10">
        <h1 className="font-semibold text-2xl">Yulilaya Hotel</h1>
        <p className="text-gray-700 text-lg">gill trawangan, lombok</p>
        <span className="flex gap-1 items-center"> <FaStar  className="text-yellow-200 overflow-hidden"/> 4.9 | 853 review</span>
      </section>
      </div>
     </div> 

    );
 };
 export default Featured;
 