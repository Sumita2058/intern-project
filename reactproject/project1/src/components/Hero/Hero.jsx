import homebackground from "../../assets/home-background.jpg";
import planning from "../../assets/planning.png";
import map from "../../assets/map.png";
import trust from "../../assets/trust.png";
import destination1 from "../../assets/destinations-1.jpg";
import destination2 from "../../assets/destinations-2.jpg";
import destination3 from "../../assets/destinations-3.jpg";
import destination4 from "../../assets/destinations-4.jpg";
import { CiSearch } from "react-icons/ci";
import { FaArrowRight, FaStar } from "react-icons/fa";
import { budget, family, featured2, featured3, foodarticle, hiddengame, photo1, photo2, photo3, photo4, photo5, photo6, photo7, plane, sectionbackground, tips } from "../../image";
import { featured1 } from "../../image"; 


const Hero = () => {
  return (
    <div className="relative  text-white">
      <div className="container">
      <img src={homebackground} alt="img" className="w-full rounded-4xl p-4" />
      <div className="z-10 inset-10 absolute mt-40">
        <h1 className="font-md text-center text-3xl mt-10">TravelX</h1>
        <div className="text-center mt-8">
        <span className="capitalize font-semibold text-7xl">let&apos;s embark on your<br/>dream journey</span>
        <p className="font-md mt-4 text-lg capitalize">
          discover inspiring destinatons, create unfgettable memories, and
          travel with<br/> confidence - adventure start adventure starts here
        </p>
       
        <div className="mt-8 p-3 ml-120 items-center justify-center  w-120 rounded-full bg-white text-gray-500">
        <button className="grid grid-cols-4 items-center gap-10">
          <div className="flex flex-row col-span-3 gap-2 items-center"><CiSearch className="text-2xl font-bold"/>
        <input className="w-full bg-transparent border-none focus:outline-none" type="text" placeholder="your journey begins with your search"/></div> 
        <span className="w-22 col-span-1 p-1 text-md rounded-4xl bg-gray-700">search</span></button>
        </div>
        </div >
      </div>
      </div>

     <div className="grid grid-cols-3 gap-10  text-black items-center justify-between p-20">
     <div className="text-center flex flex-col gap-4">
        <img src={planning} alt="img" className="h-40 w-40 ml-36" />
        <h1 className="font-bold text-lg">seamless travel planning</h1>
        <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta delectus repellat, odit tempora possimus libero, ducimus vitae, quis voluptatibus impedit esse facere sint iusto placeat illum vel expedita reprehenderit beatae?</p>
      </div>
      <div className="text-center flex flex-col gap-4">
        <img src={map} alt="img" className="h-40 w-40 ml-36" />
        <h1 className="text-lg font-bold">toilored experiences</h1>
        <p  className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ad, eos dolores laborum dolor placeat repellendus odio eligendi? Quia nam voluptatibus quaerat ipsa odit id architecto nesciunt, corporis explicabo deleniti.</p>
      </div>
      <div className="text-center flex flex-col gap-4">
        <img src={trust} alt="img"  className="h-40 w-40 ml-36"/>
        <h1 className="text-lg font-bold">reliable and trustworthy</h1>
        <p  className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dolor, aut facere, at temporibus sapiente ut et consectetur officia laborum tempore optio dolorum inventore ab iusto fugiat culpa? Consequatur, earum.</p>
      </div>
     </div>

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

     <div className="grid grid-cols-2">
     <div className="relative p-20">
  <img src={homebackground} alt="img" className="w-[100%] rounded-2xl h-full" />
  <p className="absolute bottom-20 text-white text-2xl font-semibold bg-opacity-50 px-4 py-2 rounded-lg">
    East Nusa Tenggara
  </p>
</div>
<div className="relative p-20">
  <img src={destination1} alt="img" className="w-[100%] rounded-2xl h-full" />
  <p className="absolute bottom-20 text-white text-2xl font-semibold bg-opacity-50 px-4 py-2 rounded-lg">
    Bali
  </p>
</div>

     </div>
     <div className="grid grid-cols-7">
     <div className="relative p-20 col-span-2 gap-2">
  <img src={destination2} alt="img" className="w-[100%] rounded-2xl h-full" />
  <p className="absolute bottom-20 text-white text-2xl font-semibold bg-opacity-50 px-4 py-2 rounded-lg">
    Bali
  </p>
</div>
<div className="relative p-20 col-span-3">
  <img src={destination3} alt="img" className="w-[100%] rounded-2xl h-full" />
  <p className="absolute bottom-20 text-white text-2xl font-semibold bg-opacity-50 px-4 py-2 rounded-lg">
    East java
  </p>
</div>
<div className="relative p-20 col-span-2">
  <img src={destination4} alt="img" className="w-[100%] rounded-2xl h-full" />
  <p className="absolute bottom-20 text-white text-2xl font-semibold bg-opacity-50 px-4 py-2 rounded-lg">
    West papua
  </p>
</div>
     </div>

     <div className="grid grid-cols-3 p-20 gap-3 ">
      <div className="grid col-span-2 border-solid rounded-2xl border-gray-700 p-18 border-1">
        <p className="uppercase text-gray-500">featured offer</p>
        <h1 className="capitalize font-bold text-black text-6xl ">unlock exclusive offers</h1>
        <span className="font-md text-xl text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. lets go for it</span>
        <div className="flex justify-between items-center">
          <button className="bg-green-700 rounded-4xl p-2 h-10">Show More</button>
        <img src={plane} alt="img" className="w-80 h-40"/>
        </div>
      </div>
      <div className="relative grid col-span-1">
      <img src={featured1} alt="img" className="rounded-2xl"/>
      <section className="z-10 absolute insect-10 mt-60 text-white ml-10">
        <h1 className="font-semibold text-2xl">Yulilaya Hotel</h1>
        <p className="text-gray-700 text-lg">gill trawangan, lombok</p>
        <span className="flex gap-1 items-center"> <FaStar className="text-yellow-100"/> 4.9 | 853 review</span>
      </section>
      </div>
     </div>
     <div className="grid grid-cols-2 gap-4 p-20">
     <div className="relative grid col-span-1">
      <img src={featured2} alt="img" className="rounded-2xl"/>
      <section className=" absolute insect-10 mt-80 text-white ml-10">
        <h1 className="font-semibold text-2xl">Yulilaya Hotel</h1>
        <p className="text-gray-700 text-lg">gill trawangan, lombok</p>
        <span className="flex gap-1 items-center"> <FaStar className="text-yellow-200 overflow-hidden"/> 4.9 | 853 review</span>
      </section>
      </div>
      <div className="relative grid col-span-1">
      <img src={featured3} alt="img" className="rounded-2xl"/>
      <section className=" absolute insect-10 mt-80 text-white ml-10">
        <h1 className="font-semibold text-2xl">Yulilaya Hotel</h1>
        <p className="text-gray-700 text-lg">gill trawangan, lombok</p>
        <span className="flex gap-1 items-center"> <FaStar  className="text-yellow-200 overflow-hidden"/> 4.9 | 853 review</span>
      </section>
      </div>
     </div>

     <div className="relative container">
      <img src={sectionbackground} alt="img" className="w-full h-250 rounded-4xl p-4" />
      <div className="absolute  inset-10 mt-15">
        <p className="text-center capitalize text-3xl">adventure&apos; voices</p>
        <h1 className="font-semibold capitalize text-center text-7xl mt-4">adventurer&apos; voices</h1>
        <div className="text-center mt-6">
        <span className="capitalize font-semibold text-2xl">real stories from our sdenturours community</span>
      
        </div >
        <div className="grid grid-cols-3 gap-6 mt-12 p-20">
        <div className="flex flex-col gap-4 bg-white text-black rounded-4xl p-6">
          <div className="flex flex-row gap-2 items-center">
            <img src={photo1} alt="img" className="h-12 w-12 rounded-full"/>
            <section>
            <h1 className="font-bold">Marvin Devin</h1>
            <span className="font-semibold text-gray-900">Traveler</span>
            </section>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, facere maiores ex beatae optio et minus, impedit ducimus eum ratione quod dicta mollitia. Ratione a dolores praesentium, ipsa blanditiis ipsam.</p>
        </div>
        <div className="flex flex-col gap-4 bg-white text-black rounded-4xl p-6">
          <div className="flex flex-row gap-2 items-center">
            <img src={photo2} alt="img" className="h-12 w-12 rounded-full"/>
            <section>
            <h1 className="font-bold">Marvin Devin</h1>
            <span className="font-semibold text-gray-900">Traveler</span>
            </section>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, facere maiores ex beatae optio et minus, impedit ducimus eum ratione quod dicta mollitia. Ratione a dolores praesentium, ipsa blanditiis ipsam.</p>
        </div>
        <div className="flex flex-col gap-4 bg-white text-black rounded-4xl p-6">
          <div className="flex flex-row gap-2 items-center">
            <img src={photo3} alt="img" className="h-12 w-12 rounded-full"/>
            <section>
            <h1 className="font-bold">Marvin Devin</h1>
            <span className="font-semibold text-gray-900">Traveler</span>
            </section>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, facere maiores ex beatae optio et minus, impedit ducimus eum ratione quod dicta mollitia. Ratione a dolores praesentium, ipsa blanditiis ipsam.</p>
        </div>
        <div className="flex flex-col gap-4 bg-white text-black rounded-4xl p-6">
          <div className="flex flex-row gap-2 items-center">
            <img src={photo4} alt="img" className="h-12 w-12 rounded-full"/>
            <section>
            <h1 className="font-bold">Marvin Devin</h1>
            <span className="font-semibold text-gray-900">Traveler</span>
            </section>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, facere maiores ex beatae optio et minus, impedit ducimus eum ratione quod dicta mollitia. Ratione a dolores praesentium, ipsa blanditiis ipsam.</p>
        </div>
        <div className="flex flex-col gap-4 bg-white text-black rounded-4xl p-6">
          <div className="flex flex-row gap-2 items-center">
            <img src={photo5} alt="img" className="h-12 w-12 rounded-full"/>
            <section>
            <h1 className="font-bold">Marvin Devin</h1>
            <span className="font-semibold text-gray-900">Traveler</span>
            </section>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, facere maiores ex beatae optio et minus, impedit ducimus eum ratione quod dicta mollitia. Ratione a dolores praesentium, ipsa blanditiis ipsam.</p>
        </div>
        <div className="flex flex-col gap-4 bg-white text-black rounded-4xl p-6">
          <div className="flex flex-row gap-2 items-center">
            <img src={photo6} alt="img" className="h-12 w-12 rounded-full"/>
            <section>
            <h1 className="font-bold">Marvin Devin</h1>
            <span className="font-semibold text-gray-900">Traveler</span>
            </section>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, facere maiores ex beatae optio et minus, impedit ducimus eum ratione quod dicta mollitia. Ratione a dolores praesentium, ipsa blanditiis ipsam.</p>
        </div>
      </div>
      
      </div>
     
      </div>

     <div className="p-20 grid grid-cols-2 gap-8">
     <div className="flex flex-col gap-4">
     <p className="uppercase text-gray-700">Resources</p>
      <h1 className="font-bold text-4xl text-black">Latest Article</h1>
      <img src={hiddengame} alt="img" className="rounded-4xl"/>
      <p className=" text-gray-700 text-md">Destination Discovery</p>
      <h2 className="font-bold text-black text-2xl">10 must-visit hidden game in southeast asia</h2>
      <div className="flex flex-row gap-2 items-center">
        <img src={photo7} alt="img" className="w-12 h-12 rounded-full"/>
        <h1 className="text-gray-500">sandy aldiansyah - 9 min read</h1>
      </div>
     </div>
     <div className="flex flex-col  mt-16">
      <div className="p-8 flex flex-row items-center gap-3">
        <img src={family} alt="img" className="h-30 w-30 rounded-2xl" />
        <span className="flex flex-col">
        <h1 className="text-black font-bold text-lg">Traveling with kids: tips for stress-free family adventures</h1>
        <p className="text-gray-900">family travel - 7 min read </p>
        </span>
      </div>
      <div className="p-8 flex flex-row items-center gap-3">
        <img src={foodarticle} alt="img" className="h-30 w-30 rounded-2xl" />
        <span className="flex flex-col">
        <h1 className="text-black font-bold text-lg">culinary adventure: exploring world cuisines on your travels</h1>
        <p className="text-gray-900">food and travel - 5 min </p>
        </span>
      </div>
      <div className="p-8 flex flex-row items-center gap-3">
        <img src={budget} alt="img" className="h-30 w-30 rounded-2xl" />
        <span className="flex flex-col">
        <h1 className="text-black font-bold text-lg">traveling on budget: tips for affordable advne</h1>
        <p className="text-gray-900">Budget travel - 7 min read </p>
        </span>
      </div>
      <div className="p-8 flex flex-row items-center gap-3">
        <img src={tips} alt="img" className="h-30 w-30 rounded-2xl" />
        <span className="flex flex-col">
        <h1 className="text-black font-bold text-lg">Traveling with kids: tips for stress-free family adventures</h1>
        <p className="text-gray-900">travel tips - 7 min read </p>
        </span>
      </div>
     </div>
     </div>           

    </div>
  );
};

export default Hero;
