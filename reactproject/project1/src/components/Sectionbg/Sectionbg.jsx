import {
  sectionbackground,
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
} from "../../image";

const travelersData = [
  {
    img: photo1,
    name: "Marvin Devin",
    role: "Traveler",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, facere maiores ex beatae optio et minus, impedit ducimus eum ratione quod dicta mollitia. Ratione a dolores praesentium, ipsa blanditiis ipsam.",
  },
  {
    img: photo2,
    name: "Marvin Devin",
    role: "Traveler",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, facere maiores ex beatae optio et minus, impedit ducimus eum ratione quod dicta mollitia. Ratione a dolores praesentium, ipsa blanditiis ipsam.",
  },
  {
    img: photo3,
    name: "Marvin Devin",
    role: "Traveler",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, facere maiores ex beatae optio et minus, impedit ducimus eum ratione quod dicta mollitia. Ratione a dolores praesentium, ipsa blanditiis ipsam.",
  },
  {
    img: photo4,
    name: "Marvin Devin",
    role: "Traveler",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, facere maiores ex beatae optio et minus, impedit ducimus eum ratione quod dicta mollitia. Ratione a dolores praesentium, ipsa blanditiis ipsam.",
  },
  {
    img: photo5,
    name: "Marvin Devin",
    role: "Traveler",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, facere maiores ex beatae optio et minus, impedit ducimus eum ratione quod dicta mollitia. Ratione a dolores praesentium, ipsa blanditiis ipsam.",
  },
  {
    img: photo6,
    name: "Marvin Devin",
    role: "Traveler",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, facere maiores ex beatae optio et minus, impedit ducimus eum ratione quod dicta mollitia. Ratione a dolores praesentium, ipsa blanditiis ipsam.",
  },
];

const Sectionbg = () => {
  return (
    <div className="relative">
      <img
        src={sectionbackground}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{
          objectPosition: "center center", 
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white">
        <div className="container">
          <div className="flex flex-col gap-3 text-center justify-center">
            <span className="capitalize text-3xl">adventure&apos; voices</span>
            <span className="font-semibold capitalize text-7xl">
              adventurer&apos; voices
            </span>
            <span className="capitalize font-semibold text-2xl">
              real stories from our adventurers community
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-12 p-20">
            {travelersData.map((traveler, index) => (
              <div
                key={index}
                className="md:col-span-4 flex flex-col gap-4 bg-white text-black md:rounded-4xl rounded-sm md:p-6 p-3"
              >
                <div className="flex flex-row gap-2 items-center">
                  <img
                    src={traveler.img}
                    alt="img"
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <section>
                    <h1 className="font-bold">{traveler.name}</h1>
                    <span className="font-semibold text-gray-900">
                      {traveler.role}
                    </span>
                  </section>
                </div>
                <p>{traveler.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sectionbg;