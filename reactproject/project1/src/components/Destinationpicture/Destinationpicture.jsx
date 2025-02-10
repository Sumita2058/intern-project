import destination1 from "../../assets/destinations-1.jpg";
import destination2 from "../../assets/destinations-2.jpg";
import destination3 from "../../assets/destinations-3.jpg";
import destination4 from "../../assets/destinations-4.jpg";
import { homebackground } from "../../image";
const Destinationpicture = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 container">
     
      <div className="relative md:col-span-6 h-[300px]">
        <img
          src={homebackground}
          alt="img"
          className="w-full rounded-2xl h-full"
        />
        <p className="absolute bottom-10 text-white text-2xl font-semibold bg-opacity-50 px-4 py-2 rounded-lg">
          East Nusa Tenggara
        </p>
      </div>
      <div className="relative md:col-span-6 h-[300px]">
        <img
          src={destination1}
          alt="img"
          className=" rounded-2xl h-full w-full"
        />
        <p className="absolute bottom-10 text-white text-2xl font-semibold bg-opacity-50 px-4 py-2 rounded-lg">
          Bali
        </p>
      </div>

      

     
        <div className="relative  md:col-span-3 h-[300px] ">
          <img
            src={destination2}
            alt="img"
            className="w-full rounded-2xl h-full"
          />
          <p className="absolute bottom-10 text-white text-2xl font-semibold bg-opacity-50 px-4 py-2 rounded-lg">
            Bali
          </p>
        </div>
        <div className="relative md:col-span-6 h-[300px]">
          <img
            src={destination3}
            alt="img"
            className="w-full rounded-2xl h-full"
          />
          <p className="absolute bottom-10 text-white text-2xl font-semibold bg-opacity-50 px-4 py-2 rounded-lg">
            East java
          </p>
        </div>
        <div className="relative md:col-span-3 h-[300px]">
          <img
            src={destination4}
            alt="img"
            className="w-full rounded-2xl h-full"
          />
          <p className="absolute bottom-10 text-white text-2xl font-semibold bg-opacity-50 px-4 py-2 rounded-lg">
            West papua
          </p>
        </div>
      </div>
    
  );
};
export default Destinationpicture;
