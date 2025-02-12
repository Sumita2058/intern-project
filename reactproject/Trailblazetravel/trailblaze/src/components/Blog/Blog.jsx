import { blog1, blog2 } from "../import";

const Blog = () =>{
    return(
   <div className="text-black flex flex-col gap-6 p-20">
    <div className="flex flex-col ">
        <h1 className="text-2xl text-gray-400 capitalize">our blog</h1>
        <h2 className="text-7xl capitalize">our travel memories</h2>
    </div>
    <div className="grid grid-cols-2 gap-4">
        <div className="">
            <img src={blog1} alt="img" className="rounded-2xl"/>
            <div className="shadow-2xl bg-white p-2 rounded-b-2xl">
                <span className="text-gray-400 text-2xl">oct 30, 2024</span>
                <h1 className="text-black text-5xl font-lg">2025 Travel trends - what you need to know</h1>
                <p className="text-gray-400 text-2xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit officia soluta praesentium sequi ipsa qui.</p>
            </div>
        </div>
        <div className="">
            <img src={blog2} alt="img" className="rounded-2xl" />
            <div className="shadow-2xl bg-white p-2 rounded-b-2xl ">
                <span className="text-gray-400 text-2xl">Nov 03, 2024</span>
                <h1 className="text-black text-5xl font-lg">jeep adventure is a new attraction for tourists visiting garut</h1>
                <p className="text-gray-400 text-2xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit officia soluta praesentium sequi ipsa qui.</p>
            </div>
        </div>
    </div>
    <button className="rounded-full text-white bg-black w-30 mx-auto py-2">view more</button>
   </div>
    )
}
export default Blog;