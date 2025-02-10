import { FaStar } from "react-icons/fa";
import { featured1, featured2, featured3, plane } from "../../image"; 

const Featured = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12  gap-6 container">
      <div className="grid md:col-span-8  border-solid rounded-2xl border-gray-600 p-4 border-1">
        <p className="uppercase text-gray-500 text-sm sm:text-base">
          featured offer
        </p>
        <h1 className="capitalize font-bold text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          unlock exclusive offers
        </h1>
        <span className="font-md text-lg sm:text-xl text-gray-400">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lets go for
          it
        </span>
        <div className="flex justify-between items-center mt-4 sm:mt-6">
          <button className="bg-green-700 rounded-4xl p-3 h-10 sm:h-12 sm:px-6">
            Show More
          </button>
          <img
            src={plane}
            alt="img"
            className="w-40 sm:w-60 md:w-80 h-24 sm:h-36 md:h-40"
          />
        </div>
      </div>

      {/* First Offer */}
      <div className="relative grid sm:col-span-4">
        <img
          src={featured1}
          alt="img"
          className="rounded-2xl h-full sm:h-80 md:h-96 w-full object-cover"
        />
        <section className="absolute inset-0 flex flex-col justify-end items-start sm:inset-6 md:inset-10 mt-4 sm:mt-6 text-white ml-6">
          <h1 className="font-semibold text-lg sm:text-xl md:text-2xl">
            Yulilaya Hotel
          </h1>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg">
            Gili Trawangan, Lombok
          </p>
          <span className="flex gap-1 items-center text-sm sm:text-base md:text-lg">
            <FaStar className="text-yellow-100" /> 4.9 | 853 reviews
          </span>
        </section>
      </div>

      {/* Second Offer */}
      <div className="relative grid sm:col-span-6">
        <img
          src={featured2}
          alt="img"
          className="rounded-2xl h-full sm:h-80 md:h-96 w-full object-cover"
        />
        <section className="absolute inset-0 flex flex-col justify-end items-start sm:inset-6 md:inset-10 mt-4 sm:mt-6 text-white ml-6">
          <h1 className="font-semibold text-lg sm:text-xl md:text-2xl">
            Yulilaya Hotel
          </h1>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg">
            Gili Trawangan, Lombok
          </p>
          <span className="flex gap-1 items-center text-sm sm:text-base md:text-lg">
            <FaStar className="text-yellow-100" /> 4.9 | 853 reviews
          </span>
        </section>
      </div>

      {/* Third Offer */}
      <div className="relative grid sm:col-span-6">
        <img
          src={featured3}
          alt="img"
          className="rounded-2xl h-full sm:h-80 md:h-96 w-full object-cover"
        />
        <section className="absolute inset-0 flex flex-col justify-end items-start sm:inset-6 md:inset-10 mt-4 sm:mt-6 text-white ml-6">
          <h1 className="font-semibold text-lg sm:text-xl md:text-2xl">
            Yulilaya Hotel
          </h1>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg">
            Gili Trawangan, Lombok
          </p>
          <span className="flex gap-1 items-center text-sm sm:text-base md:text-lg">
            <FaStar className="text-yellow-100" /> 4.9 | 853 reviews
          </span>
        </section>
      </div>
    </div>
  );
};

export default Featured;
