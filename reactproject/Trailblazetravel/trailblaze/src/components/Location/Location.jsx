import { location1, location2, location3, location4 } from "../import";
const Location = () => {
  return (
    <div className="grid grid-cols-12 p-16">
      <div className="relative col-span-8 p-4">
        
          <img src={location1} alt="img" className="w-full rounded-2xl h-[500px] " />
          <div className="z-10 inset-10 mt-90 absolute">
          <p className="text-gray-200 text-xl">bromo, east java</p>
          <span className="font-lg text-white text-2xl">bromo tengger tour</span>
        </div>
        </div>
        <div className="relative col-span-4 p-4">
          <img src={location2} alt="img" className="w-full rounded-2xl h-[500px]"/>
          <div className="z-10 inset-10 mt-90 absolute">
          <p className="text-gray-200 text-xl">denpasar, bali</p>
          <span className="font-lg text-white text-2xl">bali beacj tourism</span>
        </div>
      </div>


      <div className="relative col-span-5 p-2">
      
       <img src={location3} alt="img" className="w-full rounded-2xl h-[500px]" />
       <div className="z-10 inset-10 mt-90 absolute">
       <p className="text-gray-200 text-xl"> lampung, south sumatra</p>
          <span className="font-lg text-white text-2xl">sumatra tourism</span>
       </div>
       </div>
       
       <div className="relative col-span-7 p-2">
       <img src={location4} alt="img" className="w-full rounded-2xl h-[500px]" />
        <div className="z-10 inset-10 mt-90 absolute">
        <p className="text-gray-200 text-xl">
        jogjakarta, central java</p>
          <span className="font-lg text-white text-2xl">borobudur temple tour
          </span>
        </div>
       </div>
      </div>

  );
};
export default Location;
