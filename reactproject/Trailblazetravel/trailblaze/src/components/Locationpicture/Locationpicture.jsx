import { package1, package2, package3 } from "../import";
import { FaStar } from "react-icons/fa";

const Locationpicture = () => {
  const data = [
    {
      id: 1,
      image: package1,
      day: "7 days",
      rating: "4.9",
      date: "27 OCTOBER",
      package: "bali tour packages",
      amount: "$285",
    },
    {
      id: 2,
      image: package2,
      day: "7 days",
      rating: "4.9",
      date: "27 OCTOBER",
      package: "java tour packages",
      amount: "$185",
    },
    {
      id: 3,
      image: package3,
      day: "7 days",
      rating: "4.9",
      date: "27 OCTOBER",
      package: "solo tour packages",
              amount: "$235",
    },
  ];
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-20">
        {data.map((value, index) => (
            <div
              key={index}
              className="rounded-2xl bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${value.image})`, height: "70vh", }}
            >
              <div className=" space-y-46 md:space-y-70">
                <div className="flex items-center justify-between p-4">
                  <p className="text-white px-4 py-2 text-xl bg-white/30 backdrop-blur-none p-8 rounded-full">
                    {value.day}
                  </p>
                  <div className="bg-white/30 backdrop-blur-none rounded-full px-4 py-2 flex justify-between items-center gap-3 text-xl text-white">
                    <FaStar className="text-yellow-400" />
                    <span>{value.rating}</span>
                  </div>
                </div>
                <div className="flex  justify-between bg-bgc rounded-2xl p-8 m-3 text-white">
                  <div className="flex flex-col">
                    <span className="text-gray-200">{value.date}</span>
                    <span className="text-bold text-2xl capitalize">
                      {value.package}
                    </span>
                  </div>
                  <div className="text-bold text-2xl capitalize">
                    <span className="text-bold text-2xl capitalize">
                      {value.amount}
                    </span>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
        ))}
      </div>
    </section>
  );
};

export default Locationpicture;
