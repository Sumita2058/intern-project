import { useState } from "react";
import { Navlinks } from "../../constants/Navlinks"
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () =>{
    const [showMenu, setshowMenu] = useState(false);
  const toggleMenu = () => {
    setshowMenu(!showMenu);
  };
    return(
        <div className=" p-8 text-white m-3 justify-between gap-8">
          <div className="grid grid-cols-9">
            <div className="col-span-3">
              <h1 className="text-2xl font-semibold uppercase">traiblaze</h1>
            </div>

            <div className="col-span-3 flex items-center">
            <nav className="hidden md:block bg-white/30 backdrop-blur-none rounded-full px-8 py-2 shadow-8xl justify-center items-center">
          <ul className="flex items-center font-semibold text-2xl top-0 gap-16 ">
            {Navlinks.map(({ id, name, link }) => (
              <li key={id} className="text-gray-500 hover:text-white">
                <a href={link} className="">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
            </div>

            <div className="col-span-3 flex flex-row items-center text-black justify-end text-2xl">
              <button className="rounded-full bg-white py-1 px-6">login</button>
            

            <div className=" lg:hidden">
            {showMenu ? (
              <RxCross2

                onClick={toggleMenu}
                className="cursor-pointer inset-10 z-50  transition-all"
                size={30}
              />
            ) : (
              <HiMenu
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
          </div>

          </div>
          <ResponsiveMenu showMenu={showMenu} />
        </div>
    )
}
export default Navbar ;