import {
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  sectionbackground,
} from "../../image";

const Sectionbg = () => {
  return (
    <div className="">
      <div className="relative text-white">
        <img
          src={sectionbackground}
          alt="img"
          className="w-full h-full rounded-4xl p-4"
        />
        <div className="absolute  inset-10 mt-15">
          <p className="text-center capitalize text-3xl">
            adventure&apos; voices
          </p>
          <h1 className="font-semibold capitalize text-center text-7xl mt-4">
            adventurer&apos; voices
          </h1>
          <div className="text-center mt-6">
            <span className="capitalize font-semibold text-2xl">
              real stories from our sdenturours community
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-12 p-20">
            <div className="md:col-span-4 flex flex-col gap-4 bg-white text-black rounded-4xl p-6">
              <div className="flex flex-row  gap-2 items-center">
                <img
                  src={photo1}
                  alt="img"
                  className="h-12 w-12 rounded-full"
                />
                <section>
                  <h1 className="font-bold">Marvin Devin</h1>
                  <span className="font-semibold text-gray-900">Traveler</span>
                </section>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                facere maiores ex beatae optio et minus, impedit ducimus eum
                ratione quod dicta mollitia. Ratione a dolores praesentium, ipsa
                blanditiis ipsam.
              </p>
            </div>
            <div className="md:col-span-4 flex flex-col gap-4 bg-white text-black rounded-4xl p-6">
              <div className="flex flex-row gap-2 items-center">
                <img
                  src={photo2}
                  alt="img"
                  className="h-12 w-12 rounded-full"
                />
                <section>
                  <h1 className="font-bold">Marvin Devin</h1>
                  <span className="font-semibold text-gray-900">Traveler</span>
                </section>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                facere maiores ex beatae optio et minus, impedit ducimus eum
                ratione quod dicta mollitia. Ratione a dolores praesentium, ipsa
                blanditiis ipsam.
              </p>
            </div>
            <div className="md:col-span-4 flex flex-col gap-4 bg-white text-black rounded-4xl p-6">
              <div className="flex flex-row gap-2 items-center">
                <img
                  src={photo3}
                  alt="img"
                  className="h-12 w-12 rounded-full"
                />
                <section>
                  <h1 className="font-bold">Marvin Devin</h1>
                  <span className="font-semibold text-gray-900">Traveler</span>
                </section>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                facere maiores ex beatae optio et minus, impedit ducimus eum
                ratione quod dicta mollitia. Ratione a dolores praesentium, ipsa
                blanditiis ipsam.
              </p>
            </div>
            <div className="md:col-span-4 flex flex-col gap-4 bg-white text-black rounded-4xl p-6">
              <div className="flex flex-row gap-2 items-center">
                <img
                  src={photo4}
                  alt="img"
                  className="h-12 w-12 rounded-full"
                />
                <section>
                  <h1 className="font-bold">Marvin Devin</h1>
                  <span className="font-semibold text-gray-900">Traveler</span>
                </section>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                facere maiores ex beatae optio et minus, impedit ducimus eum
                ratione quod dicta mollitia. Ratione a dolores praesentium, ipsa
                blanditiis ipsam.
              </p>
            </div>
            <div className="md:col-span-4 flex flex-col gap-4 bg-white text-black rounded-4xl p-6">
              <div className="flex flex-row gap-2 items-center">
                <img
                  src={photo5}
                  alt="img"
                  className="h-12 w-12 rounded-full"
                />
                <section>
                  <h1 className="font-bold">Marvin Devin</h1>
                  <span className="font-semibold text-gray-900">Traveler</span>
                </section>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                facere maiores ex beatae optio et minus, impedit ducimus eum
                ratione quod dicta mollitia. Ratione a dolores praesentium, ipsa
                blanditiis ipsam.
              </p>
            </div>
            <div className="md:col-span-4 flex flex-col gap-4 bg-white text-black rounded-4xl p-6">
              <div className="flex flex-row gap-2 items-center">
                <img
                  src={photo6}
                  alt="img"
                  className="h-12 w-12 rounded-full"
                />
                <section>
                  <h1 className="font-bold">Marvin Devin</h1>
                  <span className="font-semibold text-gray-900">Traveler</span>
                </section>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                facere maiores ex beatae optio et minus, impedit ducimus eum
                ratione quod dicta mollitia. Ratione a dolores praesentium, ipsa
                blanditiis ipsam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sectionbg;
