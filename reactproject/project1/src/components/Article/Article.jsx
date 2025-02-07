import { budget, family,  foodarticle, hiddengame,  photo7, tips } from "../../image";
const Article = () =>{
    return(
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
    );
};
export default Article;