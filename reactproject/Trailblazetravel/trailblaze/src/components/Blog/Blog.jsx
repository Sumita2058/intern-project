import { blog1, blog2 } from "../import";

const Blog = () =>{
    return(
   <div className="text-black flex flex-col gap-6 p-20">
    <div className="flex flex-col space-y-6">
        <h1 className="text-xl text-gray-400 capitalize">our blog</h1>
        <h2 className="text-6xl capitalize">our travel memories</h2>
    </div>
    <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
        <div className="bg-white  rounded-b-2xl">
            <img src={blog1} alt="img" className="rounded-2xl h-[35rem] w-full object-cover "/>
            <div className=" p-4 rounded-b-2xl space-y-4">
                <span className="text-gray-400 text-2xl">Oct 30, 2024</span>
                <h1 className="text-black font-semibold  text-2xl font-lg">2025 Travel trends - what you need to know</h1>
                <p className="text-gray-400 text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit officia soluta praesentium sequi ipsa qui.</p>
            </div>
        </div>
        <div className="bg-white  rounded-b-2xl">
            <img src={blog2} alt="img" className="rounded-2xl h-[35rem] w-full object-cover" />
            <div className="  rounded-b-2xl p-4 space-y-4 ">
                <span className="text-gray-400 text-2xl">Nov 03, 2024</span>
                <h1 className="text-black font-semibold text-2xl capitalize font-lg">jeep adventure is a new attraction for tourists visiting garut</h1>
                <p className="text-gray-400 text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit officia soluta praesentium sequi ipsa qui.</p>
            </div>
        </div>
    </div>
    <button className="rounded-full text-white bg-black w-30 mx-auto py-2">view more</button>
   </div>
    )
}
export default Blog;