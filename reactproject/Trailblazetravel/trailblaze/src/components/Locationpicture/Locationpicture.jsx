import { FaStar } from "react-icons/fa";
import { package1, package2, package3 } from "../import";

const Locationpicture = () =>{
    return(
    <div className="grid grid-cols-12 p-20 gap-4">

        <div className="relative col-span-4">
            <img src={package1} alt="img" className="h-full w-full rounded-2xl" />
            <div className="absolute z-10 inset-8">
                <section className="flex flex-row justify-between">
                    <p className="text-white px-4 py-2 text-xl bg-white/30 backdrop-blur-none p-8 rounded-full">7 day</p>
                    <span className="text-white flex flex-row items-center gap-2 text-xl  bg-white/30 backdrop-blur-none rounded-full px-4 py-2"><FaStar className="text-yellow-400"/>4.9</span>
                </section>
                <section className="flex flex-row justify-between bg-white/30 backdrop-blur-none rounded-2xl p-4 text-white mt-120">
                   <span className="flex flex-col ">
                   <h1 className="text-gray-200">27 october</h1>
                   <h2 className="text-bold text-2xl capitalize">bali tour packages</h2>
                   </span>
                    <p className="text-2xl">$285</p>
                </section>
            </div>
        </div>

        <div className="relative  col-span-4">
            <img src={package2} alt="img" className="h-full w-full rounded-2xl" />
            <div className="absolute z-10 inset-8">
                <section className="flex flex-row justify-between">
                    <p className="text-white px-4 py-2 text-xl bg-white/30 backdrop-blur-none p-8 rounded-full">5 day</p>
                    <span className="text-white flex flex-row items-center gap-2 text-xl  bg-white/30 backdrop-blur-none rounded-full px-4 py-2"><FaStar className="text-yellow-400"/>4.9</span>
                </section>
                <section className="flex flex-row justify-between bg-white/30 backdrop-blur-none rounded-2xl p-4 text-white mt-120">
                    <div className="flex flex-col ">
                    <h1 className="text-gray-200">27 october</h1>
                    <h2 className="text-bold text-2xl capitalize">java tour packages</h2>
                    </div>
                    <p className="text-2xl">$192</p>
                </section>
            </div>
        </div>

        <div className="relative  col-span-4">
            <img src={package3} alt="img" className="h-full w-full rounded-2xl" />
            <div className="absolute z-10 inset-8">
                <section className="flex flex-row justify-between">
                    <p className="text-white px-4 py-2 text-xl bg-white/30 backdrop-blur-none p-8 rounded-full">3 day</p>
                    <span className="text-white flex flex-row items-center gap-2 text-xl  bg-white/30 backdrop-blur-none rounded-full px-4 py-2"><FaStar className="text-yellow-400"/>4.9</span>
                </section>
                <section className="flex flex-row justify-between bg-white/30 backdrop-blur-none rounded-2xl p-4 text-white mt-120">
                    <div className="flex flex-col ">
                    <h1 className="text-gray-200">27 october</h1>
                    <h2 className="text-bold text-2xl capitalize">solo tour packages</h2>
                    </div>
                    <p className="text-2xl">$235</p>
                </section>
            </div>
        </div>
    </div>
    )
}
export default Locationpicture;